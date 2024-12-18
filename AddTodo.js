import React from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

const ModalAddItem = ({
  data,
  setData,
  createItem,
  isModalVisible,
  setIsModalVisible,
}) => {
  const onChangeTodo = todo => {
    setData({id: data.id, todo: todo, userId: data.userId});
  };
  const onChangeUserId = userId => {
    setData({id: data.id, todo: data.todo, userId: userId});
  };
  const onPressClose = () => {
    setIsModalVisible(false);
    setData({
      todo: '',
      userId: '',
    });
  };

  return (
    <Modal animationType="fade" transparent visible={isModalVisible}>
      <View style={styles.viewCenter}>
        <View style={styles.viewModal}>
          <View style={styles.header}>
            <Text style={styles.text}>new Todo: </Text>
            <Pressable onPress={onPressClose}>
              <Image
                style={styles.imageIcon}
                source={require('../icon/close.png')}
              />
            </Pressable>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeTodo}
            placeholder="enter todo"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeUserId}
            placeholder="enter userId"
          />
          <TouchableOpacity style={styles.viewButtonAdd} onPress={createItem}>
            <Text style={styles.button}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
  },
  viewModal: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  textInput: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
    marginHorizontal: 12,
    marginVertical: 12,
    padding: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  viewButtonAdd: {
    width: '50%',
    marginHorizontal: '25%',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#0766ff',
    borderRadius: 10,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageIcon: {
    width: 30,
    height: 30,
  },
  errText: {
    color: 'red',
  },
});

export default ModalAddItem;
