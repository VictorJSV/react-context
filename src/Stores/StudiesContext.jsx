import * as React from "react";

const StudiesContext = React.createContext({});

export class StudiesProvider extends React.Component {
  // Aqui si necesita el constructor
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      reducers: {
        addItem: this.addItem,
        editItem: this.editItem,
        deleteItem: this.deleteItem
      }
    };
  }

  addItem = study => {
    const data = [...this.state.data];
    data.concat([study]);
    this.setState({ data: data.concat([study]) });
  };

  editItem = study => {
    const data = [...this.state.data];
    const newValues = data.map(item => {
      if (item.id === study.id) {
        return study;
      }
      return item;
    });
    this.setState({ data: newValues });
  };

  deleteItem = id => {
    const data = [...this.state.data];
    const newValues = data.filter(item => {
      return item.id !== id;
    });
    this.setState({ data: newValues });
  };

  render() {
    return (
      <StudiesContext.Provider value={this.state}>
        {this.props.children}
      </StudiesContext.Provider>
    );
  }
}

export function withStudiesContext(Component) {
  return function StudiesContextComponent(props) {
    return (
      <StudiesContext.Consumer>
        {store => <Component {...props} store={store} />}
      </StudiesContext.Consumer>
    );
  };
}
