

import React, { Component } from 'react';
import ReactAudio from 'react-audio-player';
import Omni from 'omnitone';
import Songs from '../Store/Songs';
import '../Styles/Plug.css';



let theControl = "";
// let MediaControl = new MediaController();
class Plug extends Component {
    constructor(props) {
        super(props);
            this.state = {
                control: null,
                crip: null
          }
    }

    componentDidMount() {
        this.rap.audioEl.src = this.state.control;
        this.rap.audioEl.crossOrigin = 'anonymous';
        this.rapTwo.audioEl.crossOrigin = 'anonymous';
         // this.rap.audioEl.controller = MediaControl;
         // this.rapTwo.audioEl.controller = MediaControl;

        Songs.on("changeSong", (e) => {
            this.setState({control: Songs.selected});
              console.log(Songs.selected)
        })

        //console.log("yoyoyo the audio   ", this.rap.audioEl)
        // audioElement.src = "https://firebasestorage.googleapis.com/v0/b/mystorage-56d54.appspot.com/o/songs%2F005d49cbf98b3bc60246dec8e08b8a24%2FDrake-Gyalchester(CDQ).mp3?alt=media&token=cd9097c2-49ad-4e2e-be2f-8294ed0ff38d";

        const audioContext = new AudioContext();
            //console.log(Omni);
            // console.log(this.fu(this.props.song))
        const audioElementSource = audioContext.createMediaElementSource(this.rap.audioEl);
        let foaRenderer = Omni.Omnitone.createFOARenderer(audioContext, {
           HRIRUrl: 'https://cdn.rawgit.com/GoogleChrome/omnitone/962089ca/build/resources/sh_hrir_o_1.wav',
            // channelMap: [0, 3, 1, 2]
        })

        foaRenderer.initialize().then(function () {
            audioElementSource.connect(foaRenderer.input);
            foaRenderer.output.connect(audioContext.destination);
            foaRenderer.setRotationMatrix([-1, -1, -2, -2, 0, 1, 1, 2, 3]);     ////([-2, -1, -2, -1, 0, 1, 1, 2, 3
          });

      }

//////////////   audio controls   ///////

               start(){
                  this.rap.audioEl.play()
                  this.rapTwo.audioEl.play()
               }
                reset(){
                // this.rap.audioEl.load()
                // this.rapTwo.audioEl.load()
                this.rap.audioEl.currentTime = 0;
                this.rapTwo.audioEl.currentTime = 0;
               }

               pause(){
                this.rap.audioEl.pause();
                this.rapTwo.audioEl.pause();
               }

                stop(){
                this.rap.audioEl.pause();
                this.rapTwo.audioEl.pause();
                if( this.rap.audioEl.paused ){ this.reset(); return this.reset() }

               }


//////////////   audio controls   ///////

  render() {

const over = {
                    zIndex: "2",
                    position: "absolute",
                    top: "0",
                    left: "400",
                    width: "45%",
                    height: "100%",
                    background: "black",
                    opacity: ".7",
                    borderRadius: "10px"
}

          console.log(theControl)
    return (

          <div className="RadioPlayer">
          <div className="react-audio">
          <div className="overlay" style={over}> </div>
         <ReactAudio
               ref={c => this.rap = c }
                  src={this.state.control}

               mediaGroup="mix"
                />

            <ReactAudio
                    ref={c => this.rapTwo = c }
                  src={this.state.control}

               mediaGroup="mix"
                />
                </div>
                        <div className="buttons">
                          <button onClick={() => this.start()}> PLAY </button>
                           <button onClick={() => this.pause()}> PAUSE </button>
                            <button onClick={() => this.reset()}> RELOAD </button>
                            </div>
                </div>

    );
  }
}

export default Plug;



/////// https://dev.w3.org/html5/spec-preview/media-elements.html#media-controllers
