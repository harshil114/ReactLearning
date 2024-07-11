import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location, twitter } = this.props;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count2}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {twitter}</h4>
      </div>
    );
  }
}
export default UserClass;
