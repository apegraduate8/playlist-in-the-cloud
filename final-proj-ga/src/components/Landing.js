import React, { Component } from 'react';
import Cookie from 'react-cookie';
import GlobalStore from '../Store/GlobalStore';
import { Route, Redirect} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import DB from '../../Database/Users';
// import Music from './Music';
import '../Styles/Landing.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cookies: Cookie.load("signIn"),
          User: null,
          button: "Playlist"
        }
    }

    componentDidMount() {
       GlobalStore.on("change", () => {
            console.log("something changed");
            this.setState({User: GlobalStore.User});
        })

      // if(this.state.cookies){return setTimeout(GlobalStore.checkUser(), 500)}
   }

  theRes(){
     GlobalStore.check();
  }

  theReq(){
    //if(Cookie.load("signIn")){}
  }

  theQuit(){
     GlobalStore.getOut()
  }

  dug(){
    return(
        <h2> Sorry your connection is bad </h2>
      )
  }

  render() {
          const logo = {
              backgroundImage: "url(google-logo.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
          }

          const background = {
              zIndex: "1",
              position: "fixed",
              top: "43px",
              right: "0",
              width: "8vw",
              height: "15vh",
              backgroundImage: "url(final-project-ga/bassClef-logo-04.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "55%",
              backgroundPosition: "50% 30%",
              opacity: ".6"
          }
          const background2 = {
              zIndex: "3",
              position: "fixed",
              top: "150px",
              left: "0",
              width: "100vw",
              height: "80vh",
              background: "black",
              opacity: ".95"
          }


          const stream = {
              zIndex: "3",
              position: "fixed",
              top: "200px",
              left: "-500px",
              width: "400px",
              height: "8vh",
              backgroundImage: "url(final-project-ga/stream-05.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "90%",
              backgroundPosition: "50% 30%",
              opacity: "1"
          }

          const stream2 = {
              zIndex: "3",
              position: "fixed",
              bottom: "100px",
              right: "-500px",
              width: "400px",
              height: "8vh",
              backgroundImage: "url(final-project-ga/stream-05.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "90%",
              backgroundPosition: "50% 30%",
              opacity: "1"
          }

        if (this.state.User){
            return( <Redirect to="/playlist" />);

        }


            return (
              <div className="GoogleApp">
                  <div className="Background" style={background} > </div>
                  <div className="stream" style={stream} > </div>
                  <div className="stream2" style={stream2} > </div>
                  <div className="GoogleDiv">
                        <div className="GoogleSignin" onClick={(e) => {this.theRes()}} >
                            <h2> Sign in with </h2> <span className="GoogleSpan" style={logo}> </span>
                        </div>
                        <div className="Terms">
                            <p> We only use your amail for logging purposes. <br /> You are not bound to any contracts of agreement  </p>
                            <p> By signing in, you agree to our terms of use </p>
                        </div>
                  </div>
              </div>
            );
    }
}

export default Landing;

/// https://css-tricks.com/learning-react-router/
// https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// http://serverless-stack.com/chapters/handle-routes-with-react-router.html
// https://reacttraining.com/react-router/web/example/auth-workflow
