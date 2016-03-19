import {  INIT_CHAT } from "../constants/ActionTypes";
var Wilddog = require("wilddog");

var ref = null;

export function init(chats){
  return {
      type : INIT_CHAT,
      chats
  }
}

export function getChats(){
    return function(dispatch){
        ref = new Wilddog("https://firstblood.wilddogio.com/");
        ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            dispatch(init(snapshot.val()))
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
}

export function postMsg(msg){
    return function(dispatch){
        var postsRef = ref.child("msgs");
        postsRef.push({
            date: Date.now(),
            msg
        });
    }
}
