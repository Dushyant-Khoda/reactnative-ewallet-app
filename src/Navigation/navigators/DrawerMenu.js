import React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { McText, McImage } from "../../Components";
import { Images } from "../../Constants";
import { useTheme } from "styled-components/native";
import { Home } from "../../Screens";
import Animated from "react-native-reanimated";
const Drawer = createDrawerNavigator();
// todo: Menu
const MENU = [
  {
    name: "Home",
    label: "Home",
  },
  {
    name: "Profile",
    label: "Profile",
  },
  {
    name: "Accounts",
    label: "Accounts",
  },
  {
    name: "Transaction",
    label: "Transaction",
  },
  {
    name: "Stats",
    label: "Stats",
  },
  {
    name: "Setting",
    label: "Setting",
  },
  {
    name: "Help",
    label: "Help",
  },
];

const CustomDrawerContent = ({ navigation, theme }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          width: 210,
          height: 107,
          borderBottomEndRadius: 107 / 2,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: theme.colors.boxBackground,
              marginRight: 10,
            }}
          >
            <McImage source={Images.avatar1} />
          </View>
          <View>
            <McText semi size={16} color={theme.colors.text1}>
              Shiva Ganesha
            </McText>
            <McText semi size={10} color={theme.colors.text3}>
              Ahmedabad, India
            </McText>
          </View>
        </View>
      </View>
      {/* DrawerItems */}
      <DrawerContentScrollView
        scrollEnabled={true}
        contentContainerStyle={{}}
        styles={{ marginLeft: -32 }}
      >
        {MENU.map((menu, index) => {
          return (
            <DrawerItem
              activeTintColor={theme.colors.boxBackground}
              focused={activeIndex === index}
              key={index}
              label={({ focused }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 4,
                        height: 33,
                        marginRight: 16,
                        backgroundColor: focused
                          ? theme.colors.primary
                          : "transparent",
                      }}
                    ></View>
                    <McText size={16} bold={focused} color={theme.colors.text1}>
                      {menu.label}
                    </McText>
                  </View>
                );
              }}
            ></DrawerItem>
          );
        })}
      </DrawerContentScrollView>
      {/* Footer */}
      <View style={{ marginBottom: 27, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <McImage
            source={Images.logout}
            style={{ tintColor: theme.colors.text2, marginRight: 8 }}
          />
          <McText bold size={16} color={theme.colors.text2}>
            Logout
          </McText>
        </View>
        <View style={{ marginTop: 42 }}>
          <McText medium size={10} color={theme.colors.text2}>
            Version 2.0.1
          </McText>
        </View>
      </View>
    </View>
  );
};

const DrawerMenu = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  //   todo: here we do 3 animation
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 30],
  });
  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
  });

  //   const scale = Animated.interpolateNode(progress, {
  //     inputRange: [0, 1],
  //     outputRange: [1, 30],
  //   });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale, rotateZ: rotate }],
  };
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.boxBackground }}>
      <Drawer.Navigator
        hideStatusBar={true}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "60%",
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        initialRouteName="Home"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return (
            <CustomDrawerContent navigation={props.navigation} theme={theme} />
          );
        }}
      >
        <Drawer.Screen name="Home">
          {(props) => <Home {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerMenu;
