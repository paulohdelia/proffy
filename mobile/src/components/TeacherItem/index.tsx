import React from 'react';

import { View, Text, Image, Linking } from 'react-native';
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
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
}) => {

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
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

          <RectButton style={[favoriteButton, favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
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