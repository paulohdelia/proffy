import React from 'react';

import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
const {
  container,
} = styles

function Favorites() {
  return (
    <View style={container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default Favorites;