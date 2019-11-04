import { EventEmitter } from 'events';
import Auth from '../../Authenticate/Signin';
import Cookie from 'react-cookie';
import DB from '../../Database/Users';
let got;



class GlobalStore extends EventEmitter {
        constructor(props) {
          super(props);
                this.User = null;
                this.state = null;
                this.play = false;
                this.playlist = null;
    }

/////////////////////////////////////////////   signs user out
getOut(){
  Cookie.remove("signIn")
  Auth.UserSignOut();
}
////////////////////////////////////////////////

/////////////////////////////////////////////   signs user out
getUrl(fileName){
    DB.GetPostUrl(fileName)
}
//////////////

checkCookie(){
  if(Cookie.load("signIn")){ return true }
 if(!Cookie.load("signIn")){ return false }

}


////////////////////////    check to see iff user is signed in
checkUser(){
  let self = this;
  console.log("b4 the Auth.stateChange")
  if(Auth.stateChange()){
    setTimeout(function(){
      console.log(DB)
          got = Auth.get();
           if(got){
              console.log("user is sign in", got[2]);
               self.User = got[2];
               DB.setUser(got[2])
              console.log(self.User)
               self.emit("change");
               // return true
             }

    } ,1000)

 }

}


theUser(){
  return this.User
}
setTheUser(you){
this.User = you;
this.emit("change")
}


////////////////////////


check(){

  if(!Cookie.load("signIn")){
     let self = this;
      console.log("inside the check");
     return Auth.UserSignIn().then(function(user){
        console.log(user.user.email)
       Cookie.save("signIn", user.user.email);

        self.checkUser()
       return true

      }).catch(function(err){console.log("error   ", err); return false})


     }

}


play(list){
      this.play = true;
      this.emit("play")
}


}


const myGlobal = new GlobalStore();
window.myGlobal = myGlobal;
export default myGlobal;

