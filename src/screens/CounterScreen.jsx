import { Button, Text, View } from "react-native";
import CounterDisplayComp from "../components/counter-display";
import { useState } from "react";
export default function CounterScreen(){
    
    const [count, setCount] = useState(0);

    // setCount(1); // Don't do this!
    function increment(){
        setCount(count + 1);
    }
    const decrement = () => setCount(count - 1);

    return(
        <View>
            {/* <CounterDisplayComp countDisplay={count} /> */}
            <CounterDisplayComp counterInt={count} myText="Hello World" />
            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={ () => setCount(count - 1) } />
        </View>
    );
}