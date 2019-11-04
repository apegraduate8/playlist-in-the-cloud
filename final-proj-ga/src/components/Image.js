
import React from 'react';
import Songs from '../Store/Songs';

const Image = (props) => {
    const source = "final-project-ga/bassClef-logo-04.svg";
    const styles = {
        width: "150px",
        backgroundColor: "rgb(98, 120, 167)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const styles2 = {
        width: "100px",
        backgroundImage:  "url(defaultPoster.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    };

    if (props.images.name){
        return(
          <div className="songPoster"
              id={props.images.name}
              draggable="true" style={styles}
              onClick={() => { Songs.pick(props.images.name) }}>
              <img src={source}
                    alt={props.images.name}
                    id={props.images.name}
                    onDragStart={(e) => props.catch(e)}
                    width="120px" height="100"
              />
          </div>
        )
    }
      return(
          <div className="songPoster"
                id={props.images}
                draggable="true"
                style={styles}
                onClick={() => { Songs.pick(props.images) }}
                onDragStart={(e) => props.catch(e)}>
                <img src={source}
                      alt={props.images}
                      id={props.images}
                      onDragStart={(e) => props.catch(e)}
                      width="120px"
                      height="100"
                />
          </div>
    )
}

export default Image;
