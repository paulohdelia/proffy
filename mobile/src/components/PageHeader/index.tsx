import React from 'react';

import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';
const {
  container,
  topBar,
  titleStyle,
} = styles

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
}) => {

  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={container}>
      <View style={topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode={'contain'} />
        </BorderlessButton>
        <Image source={logoImg} resizeMode={'contain'} />
      </View>

      <Text style={titleStyle}>{title}</Text>
    </View>
  )
}

export default PageHeader;