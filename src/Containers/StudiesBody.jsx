import * as React from "react";

export class StudiesBody extends React.Component {
  myNameRef = React.createRef();
  myAgeRef = React.createRef();

  onEdit = event => {
    this.props.editItem({
      id: this.props.item.id,
      name: this.myNameRef.current.value,
      age: parseInt(this.myAgeRef.current.value, 10)
    });
    this.props.changeView();
  };

  render() {
    const { item, index } = this.props;
    return (
      <div style={{ border: "2px solid skyblue" }}>
        <h3>{item.name}</h3>
        <form>
          <div>
            <label>Nombre: </label>
            <input ref={this.myNameRef} type="text" defaultValue={item.name} />
          </div>
          <div>
            <label>Edad: </label>
            <input ref={this.myAgeRef} type="text" defaultValue={item.age} />
          </div>
          <button type="button" onClick={this.onEdit}>
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
