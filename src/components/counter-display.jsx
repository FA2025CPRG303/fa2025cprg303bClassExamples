import { Text, View } from "react-native";

// export default function CounterDisplayComp(props){
export default function CounterDisplayComp( {counterInt, myText} ){
    return(
        <View>
            {/* <Text style={{fontSize:40, color:'green'}}> {props.countDisplay} </Text> */}
            <Text style={{fontSize:40, color:'green'}}> {counterInt} </Text>
            <Text style={{fontSize:20, color:'blue'}}> {myText} </Text>
        </View>
    )
}