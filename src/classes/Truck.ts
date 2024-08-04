// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// !Done!The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
  // !Done!Declare properties of the Truck class
  // !Done!The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // !Done!The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // !Done!Create a constructor that accepts the properties of the Truck class
    // !Done!The constructor should call the constructor of the parent class, Vehicle
    // !Done!The constructor should initialize the properties of the Truck class
    // !Done!The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number,
    ) {
      super();
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      this.towingCapacity = towingCapacity;
      if (wheels.length !== 4) {
        this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      } else {
        this.wheels = wheels;
      }
    }

  // !Done!Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // !Done!Get the make and model of the vehicle if it exists
    // !Done!Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // !Done!If it is, log that the vehicle is being towed
    // !Done!If it is not, log that the vehicle is too heavy to be towed
    if (vehicle.make && vehicle.model) {
      if (vehicle.weight <= this.towingCapacity) {
        console.log("This vehicle is being towed.");
      }
      else {
        console.log("This vehicle is too heavy to be towed.");
      }
    }
  }

  // !Done!Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // !Done!The method should call the printDetails method of the parent class
    super.printDetails(); 

    // !Done!The method should log the details of the Truck
    // !Done!The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  }
}

// Export the Truck class as the default export
export default Truck;
