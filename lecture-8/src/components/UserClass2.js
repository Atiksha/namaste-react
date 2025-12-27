import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child component Did Mount");
    //Api call
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        {/* never update state variable directly */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2 : {count2}</h1>
        <h2>Name : {name}</h2>
        <h3> Location : {location}</h3>
        <h4>Contact: 9999888877</h4>
      </div>
    );
  }
}

export default UserClass2;
