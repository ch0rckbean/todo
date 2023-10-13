import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST); // http://localhost:8000/api
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  // todoItems 상태에 새로운 Todo 추가
  const addItem = async (newItem) => {
    // console.log(newItem);

    // //newItem id 키 값, newItem done 키 값 추가
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;

    // // todoItems 배열에 newItem 추가
    // setTodoItems([...todoItems, newItem]);
    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    );
    setTodoItems([...todoItems, res.data]);
    // console.log(res);
  };

  // DELETE /api/todo/:todoId
  const deleteItem = async (targetItem) => {
    // DB에서 삭제
    await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`
    );
    // 프론트에서 삭제
    const newTodoItems = todoItems.filter((item) => item.id != targetItem.id);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} length={todoItems.length} />
      {/* todoItems 반복, props(todo 객체)로 자식 컴포넌트에 데이터 전달 */}
      {todoItems.map((todoItems, idx) => (
        <Todo
          key={idx}
          item={todoItems}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
}

export default App;
