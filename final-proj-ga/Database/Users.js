<<<<<<< Updated upstream



=======
const Firebase = require('firebase');
const Auth = require('../Authenticate/Signin');
// import dE = require('dotenv').config();
let me;

const initCheck = function(){
  // const database = Firebase.database();
  //  console.log("yooo", database)
  // if(database){this.init(database)}
}

/////////////////  db

const database = Firebase.database();
const dbRef = database.ref();
const usersRef = dbRef.child("users");
const storage = Firebase.storage();
const storageRef = storage.ref();   ////     root path
const myPlaylist = storageRef.child('songs') //   /songs


/////////// the User has to be signed in to post ....   if user is not signed in the Auth.userhash function will not work
///// i take the users email, then run the md5 hash method to hash the email
//// i use that hash as the user path for all there songs
//// that is the root path to there playlist


const Use = {
  myFile: null,
  yea: null,
  userSongBlog: null,
  urlPath: null,
  userEmail: null
}


class UpLoad {

setUser(userEmail){
    Use.userEmail = userEmail
    Use.yea =  Auth.userHash(userEmail)    //// the hashed email   is now set to global
    Use.userSongBlob = myPlaylist.child(Use.yea)   //////  to post and get data
    console.log(" inside the setUser    >>> ", Use.yea)


}

  Post(file, user){
    Use.myFile = file.name;

    console.log(file, "and the user    ",  Use.userSongBlob, user)
    return Use.userSongBlob.child(Use.myFile).put(file).then(function(){
        console.log("successful post      >    ", Use.myFile)
        return "done"

    })
  }


GetPostUrl(theFile){
  return Use.userSongBlob.child(theFile).getDownloadURL().then(function(ur1){
            return ur1

    })

}

deletePost(theFile){
        return Use.userSongBlob.child(theFile).delete().then(function(){
              console.log("file deleted , success", theFile)
        })
}

//////////// only for database

setPlaylist(myPlaylist){
    usersRef.child(Use.yea).set({
            playlist: myPlaylist
    });
}

playlist(){
    return usersRef.child(Use.yea).once("value").then(function(snap){
        let mylist = snap.val();
          console.log("in the DB.getPlaylist      >>>>>   ", mylist)
        return mylist.playlist


    })
    .catch(function(err){
      return null
    })
  }
}

const myUpload = new UpLoad();

module.exports = myUpload;
// module.exports = Overall;
/////   have to check for internet connect 1st before call Firebase.datbase()
/// https://stackoverflow.com/questions/2384167/check-if-internet-connection-exists-with-javascript
>>>>>>> Stashed changes
