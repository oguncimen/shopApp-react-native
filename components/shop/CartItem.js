import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text  style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <View>
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons  name="md-trash" size={23} color="red"></Ionicons>
          </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 14,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sans",
    color: "#888",
    fontSize: 16,
  },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 13,
  
  },
  amount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft:4
  },
  deleteButton: {
    marginLeft: 20,
  },
});
export default CartItem;
