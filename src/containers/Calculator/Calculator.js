const calculator = () => {
  this.total = 0;

  function addition(item) {
    return (this.total = this.total + item.price);
  }
  function subtraction(item) {
    return (this.total = this.total - item.price);
  }
  // static multiplication() {}
  // static division() {}
  return this;
};

export default calculator;

//------------------------------------------------------------------------------

// class Calculator {
//   constructor() {
//     this.total = 0;
//   }

//   addition(item) {
//     return (this.total = this.total + item.price);
//   }
//   subtraction(item) {
//     return (this.total = this.total - item.price);
//   }
//   // static multiplication() {}
//   // static division() {}
// }
