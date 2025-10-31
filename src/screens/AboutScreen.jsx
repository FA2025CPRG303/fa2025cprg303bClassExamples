import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import EmployeeDisplayComp from '../components/employee-display';

let people = [
  {
    fname: 'John',
    age: 30,
    city: 'Calgary',
  },
  {
    fname: 'Alice',
    age: 25,
    city: 'Edmonton',
  },
  {
    fname: 'Frank',
    age: 35,
    city: 'Lethbridge',
  },
];

let person = {
    fname: 'Jane',
    age: 20,
    city: 'Calgary',
}

export default function AboutScreen() {
  const [employeeList, setEmployeeList] = useState(people);

    function addPerson(){
        let myNewList = [...employeeList, person];
        setEmployeeList(myNewList);
    }

  const nav = useNavigation();
  return (
    <View>
      <Text>About Screen!</Text>
      <Button title="Go to Contact" onPress={() => nav.navigate('Contact')} />
        {
            employeeList.map( (employee, index) => (
                <EmployeeDisplayComp employeeObj={employee} key={index} />
            ) )
        }
        <Button title='Add Person' onPress={addPerson} />
    </View>
  );
}
