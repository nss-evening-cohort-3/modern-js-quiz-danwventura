"use strict";

var BattleDome = (function (originalBattleDome){

// Object container for all weapons
originalBattleDome.Armory = {};


/////////////////////////////
////**Base Weapon Class**///
////////////////////////////

originalBattleDome.Armory.Weapon = function (){
  this.name = "unarmed";
  this.damage = 0;
};



////////////////////
////Sledge Hammer///
////////////////////  

originalBattleDome.Armory.SledgeHammer = function (){
  this.name = "Sledge Hammer";
  this.damage = "";
};

originalBattleDome.Armory.SledgeHammer.prototype = new originalBattleDome.Armory.Weapon();


////////////////////
///////Laser///////
///////////////////

originalBattleDome.Armory.Laser = function (){
  this.name = "Laser";
  this.damage = "";
};

originalBattleDome.Armory.Laser.prototype = new originalBattleDome.Armory.Weapon();


////////////////////
///////Rockets//////
///////////////////
originalBattleDome.Armory.Rockets = function (){
  this.name = "Rockets";
  this.damage = "";
};

originalBattleDome.Armory.Rockets.prototype = new originalBattleDome.Armory.Weapon();

////////////////////
///////Chainsaw/////
///////////////////

originalBattleDome.Armory.Chainsaw = function (){
  this.name = "Chainsaw";
  this.damage = "";
};

originalBattleDome.Armory.Chainsaw.prototype = new originalBattleDome.Armory.Weapon();


////////////////////////
///////Flamethrower////
//////////////////////

originalBattleDome.Armory.Flamethrower = function (){
  this.name = "Flamethrower";
  this.damage = "";
};

originalBattleDome.Armory.Flamethrower.prototype = new originalBattleDome.Armory.Weapon();

//////////////////////////
///////Machine Gun///////
////////////////////////

originalBattleDome.Armory.MachineGun = function (){
  this.name = "Machine Gun";
  this.damage = "";
};

originalBattleDome.Armory.MachineGun.prototype = new originalBattleDome.Armory.Weapon();








return originalBattleDome;
}(BattleDome || {}));