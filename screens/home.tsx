import { useNavigation } from "@react-navigation/native";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";
import { color } from "@mui/system";

type LoginNavitionProp = StackNavigationProp<RootStackParamList, 'Home'>
export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View>
                <Text style={styles.Content}>Bonjour My Friend</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },
    title: {
        fontSize: 60,
        color: 'black',
        fontWeight: 'bold',
        
    },
    Content: {
        fontSize: 30,
        color: 'brown',
        fontWeight: 'heavy',
    },
    
});