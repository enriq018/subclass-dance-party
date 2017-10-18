var makeExplosion = function(top, left, timeBetweenSteps) {
  // this.oldStep = window.makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="explosion"></span>');
  this.setPosition(this.top, this.left);

};
makeExplosion.prototype = Object.create(makeDancer.prototype); makeExplosion.prototype.constructor = makeExplosion;
makeExplosion.prototype.step = function() {
  //console.log('MBD', this.step);
  // this.step();''
  makeDancer.prototype.step.call(this);
  
};

makeExplosion.prototype.explosion = function() {
  this.$node = $('<span class="off"></span>');
};