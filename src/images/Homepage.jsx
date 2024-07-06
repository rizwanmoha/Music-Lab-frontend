import "./homestyle.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import course1 from '../../images/beginnerpic.jpg'
import course2 from '../../images/course_rock.jpg'
import course3 from '../../images/metalpic.jpg'
import course4 from '../../images/bluespic.jpg'
import course5 from '../../images/acousticpic.jpg'
import course6 from '../../images/musictheorypic.jpg'
import course7 from '../../images/guitartone.jpg'
import course8 from '../../images/legendstyles.jpg'
import course9 from '../../images/guitartechnique.jpg'

const Homepage = () => {
  return (

    <div className="body-bg "> 
    <div className="bg">
       {/* <Header /> */}
        <div className="centertext">
            <div className="centertext">
                <p>Begin your music Journey with Master Of Musics</p>
                <p>From Classic Blues to Heavy Metal,</p>
                <p>We have everything covered for you</p>
                <p className="centersubtext">Join us to begin your Journey!</p>
                <button onclick="window.location.href = '/'" className = "home-login-button"><div className="button-content" id="join-us">JOIN US</div></button>
                </div>
        </div>
        </div>
      <div className="video-part">
        <div className="our-team">
          <h1 className="our-team-header">OUR TEAM</h1>
          <p className="our-team-content">
            We have music instructors from the best institutes of music. Heavy
            metal like Metallica, Megadeth, Black Sabbath
          </p>
          <p className="our-team-content">
            of music. Heavy metal like Metallica, Megadeth, Black Sabbath
          </p>
          <p className="our-team-content">
            Hard Rock like AC/DC and Guns-and-Roses, Classy Blues like{" "}
          </p>
          <p className="our-team-content">
            Pink Floyd and The Beatles, Jimi Hendrix's blues chords,
          </p>
          <p className="our-team-content">
            core music theory, Amplifier settings, guitar tone, guitar
            maintenance
          </p>
          <p className="our-team-content">
            you name it, we have it. Have a look at our instructors below!
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="home-login-button"
          >
            <div className="button-content" id="instructor-button">
              OUR INSTRUCTORS
            </div>
          </button>
        </div>
        <div className="video_box">
          <video
            poster="images/logo.jpg"
            id="home-video"
            src="images/homevideo.mp4"
            type="video/mp4"
            controls
          ></video>
        </div>
      </div>

      <div className="course-heading">SOME OF OUR COURSES</div>
      <div className="container text-center1" style={{ color: "aliceblue" }}>
        <div className="row" id="col1">
          <div className="col">
            <a href="/beginnercoursedesc">
              <img
                src={course1}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/rockcoursedesc">
              <img
                src={course2}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course3}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
        </div>

        <div className="row" id="col1">
          <div className="col">
            <a href="/">
              <img
                src={course4}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course5}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course6}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
        </div>

        <div className="row" id="col1">
          <div className="col">
            <a href="/">
              <img
                src={course7}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course8}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course9}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="more-courses">
        Find more courses at
        <button
          onClick={() => (window.location.href = "/")}
          className="home-login-button  ml-2"
        >
          <div className="button-content">CATALOGUE</div>
        </button>
      </div>

      <div className="full_trial_box">
        <div className="trial-box">
          <div className="text">
            <h1>START YOUR FREE TRIAL TODAY!</h1>
            <h3>Step by step instructions here!</h3>
          </div>
          <div className="button-trial">
            <button
              onClick={() => (window.location.href = "/")}
              className="button-trial"
            >
              <div className="button-content">Only Rs.500.00 / month</div>
            </button>
          </div>
        </div>
      </div>

      <div className="pre-footer">
        <p>
          "Music Lessons that are second to none. This website boosted my music
          skills"
        </p>
        <p>Practice and the right guidance is all it takes.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
