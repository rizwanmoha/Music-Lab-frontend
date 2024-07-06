import { Fragment } from "react";
import "./LadinhPage.css";
import "./LandingPage.js";

const LadingPage = () => {
  return (
    <Fragment>
      <div className="container">
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to personal@email.com <br />
          Enter the code below to confirm your email address
        </p>
        <div className="code-container">
          <input
            type="number"
            className="code"
            placeholder={0}
            min={0}
            max={9}
            required
          />
          <input
            type="number"
            className="code"
            placeholder={0}
            min={0}
            max={9}
            required
          />
          <input
            type="number"
            className="code"
            placeholder={0}
            min={0}
            max={9}
            required
          />
          <input
            type="number"
            className="code"
            placeholder={0}
            min={0}
            max={9}
            required
          />
          <input
            type="number"
            className="code"
            placeholder={0}
            min={0}
            max={9}
            required
          />
          <input
            type="number"
            className="code"
            placeholder={0}
            min={0}
            max={9}
            required
          />
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            Verify
          </button>
        </div>
        <small>
          If you didn't receive a code !! <strong>RESEND</strong>
        </small>
      </div>
    </Fragment>
  );
};

export default LadingPage;
