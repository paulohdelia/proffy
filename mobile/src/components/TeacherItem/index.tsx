import React, { useState } from 'react';

import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';
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
  favoritedStyle,
} = styles;

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
  favorited,
}) => {

  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {

      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {

      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={container}>
      <View style={profile}>
        <Image
          style={avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={profileInfo}>
          <Text style={name}>{teacher.name}</Text>
          <Text style={subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={bio}>
        {teacher.bio}
      </Text>

      <View style={footer}>
        <Text style={price}>
          Preço/hora {'   '}
          <Text style={priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={buttonsContainer}>

          <RectButton
            onPress={handleToggleFavorite}
            style={[
              favoriteButton,
              isFavorited ? favoritedStyle : {},
            ]}
          >

            {isFavorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }

          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={contactButton}>
            <Image source={whatsappIcon} />
            <Text style={contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>
  );
}

export default TeacherItem;