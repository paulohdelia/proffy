import React from 'react';

import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const {
  container,
  content,
  title,
  description,
  okButton,
  okButtonText,
} = styles;

function GiveClasses() {

  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={container}>
      <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={content}>
        <Text style={title}>
          Quer ser um Proffy?
        </Text>
        <Text style={description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigationBack} style={okButton}>
        <Text style={okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;