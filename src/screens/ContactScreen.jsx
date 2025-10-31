import { useNavigation } from '@react-navigation/native';
import { Button, FlatList, Text, View } from 'react-native';

export default function ContactScreen() {
  const nav = useNavigation();

    let myArray = [];
    for (let i = 0; i < 400; i++) {
        let thisText = `Item #${i}`;
        myArray.push(thisText);
    }

  return (
    <View>
      <Text>Contact Screen!</Text>
      <Button title="Go Back" onPress={() => nav.goBack()} />
      <Button title="Go Home" onPress={() => nav.popTo('Home')} />
      <Button title="Go Home" onPress={() => nav.popToTop()} />
      <FlatList
        data={myArray}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
