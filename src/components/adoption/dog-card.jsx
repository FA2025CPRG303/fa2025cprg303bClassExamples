import { StyleSheet, Text, View } from "react-native";

export default function DogCardComp( {dogObj} ){
const {dogAge:age, dogBreed:breed} = dogObj;
    return(
        <View style={cardStyles.container}>
            <Text style={cardStyles.dogName}>{dogObj.dogName}</Text>
            <Text>Age: {age}</Text>
            <Text>Breed: {breed}</Text>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
    },
    dogName: {
        fontSize: 20,
        color: 'yellow'
    }
});