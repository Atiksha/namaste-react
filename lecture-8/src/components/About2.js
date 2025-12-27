import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About2 extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namste React Web Series</h2>
        {/* <User name={"Akshay Saini (Function Component)"} /> */}

        <UserClass name={"First (class Component)"} location={"Dehradun"} />
        <UserClass name={"Second (class Component)"} location={"US"} />
      </div>
    );
  }
}

export default About2;

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namste React Web Series</h2>
//       {/* <User name={"Akshay Saini (Function Component)"} /> */}

//       <UserClass
//         name={"Akshay Saini (class Component)"}
//         location={"Dehradun"}
//       />
//     </div>
//   );
// };

// export default About2;
