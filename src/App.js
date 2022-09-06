import React from "react";
import "./App.css";
import { BoxLayout } from "./component/BoxLayout";
import { ListWrapper } from "./component/ListBox/ListWrapper";

// local storage
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

function App() {
  const [items, setItems] = React.useState([
    {
      title: "AMir",
      taskDone: false,
    },
  ]);
  const [text, setText] = React.useState();

  const addItemHandler = () => {
    if (text) {
      setItems([
        ...items,
        {
          title: text,
          taskDone: false,
        },
      ]);
      localStorage.setItem(
        "fatimaApp",
        JSON.stringify([
          ...items,
          {
            title: text,
            taskDone: false,
          },
        ]),
      );
      setText("");
    }
  };

  React.useEffect(() => {
    const persistedValue = localStorage.getItem("fatimaApp");

    if (persistedValue !== null) {
      setItems(JSON.parse(persistedValue));
    }
  }, []);

  const removeItemHandler = targetIndex => {
    let modifiedItems = items.filter((value, index) => index !== targetIndex);
    localStorage.setItem("fatimaApp", JSON.stringify(modifiedItems));
    setItems(modifiedItems);
  };

  const updateTaskDoneState = targetIndex => {
    let findItems = items.map((value, index) => {
      let taskDoneModfied = value.taskDone;
      if (index === targetIndex) {
        taskDoneModfied = !taskDoneModfied;
      }
      return {
        ...value,
        taskDone: taskDoneModfied,
      };
    });
    localStorage.setItem("fatimaApp", JSON.stringify(findItems));
    setItems(findItems);
  };

  return (
    <BoxLayout headerTitle="Todo Title">
      <input
        value={text}
        onChange={e => {
          const { value } = e.target;
          setText(value);
        }}
      />
      <button onClick={addItemHandler}>Add Item</button>
      <ListWrapper
        items={items}
        removeItemHandler={removeItemHandler}
        updateTaskDoneState={updateTaskDoneState}
      />
    </BoxLayout>
  );
}

export default App;
