import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Seat from "./Seat/Seat";

class Seats extends Component {
  state = {
    seatArray: [
      { seatId: 1 },
      { seatId: 2 },
      { seatId: 3 },
      { seatId: 4 },
      { seatId: 5 }
    ]
  };
  render() {
    return (
      <Auxiliary>
        <div class='section4'>
          <div>Seats Section</div>
          <Seat id={this.state.seatArray[0].seatId} />
          <Seat id={this.state.seatArray[1].seatId} />
          <Seat id={this.state.seatArray[2].seatId} />
          <Seat id={this.state.seatArray[3].seatId} />
          <Seat id={this.state.seatArray[4].seatId} />
        </div>{" "}
      </Auxiliary>
    );
  }
}

export default Seats;

//--------------------------------------------------------------------

// class Seat {
//   constructor(seatId, orderArray, userLog) {
//     this.seatId = seatId; //the id of the user's seat
//     this.orderArray = orderArray; //an array of orders associated with the Seat instance
//     this.userLog = userLog; //the userLog instance associated with a seat
//   }
// }

// let seat1 = new Seat(1, [order1], userLog1);
// let seat2 = new Seat(2, [order2, order5], userLog2);
// let seat3 = new Seat(3, [order5, order1], userLog3);
// let seat4 = new Seat(4, [order4, order1, order4], userLog4);
// let seat5 = new Seat(5, [order3, order4], userLog5);

// let seatArray = [seat1, seat2, seat3, seat4, seat5];
