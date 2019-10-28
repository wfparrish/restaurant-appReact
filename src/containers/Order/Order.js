import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import "../MenuItems/Burger/Burger";
import "../MenuItems/Fries/Fries";
import "../MenuItems/Milkshake/Milkshake";
import "../MenuItems/Chicken/Chicken";
import "../MenuItems/Sides/Sides";
import "../MenuItems/Drink/Drink";

class Order extends Component {
  state = {
    menuItems: [
      {
        name: "Burger",
        price: 3.89,
        temperature: "",
        cheese: false,
        tomato: false,
        lettuce: false,
        onion: false,
        ketchup: false,
        mustard: false,
        mayo: false,
        bacon: false,
        pickle: false
      },
      { name: "Chix", price: 3.59, style: "" },
      { name: "Drink", price: 1.75 },
      { name: "Fries", price: 0.99, size: "" },
      { name: "Milkshake", price: 2.99, size: "", flavor: "" },
      { name: "Sides", price: 1.75 }
    ]
  };

  myFirstReactBurger = this.state.menuItems[0];
  myFirstReactChicken = this.state.menuItems[1];

  //this.orderId = Order.incrementId();
  // orderId = orderId;
  // orderItems = orderItems;

  //**************************************************************************************************
  // chix0 = new Chicken((this.price = 3.59));
  // sides0 = new Sides((this.price = 1.75));
  // drink0 = new Drink((this.price = 1.75));
  // burger1 = new Burger((this.price = 3.89));
  // fries1 = new Fries((this.price = 0.99));
  // milkshake1 = new Milkshake((this.price = 2.99));

  incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    let orderId = this.latestId;
    return orderId;
  }

  render() {
    return (
      <Auxiliary>
        <p> We got some specials out this muthafucka!!!</p>
        <p>
          {this.myFirstReactBurger.name} {"$"}
          {this.myFirstReactBurger.price}
        </p>
        <p>
          {this.myFirstReactChicken.name} {"$"}
          {this.myFirstReactChicken.price}
        </p>
      </Auxiliary>
    );
  }
}

export default Order;

//---------------------------------------------

// //Current script for the application: Order creation testing

// //6 instances of desired Menu items instantiated
// let chix0 = new Chicken((this.price = 3.59));
// let sides0 = new Sides((this.price = 1.75));
// let drink0 = new Drink((this.price = 1.75));
// let burger1 = new Burger((this.price = 3.89));
// let fries1 = new Fries((this.price = 0.99));
// let milkshake1 = new Milkshake((this.price = 2.99));

// //initial message in UserLog created with variable values(zeroth Order)
// let initialVals = [chix0, sides0, drink0];
// let order0 = new order(0, initialVals);

// //Order objects created with an id and orderTally array. Imagine they are randomly generated orders used to test functionality of the application

// let orderTally1 = [burger1, fries1, milkshake1];
// let orderTally2 = [sides0, drink0];
// let orderTally3 = [chix0, fries1, drink0];
// let orderTally4 = [burger1, milkshake1];
// let orderTally5 = [drink0];

// let order1 = new Order(1, orderTally1);
// let order2 = new Order(2, orderTally2);
// let order3 = new Order(3, orderTally3);
// let order4 = new Order(4, orderTally4);
// let order5 = new Order(5, orderTally5);

// //Arbitrarily sized orderArray. Made of multiple randomly selected order objects
// let orderArray = [
//   order1,
//   order2,
//   order3,
//   order4,
//   order5,
//   order2,
//   order3,
//   order1
// ];
