import React, { Component } from 'react';
import '../Styles/Logo.css';
import Cookie from 'react-cookie';
import GlobalStore from '../Store/GlobalStore';

class Logo extends Component {

    constructor(props) {
      super(props);
              this.state = {
                user: GlobalStore.User
              }
    }

    componentDidMount() {
          GlobalStore.on("change", () => {
            console.log("something changed in the LOGO")
            this.setState({user: GlobalStore.User})
          })
    }

    render() {
        let width = "300px";

        if(this.state.user){ console.log("the logo", width, this.state.user); width = "150px"}

        const styles = {
            width: width,
            backgroundImage: "url(final-project-ga/stream-bass-04.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        }

        if(!this.state.user){GlobalStore.checkUser()}

        return (<div className="Logo" style={styles}></div>);
    }
}

export default Logo;
