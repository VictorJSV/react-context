import * as React from "react";

export class SectionItem extends React.Component {
  state = {
    show: false
  };

  changeView = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { body, header } = this.props;
    return (
      <div style={{ marginBottom: "10px" }}>
        {header(this.changeView)}
        {this.state.show && body(this.changeView)}
      </div>
    );
  }
}
