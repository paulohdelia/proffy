import React, { useState } from 'react';

import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';
const {
  container,
  teacherList,
  searchForm,
  label,
  input,
  inputGroup,
  inputBlock,
  submitButton,
  submitButtonText,
} = styles

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  return (
    <View style={container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}>
        {isFilterVisible && (
          <View style={searchForm}>
            <Text style={label} >Matéria</Text>
            <TextInput
              style={input}
              placeholder="Qual matéria?"
              placeholderTextColor="#C1BCCC"
            />

            <View style={inputGroup}>
              <View style={inputBlock}>
                <Text style={label}>Dia da semana</Text>
                <TextInput
                  style={input}
                  placeholder="Qual dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
              <View style={inputBlock}>
                <Text style={label}>Horário</Text>
                <TextInput
                  style={input}
                  placeholder="Que horas?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>

            <RectButton style={submitButton}>
              <Text style={submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>
        )}
      </PageHeader>
      <ScrollView
        style={teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;