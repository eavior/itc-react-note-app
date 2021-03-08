// JUST FOR INSPIRATION

import React from "react";
import ChildBlock from "./ChildBlock";

class MainBlock extends React.Component {
  constructor(props) {
    super(props);
    this.shouldReturnAorB = this.shouldReturnAorB.bind(this);
    this.printName = this.printName.bind(this);
  }

  shouldReturnAorB() {
    if (this.props.name) {
      return <h1> Hello {this.props.name} </h1>;
    } else return <h1> Hello World </h1>;
  }

  printName(time) {
    if (this.props.name) {
      console.log(`The name is: ${this.props.name} and the time is ${time}`);
    } else console.log("No name");
      console.log(time)
  }

  render() {
    // return <>{this.shouldReturnAorB()}</>;
    return (
      <>
        {this.shouldReturnAorB()}
        <ChildBlock runSomeParentMethod={this.printName} />
      </>
    );
  }
}

export default MainBlock;