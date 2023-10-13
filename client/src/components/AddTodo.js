import React, { useState } from 'react';
import '../styles/AddTodo.scss';

export default function AddTodo({ addItem, length }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    // input 초기화
    setTodoItem({ title: '' });
  };

  return (
    <div className="addTodoDiv">
      <div className="cmt">오늘은 뭘 하지?</div>
      <input
        type="text"
        placeholder="Add your new todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>ADD</button>
      <p>{length}개의 할 일이 있어요~🐱‍🐉 </p>
    </div>
  );
}
