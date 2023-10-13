import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
  //   console.log(item);
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = item;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };

  // title 클릭 시 readOnly false로 변경(수정 가능하도록)
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // title 수정
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    // console.log(rest);
    setTodoItem({
      ...rest,
      title: e.target.value,
    });
  };

  // Enter 키 누르면 readOnly true로 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  };

  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      ...rest,
      // done: !done,
      done: e.target.checked,
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
}
