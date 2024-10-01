import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

type LoginNavitionProp = StackNavigationProp<RootStackParamList, 'Sign Up'>
export default function SignUp() {
    const navigation = useNavigation<LoginNavitionProp>();
    const handleSignUp = () => {
        navigation.navigate('Login');
    }
    return(
        <View>
            <Text>Sign Up</Text>
            <Button title="Chuyen den login" onPress={handleSignUp}/>
        </View>
    )
}