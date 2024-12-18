import React from 'react';
import {useTodosLogic} from './Components.logic';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import TodosComponent from './TodosComponent';
import ModalAddItem from './AddTodo';

const App = () => {
  const {
    data,
    setData,
    todoList,
    isModalVisible,
    setIsModalVisible,
    createItem,
    deleteItem,
    checkItem,
  } = useTodosLogic();

  const OpenModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.completed ? '#73da7f' : '#d4d4d4';
    return (
      <TodosComponent
        item={item}
        handleCheck={() => checkItem(item)}
        handleDelete={() => deleteItem(item)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.list} data={todoList} renderItem={renderItem} />
      <Pressable style={styles.addIcon} onPress={OpenModal}>
        <Image style={styles.imageIcon} source={require('../icon/plus.png')} />
      </Pressable>
      <ModalAddItem
        data={data}
        setData={setData}
        createItem={createItem}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  addIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#2196f3',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
  imageIcon: {
    height: 45,
    width: 45,
  },
  list: {flex: 1, paddingTop: 10},
});

export default App;
