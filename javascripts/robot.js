 "use strict";


var BattleDome = (function (originalBattleDome){


/////////////////////////////
///****Robot Prototype***////
////////////////////////////

 originalBattleDome.Robot = function(){
    this.proto = "Robot";
  };
  
 /////////////////////
///Type I: ATV///////
////////////////////
  originalBattleDome.ATV = function(){
    this.type= "ATV";
  };

  originalBattleDome.ATV.prototype = new originalBattleDome.Robot();  


////////////////////
///Cheetah Model////
////////////////////

  originalBattleDome.Cheetah = function(){
    this.name = "Cheetah";
    this.health = Math.floor((Math.random() * 30) + 50);
    this.weapon = null;
    this.mod = null;
    this.healthBonus = null;
    this.attackBonus = null;
    this.defenseBonus = null;
  };

  originalBattleDome.Cheetah.prototype = new originalBattleDome.ATV();

//////////////////////
/////Warthog Model////
/////////////////////

  originalBattleDome.Warthog = function(){
    this.name = "Warthog";
    this.health =  Math.floor((Math.random() * 50) + 75);
    this.weapon = null;
    this.mod = null;
    this.healthBonus = null;
    this.attackBonus = null;
    this.defenseBonus = null;

  };

  originalBattleDome.Warthog.prototype = new originalBattleDome.ATV();
  
 ///////////////////////
//////Type II: Drone////
///////////////////////

  originalBattleDome.Drone = function(){
    this.type = "Drone";

  };

  originalBattleDome.Drone.prototype = new originalBattleDome.Robot();  

////////////////////
////Falcon Model////
////////////////////

  originalBattleDome.Falcon = function(){
    this.name = "Falcon";
    this.health = Math.floor((Math.random() * 20) + 60);
    this.weapon = null;
    this.mod = null;
    this.healthBonus = null;
    this.attackBonus = null;
    this.defenseBonus = null;
  };

  originalBattleDome.Falcon = new originalBattleDome.Drone();


////////////////////
////Osprey Model////
////////////////////  

  originalBattleDome.Osprey = function(){
    this.name = "Osprey";
    this.health = Math.floor((Math.random() * 20) + 50);
    this.weapon = null;
    this.mod = null;
    this.healthBonus = null;
    this.attackBonus = null;
    this.defenseBonus = null;
  };
  

  originalBattleDome.Osprey = new originalBattleDome.Drone();

///////////////////////////
//////Type III: Bipedal////
///////////////////////////

  originalBattleDome.Bipedal = function(){
    this.type = "Bipedal";
  };


  originalBattleDome.Bipedal.prototype = new originalBattleDome.Robot();  


////////////////////
////Raptor Model////
////////////////////  

  originalBattleDome.Raptor = function(){
    this.name = "Raptor";
    this.health = Math.floor((Math.random() * 40) + 55);
    this.weapon = null;
    this.mod = null;
    this.healthBonus = null;
    this.attackBonus = null;
    this.defenseBonus = null;
  };

  originalBattleDome.Raptor = new originalBattleDome.Bipedal();

  

/////////////////////
//////Rex Model//////
////////////////////  
  originalBattleDome.Rex = function(){
    this.name = "Rex";
    this.health = Math.floor((Math.random() * 50) + 90);
    this.weapon = null;
    this.mod = null;
    this.healthBonus = null;
    this.attackBonus = null;
    this.defenseBonus = null;
  };

  originalBattleDome.Rex = new originalBattleDome.Bipedal();

return originalBattleDome;
} (BattleDome || {}));


