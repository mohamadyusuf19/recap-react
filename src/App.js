import React, { Component } from "react";
import { isEmpty } from 'lodash';
import List from "./container/List";
import Form from "./container/Form";
import { getData, postData } from "./services/crud";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      data: []
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    return getData()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    if (isEmpty(email)) {
      alert("Email kosong");
    } else {
      alert("Email ada");
      // return postData(email)
      //   .then(() => {
      //     this.setState({ email: "" });
      //     this.fetchData();
      //   })
      //   .catch(err => console.log(err));
    }
  }

  render() {
    const { email } = this.state;
    return (
      <>
        <List data={this.state.data} />
        <Form
          onChange={this.onChangeText}
          // value={email}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}
