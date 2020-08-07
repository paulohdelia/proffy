import React from 'react';

import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
const {
  container,
} = styles

function TeacherList() {
  return (
    <View style={container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;