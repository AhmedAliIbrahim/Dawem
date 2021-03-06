import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
} from "react-native";
import SVGLoader from "../helpers/SVGLoader.js";
class ModalBadgeWeek {
  constructor(parent /* should have state.bShowModalBadgeWeek */) {
    this.parent = parent;
  }
  handlePress() {
    this.parent.setState({ bShowModalBadgeWeek: false });
    //console.log(this.parent);
  }
  getModal() {
    var svgLoader = new SVGLoader();
    var WeekBadge = svgLoader.getWeekBadge(false);
    var strStatus =
      this.parent.state.isBadgeWeek == false
        ? "You Still Did Not Activate This Badge. Finish all revisions in 7 days to light it up!"
        : "Great Job! You activated your Ultimate Dawem Badge.";
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.parent.state.bShowModalBadgeWeek}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.badge}>{WeekBadge}</View>
          <Text style={styles.motivationText}>
            This Badge Activates When You Finish All Revisions in 7 Days or
            Less.
            {"\n"}
            Make It a Habit and Visit All Your Revisions at Least Once a Week!
          </Text>
          <Text style={styles.statusText}>{strStatus}</Text>
          <TouchableHighlight
            onPress={this.handlePress.bind(this)}
            style={styles.touchable}
            underlayColor="#FFFFFF11"
          >
            <Text style={styles.buttonText}>Got it!</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
    marginTop: 110,
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFFd5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  badge: {
    width: 140,
    height: 140,
  },
  motivationText: {
    fontSize: 20,
    fontFamily: "sans-serif",
    textAlign: "center",
    fontWeight: "bold",
    color: "#232393",
    marginHorizontal: 10,
    borderBottomColor: "#939393",
    borderBottomWidth: 1,
  },
  statusText: {
    fontSize: 20,
    fontFamily: "sans-serif",
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#081133",
  },
  touchable: {
    height: 30,
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    width: "50%",
    alignSelf: "center",
    borderWidth: 1,

    borderColor: "#6B2504",
    backgroundColor: "#6B2504",
    fontSize: 20,
    fontFamily: "sans-serif",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default ModalBadgeWeek;
