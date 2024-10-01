import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import { RootStackParamList } from "./types";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator <RootStackParamList>();
export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Sign Up" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}