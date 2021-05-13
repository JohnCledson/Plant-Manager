import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import EnviromentButton from '../components/EnviromentButton'
import Header from '../components/Header'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import axios from 'axios'
import api from '../services/api'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import Load from '../components/load'

interface EnviromentProps {
  key: string,
  title: string
}

interface PlantProps {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: [string],
  frequency: {
    times: number,
    repeat_every: string
  }
}

export default function PlantSelect (){
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [enviromentSelected, setEnviromentSelected] = useState('all')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadedAll, setLoadedAll] = useState(false)

  async function fetchPlants(){
    const { data } = await api.get('plants?_sort=name&_order=asc&_page=${page}&_limit=8')
    if(!data)
      return setLoading(true)
    if(page > 1){
      return setPlants(oldValue => [...oldValue, ...data])
      return setFilteredPlants(oldValue => [...oldValue, ...data])
    }else{
      setPlants(data)
      setFilteredPlants(data)
    }
    setLoading(false)
    setLoadingMore(false)
  }

  function handleEnviromentSelected(enviroment: string){
    setEnviromentSelected(enviroment)

    if(enviroment === 'all')
      return setFilteredPlants(plants)
    
    const filtered = plants.filter(plant => plant.environments.includes(enviroment))
    
    setFilteredPlants(filtered)
  }

  function handleFetchMore(distance: number){
    if(distance < 1)
      return
    
    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    fetchPlants()
  }

  useEffect(() => {
    async function fetchEnviroment(){
      const { data } = await api.get('plants_environments?_sort=title&_order=asc')
      setEnviroments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnviroment()
  },[])

  useEffect(() => {
    

    fetchPlants()
  },[])

  if(loading)
    return <Load/>
  return (
    <View style={styled.container} >
      <View style={styled.header} >
        <Header/>
        
        <Text style={styled.title} >Em qual ambiente</Text>
        <Text style={styled.subtitle} >você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => (
            <EnviromentButton
              title={ item.title }
              active={item.key === enviromentSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styled.enviromentList}
        />
      </View>

      <View style={styled.plants} >
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={colors.green} />
            : <> </>
          }
        />
      </View>
      
    </View>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})
