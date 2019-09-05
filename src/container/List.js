import React, { Component } from "react";
import List from "../components/List/List";

class ListContainer extends Component {
  render() {
    return (
      <>
        {this.props.data.map((item, index) => {
          return <List key={index} nomor={index + 1} email={item.email} />;
        })}
      </>
    );
  }
}

export default ListContainer;
