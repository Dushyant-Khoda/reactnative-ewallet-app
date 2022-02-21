import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components";
import { McText, McImage } from "../../Components";

const Profile = ({ animatedStyle }) => {
  const theme = useTheme();
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        ...animatedStyle,
      }}
    >
      <McText>Profile Screen</McText>
    </Animated.View>
  );
};

export default Profile;
