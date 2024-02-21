import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Scanned from "./pages/Scanned";
import Radar from "./assets/radar.svg";
import Message from "./assets/message.svg";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, BottomTabBarShowLabel: false }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => {
                return <Radar fill={color} width={38} height={38} />;
              },
            }}
          />
          <BottomTab.Screen
            name="Scanned"
            component={Scanned}
            options={{
              tabBarIcon: ({ color }) => {
                return <Message fill={color} width={38} height={38} />;
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
