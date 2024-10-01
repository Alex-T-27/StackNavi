import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

type LoginNavitionProp = StackNavigationProp<RootStackParamList, 'Login'>
export default function Login() {
    const navigation = useNavigation<LoginNavitionProp>();
    const handleSignUp = () => {
        navigation.navigate('Sign Up');
    }
    return(
        <View>
            <Text>Login</Text>
            <Button title="Chuyen den sign up" onPress={handleSignUp}/>
        </View>
    )
}