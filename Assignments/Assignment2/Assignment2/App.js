import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import TopItem from './components/topItem'
import Button from './components/Button'

export default function App() {

  // Define my top 3 items to display as props

  const top3Items = [
    {
      title: 'Am9',
      image: 'https://th.bing.com/th/id/R.33ce51d6e2cdcbea1dd4b73ede12ce82?rik=oyB78nSRa%2fnpbA&riu=http%3a%2f%2fwww.guitarcommand.com%2fwp-content%2fuploads%2f2014%2f08%2fAm9-Guitar-Chord.gif&ehk=CmblSWNfyIA7lpf39WdvxfFPdx%2be9O5I5c%2bO6jq0G1A%3d&risl=&pid=ImgRaw&r=0',
      description: "This chord is rich, complex, and slighty haunting in the shown voicing."
    },
    {
      title: 'Cmaj7',
      image: 'https://th.bing.com/th/id/R.7e52aca22996be96c31265a7dd7a8c1f?rik=noKlayX5X9YOkg&riu=http%3a%2f%2fwww.totalguitarandbass.com%2fsystem%2fdiagrams%2f231%2foriginal%2fCMaj7.png%3f1352868756&ehk=iV87S%2fW9p5SpknkuAUt%2bA9Ss0%2bV1OHGUjAGOpRc97cM%3d&risl=&pid=ImgRaw&r=0',
      description: "This chord is bright, deep, and has an 'unfinished' quality."
    },
    {
      title: 'A aug',
      image: 'https://th.bing.com/th/id/OIP.4m3LpgDPPmahCGNu1ZnnNQHaGs?rs=1&pid=ImgDetMain',
      description: "This chord sounds uncomfortable, almost like there's something wrong with it."
    }
  ]

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <View>
      <TopItem item = {top3Items[selectedItem]} />
      <View>
        <Button
        label = "1"
        onPress = {() => setSelectedItem(0)}
        isSelected = {selectedItem === 0}
        />
        <Button
        label = "2"
        onPress = {() => setSelectedItem(1)}
        isSelected = {selectedItem === 1}
        />
        <Button
        label = "3"
        onPress = {() => setSelectedItem(2)}
        isSelected = {selectedItem === 2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
