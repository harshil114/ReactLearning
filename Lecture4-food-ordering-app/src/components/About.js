import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>A swiggy App</h2>
      <User name={"Harshil Vispute (function)"} />
      <UserClass
        name={"Harshil Vispute (Class)"}
        location={"Ahmedabad (class)"}
        twitter={"@harshilvispute (class)"}
      />
    </div>
  );
};
export default About;
