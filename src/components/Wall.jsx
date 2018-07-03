import React, { Component } from "react";
import WallTable from './WallTable';
import WallForm from './WallForm';

class Wall extends Component {
  render() {
    return (
      <div className="Wall">
        <WallForm />
        <WallTable />
      </div>
    )
  }
}

export default Wall;