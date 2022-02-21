import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerMenu from "./DrawerMenu";
import {
  Home,
  Account,
  Help,
  Profile,
  Settings,
  Stats,
  Transaction,
  Plan,
  Customplan,
  SignIn,
} from "Screens";

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="Home"
      component={DrawerMenu}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Account"
      component={Account}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Stats"
      component={Stats}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Transaction"
      component={Transaction}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Plan"
      component={Plan}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Customplan"
      component={Customplan}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
