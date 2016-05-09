"use strict";

var BattleDome = (function (originalBattleDome){
  
//Object Container for all Mods
  originalBattleDome.ModLocker = {};


/////////////////////////////
////**Base Mod Class**///
////////////////////////////

  originalBattleDome.ModLocker.Mod = function(){
    this.name = "no upgrade";
    this.healthBonus = null;
    this.defenseBonus = null;
    this.attackBonus = null;
  };


/////////////////////
///////Jet Pack/////
////////////////////

  originalBattleDome.ModLocker.JetPack = function (){
    this.name = "Jet Pack";
    this.healthBonus = "";
    this.attackBonus = "";
    this.defenseBonus = "";

  };

  originalBattleDome.ModLocker.JetPack.prototype = new originalBattleDome.ModLocker.Mod();


/////////////////////
//////Cloaking//////
////////////////////

  originalBattleDome.ModLocker.Cloaking = function (){
    this.name = "Cloaking";
    this.healthBonus = "";
    this.attackBonus = "";
    this.defenseBonus = "";

  };

  originalBattleDome.ModLocker.Cloaking.prototype = new originalBattleDome.ModLocker.Mod();


////////////////////////
/////Energy Shield/////
//////////////////////

  originalBattleDome.ModLocker.EnergyShield = function (){
    this.name = "Energy Shield";
    this.healthBonus = "";
    this.attackBonus = "";
    this.defenseBonus = "";

  };

  originalBattleDome.ModLocker.EnergyShield.prototype = new originalBattleDome.ModLocker.Mod();


 /////////////////////
////////EMP//////////
////////////////////

  originalBattleDome.ModLocker.EMP = function (){
    this.name = "EMP";
    this.healthBonus = "";
    this.attackBonus = "";
    this.defenseBonus = "";

  };

  originalBattleDome.ModLocker.EMP.prototype = new originalBattleDome.ModLocker.Mod();


//////////////////////
//////Overdrive//////
////////////////////

  originalBattleDome.ModLocker.Overdrive = function (){
    this.name = "Overdrive";
    this.healthBonus = "";
    this.attackBonus = "";
    this.defenseBonus = "";

  };

  originalBattleDome.ModLocker.Overdrive.prototype = new originalBattleDome.ModLocker.Mod();


/////////////////////
//////Teleport///////
////////////////////

  originalBattleDome.ModLocker.Teleport = function (){
    this.name = "Teleport";
    this.healthBonus = "";
    this.attackBonus = "";
    this.defenseBonus = "";

  };

  originalBattleDome.ModLocker.Teleport.prototype = new originalBattleDome.ModLocker.Mod();





  return originalBattleDome;
}(BattleDome || {}));