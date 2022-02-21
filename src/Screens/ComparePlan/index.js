import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Animated from "react-native-reanimated";
import styled, { useTheme } from "styled-components";
import { McText, McImage } from "../../Components";
import { Images } from "../../Constants";

const Home = ({ animatedStyle }) => {
  const theme = useTheme();

  return (
    <Animated.View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: theme.colors.background,
        paddingTop: 44,
        ...animatedStyle,
      }}
    >
      {/* Header Section */}
      <HeaderSection>
        <View style={{ flexDirection: "column" }}>
          <McText
            bold
            secondary
            size={28}
            style={{ marginTop: 20 }}
            color={theme.colors.text1}
          >
            Compare Plans
          </McText>
          <McText style={{ marginLeft: 2, marginTop: 5 }}>
            Lorem ipsum dolor sit amet, consectetur lore adipiscing elit.
          </McText>
        </View>
      </HeaderSection>

      <HeaderSection>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row-reverse" }}>
            <McText
              secondary
              size={20}
              style={{ marginLeft: 20 }}
              color={theme.colors.text1}
            >
              Pro
            </McText>
            <McText
              secondary
              size={20}
              style={{ marginLeft: 20 }}
              color={theme.colors.text1}
            >
              Standard
            </McText>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderBottom: 1,
              width: 330,
              marginTop: 10,
              marginBottom: 10,
              borderColor: "#50C900",
            }}
          ></View>
        </View>
      </HeaderSection>

      <HeaderSection medium style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Send unlimited faxes
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Anytime, anywhere!
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 90 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
            />
            <McImage
              style={{ marginLeft: 40, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>

      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
            />
            <McImage
              style={{ marginLeft: 40, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>

      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>

      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
          </View>
        </View>
      </HeaderSection>
      <HeaderSection style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <McText medium style={{ marginTop: 10 }}>
              Direct fax line number
            </McText>
            <McText size={12} color={theme.colors.text3}>
              Receive & send faxes.
            </McText>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <McImage
              style={{ marginLeft: 10, marginTop: 15, tintColor: "#50C900" }}
            />
            <McImage
              style={{ marginLeft: 50, marginTop: 15, tintColor: "#50C900" }}
              source={Images.plus}
              // style={{ }}
            />
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

export default Home;
