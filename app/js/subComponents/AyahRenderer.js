import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import Ayah from "../helpers/Ayah";

export default class AyahRenderer extends Component {
  static propTypes = {
    curAyah: PropTypes.instanceOf(Ayah).isRequired,
    onPresses: PropTypes.instanceOf(Map).isRequired,
    onLongPresses: PropTypes.instanceOf(Map).isRequired,
  };
  constructor(props) {
    super(props);
  }
  render() {
    var ayahNum =
      this.props.curAyah.getType() == "Ayah"
        ? " (" + this.props.curAyah.index + ") "
        : "";
    var ayahText = this.props.curAyah.text + ayahNum;
    const { lastAyah } = this.props;
    return (
      <Text
        style={[styles.ayahStyle, lastAyah ? styles.lastAyahStyle : {}]}
        onPress={() => this.props.onPresses.get("ayah")(this.props.curAyah)}
        onLongPress={() =>
          this.props.onLongPresses.get("ayah")(this.props.curAyah)
        }
      >
        {ayahText}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  ayahStyle: {
    fontSize: 23,
    padding: 2,
  },
  lastAyahStyle: {
    color: "blue",
    textAlign: "right",
  },
});
