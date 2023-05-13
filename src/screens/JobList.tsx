import { View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import AllJob from '../components/AllJob';
import ApplyJob from '../components/ApplyJob';


export default function JobList() {

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'allJob', title: 'Tous les Jobs' },
    { key: 'applyJob', title: 'Jobs Postulé' },
  ]);

  const renderScene = SceneMap({
    allJob: AllJob,
    applyJob: ApplyJob,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={
        (props) => (
          <TabBar
            {...props}
            renderLabel={({ route }) => (
              <Text style={{ color: 'black' }}>
                {route.title}
              </Text>
            )}
            style={{
              backgroundColor: 'white'

            }}
          />
        )
      }
    />
  )
}