import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";

class Menu extends Component {
  render() {
    return (
      <Auxiliary>
        <div class='section2'>
          <div>menus</div>
          <div class='menu-displays'>m-d1</div>
          <div class='menu-displays'>m-d2</div>
          <div class='menu-displays'>m-d3</div>
          <div class='menu-displays'>m-d4</div>
          <div class='menu-displays'>m-d5</div>
          <div class='menu-displays'>m-d6</div>
        </div>{" "}
      </Auxiliary>
    );
  }
}

export default Menu;

//----------------------------------------------------------------------

// class Burger {
//   constructor() {
//     this.name = "Burger";
//     this.price = 3.89;
//     this.temperature = "";
//     this.cheese = false;
//     this.tomato = false;
//     this.lettuce = false;
//     this.onion = false;
//     this.ketchup = false;
//     this.mustard = false;
//     this.mayo = false;
//     this.bacon = false;
//     this.pickle = false;
//   }
// }

// class Fries {
//   constructor() {
//     this.name = "Fries";
//     this.price = 0.99; //make this an array
//     this.size = ""; //make this an array
//   }
// }

// class Milkshake {
//   constructor() {
//     this.name = "Milkshake";
//     this.price = 2.99;
//     this.size = ""; //make this an array
//     this.flavor = ""; //make this an array
//   }
// }

// class Chicken {
//   constructor() {
//     this.name = "Chix";
//     this.price = 3.59;
//     this.style = ""; //broiled, pan seared, battered and fried
//   }
// }

// class Sides {
//   constructor() {
//     this.name = "Sides";
//     this.price = 1.75;
//     //macaroni, coleslaw, spinach, corn, etc...
//   }
// }

// class Drink {
//   constructor() {
//     this.name = "Drink";
//     this.price = 1.75;
//   }
// }
