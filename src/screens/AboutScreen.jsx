import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Text, View } from "react-native";

export default function AboutScreen(){

    const nav = useNavigation();

    let myArray = [];
    for (let i = 0; i < 400; i++) {
        let thisText = `Item #${i}`;
        myArray.push(thisText);
    }

    return(
        <View>
            <Text>About Screen!</Text>
            <Button title="Go to Contact" onPress={ () => nav.navigate('Contact') } />
            <FlatList 
                data={myArray}
                renderItem={ ({item}) => <Text>{item}</Text> }
                keyExtractor={ (item, index) => index }
            />
        </View>
    )
}