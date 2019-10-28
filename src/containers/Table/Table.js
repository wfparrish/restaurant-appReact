import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Header from "../../components/Header/Header";
import Menu from "../../containers/Menu/Menu";
import Products from "../../containers/Products/Products";
import UserLog from "../../components/UserLog/UserLog";
import Seats from "../../containers/Seats/Seats";
import Order from "../../containers/Order/Order";
import classes from "./Table.module.css";

class Table extends Component {
  render() {
    return (
      <Auxiliary>
        <div className={classes.Display}>
          <Header></Header>
          <Menu></Menu>
          <Products></Products>
          <UserLog>
            <Order></Order>
          </UserLog>
          <Seats></Seats>
        </div>
      </Auxiliary>
    );
  }
}

export default Table;

//-------------------------------------------------------------------------------

// class Table {
//   constructor(tableId, party, seatArray, checkArray, orderArray, userLogArray) {
//     this.tableId = tableId;
//     this.party = party;
//     this.seatArray = seatArray; //the array of seats that are part of the Table instance
//     this.checkArray = checkArray; //the array of checks that are part of the Table instance
//     this.orderArray = orderArray; //the array of orders that were placed by party members
//     this.userLogArray = userLogArray; //the array of logs that are connected to seats
//   }
// }
// let table0 = new Table2(
//   1,
//   party1,
//   [seatArray],
//   [check1],
//   [orderArray],
//   [userLogArray]
// );
