import React from "react";

function Home(props) {
  const user = props.user;
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {user.name} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}

export default Home;
