import Head from 'next/head';
import { useState, useCallback } from 'react';

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const exit = useCallback(() => {
    // アプリケーションの終了
    // クライアントサイドでのみ実行可能
    if (process.browser) {
      const cloud = new Cloud();
      cloud.exit();
    }
  }, [process.browser]);

  const addTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo('');
  };

  return (
    <>
      <Head>
        <title>ToDoList</title>
        <script src="https://puter.com/cloud.js"></script>
      </Head>

      <main>
        <h1>ToDoList</h1>
        <div>
          <button onClick={() => exit()}>終了</button>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={addTodo}>登録</button>
        </div>
        <ul>
          {todoList.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
