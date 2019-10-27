import React, { Component } from "react";
import Calculator from "../../Calculator/Calculator";

class Seat extends Component {
  render() {
    return <div class='seat-displays'>Seat {this.props.id} </div>;
  }
}

export default Seat;

//******************************************************************************************************

//move this entire method to the Seat class
// passDataToUserLog(id) {
//   let calc1 = new Calculator();
//   this.selectedProd = document.getElementById(id);
//   this.display = "";
//   //creates a menu item and puts it in a product display object
//   switch (id) {
//     case "addMeBtn1":
//       this.selectedProd = new Burger();
//       this.display = new ProductDisplay(this.selectedProd);
//       break;
//     case "addMeBtn2":
//       this.selectedProd = new Fries();
//       this.display = new ProductDisplay(this.selectedProd);
//       break;
//     case "addMeBtn3":
//       this.selectedProd = new Milkshake();
//       this.display = new ProductDisplay(this.selectedProd);
//       break;
//     case "addMeBtn4":
//       this.selectedProd = new Chicken();
//       this.display = new ProductDisplay(this.selectedProd);
//       break;
//   }
//   //creates an array of product displays and shows the content of the product displays in the userLog view
//   this.myArrProducts.push(this.display);
//   //console.log(this.myArrProducts);
//   this.viewBuilder = this.myArrProducts;
//   userLog1.itemTally(productBox.viewBuilder);
//   //console.log(userLog.itemTally(productBox.viewBuilder));
//   document.getElementById("logInfo").innerHTML =
//     "<p>Wow Hon... you real hungry ain't you?" +
//     "<br />" +
//     "<br />" +
//     " You fittin to smash: " +
//     "<br />" +
//     "<br />" +
//     //Note to self: 9/2/2019
//     //Put this method in the Userlog class, but call it here through the Seat instance
//     //table0.seatArray.seat.userLog.blahblahblah
//     userLog1.itemList.map(item => {
//       calc1.addition(item.menuItem);
//       //creates a div for each menu item that shows name and price
//       let itemView = document.createElement("div");
//       itemView.id = "itemView";
//       itemView.innerText = item.menuItem.name + "   " + item.menuItem.price;
//       return itemView.innerText;
//     }) +
//     "<br /> " +
//     "<br /> " +
//     " Your total will be: " +
//     calc1.total +
//     "<br /> " +
//     "<br /> " +
//     "<br /> " +
//     "<button class='sendOrderBtn' onclick='productBox.createOrder()'>Send Order</button>" +
//     "<br /> " +
//     "<br /> " +
//     "See you soon you wacky next-door neighbor dude!!!";
//   ("</p>");

//   //clear the viewBuilder
//   //this.viewBuilder = [];
//   return this.viewBuilder;
// }
