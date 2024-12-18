import {useEffect, useState} from 'react';

export const useTodosLogic = () => {
  const [todoList, setTodoList] = useState([]);
  const [data, setData] = useState({
    id: null,
    todo: '',
    completed: false,
    userId: null,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const getAPI = async () => {
      const respone = await fetch('https://dummyjson.com/todos/random/5');
      const jsRespone = await respone.json();
      setTodoList(jsRespone);
    };
    getAPI();
  }, []);

  const createItem = async item => {
    try {
      const respone = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          todo: data.todo,
          completed: false,
          userId: data.userId,
        }),
      });
      const jsRespone = await respone.json();
      setTodoList([...todoList, jsRespone]);
      setIsModalVisible(false);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const deleteItem = async item => {
    try {
      await fetch(`https://dummyjson.com/todos/${item.id}`, {
        method: 'DELETE',
      });

      const updateList = todoList.filter(todo => todo.id !== item.id);
      setTodoList(updateList);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const checkItem = async item => {
    try {
      const respone = await fetch(`https://dummyjson.com/todos/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: item.completed ? false : true,
        }),
      });
      const updateItem = await respone.json();
      const updateList = todoList.map(todo =>
        todo.id === item.id ? updateItem : todo,
      );
      console.log('completeeddede:', item.completed);
      setTodoList(updateList);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return {
    data,
    setData,
    todoList,
    setTodoList,
    isModalVisible,
    setIsModalVisible,
    createItem,
    deleteItem,
    checkItem,
  };
};
