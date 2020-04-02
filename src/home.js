import React from "react";

import { UserConsumer } from "./userContext";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <UserConsumer>
        {name => {
          return <p>{name}</p>;
        }}
      </UserConsumer>
    );
  }
}

export default Home;
