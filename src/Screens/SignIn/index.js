import React from "react";
import { View, Text, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components";
import { McText, McImage } from "../../Components";
import { Images } from "../../Constants";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
function TodayData() {
  let today = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthday = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  let month = monthday[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();
  let data = `${month}.${date}.${year} | ${day}`;
  return data;
}
const SignIn = ({ animatedStyle }) => {
  const theme = useTheme();
  return (
    <View>
      <StatusBar hidden={true} />
      <View style={{ flexDirection: "row" }}>
        <McImage source={Images.color_bar} />
        <View
          style={{
            marginTop: 44,
            marginHorizontal: 26,
            marginBottom: 53,
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <McText medium size={24} color={theme.colors.text1}>
                {formatAMPM(new Date())}
              </McText>
              <McImage source={Images.cloud} style={{ marginLeft: 20 }} />
              <McText
                semi
                size={13}
                color={theme.colors.text1}
                style={{ marginLeft: 8 }}
              >
                34° C
              </McText>
            </View>
            <McText
              medium
              size={13}
              color={theme.colors.text3}
              style={{ marginTop: 8 }}
            >
              {TodayData()}
              {/* Jan.10.2022 | Wednesday */}
            </McText>
          </View>
          <View>
            <McImage source={Images.logo} />
            <McText
              secondary
              size={28}
              color={theme.colors.text1}
              style={{ marginTop: 5 }}
            >
              eWallet
            </McText>
            <View
              style={{ alignContent: "space-between", height: 110, width: 189 }}
            >
              <McText
                medium
                size={14}
                color={theme.colors.text3}
                style={{ marginTop: 16, lineHeight: 22 }}
              >
                Open An Account for Digital E-Wallet Solutions. Instant Payouts
              </McText>
              <McText
                medium
                size={14}
                color={theme.colors.text3}
                style={{ marginTop: 16 }}
              >
                Join For Free
              </McText>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 50,
                width: 190,
                borderRadius: 10,
                backgroundColor: theme.colors.primary,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <McText semi size={16} color="#212338">
                Sign in
              </McText>
              <McImage
                source={Images.right_arrow}
                style={{ marginLeft: 8 }}
              ></McImage>
            </View>
            <View>
              <McText>Create an account</McText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
