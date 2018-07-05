import * as React from "react";

export class StudiesHeader extends React.Component {
  onDelete = event => {
    this.props.deleteItem(this.props.item.id);
  };

  render() {
    const { item, index, changeView } = this.props;
    return (
      <div
        style={{
          background: "#DDD",
          borderTop: "1px solid #000"
        }}
      >
        {item.name}
        <button onClick={changeView}>Editar</button>
        <button onClick={this.onDelete}>Eliminar</button>
      </div>
    );
  }
}
