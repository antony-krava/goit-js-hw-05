class Car {
  static getSpecs(car) {
    console.log(`Max Speed: ${car.maxSpeed}, Speed: ${car.speed}, Is On: ${car.isOn}, Distance: ${car.distance}, Price: ${car._price}`)
  }

  constructor({ price, maxSpeed }) {
    this.speed = 0
    this._price = price
    this.maxSpeed = maxSpeed
    this.isOn = false
    this.distance = 0
  }

  get price() {
    return this._price
  }

  set price(value) {
    this._price = value
  }

  turnOn() {
    this.isOn = true
  }

  turnOff() {
    this.isOn = false
    this.speed = 0
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }

  drive(hours) {
    this.isOn ? (this.distance = this.distance + hours * this.speed) : false
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 })

mustang.turnOn()
mustang.accelerate(50)
mustang.drive(2)

Car.getSpecs(mustang)
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20)
mustang.drive(1)
mustang.turnOff()

Car.getSpecs(mustang)
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price) // 2000
mustang.price = 4000
console.log(mustang.price) // 4000