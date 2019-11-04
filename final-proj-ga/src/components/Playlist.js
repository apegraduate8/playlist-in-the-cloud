
import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import DropZone from 'react-dropzone';
import Image from './Image';
import Songs from '../Store/Songs';
import DB from '../../Database/Users';
import GlobalStore from '../Store/GlobalStore';
import All from './All';
import '../Styles/Playlist.css'

// let anime = {
//   animation: "wobble 1s linear";
//   -webkit-animation: "wobble 1s linear";
//   -moz-animation: "wobble 1s linear";
// }

class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
          photos: null,
          User: null,
          myZone: null,
          setting: "Click to retrieve playlist"
        }
    }

    componentDidMount() {
        GlobalStore.on("change", (e) => {
            this.setState({User: GlobalStore.theUser()});
        })

        Songs.on("change", (e) => {
            this.setState({photos: Songs.songs});
        })

    }

    getPlaylist(){
        const self = this;

        DB.playlist().then(function(result){
          if(result != null || result != undefined){  return Songs.setPlaylist(result) }

          self.setState({setting: "Drop a file to create a Playlist"})
        })

    }

    onDrop(file){
        this.props.switch(file[0]);

        DB.Post(file[0], this.state.User).then(function(){
            Songs.update(file[0])
        })
    }

    proc(e){

    }

    procDrop(e){
        const self = this;

        e.preventDefault();
        Songs.deleteSong(e.dataTransfer.getData("source")).then(function(rewind){
            self.getPlaylist();
        })
    }

    render(){
      const trashbag = {
          backgroundImage: "url(final-project-ga/trash.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
      }

      if(!GlobalStore.checkCookie()){  return( <Redirect to="/" />) }

      return(
          <div className="all">
              <div className="main">
                    <DropZone onDrop={this.onDrop.bind(this)} >
                        <p> drop some shit bitch </p>
                    </DropZone>
                    <div className="trashbag" style={trashbag} onDragOver={this.proc.bind(this)} onDrop={this.procDrop.bind(this)}> </div>
              </div>
              <div className="center">
                  <All photos={this.state.photos} getPlaylist={this.getPlaylist.bind(this)} setPlaylist={this.state.setting}/>
              </div>
          </div>
        )
    }
}

export default Playlist;
