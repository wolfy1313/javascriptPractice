// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   provideInfo(){
//     return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
//   }
// };

// console.log(robot.provideInfo())

// const robot = {
//   energyLevel: 100,
//   checkEnergy() {
//     console.log(`Energy is currently at ${this.energyLevel}%.`)
//   }
// }

// robot.checkEnergy();

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === "number" && num >=0){
      this._numOfSensors = num
    } else {
      console.log("Pass in a number that is greater than or equal to 0")
    }
  }
};

robot.numOfSensors = 100
console.log(robot.numOfSensors)