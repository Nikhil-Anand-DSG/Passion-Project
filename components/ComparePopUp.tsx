import React from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

class ComparePopUpProps {
  playerStats1: any;
  playerStats2: any;
  modalVisible: any;
  setModalVisible: any;
  playerImg1: any;
  playerImg2: any;
}

const ComparePopUp: React.FC<ComparePopUpProps> = ({
  playerStats1,
  playerStats2,
  modalVisible,
  setModalVisible,
  playerImg1,
  playerImg2,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={{ uri: playerImg1 }} style={styles.image} />
          <Text style={styles.modalText}>{playerStats1}</Text>
        </View>
        <View style={styles.modalView}>
          <Image source={{ uri: playerImg2 }} style={styles.image} />
          <Text style={styles.modalText}>{playerStats2}</Text>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
    </Modal>
  );
};

export default ComparePopUp;

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
    minHeight: 180,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flexDirection: "column",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    elevation: 2,
    width: "30%",
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});