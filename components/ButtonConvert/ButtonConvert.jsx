import { TouchableOpacity, Text } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({unit, onPress}){
    return <TouchableOpacity onPress={onPress} style={s.button}>
        <Text style={s.buttontxt}>Convert to {unit}</Text>
    </TouchableOpacity>
}