import * as React from "react";

export class Section extends React.Component {
  render() {
    const { children, data, title, newItem } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {data.map((item, index) => {
          return children(item, index);
        })}
        {newItem}
      </div>
    );
  }
}
