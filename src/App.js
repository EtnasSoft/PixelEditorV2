import React from 'react';
import './App.css';

import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator,
  Spacer,
  View
} from "nice-react-layout";

function App() {
  return (
    <View>
    <VerticalLayout mockup className="layout">
      <Panel fixed fixedHeight={50}>Header</Panel>
      <Panel>
        <HorizontalLayout mockup>
          <Panel className="sidebar" proportion={1} sidebar customCss={{order: 1}}
            collapsible
            collapseButtonContent="<"
            collapseButtonCollapsedContent=">"
            collapseButtonStyle={{
              background: "white",
              border: "1px solid lightgray"
            }}>
            <p>Sidebar</p>
          </Panel>
          <Separator customCss={{order: 2}}/>
          <Panel proportion={4} customCss={{order: 3}}>
            <p>Main content</p>
          </Panel>
          <Separator customCss={{order: 4}}/>
          <Panel className="sidebar" proportion={1} customCss={{order: 5}} sidebar
            collapsible
            collapseButtonContent=">"
            collapseButtonCollapsedContent="<"
            collapseButtonStyle={{
              background: "white",
              border: "1px solid lightgray"
            }}>
            <VerticalLayout mockup>
              <Panel showSize customCss={{order: 1}}>Right 1</Panel>
              <Panel showSize customCss={{order: 3}}>Right 2</Panel>
              <Panel showSize customCss={{order: 5}}>Right 3</Panel>
            </VerticalLayout>
          </Panel>
        </HorizontalLayout>
      </Panel>
      <Panel fixed fixedHeight={50}>Footer</Panel>
    </VerticalLayout>
    </View>
  );
}

export default App;
