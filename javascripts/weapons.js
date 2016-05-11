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
  this.name = "SledgeHammer";
  this.damage = Math.ceil((Math.random() * 35) +(Math.random() * 50));
};

originalBattleDome.Armory.SledgeHammer.prototype = new originalBattleDome.Armory.Weapon();


////////////////////
///////Laser///////
///////////////////

originalBattleDome.Armory.Laser = function (){
  this.name = "Laser";
  this.damage = Math.ceil((Math.random() * 55) + (Math.random() * 70));
};

originalBattleDome.Armory.Laser.prototype = new originalBattleDome.Armory.Weapon();


////////////////////
///////Rockets//////
///////////////////
originalBattleDome.Armory.Rockets = function (){
  this.name = "Rockets";
  this.damage = Math.ceil((Math.random() * 50) +(Math.random() * 50));
};

originalBattleDome.Armory.Rockets.prototype = new originalBattleDome.Armory.Weapon();

////////////////////
///////Chainsaw/////
///////////////////

originalBattleDome.Armory.Chainsaw = function (){
  this.name = "Chainsaw";
  this.damage = Math.ceil((Math.random() * 25) +(Math.random() * 30));
};

originalBattleDome.Armory.Chainsaw.prototype = new originalBattleDome.Armory.Weapon();


////////////////////////
///////Flamethrower////
//////////////////////

originalBattleDome.Armory.Flamethrower = function (){
  this.name = "Flamethrower";
  this.damage = Math.ceil((Math.random() * 20) +(Math.random() * 50));
};

originalBattleDome.Armory.Flamethrower.prototype = new originalBattleDome.Armory.Weapon();

//////////////////////////
///////Machine Gun///////
////////////////////////

originalBattleDome.Armory.MachineGun = function (){
  this.name = "MachineGun";
  this.damage = Math.ceil((Math.random() * 50) + 25);
};

originalBattleDome.Armory.MachineGun.prototype = new originalBattleDome.Armory.Weapon();








return originalBattleDome;
}(BattleDome || {}));