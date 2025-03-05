import React from 'react';
import Detect from './Detect';
import react from './logoicons/react.png';
import tf from './logoicons/tf.png';
import keras from './logoicons/keras.png';
import colab from './logoicons/colab.png';

const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>
  
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <div className="site-logo"><img src={process.env.PUBLIC_URL +"/imgs/Logo.png"} alt="WildGuard-Logo" height="150" width="150"/></div>
                <div className="gdsc-logo" style={{ display: "inline-block", marginRight: "20px" }}>
    <img
      src={process.env.PUBLIC_URL + "/imgs/gdsc.png"}
      alt="Gdsc-Logo"
      height="100"
      width="100"
    />
  </div>
  <div className="svce-logo" style={{ display: "inline-block" }}>
    <img
      src={process.env.PUBLIC_URL + "/imgs/svce.png"}
      alt="Svce-Logo"
      height="100"
      width="300"
    />
  </div>
                <div>
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-xl-block">
                      <li><a href="#home-section" className="nav-link">Home</a></li>
                      <li><a href="#features-section" className="nav-link">Features</a></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="ml-auto">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-xl-block">
                    <li><a href="#glance-section" className="nav-link">Glance</a></li>
                      <li><a href="#demo-section" className="btn btn-outline-black py-3 px-5">Try Now</a></li>
                    </ul>
                  </nav>
                  <a href="/#" className="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a>
                </div>
              
              </div>
            </div>
            
          </header>
          <div className="intro-section custom-owl-carousel" id="home-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mr-auto" data-aos="fade-up">
                  <div className="owl-carousel slide-one-item-alt-text">
                    
                    <div className="slide-text">
                      <h1>WildGuard</h1>
                      <p className="mb-5">WildGuard is an AI-powered system that utilizes the YOLOv8n (You Only Look Once) algorithm for real-time object detection, ensuring swift and precise identification of wildlife. By leveraging cutting-edge technology, we aim to protect and safeguard endangered species, bridging the gap between conservation and innovation. Join us in redefining wildlife protection—one detection at a time!</p>
                      <p><a href="#demo-section" className="btn btn-outline-light py-3 px-5 smoothscroll">Try Now</a></p>
                    </div>
                    
                    <div className="slide-text">
                      <h1>YOLO: You Only Look Once</h1>
                      <p className="black-text">
                      Speed Meets Precision<br />
                      YOLO revolutionizes object detection by identifying <strong>all objects in a single forward pass</strong>. Unlike traditional models that scan images multiple times, YOLO treats detection as a <strong>regression problem</strong>, instantly predicting <strong>bounding box coordinates</strong> and classifications in real time.<br />
                      This makes YOLO <strong>lightning-fast, highly efficient, and ideal for real-world applications</strong> like wildlife monitoring, where speed and accuracy are critical.
                      </p>
                    </div>

                    <div className="slide-text">
                      <h1>YOLOv8: The Evolution of Object Detection</h1>
                      <p className="black-text">
                      Smarter, Faster, More Powerful<br />
                      YOLOv8 is the latest breakthrough in object detection, pushing the boundaries with <strong>spatial attention, feature fusion, and context aggregation</strong>. These innovations supercharge accuracy and speed, making it a game-changer in real-time applications like wildlife tracking and security surveillance.<br />
                      With <strong>state-of-the-art performance</strong>, YOLOv8 outshines its predecessors, ensuring unparalleled detection precision in dynamic environments.
                      </p>
                    </div>

                    <div className="slide-text">
                      <h1>YOLOv8 Nano: Compact Yet Mighty</h1>
                      <p className="black-text">
                      Lightweight, Yet Powerful<br />
                      YOLOv8 Nano is an ultra-compact version of YOLO, designed for <strong>low-spec devices</strong> without compromising essential performance. With fewer parameters than its larger counterparts, it remains a reliable solution for mobile phones, laptops, and edge computing devices.<br />
                      While slightly lower in accuracy, its <strong>efficiency, portability, and adaptability</strong> make it a perfect fit for on-the-go wildlife monitoring and real-time detection in resource-limited environments.
                      </p>
                    </div>
                  
                  </div>
                </div>

                <div className="col-lg-6 ml-auto"  data-aos="fade-up" data-aos-delay="100">
                              
                  <div className="owl-carousel slide-one-item-alt">
                    <img src={process.env.PUBLIC_URL +"/imgs/slide1.png"} alt="WildGuard" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL +"/imgs/slide2.png"} alt="YOLO" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL +"/imgs/slide3.png"} alt="YOLOv8" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL +"/imgs/slide4.png"}alt="YOLOv8n" className="img-fluid"/>
                  </div>

                  <div className="owl-custom-direction">
                    <a href="/#" className="custom-prev"><span className="icon-keyboard_arrow_left"></span></a>
                    <a href="/#" className="custom-next"><span className="icon-keyboard_arrow_right"></span></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/><br/>

          <div className="site-section section-1">
            <div className="container">
              <div className="row">
                
                <div className="col-lg-5 mr-auto mb-5">
                  <img src={process.env.PUBLIC_URL +"/imgs/Identification.png"} alt="WildGuard" className="img-fluid"/>
                </div>
                
                <div className="col-lg-5 mr-auto mb-5"  data-aos="fade-up">
                  <div className="mb-5">
                    <h2 className="section-title">WildGuard</h2>
                    <p className="black-text">
                    WildGuard is an AI-powered wildlife monitoring and offence registration system designed to protect endangered species and prevent illegal activities.  
                    <br />
                    By leveraging the cutting-edge YOLOv8 algorithm, WildGuard rapidly detects and identifies wildlife in images or live video feeds. This advanced object detection technology enables real-time species recognition and instant offence logging, ensuring faster response and effective conservation efforts.  
                    </p>
                    <ul className="ul-check list-unstyled success">
                      <li className="black-text"><strong>AI-Powered Detection</strong> – Instantly spots and identifies wildlife.</li>
                      <li className="black-text"><strong>Real-Time Monitoring</strong> – Tracks movements with brilliant accuracy.</li>
                      <li className="black-text"><strong>Effortless Automation</strong> – No manual intervention needed.</li>
                      <li className="black-text"><strong>Instant Offence Logging</strong> – Registers violations seamlessly.</li>
                      <li className="black-text"><strong>Data-Driven Insights</strong> – Enhances wildlife conservation efforts.</li>
                    </ul>  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-dark" id="features-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Features</h2>
                </div>
              </div>
            </div>
              
            <div className="owl-carousel nonloop-block-14">

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/ease-of-use.png"} alt="Ease-Of-Use-Icon" height="60px" width="60px"/></span>
                  <h3>Ease Of Use</h3>
                  <p className="black-text">
                  Seamless, Smart & Accessible<br />
                  A sleek, intuitive, and mobile-friendly interface ensures effortless navigation—because protecting wildlife should be as easy as a click.
                  </p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/saves-manual-labour.png"} alt="Saves-Manual-Labour-Icon" height="60px" width="60px"/></span>
                  <h3>Saves Manual Labour</h3>
                  <p className="black-text">
                  Automating Effort, Accelerating Impact<br />
                  No more hours of tedious image labeling! WildGuard saves <strong>time, cost, and effort</strong> for researchers and volunteers, making wildlife monitoring faster and more efficient.
                  </p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/accuracy.png"} alt="Accuracy-Icon" height="60px" width="60px"/></span>
                  <h3>Brilliant Accuracy</h3>
                  <p className="black-text">
                  Precision That Matters<br />
                  Backed by <strong>cutting-edge AI</strong>, WildGuard detects and tracks animals with <strong>96% accuracy</strong>, ensuring highly reliable insights for conservation efforts.
                  </p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/animal-spotting.png"} alt="Fully-Automatic-Animal-Spotting-System-Icon" height="60px" width="60px"/></span>
                  <h3>Fully Automatic Animal Spotting System</h3>
                  <p className="black-text">
                  Real-Time Wildlife Detection<br />
                  With <strong>lightning-fast AI processing</strong>, our system instantly identifies and tracks species in real-time, delivering actionable data at the speed of nature.
                  </p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/species-identification.png"} alt="Species-Identification-Icon" height="60px" width="60px"/></span>
                  <h3>Species identification</h3>
                  <p className="black-text">
                  Recognizing Nature’s Diversity<br />
                  From <strong>majestic elephants</strong> to <strong>tiny butterflies</strong>, WildGuard accurately identifies <strong>11 wildlife species</strong>, helping researchers and conservationists make informed decisions.
                  </p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/offence-registration.png"} alt="Offence-Registration-Icon" height="60px" width="60px"/></span>
                  <h3>Offence Registration</h3>
                  <p className="black-text">
                  Report, Protect, Preserve<br />
                  Empower change! Instantly report wildlife offenses by uploading an image, sharing a geo-location, or both—because every report <strong>makes a difference</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="site-section" id="glance-section"  data-aos="fade">
        <div style={{ marginBottom: '50px' }} className="container">

          <div className="row align-items-center">
            <div className="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
              <video src={process.env.PUBLIC_URL +"/demo/demo.mp4"} className="img-fluid" controls loop />
            </div>
            
            <div className="col-md-6 mr-auto order-2 order-md-1">  
              <h2 className="section-title mb-3">At a Glance</h2>
              <p className="black-text mb-5">In this captivating demo of our project, we showcase the incredible capabilities of our system by using a video that features mesmerizing footage of zebras and graceful giraffes. The results we achieved are nothing short of remarkable, as our advanced model demonstrates its exceptional ability to detect and classify these magnificent creatures with utmost accuracy.</p>
              <p style={{ fontWeight: '500', color: '#C3073F' }} className="mb-5">Note: Model can only identify the animals on which it is trained on.</p>
            </div>
          </div>
        </div>
        <div className="site-section bg-dark" id="demo-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Demo</h2>
                </div>
              </div>
            </div>
          <div style={{ marginTop: '100px', marginBottom: '50px' }}>
            <Detect/>
          </div>
        </div>
        <div style={{ marginTop: '100px' }} className="container">
          <div className="row">
            <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={react} width="250" height="250" alt="react" />
            </div>
            <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={tf} width="250" height="250" alt="tf" />
            </div>
            <div style={{ textAlign: 'center', color: 'black' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={keras} width="200" height="200" alt="keras" />
                <h1>Keras</h1>
            </div>
            <div style={{ textAlign: 'center', color: 'black' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={colab} width="200" height="200" alt="colab" />
                <h1>Colab</h1>
            </div>
          </div>
        </div>
      </div>
          
          <footer className="footer-section bg-dark">
            <div className="container">
              <div className="row">
                
                <div className="col-md-4">
                  <h3>About Us</h3>
                  <p>We are a dynamic team of passionate programmers from Sri Venkateswara College of Engineering (SVCE), united by our love for coding and an insatiable curiosity for technology. Fueled by innovation and creativity, we transform ideas into reality, pushing the boundaries of AI-driven solutions. As college students, we embrace challenges, experiment fearlessly, and build solutions that make a real-world impact. WildGuard is our vision brought to life—a fusion of cutting-edge technology and our commitment to wildlife protection.</p>
                </div>

                <div className="col-md-3 ml-auto">
                  <h3>Links</h3>
                  <ul className="list-unstyled footer-links">
                    <li><a href="#home-section" className="smoothscroll">Home</a></li>
                    <li><a href="#features-section" className="smoothscroll">Features</a></li>
                    <li><a href="#glance-section" className="smoothscroll">Glance</a></li>
                    <li><a href="#demo-section" className="smoothscroll">Demo</a></li>
                    <li><a href="https://github.com/praveenaso" className="smoothscroll">Github</a></li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h3>Project</h3>
                  <p>This is a project we made as a part of our GDSC Hackathon 2025.</p>
                </div>
              
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}

export default Landing;