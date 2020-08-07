import React, { useState, useEffect } from 'react';

import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';
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
  totalConnectionsStyle,
} = styles;

function Landing() {

  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    })
  }, [])

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

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
        <RectButton onPress={handleNavigateToStudyPages} style={[button, buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToGiveClassesPage} style={[button, buttonSecondary]}>
          <Image source={giveClassesIcon} />

          <Text style={buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={totalConnectionsStyle}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;