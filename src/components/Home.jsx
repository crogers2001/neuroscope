import HomeSplash from "./HomeSplash";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Home () {

    const isMobile = window.innerWidth <= 830;

    if (isMobile) {
        return (
            <>
                <div className="home-page-wrapper">
                        <h1>Neuroanatomy simplified.</h1>
                        <Link to="/brainexplorer" className="card-link">
                            <div className="brain-explorer-card">
                                <div className="mobile-ic-header">
                                    <div className="mobile-ic-header-text">
                                        Explore the Brain
                                    </div>
                                    <img src="/svg/box-arrow-up-right.svg" alt="(go)" />
                                </div>
                                <img className="bec-ss" src="/ss/BrainExplorerCap.PNG"></img>
                                <div className="mobile-ic-desc">
                                Explore over 60 unique anatomical features in the human brain, each one accurately modeled from real MRI scans and microsurgical dissections
                                </div>
                            </div>
                    </Link>
                </div>
                <Footer />
            </>
        )
    }
    return (
        <div>
            <h1 className="home-title">Neuroanatomy simplified.</h1>

            <div className="intro-card-container">

                    <Link to="/brainexplorer" className="card-link">
                    <div className="be-intro-card">

                        <div className="ic-header">
                            <div className="ic-header-text">
                            Explore the Brain <img src="/svg/box-arrow-up-right.svg" alt="(go)" />
                            </div>
                        </div>
                        <img src="/ss/BrainExplorerCap.PNG"></img>
                        <div className="ic-desc">
                            Explore the unique anatomical features in the human brain, each one accurately modeled from real MRI scans and microsurgical dissections
                        </div>
                    </div>
                    </Link>

                    <div className="study-intro-card">
                        <div className="ic-header">
                            <div className="ic-header-text">Coming Soon</div>
                            <div className="ic-desc">
                            More anatomical features, search by system, tract animations, custom study sets.
                        </div>
                        </div>
                    </div>

            </div>

            <Footer />
        </div>
    )
}


export default Home;