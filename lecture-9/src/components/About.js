import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component Did Mount");
  }

  componentDidUpdate() {
    console.log("Parent Component Did Update");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namste React Web Series</h2>
        <UserClass name={"First (class Component)"} location={"Dehradun"} />
      </div>
    );
  }
}

export default About;
