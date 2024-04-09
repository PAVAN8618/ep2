import React from "react";
class Classabout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dummy",
      location: "delhi",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PAVAN8618");
    const json = await data.json();
    console.log(json);

    this.setState(json);
  }
  render() {
    const { name, location, avatar_url, bio } = this.state;

    return (
      <div className="about">
        <img src={avatar_url} className="about_img"></img>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <h3>{bio}</h3>
      </div>
    );
  }
}
export default Classabout;
