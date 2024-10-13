import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import "../../global.css"
import Exersise from '../components/Exersise';




export default function App() {

  return (
    <View className='flex-1 justify-center'>

   <Exersise/>
      <StatusBar style="auto" />
    </View>
  );
}

