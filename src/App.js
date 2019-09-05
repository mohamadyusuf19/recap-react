import React, { Component } from "react";
import List from "./container/List";
import Form from "./container/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          email: "yusuf@gmail.com"
        },
        {
          email: "frontend@gmail.com"
        },
        {
          email: "react@gmail.com"
        }
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, data } = this.state;
    if (email === undefined || email === "") {
      alert("Email kosong");
    } else {
      data.push({ email });
      this.setState({
        data,
        email: ""
      });
    }
  }

  render() {
    const { email } = this.state;
    return (
      <>
        <List data={this.state.data} />
        <Form
          onChange={this.onChangeText}
          value={email}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}
