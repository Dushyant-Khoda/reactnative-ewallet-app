import React from "react";
import { View, Text, Switch } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components";
import { McText } from "../../Components";
import { useThemeContext } from "../../Themes";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Setting = ({ animatedStyle }) => {
  const theme = useTheme();
  const themeContext = useThemeContext(theme);

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
      <McText bold size={24} color={theme.colors.text1}>
        Setting Screen
      </McText>
      <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <McText
          medium
          size={18}
          style={{ marginRight: 10 }}
          color={theme.colors.text1}
        >
          Light
        </McText>
        <Switch
          value={themeContext.mode === "dark"}
          onValueChange={(value) => {
            themeContext.setMode(value ? "dark" : "light");
          }}
        ></Switch>
        <McText
          medium
          size={18}
          style={{ marginLeft: 10 }}
          color={theme.colors.text1}
        >
          Dark
        </McText>
      </View>
    </Animated.View>
  );
};

export default Setting;
