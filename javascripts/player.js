"use strict";

var BattleDome = (function (originalBattleDome){


originalBattleDome.Contender = function(){
  this.obj = "player"
};


originalBattleDome.playerOne = function(){
  this.model = null;
  this.weapon= null;
  this.mod = null;

};

originalBattleDome.playerOne.prototype = new originalBattleDome.Contender();










  return originalBattleDome;
}(BattleDome || {}));