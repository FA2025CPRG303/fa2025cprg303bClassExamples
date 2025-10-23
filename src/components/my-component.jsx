import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function MyFirstComponent() {
  function sayHello() {
    alert('Hello World!');
  }

  return (
    <View>
        <Text style={myStyles.myHeading}>Hello World!</Text>
        <Image
          style={myStyles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={myStyles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={myStyles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={myStyles.myImage}
          source={require('../assets/images/cat.jpg')}
        />
        <Image
          style={myStyles.myImage}
          source={{
            uri: 'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_3942.jpg',
          }}
        />
        <Button onPress={sayHello} title="Say Hello!" />
        <Pressable onPress={sayHello} style={myStyles.myButton}>
          <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>
            Say Hello!
          </Text>
        </Pressable>
        <Text>Simple Form</Text>
        <Text>Name:</Text>
        <TextInput style={myStyles.myTextInput} placeholder="John Smith" />
        <Text>Phone:</Text>
        <TextInput style={myStyles.myTextInput} keyboardType="numeric" />
        <Text>Password:</Text>
        <TextInput
          style={myStyles.myTextInput}
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
  );
}

const myStyles = StyleSheet.create({

  myHeading: {
    fontSize: 30,
    textAlign: 'center',
  },
  myImage: {
    width: 300,
    height: 200,
  },
  myButton: {
    backgroundColor: 'green',
    padding: 6,
    marginTop: 10,
  },
  myTextInput: {
    borderWidth: 2,
    borderColor: 'blue',
    fontSize: 20,
  },
});
