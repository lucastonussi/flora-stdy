import React, {Component} from "react";
import PropTypes from "prop-types";
import Topbar from "components/Topbar";

export class Dark extends Component {
  render() {
    return (
      <div className="App">
        <Topbar></Topbar>
        <div className="App-header">
          <header>
            {this.props.header}
          </header>
        </div>
        <div className="App-body">
          <main>
            {this.props.body}
          </main>
        </div>
      </div>
    );
  }
}

Dark.propTypes = {
  header: PropTypes.element,
  body: PropTypes.element
};

Dark.defaultProps = {
  header: <></>,
  body: <></>
};
