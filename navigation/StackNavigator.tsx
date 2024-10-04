import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import { RootStackParamList } from "./types";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";

const Stack = createStackNavigator<RootStackParamList>();
export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name="Login" component={Login} options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
                <Stack.Screen name="Sign Up" component={SignUp} options={{ title: "Đăng Ký" }} />
                <Stack.Screen name="Home" component={Home} options={{ title: "Trang Chủ" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}