/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import DashboardStyle from './style.js';
import { FackeActivity } from '../../FackData/fackActivity.js';
import { FackeSymptoms } from '../../FackData/fackSymptom.js';
import ActivityItem from '../../composantes/ActivityItem/index.js';
import SymptomItem from '../../composantes/SymptomItem/index.js';
import { FackeDoctor } from '../../FackData/fackDoctor.js';
import { COLORS, PADDING } from '../../outils/constantes.js';

const Home = () => {
  const [showFullDoctors, setShowFullDoctors] = useState(false);

  return (
    <ScrollView>
      <View style={DashboardStyle.header}>
        <Text style={DashboardStyle.userName}>Jhon Doe</Text>
        <Image source={require('./../../assets/profile.webp')} style={DashboardStyle.profile}/>
      </View>

      <FlatList  style={DashboardStyle.scrolableList}
      data={FackeActivity}
      keyExtractor={item => item.id}
      renderItem={({item})=>{
        return (
          <ActivityItem item={item}/>
        );
      }}
      showsHorizontalScrollIndicator={false}
      horizontal/>

      {/* {Liste des symptomes} */}
      <View>
        <Text style={DashboardStyle.title}>Quels sont les symptome</Text>
      </View>
      <FlatList  style={DashboardStyle.scrolableList}
      data={FackeSymptoms}
      keyExtractor={item => item.id}
      renderItem={({item})=>{
        return (
          <SymptomItem item={item}/>
        );
      }}
      showsHorizontalScrollIndicator={false}
      horizontal/>
      {/* {Fin de la liste des commentaire} */}

      {/* {Nos Docteurs} */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: PADDING.horizontal, backgroundColor: 'white'}}>
        <Text style={DashboardStyle.title}>Nos Docteurs</Text>
        <TouchableOpacity  onPress={() => setShowFullDoctors(!showFullDoctors)}>
          <Text  style={DashboardStyle.link}> {showFullDoctors ? 'Afficher moins': 'Afficher plus'}</Text>
        </TouchableOpacity>
      </View>
      <View style={DashboardStyle.doctorsContainer}>
        {
          showFullDoctors ? 
          FackeDoctor.map((doctor, index) => (
            <View key={doctor.id} style={DashboardStyle.doctorCard}>
              <Image source={{uri: `${doctor.avatar}`}} style={DashboardStyle.DoctorProfile} />
              <View style={{gap: 20}}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>{doctor.name}</Text>
                <TouchableOpacity>
                  <Text style={{padding: 5, color: 'white', width: 150, textAlign: 'center', backgroundColor: COLORS.main, borderRadius: 15}}>{doctor.speciality}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )) :
          FackeDoctor.slice(0, 3).map((doctor, index) => (
            <View key={doctor.id} style={DashboardStyle.doctorCard}>
              <Image source={{uri: `${doctor.avatar}`}} style={DashboardStyle.DoctorProfile} />
              <View style={{gap: 20}}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>{doctor.name}</Text>
                <TouchableOpacity>
                  <Text style={{padding: 5, color: 'white', width: 150, textAlign: 'center', backgroundColor: COLORS.main, borderRadius: 15}}>{doctor.speciality}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        }
      </View>
      {/* {Fin} */}
    </ScrollView>
  );
};

export default Home;
