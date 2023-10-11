import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
  ]);

  // todoItems 상태에 새로운 Todo 추가
  const addItem = (newItem) => {
    console.log(newItem);

    //newItem id 키 값, newItem done 키 값 추가
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    // todoItems 배열에 newItem 추가
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props(todo 객체)로 자식 컴포넌트에 데이터 전달 */}
      {todoItems.map((todoItems) => (
        <Todo key={todoItems.id} item={todoItems} />
      ))}
    </div>
  );
}

export default App;
