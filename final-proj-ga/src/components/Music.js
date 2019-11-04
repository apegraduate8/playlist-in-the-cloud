import React, { Component } from 'react';
// import ReactAudio from 'react-audio-player';
import Playlist from './Playlist';
import Songs from '../Store/Songs';
import Plug from './Plug';
import '../Styles/Music.css';

class Music extends Component {
    constructor(props) {
      super(props);
        this.state = {
          image: "",
          files: [],
          track: null,
          trackName: null
        }
    }

    componentDidMount() {
        Songs.on("changeSong", (e) => {
            this.setState(state => {
                state.track = Songs.selected;
                state.trackName = Songs.name;
            })
        })
    }

    imagePoster(){
        if(this.state.imagePoster){ return "yellow"};

        return "../public/defaultPoster.png";
    }


    yo(theSong){
        this.setState(state => {state.files.push(theSong)} )
        let rain = this.state.files;
    }



    render(){
        return (
            <div className="aapp">
                <div className="audioContainer">
                    <Plug song={this.state.track}/>
                </div>
                <h1> { this.state.trackName } </h1>
                <Playlist image={this.imagePoster.bind(this)} switch={this.yo.bind(this)} myList={this.state.files}/>
            </div>
        );
    }
}

export default Music;
