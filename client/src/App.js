import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

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

  return (
    <div className="App">
      {/* todoItems 반복, props(todo 객체)로 자식 컴포넌트에 데이터 전달 */}
      {todoItems.map((todoItems) => (
        <Todo key={todoItems.id} item={todoItems} />
      ))}
    </div>
  );
}

export default App;
