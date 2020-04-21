import React from "react";

const HomePage = (props) => {
  return (
    <div class="home-page">
      <h1>Welcome {`${props.username}`} to the most beautiful site</h1>
    </div>
  );
};

export default HomePage;
