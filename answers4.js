// 1
var car = {
  speedometer: 0
};

// 2
Object.defineProperty(car, 'clearSpeedometer', {
  value: function() {
    this.speedometer = 0;
  }
});

Object.defineProperties(car, {
  getSpeedometer: {
    get: function() {
      return this.speedometer;
    }
  },
  setSpeedometer: {
    set: function(value) {
      this.speedometer = value;
    }
  }
});


// 3
var car = {
  speedometer: 0
};

Object.defineProperty(car, 'clearSpeedometer', {
  value: function() {
    this.speedometer = 0;
    return this;
  }
});

Object.defineProperties(car, {
  getSpeedometer: {
    value: function() {
      return this.speedometer;
    }
  },
  setSpeedometer: {
    value: function(value) {
      this.speedometer = value;
      return this;
    }
  }
});

car.setSpeedometer(200).setSpeedometer(300).clearSpeedometer().getSpeedometer();
