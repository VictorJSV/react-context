import * as React from "react";
import { StudiesContainer } from "./StudiesSection";
import { StudiesProvider } from "../Stores/StudiesContext";

export class Requirements extends React.Component {
  requirements = {
    studies: [
      { id: 1, name: "Victor", age: 28 },
      { id: 2, name: "Foo", age: 18 },
      { id: 3, name: "Bar", age: 32 }
    ]
  };
  render() {
    return (
      <div>
        <StudiesProvider data={this.requirements.studies}>
          <StudiesContainer />
        </StudiesProvider>
      </div>
    );
  }
}
