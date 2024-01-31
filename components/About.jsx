import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";
const About = () => {
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);

  const a = useContext(noteContext);
  return (
    <div>
      This is about section and name is {a.state.name} and class is{" "}
      {a.state.class}
    </div>
  );
};

export default About;
