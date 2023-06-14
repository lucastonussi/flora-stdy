import React from "react";
import { Dark } from "../layouts/Dark";
import Stats from "../components/Stats";

export class Home extends React.Component {
  render() {
    return (
      <Dark
        header={<h2>Learn more about plants and trees</h2>}
        body={<Stats></Stats>}>
      </Dark>
    );
  }
}
