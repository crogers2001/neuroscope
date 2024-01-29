import React, {useState, useEffect, useRef} from 'react';
import useSearch from './useSearch.jsx';
import Model from './Model.jsx'
import Footer from "./Footer";
import colorArray from './colorArray.jsx';


//take in a width variable that determines how big the models will be 

function BrainExplorer(){
    const [placeholder, setPlaceholder] = useState('Search');
    const {search, features } = useSearch();
    const colors = colorArray();
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [currentFeature, setCurrentFeature] = useState({ id: '', name: '', path: '/mesh/nothing.glb', description: '', color: 0x000000 });
    const [legend, setLegend] = useState([]);
    const [holdResults, setHoldResults] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [transparentModel, setTransparentModel] = useState(false);
    const [transButton, setTransButton] = useState('/svg/eye-fill.svg');
    const [colorIndex, setColorIndex] = useState(0);
    const [legendExport, setLegendExport] = useState([]);
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const [showLegend, setShowLegend] = useState(true);
    const [showMobileButtons, setShowMobileButtons] = useState(true);
    const [showMobileInfo, setShowMobileInfo] = useState(false);
    const searchInputRef = useRef(null);
    const searchResultItemRef = useRef(null);
    const isMobile = window.innerWidth <= 1100;

    const handleSearchFocus = () => {
        if (isMobile){
            setShowLegend(false);
        }
        setPlaceholder('');
        setShowResults(true);
        setShowMobileButtons(false);
    };
  

    const handleSearchBlur = () => {
        if (isMobile){
            setTimeout(() => {
                setShowLegend(true);
                setShowMobileButtons(true);
            }, 100);
        }   
        else {
            setShowLegend(true);
        }

        setPlaceholder('Search');
        setTimeout(() => {
            setShowResults(false);
        }, 100);
         //FIXME when the search result item is clicked, it counts as blurring the Search Bar, setting showResults to false, messing up timing. 
         //      maybe a fix could be finding out if the blurring click was on the results or not. If not, set showResults to false instantly is good. If it is, don't do anything
        setSearchBarVisible(false);
    };
    
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        search(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          const firstFeature = features[0];
          if (firstFeature) {
            handleFeatureClick(firstFeature);
          }
        }
        if (searchQuery === '' && e.key){
            setShowResults(true);
        }
      };


    const handleFeatureClick = (feature) => {
        console.log("feature has been clicked")
        if(feature === currentFeature){
            return;
        }
        if (legend.length === 0){
            setTransparentModel(true);
            setTransButton('/svg/eye-fill.svg');
        }

        setTimeout(() => {
            setShowLegend(true);
        }, 200);

        const currFeature = {
            id: feature.id,
            name: feature.name,
            path: feature.path,
            description: feature.description,
          };
        setCurrentFeature(currFeature);

        setShowDescription(true);
        setHoldResults(false);

        const isCurrentFeatureInLegend = legend.some((legendItem) => legendItem.feature.id === currFeature.id);
        if (!isCurrentFeatureInLegend){
            const newLegendItem = {
                feature: currFeature,
                color : colors[colorIndex].hex,
                hashcolor: colors[colorIndex].hashhex,
            }
            setLegend((legend) => [...legend, newLegendItem]);
            let numColors = colors.length;
            console.log(numColors);
            setColorIndex((colorIndex) => ((colorIndex + 1) % (numColors)));
        }
        
        setShowResults(false);
        setSearchQuery('');
        search('');
    };

    const handleTransButtonClick = () => {
        setTransparentModel(!transparentModel);
        if (transButton === '/svg/eye-fill.svg'){
            setTransButton('/svg/eye.svg');
        }
        else{
            setTransButton('/svg/eye-fill.svg');
        }
    };

    const handleKillButtonClick = () => {
            setLegend((legend) => {
                    const legendIndex = legend.findIndex((legendItem) => legendItem.feature.id === currentFeature.id);
                    const updatedLegend = [...legend];
                    updatedLegend.splice(legendIndex, 1);
                    if (legend.length > 1){
                        setCurrentFeature(updatedLegend[updatedLegend.length - 1].feature);
                    }
                    else {
                        setShowDescription(false);
                        setTransparentModel(false);
                        setTransButton('/svg/eye.svg');
                    }
                    return updatedLegend;
            })

    };

    useEffect(() => { 
        if (legend.length > 0){
            const updatedLegendExport = legend.map((legendItem) => ({
                path: legendItem.feature.path,
                color: legendItem.color
            }));
            setLegendExport(updatedLegendExport);
        }
        else {
            setLegendExport([]);
        }
    }, [legend])

    const handleSearchGlassClick = () => {
        setSearchBarVisible(!searchBarVisible);
        if (!searchBarVisible && searchInputRef.current) {
            searchInputRef.current.focus();
          }
      };
    
      const handleMobileInfoClick = () => {
        //render the primary function header, description, etc
        if(showMobileInfo){
            setShowMobileInfo(false);
        }
        else {
            setShowMobileInfo(true);
        }
      }

    if (isMobile){ //mobile rendering
        return (
            <div>
                <img className={`mobile-search-glass ${searchBarVisible ? 'slide' : ''}`} src='/svg/standard-handle.svg' onClick={handleSearchGlassClick}></img>
                <div className={`mobile-search-bar ${searchBarVisible ? 'visible' : ''}`}>
                    <input
                    ref={searchInputRef}
                    type="text"
                    placeholder={placeholder}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={searchQuery}
                    />
                </div>
                { showResults && (
                    <>
                        <div className='mbs-hide-top'></div>
                        <div className='mobile-search-results'> {/*showResultsInstant hides the results in the 100ms before the div unrenders */}
                            {features.map((feature) => (
                                <div className="mobile-search-result-item" key={feature.id} onClick={() => handleFeatureClick(feature)}>
                                    {feature.name}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                { showLegend && (
                    <div className='mobile-legend'>
                        {legend.map((legendItem) => {
                            return (
                                <div className='mobile-legend-item' key={legendItem.feature.id} onClick={() => handleFeatureClick(legendItem.feature)}>
                                    {legendItem.feature.name}
                                    <div className="mobile-legend-circle" style={{ backgroundColor: legendItem.hashcolor, verticalAlign: 'middle', marginBottom: '5px'}}></div>

                                </div>
                            );
                        })}
                    </div>
                )}
                { showDescription && (
                    <div className={`mobile-feature-description ${showMobileInfo ? 'expanded' : ''}`}>
                        <div className='mfd-header'>
                            <img className={`mfd-arrow ${showMobileInfo ? 'expanded' : ''}`} src={showMobileInfo ? '/svg/down-arrow.svg' : '/svg/up-arrow.svg'} onClick={handleMobileInfoClick}></img>
                            <h1>{currentFeature.name}</h1>
                        </div>
                        <div className='mfd-info'>
                            <b>Primary Function:</b>
                            <p>{currentFeature.description}</p>
                        </div>
                    </div>
                )}
                <div className="content">
                    <Model 
                    featurePath={legendExport}
                    transparentModel={transparentModel}
                    isMobile={true}
                    />
                </div>
                { showMobileButtons && (
                    <div className='mobile-button-box'>
                        <img src={transButton} alt="Transparency" className="trans-button" onClick={handleTransButtonClick}/>
                        {showDescription && (
                            <img src="/svg/trash3-fill.svg" alt="X" className="kill-button" onClick={handleKillButtonClick}/>
                        )}
                    </div>
                )}

            </div>
        );
    }

    return ( //desktop rendering
        <div>

            <div className='legend'>
                {legend.map((legendItem) => {
                            return (
                                <div className='legend-item' key={legendItem.feature.id} onClick={() => handleFeatureClick(legendItem.feature)}>
                                    
                                        {legendItem.feature.name}
                                        <div className="legend-circle" style={{ backgroundColor: legendItem.hashcolor, verticalAlign: 'middle', marginBottom: '5px'}}></div>

                                </div>
                            );
                        })}
            </div>

            <div className="content">
                <Model 
                featurePath={legendExport}
                transparentModel={transparentModel}
                />
            </div>
            
            <div className='search-card'>

                <div className="search-bar">

                    <input
                    type="text"
                    placeholder={placeholder}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={searchQuery}
                    />

                </div>

                {showResults && features.length > 0 && (
                        <div className="search-results">
                            {features.map((feature) => (
                                <Feature
                                key={feature.id}
                                name={feature.name}
                                onClick={() => handleFeatureClick(feature)}
                                />
                            ))}
                        </div>
                )}

                {showDescription && (
                        <FeatureInfo 
                        name= {currentFeature.name} 
                        description={currentFeature.description}
                        />
                    )}

            </div>
            <div className='button-box'>
                    <img src={transButton} alt="Transparency" className="trans-button" onClick={handleTransButtonClick}/>

                    {showDescription && (
                        <img src="/svg/trash3-fill.svg" alt="X" className="kill-button" onClick={handleKillButtonClick}/>
                    )}
            </div>

            <Footer />
        </div>
    );
};


function Feature({ name, onClick}) {
    return (
        <div className="search-result-item" onClick={onClick}>
           {name}
        </div>
    );
}


function FeatureInfo({name, description}) {
    return (
        <div className='feature-description'>
            <h1>{name}</h1>
            <b>Primary Function:</b>
            <p>{description}</p>
        </div>
    );
}


export default BrainExplorer;