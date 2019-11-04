import { EventEmitter } from 'events';
import DB from '../../Database/Users';





class Songs extends EventEmitter {

        constructor(props) {
          super(props);
              this.songs = [];
              this.poster = "../public/defaultPoster.png";
              this.selected = "../public/Drake-Gyalchester.wav";
              this.name = "Drake-Gyalchester.wav";
        }

      update(newSong){
           this.songs.push(newSong.name)
          console.log("yo in the update    ",this.songs)
            // debugger
          DB.setPlaylist(this.songs)
          this.emit("change")

      }

      pick(thePick){
        this.name = thePick;
        let self = this;
        console.log(thePick)
         DB.GetPostUrl(thePick).then(function(result){
              console.log(result, "in the songs database, the return URL from the database")
              self.selected = result;

            console.log("this.selected        ", self.selected)
                 self.emit("changeSong")
         })


      }

         setPlaylist(DBlist){
          console.log("setPlaylist", DBlist)
          DB.setPlaylist(DBlist)
          this.songs = DBlist;
         this.emit("change")
         }

         deleteSong(File){
          const self = this;
            return DB.deletePost(File).then(function(result){
                    console.log("back from the DB delete")
                    let newPlaylist = self.organize(File);
                    console.log("new playlist    >>>>  >> ", newPlaylist)
                   self.setPlaylist(newPlaylist);


            })
         }


         organize(track){
          console.log("filter   >>>    ", track)
           return this.songs.filter(function(el, index){
                 return el !== track
            })

         }


}

const mySongs = new Songs();
export default mySongs;


// CORS configuration

// https://firebase.google.com/docs/storage/web/download-files
// https://cloud.google.com/storage/docs/gsutil_install

// https://bitmovin.com/faq/how-do-i-set-up-cors-for-my-google-cloud-storage-bucket/



