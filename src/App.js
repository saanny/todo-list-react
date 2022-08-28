import React from "react";
import "./App.css";
import { BoxLayout } from "./component/BoxLayout";
import { ListWrapper } from "./component/ListBox/ListWrapper";

// local storage
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const items = [
  {
    title: "AMir",
    check: false,
  },
  {
    title: "Fatmia do this task please",
  },
  {
    title: "Arkadi do this task please",
  },
];

function App() {
  return (
    <BoxLayout headerTitle="Todo Title">
      <ListWrapper items={items} />
    </BoxLayout>
  );
}

export default App;
