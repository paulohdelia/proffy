import React from 'react';

import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
const {
  container,
  profile,
  avatar,
  profileInfo,
  name,
  subject,
  bio,
  footer,
  price,
  priceValue,
  buttonsContainer,
  favoriteButton,
  contactButton,
  contactButtonText,
  favorited,
} = styles;

function TeacherItem() {
  return (
    <View style={container}>
      <View style={profile}>
        <Image
          style={avatar}
          source={{ uri: 'https://avatars2.githubusercontent.com/u/47276018?s=400&v=4' }}
        />

        <View style={profileInfo}>
          <Text style={name}>Paulo D'Elia</Text>
          <Text style={subject}>Matemática</Text>
        </View>
      </View>

      <Text style={bio}>
        Olá para quem está vendo o gif do Mobile, essa é a bio de demonstração
        {'\n'}{'\n'}
        Hello!
      </Text>

      <View style={footer}>
        <Text style={price}>
          Preço/hora {'   '}
          <Text style={priceValue}>R$ 20,00</Text>
        </Text>

        <View style={buttonsContainer}>

          <RectButton style={[favoriteButton, favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={contactButton}>
            <Image source={whatsappIcon} />
            <Text style={contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>
  );
}

export default TeacherItem;