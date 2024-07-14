import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/harshil114");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="user_img" style={{ height: "190px" }} />

        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
      </div>
    );
  }
}
export default UserClass;
