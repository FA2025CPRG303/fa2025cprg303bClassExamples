import { Button, ScrollView, View } from 'react-native';
import MyFirstComponent from '../components/my-component';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={{ padding: 20}}>
      <ScrollView>
        <Button title="Go to About" onPress={() => nav.navigate('About')} />
        <Button title="Go Back?" onPress={() => nav.goBack()} />
        <MyFirstComponent />
      </ScrollView>
    </View>
  );
}
