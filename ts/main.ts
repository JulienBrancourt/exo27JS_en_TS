import { Car } from "./car.js";

console.log("coucou");

const voiture1: Car = new Car("BMW", "Serie 1", 80);
const voiture2: Car = new Car("Mercedes", "GLB", 100);

console.log(voiture1);
console.log(voiture2);

voiture1.accelerer();
voiture1.accelerer();
voiture1.accelerer();
console.log(voiture1);

voiture2.accelerer();
voiture2.accelerer();
voiture2.tourner();
voiture2.tourner();
console.log(voiture2);

