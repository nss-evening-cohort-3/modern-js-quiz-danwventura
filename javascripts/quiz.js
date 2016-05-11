"use strict";


let p1ModelId;
let p1WepId;
let p1ModId;



// Implement this.target.id
$('.modelType').click(function(){

  let p1ModelId = this.id;
  p1ModelBuild(p1ModelId)
  })

let p1ModelBuild = function(p1ModelId){
  BattleDome.playerOne.model = new BattleDome[p1ModelId]()
  console.log("bttldmp1md", BattleDome.playerOne.model);
}



$('.weaponType').click(function(){
  
    let p1WepId = this.id;
    p1WepBuild(p1WepId)
  // console.log("wepId", p1WepId);
  })

let p1WepBuild = function(p1WepId){
  BattleDome.playerOne.weapon = new BattleDome.Armory[p1WepId]()
  console.log("p1Weapon", BattleDome.playerOne.weapon);
}




$('.modType').click(function(e){
  if (e.target.classList.contains("modType")){
    p1ModId = e.target.id;
  } else if (e.target.parentNode.classList.contains("modType")){
    p1ModId = e.target.parentNode.id;
  } else {
    p1ModId = e.target.innerHTML
  }
  })





  // console.log("p1ModelId", p1ModelId);
  // console.log("p1WepId", p1WepId);
  // console.log("p1ModId", p1ModId);















