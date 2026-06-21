import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

  const { name, location } = props;
  return (
    <div className="user-card">
        <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: saikiajoysankar@gmail.com</h4>
    </div>
  );
};

export default User;
