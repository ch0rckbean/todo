import React from 'react';

export default function Todo({ item, deleteItem }) {
  //   console.log(item);
  const { id, title, done } = item;

  const onDeleteBtnClick = () => {
    console.log(done);
    if (done) {
      deleteItem(id);
    } else {
      console.log('unchecked');
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
}
