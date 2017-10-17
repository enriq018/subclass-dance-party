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


// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this.makeDancer);
//   // console.log('==============', this.makeBlinkyDancer.prototype.step)
//   this.oldStep = this.makeBlinkyDancer.prototype.step;
//   this.$node = $('<span class="dancer"></span>');


// };
// // console.log('init', this.makeDancer.prototype)
// // console.log('init2', makeDancer)

// makeBlinkyDancer.prototype = Object.create(this.makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   console.log('++++++++++++++++', this);
//   this.oldStep();
//   this.$node.toggle();
// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  this.b = 'an other varaiable'
  // this.step();

  this.oldStep = window.makeDancer.prototype.step;
  console.log(this.oldStep)
  console.log('1')
  this.a = 'myVarible';
  makeDancer.call(this, top, left, timeBetweenSteps);
  

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // this.oldStep();
  console.log('2')
  console.log('old Step =============', this.a)
  this.oldStep();
  this.$node.toggle();
};














