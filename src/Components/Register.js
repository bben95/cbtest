import React from "react";
import { useMediaQuery } from "react-responsive";

const Register = (props) => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  let styleboxweb = {
    boxSizing: " border-box",
    width: "505px",
    height: "757px",
    position: "absolute",

    left: "111px",
    top: "114px",
    paddingLeft: "3%",

    background: "#FFFFFF",
    border: "0.5px solid #878787",
    boxShadow: " 0px 4px 64px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  };
  let styleboxmobile = {
    boxSizing: "border-box",
    position: "absolute",
    width: "324px",
    height: "757px",
    left: "26px",
    top: "100px",
    paddingLeft: "6%",

    background: "#FFFFFF",
    border: "0.5px solid #878787",
    boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  };
  let styleinputweb = {
    margin: "0px",

    width: "423px",
    height: "59px",
    boxSizing: "border-box",
    padding: "0px",
    background: "#FFFFFF",
    border: "0.6px solid #282828",
    borderRadius: "6px",
  };
  let styleinputmobile = {
    margin: "0px",

    width: "279px",
    height: "59px",
    boxSizing: "border-box",
    padding: "0px",
    background: "#FFFFFF",
    border: "0.6px solid #282828",
    borderRadius: "6px",
  };
  let styleloginweb = {
    background: "#000000",
    width: "423px",
    height: "59px",
    borderRadius: "6px",
  };
  let styleloginmobile = {
    background: "#000000",
    width: "279px",
    height: "59px",
    borderRadius: "6px",
  };

  return (
    <div style={isDesktop ? styleboxweb : styleboxmobile}>
      <p style={{ fontWeight: "300", fontSize: "25px", lineHeight: "38px" }}>
        Welcome !
      </p>
      <p
        style={{
          padding: "0px",
          margin: "0px",
          fontWeight: "500",
          fontSize: "31px",
          lineHeight: "46px",
        }}
      >
        Sign up to
      </p>
      <p
        style={{
          fontWeight: "300",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        Lorem ipsum is simply
      </p>

      <form style={{ width: "inherit", paddingTop: "10%" }} onSubmit={(e)=>{e.preventDefault()}}>
        <label
          htmlFor="uname"
          style={{
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#000000",
          }}
        >
          Email
        </label>
        <br />
        <input
          style={isDesktop ? styleinputweb : styleinputmobile}
          type="text"
          name="uname"
        />
        <br />
        <br />
        <label
          htmlFor="password"
          style={{
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#000000",
          }}
        >
          User name
        </label>
        <br />
        <input
          style={isDesktop ? styleinputweb : styleinputmobile}
          type="password"
          name="password"
        />
        <br />
        <br />
        <label
          htmlFor="uname"
          style={{
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#000000",
          }}
        >
        Password
        </label>
        <br />
        <input
          style={isDesktop ? styleinputweb : styleinputmobile}
          type="text"
          name="uname"
        /><br/><br/>
        <label
          htmlFor="uname"
          style={{
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#000000",
          }}
        >
          Confirm Password
        </label>
        <br />
        <input
          style={isDesktop ? styleinputweb : styleinputmobile}
          type="text"
          name="uname"
        /><br/><br/>
        <button style={isDesktop ? styleloginweb : styleloginmobile} onClick={()=>{props.callbackset("login")}}>
          <span style={{ color: "#FFFFFF" }}>Register</span>
        </button>
      </form>
      <p
        style={{
          fontWeight: "300",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#7D7D7D",
          marginLeft: "15%"
        }}
      >
        Already Have an Account?
        <span style={{ color: "#000000", fontWeight: "500" }} onClick={()=>{props.callbackset("login")}}>Login</span>
      </p>
    </div>
  );
};

export default Register;
