import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import exercises from '../../assets/data/exercises.json';

const ExcersiteDtails = () => {
  const [info,setinfo]= useState(false)
  const param = useLocalSearchParams()

const exercise =exercises.find((item)=> item.name === param.name)
  return (
    <ScrollView className='bg-slate-400p px-5'>
      <Stack.Screen options={{title: exercise.name}} />
<View className='p-5 bg-white rounded-xl mt-5'>
<Text className="text-lg font-bold">
                {exercise.name}
              </Text>
              <Text>
                {exercise.muscle} | {exercise.equipment}
              </Text>
</View>
            <View className='mt-3 bg-white rounded-xl'>

            <Text  numberOfLines={info ? 0 :3} className='p-5 '>{exercise.instructions}</Text>
            <Text onPress={()=>setinfo(!info)} className='text-center p-3 text-xl text-slate-400'> 

              {
                info ? 'see  less' : "see more"
              }
            </Text>


            </View>
    </ScrollView>
  )
}

export default ExcersiteDtails
