import React, { useState } from 'react';
import '../styles/Todo.scss';

export default function Todo({ item, deleteItem, updateItem }) {
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
      updateItem(todoItem); //내용 수정이 끝난 상태임
    }
  };

  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      ...rest,
      done: e.target.checked,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem); // 체크박스 변경 시 저장
  };

  return (
    <div className="todoDiv">
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
        className="chkInput"
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
        className="todoInput"
      />
      <button onClick={onDeleteBtnClick}>DEL</button>
    </div>
  );
}
