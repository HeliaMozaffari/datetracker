import { createIt, readIT, updateIt, deleteIt } from "./firbaseDatabaseHandler.mjs";
import {AuthenticateUser, TrackDate, EmergencyHistory} from "./firebaseDatabaseObjects.mjs";


export function pagechanger() {
  var btn_pagechanger = document.getElementsByName("btnpagechanger");

  btn_pagechanger.forEach(element => { 
      
      if(element.id =="index"){
          element.addEventListener("click",  function(){location.replace( "../"+element.id + ".html")}) 
      }
      else if((element.id).includes("fromIndex") ==true){
          element.addEventListener("click",  function(){location.replace( "html/"+element.id.split("From").pop() + ".html")})   
      }
      else{
          element.addEventListener("click",  function(){location.replace( element.id + ".html")})   
      }
  });
}

export function functionHandler() {

  var functions = document.getElementsByName("btnfunction");

  functions.forEach(element => { 
    
      if(element.id == "Emergency"){
          element.addEventListener("click",  function(){emergency()}); 
      }
      else if(element.id == "History"){
          element.addEventListener("click",function(){ history()} )   
      }
      else{
          console.log("not a valid function request")   
      }
  });
}


//This function is called if emergency button is clicked
function emergency()
{
  let user = new AuthenticateUser("Helia", "testing@123.com", "64792479837")
  createIt("hi",user);
    console.log("Emergency requested")
}

//This function is called if history button is clicked
function history(){

  readIT(AuthenticateUser);
  console.log("History requested");
}