
import React, { Component } from 'react';
import Songs from '../Store/Songs';
import Image from './Image';

class All extends Component {
    constructor(props) {
      super(props);
    }

    delete(e){
      this.props.photos;
      e.dataTransfer.setData("source", e.target.id);
    }

    image(){
        return this.props.photos.map((photo, index) => {
            return( <Image key={index} id={index} images={photo} catch={this.delete.bind(this)}/>  )
        })
    }

    render(){
        if(this.props.photos === null){
            return( <h1 style={{cursor: "pointer"}} onClick={() => this.props.getPlaylist()}> {this.props.setPlaylist} </h1> )
        }

        if(this.props.photos != null){
            return( <div className="sub-center"> {this.image()} </div>)
        }
    }

}

export default All;
