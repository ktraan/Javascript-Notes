import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const history = useHistory();

  const [currentUsername, setCurrentUsername] = useState("");

  const onChangeHandler = (event) => {
    setCurrentUsername(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.setUsername(currentUsername);
    // This push the route to change the page programatically (redirects the page)
    history.push("/");
  };
  return (
    <div class="login-page">
      <form onSubmit={onSubmitHandler}>
        <label>Enter username</label>
        <input type="text" value={currentUsername} onChange={onChangeHandler} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
