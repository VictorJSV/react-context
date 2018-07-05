import * as React from "react";

export class SectionNew extends React.Component {
  myNameRef = React.createRef();
  myAgeRef = React.createRef();

  onNew = event => {
    this.props.addItem({
      id: null,
      name: this.myNameRef.current.value,
      age: parseInt(this.myAgeRef.current.value, 10)
    });

    this.myNameRef.current.value = "";
    this.myAgeRef.current.value = "";
  };

  render() {
    const { item, index, changeView } = this.props;
    return (
      <div style={{ border: "2px solid skyblue" }}>
        <h3>Nuevo item: </h3>
        <form>
          <div>
            <label>Nombre: </label>
            <input ref={this.myNameRef} type="text" />
          </div>
          <div>
            <label>Edad: </label>
            <input ref={this.myAgeRef} type="text" />
          </div>
          <button type="button" onClick={this.onNew}>
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
