import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';

const TodosComponent = ({item, handleCheck, handleDelete, backgroundColor}) => {
  return (
    <TouchableOpacity style={[styles.item, {backgroundColor}]}>
      <View style={styles.viewBase}>
        <Text style={styles.text}>ID: {item.id}</Text>
        <Text style={styles.text}>Todo: {item.todo}</Text>
        <Text style={styles.text}>UserID: {item.userId}</Text>
      </View>
      <View style={styles.viewPress}>
        <Pressable onPress={handleCheck}>
          <Image
            style={styles.imageIcon}
            source={require('../icon/checked.png')}
          />
        </Pressable>
        <Pressable onPress={handleDelete}>
          <Image
            style={styles.imageIcon}
            source={require('../icon/delete.png')}
          />
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewBase: {
    justifyContent: 'center',
    width: '80%',
  },
  viewPress: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#d4d4d4d4',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {fontSize: 16, fontWeight: 400},
  imageIcon: {width: 25, height: 25},
});
export default TodosComponent;
