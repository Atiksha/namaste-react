import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        location: "avatar_url",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child component Did Mount");
    //Api call
    const data = await fetch("https://api.github.com/users/atiksha");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // console.log(this.props.name + "Child Component Did Update");
    this.timer = setInterval(() => {
      console.log("NAMSTE REACT");
    }, 1000);
    console.log(this.props.name + "Child Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "Child Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3> Location : {location}</h3>
        <h4>Contact: 9999888877</h4>
      </div>
    );
  }
}

export default UserClass;
