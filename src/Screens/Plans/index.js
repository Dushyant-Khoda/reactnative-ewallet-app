import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import styled, { useTheme } from "styled-components";
import { McText, McImage } from "../../Components";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import { Images } from "../../Constants";
const Plans = ({ animatedStyle, navigation }) => {
  const [state, setState] = React.useState();
  var radio_props = [
    { label: "Weekly ($4.99)", value: 0 },
    { label: "Monthly  ($9.99)", value: 1 },
    { label: "Yearly  ($99.99)", value: 2 },
  ];
  var radio_props_pro = [
    { label: "Weekly ($9.99)", value: 0 },
    { label: "Monthly  ($14.99)", value: 1 },
    { label: "Yearly  ($129.99)", value: 2 },
  ];
  const theme = useTheme();
  return (
    <Animated.View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: theme.colors.background,
        ...animatedStyle,
      }}
    >
      <HeaderSection>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <McImage source={Images.close} style={{ marginTop: 50 }} />
        </View>
      </HeaderSection>
      <HeaderSection
        style={{
          marginTop: 20,
          backgroundColor: theme.colors.boxBackground,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <McImage
            source={Images.printer}
            style={{
              height: 100,
              width: 100,
              marginTop: 20,
              marginLeft: 40,
              marginBottom: 20,
            }}
          />
          <McText
            secondary
            bold
            size={20}
            color={theme.colors.text1}
            style={{ alignSelf: "center", marginLeft: 40, marginBottom: 10 }}
          >
            Happy Faxing.
          </McText>
          <McText
            secondary
            size={12}
            color={theme.colors.text1}
            style={{ alignSelf: "center", marginLeft: 40, marginBottom: 10 }}
          >
            Send unlimited faxes to 100+ different countries
          </McText>
        </View>
      </HeaderSection>

      {/* <RadioForm
        radio_props={radio_props}
        initial={0}
        buttonColor={"#27ae60"}
        labelColor={"#27ae60"}
        onPress={(value) => {
          setState({ value: value });
        }}
      /> */}
      <HeaderSection>
        <View style={{ marginTop: 20 }}>
          <McText secondary bold size={20} color={theme.colors.text1}>
            Standard
          </McText>
          <View
            style={{
              borderWidth: 2,
              borderBottom: 1,
              width: 330,
              marginTop: 10,
              marginBottom: 10,
              borderColor: theme.colors.boxBackground,
            }}
          ></View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 10 }}>
        <View>
          <View>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={"#50C900"}
              labelColor={"#000"}
              buttonSize={15}
              buttonOuterSize={24}
              onPress={(value) => {
                setState({ value: value });
              }}
            />
            <McText
              size={12}
              style={{
                padding: 5,
                backgroundColor: theme.colors.primary,
                width: 120,
                height: 25,
                margin: 4,
                borderRadius: 20,
              }}
            >
              17% Off($8.33/mon)
            </McText>
          </View>
        </View>
      </HeaderSection>
      <HeaderSection>
        <View style={{ marginTop: 20 }}>
          <McText secondary bold size={20} color={theme.colors.text1}>
            Pro
          </McText>
          <View
            style={{
              borderWidth: 2,
              borderBottom: 1,
              width: 330,
              marginTop: 10,
              marginBottom: 10,
              borderColor: theme.colors.boxBackground,
            }}
          ></View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 10 }}>
        <View>
          <View>
            <RadioForm
              radio_props={radio_props_pro}
              initial={0}
              buttonColor={"#50C900"}
              labelColor={"#000"}
              buttonSize={15}
              buttonOuterSize={24}
              onPress={(value) => {
                setState({ value: value });
              }}
            />
            <McText
              size={12}
              style={{
                padding: 5,
                backgroundColor: theme.colors.primary,
                width: 120,
                height: 25,
                margin: 4,
                borderRadius: 20,
              }}
            >
              17% Off($8.33/mon)
            </McText>
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 10 }}>
        <View>
          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Customplan");
              }}
            >
              <McText
                size={14}
                style={{ alignSelf: "center", color: "#3498db" }}
              >
                Compare Plans
              </McText>
            </TouchableOpacity>
            <McText size={12}>No#1 & cheapest fax from phone services!</McText>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              height: 40,
              width: 330,
              borderRadius: 10,
              backgroundColor: theme.colors.primary,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <McText semi size={16} color="#212338">
              Continue
            </McText>
            <McImage
              source={Images.right_arrow}
              style={{ marginLeft: 8 }}
            ></McImage>
          </TouchableOpacity>
          <View style={{ alignSelf: "center" }}>
            <McText size={10} color="#3498db">
              Terms of Use | Privacy | Restore
            </McText>
          </View>
        </View>
      </HeaderSection>
    </Animated.View>
  );
};

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Plans;
