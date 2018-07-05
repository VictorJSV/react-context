import * as React from "react";
import { Section } from "../Components/Section";
import { SectionItem } from "../Components/SectionItem";
import { SectionNew } from "../Components/SectionNew";
import { StudiesBody } from "./StudiesBody";
import { StudiesHeader } from "./StudiesHeader";
import { withStudiesContext } from "../Stores/StudiesContext";

export class StudiesSection extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <Section
          title="Estudios"
          data={store.data}
          newItem={<SectionNew addItem={store.reducers.addItem} />}
        >
          {(item, index) => {
            return (
              <SectionItem
                key={index}
                header={changeView => (
                  <StudiesHeader
                    item={item}
                    index={index}
                    changeView={changeView}
                    deleteItem={store.reducers.deleteItem}
                  />
                )}
                body={changeView => (
                  <StudiesBody
                    item={item}
                    index={index}
                    changeView={changeView}
                    editItem={store.reducers.editItem}
                  />
                )}
              />
            );
          }}
        </Section>
        <pre>{JSON.stringify(store)}</pre>
      </div>
    );
  }
}

export const StudiesContainer = withStudiesContext(StudiesSection);
