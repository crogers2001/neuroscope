import logo from '../ns-blue-logo.svg';
import Footer from "./Footer";

function About () {
    return (
        <div className='page-container'>

            <div className="about-author">        
                <img className="about-logo" src={logo} alt="logo" />
                <h1>neuroscope v.2.0</h1>
                   <p>Neuroscope is an educational visualization tool used to learn neuroanatomy which utilizes a manually parcellated 3D model of the human brain. This brain model is based on an fMRI scan of a 
                    human brain which was converted to a 3D model using a convolutional neural network.</p>
                   <p> This is an early release version. New functionality and anatomical features are being continuously added.</p>
                <h3>Release notes:</h3>
                
                <p><strong>v.1.0: </strong>Initial release of the website. Brain surface model and 50 anatomical feature models added. (6/30/2023)</p>
                
                <p><strong>v.1.1: </strong>Various bug fixes. (10/6/2023)</p>
                
                <p><strong>v.2.0: </strong>Initial release of mobile browser version. (1/29/2024) </p>
            </div>

            <Footer />
        </div>
    );
}

export default About;