import React from "react";
import { useHistory } from "react-router-dom";

const Information = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/information");
  };

  return <div onClick={handleClick}>Infromation</div>;
};

export default Information;