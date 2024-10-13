import React from 'react';
import { FlatList, View, Text, Pressable } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import { Link } from 'expo-router';


const Exercise = () => {
  return (
    <FlatList
      data={exercises}
      keyExtractor={(item) => item.id.toString()} // Ensure a unique key, convert id to string if necessary
      renderItem={({ item }) => (
        <Link href={`/${item.name}`} asChild>
          <Pressable className="bg-slate-100 px-3 mt-4">
            <View className="bg-white mb-2 rounded-lg p-3 shadow-2xl">
            <Text className="text-lg font-bold">
                {item.name}
              </Text>
              <Text>
                {item.muscle} | {item.equipment}
              </Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  );
};

export default Exercise;
