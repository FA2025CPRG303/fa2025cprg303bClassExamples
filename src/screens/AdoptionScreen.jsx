import { ScrollView, Text, View } from 'react-native';
import dogData from '../assets/data/dog-data.json';
import { useState } from 'react';
import DogListComp from '../components/adoption/dog-list';
import DogFormComp from '../components/adoption/dog-form';

export default function AdoptionScreen() {
  const [dogList, setDogList] = useState(dogData);

  function addNewDog(newDogObj){
    let newDogList = [...dogList, newDogObj];
    setDogList(newDogList);
  }

  return (
    <View style={{paddingBottom:30}}>
      <ScrollView style={{padding: 20 }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          Dogs available for adoption
        </Text>
        <DogListComp dogArray={dogList} />
        <DogFormComp addDogFunc={addNewDog} />
      </ScrollView>
    </View>
  );
}
