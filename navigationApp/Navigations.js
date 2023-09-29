import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={Feed} />
      <HomeStack.Screen name="TweetDetailScreen" component={TweetDetailScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp";
          } else if (route.name === "Notifications") {
            iconName = focused ? "ios-notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackGroup} options={{headerShown:false}} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

const Navigations = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};

export default Navigations;
