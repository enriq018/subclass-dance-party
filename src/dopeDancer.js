// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

// blinkyDancer.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   blinkyDancer.$node.toggle();
// };

//   return blinkyDancer;
// };

var makeDopeDancer = function(top, left, timeBetweenSteps) {
  // this.oldStep = window.makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="makeDopeDancer"></span>');
  this.setPosition(this.top, this.left);

};

makeDopeDancer.prototype = Object.create(makeDancer.prototype);
makeDopeDancer.prototype.constructor = makeDopeDancer;

makeDopeDancer.prototype.step = function() {
  //console.log('MBD', this.step);
  // this.step();''
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};