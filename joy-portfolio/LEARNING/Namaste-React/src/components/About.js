import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Joysankar Saikia (Fn)"}
        location={"Narayanpur (Fn)"}/>
      <UserClass
        name={"Joysankar Saikia (class)"}
        location={"Narayanpur (class)"}
      />
    </div>
  );
};

export default About;
