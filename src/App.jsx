import "./App.css";
import ImageSlider from "./imageSlider.jsx";

function App() {
  const images = [
    "/screenshot-imgs/sc1.png",
    "/screenshot-imgs/sc2.png",
    "/screenshot-imgs/sc3.png",
  ];
  return (
    <div className="container">
      <div className="phoneImg">
        <img
          src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?"
          alt="iphone"
        />

        <ImageSlider images={images} interval={3000} />
      </div>

      <div className="form-div">
        <form>
          <img src="insta-logo.webp" alt="logo" className="instaLogo" />
          <input
            type="text"
            className="input"
            placeholder="phone number, username, or email"
            required
          />
          <input
            type="password"
            className="input"
            placeholder="password"
            required
          />
          <button className="login-btn">Log In</button>
          <p id="or">or</p>
          <a href="https://www.facebook.com" className="fb-login">
            <img
              src="facebook-logo.png"
              alt="fb logo login"
              className="fbLogo"
            />
            Log in with facebook
          </a>
        </form>
        <div className="sign-up">
          <p className="sign-link">
            Don't have an account?{" "}
            <a href="#" className="sign-link">
              Sign Up
            </a>
          </p>
        </div>
        <div className="get-app">
          <p>Get the app.</p>
          <div className="store">
            <img src="/playstore.png" alt="download from playstore" id="play" />
            <img
              src="microsoft.png"
              alt="download from microsoft"
              id="microsoft"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
