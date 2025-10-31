import { Text, View } from "react-native";

export default function EmployeeDisplayComp( {employeeObj} ){
    const {fname, age, city} = employeeObj;
    return(
        <View>
            <Text style={{fontSize: 20, color:'blue'}}>{fname}</Text>
            <Text>Age: {age}</Text>
            <Text>City: {city}</Text>
            {/* <SomeOtherComponent someProp={name} /> */}
        </View>
    )
}