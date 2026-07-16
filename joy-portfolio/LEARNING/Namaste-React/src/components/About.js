import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  const {loggedInUser} = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <User name={"Joysankar Saikia (Fn)"}
        location={"Narayanpur (Fn)"}/>
      <UserClass
        name={"Joysankar Saikia (class)"}
        location={"Narayanpur (class)"}
      />
      <p className="text-xl ">{loggedInUser}</p>
    </div>
  );
};

export default About;
