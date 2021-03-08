// JUST FOR INSPIRATION


import React from "react";

class ChildBlock extends React.Component {
  render() {
    return (
      <>
        <div>Hello, I'm the child Component</div>
        <button onClick={()=>this.props.runSomeParentMethod(Date.now())}>
          Run Parent Method
        </button>
      </>
    );
  }
}

export default ChildBlock;
