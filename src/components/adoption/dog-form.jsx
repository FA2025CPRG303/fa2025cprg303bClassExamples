import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function DogFormComp( {addDogFunc} ){

    const [inputDogName, setInputDogName] = useState("");
    const [inputDogAge, setInputDogAge] = useState("");
    const [inputDogBreed, setInputDogBreed] = useState("");

    function handleDogNameChange(textValue){
        console.dir(textValue);
        setInputDogName(textValue);
    }
    const handleDogAgeChange = (textValue) => setInputDogAge(textValue);

    function handleSubmit(){
        // alert(`Name: ${inputDogName} | Age: ${inputDogAge} | Breed: ${inputDogBreed}`);
        // Validation
        if(inputDogName == null || inputDogName == ""){
            alert("Please enter a dog name.");
            return;
        }
        // --------------- Trust Boundary
        let dogObj = {
            dogName: inputDogName,
            dogAge: inputDogAge,
            dogBreed: inputDogBreed
        }
        addDogFunc(dogObj);
        setInputDogName("");
        setInputDogAge("");
        setInputDogBreed("");
    }

    return(
        <View>
            <Text style={formStyles.heading}>Add a dog for Adoption</Text>
            <View style={formStyles.formContainer}>
                <Text style={formStyles.label}>Dog Name:</Text>
                <TextInput style={formStyles.input} onChangeText={handleDogNameChange} value={inputDogName} />
                <Text style={formStyles.label}>Dog Age:</Text>
                <TextInput style={formStyles.input} onChangeText={setInputDogAge} value={inputDogAge} />
                <Text style={formStyles.label}>Dog Breed:</Text>
                <TextInput style={formStyles.input} onChangeText={setInputDogBreed} value={inputDogBreed} />
                <Button title="Add Dog for Adoption" onPress={handleSubmit} />
            </View>
            <View style={{height:100}}></View>
        </View>
    )
}

const formStyles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign:'center',
        marginTop: 10
    },
    formContainer: {
        backgroundColor: 'lightblue',
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        color: 'green'
    },
    input: {
        borderColor:'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    }
})