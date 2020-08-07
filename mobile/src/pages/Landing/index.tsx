import React from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';
const {
  container,
  banner,
  title,
  titleBold,
  buttonsContainer,
  button,
  buttonPrimary,
  buttonSecondary,
  buttonText,
  totalConnections,
} = styles;

function Landing() {

  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  // function handleNavigateToGiveClassesPage() {
  //   navigate('GiveClasses');
  // }

  return (
    <View style={container} >
      <Image source={landingImg} style={banner} />

      <Text style={title}>
        Seja bem-vindo, {'\n'}
        <Text style={titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={buttonsContainer}>
        <RectButton style={[button, buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToGiveClassesPage} style={[button, buttonSecondary]}>
          <Image source={giveClassesIcon} />

          <Text style={buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={totalConnections}>
        Total de 300 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;