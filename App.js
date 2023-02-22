import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TextInput, FlatList, SafeAreaView, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import ListTarea from './components/listTareas';

export default function App() {


  const [lista, setLista] = useState([])
  const [item, setItem] = useState('')
  const onHandlerChangeItem = (text) => { setItem(text) }

  const [itemseleccionado, setItemSeleccionado] = useState({})
  const [modalVisible, setModalVisible] = useState(false)


  const agregarItem = () => {

    setLista([...lista, { id: Math.random(), value: item }])
    setItem('')

  }



  // const seleccionarItem = (item) => {
  //   setItemSeleccionado(item)
  //   setModalVisible(true)
  // };

  // const removeItem = (id) => {
  //   setLista((lista) => lista.filter((item) => item.id !== id));
  //   setModalVisible(false);
  //   setItemSeleccionado(null)

  // };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenidos!!!!</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.imagen}
      />
      <View style={styles.ingreso} >

        <TextInput style={styles.input} placeholder='Ingrese un Item a su lista Lista'
          onChangeText={onHandlerChangeItem} value={item}>


        </TextInput>


        <Button style={styles.boton} title='AGREGAR ' onPress={agregarItem}></Button>

      </View>




      <FlatList style={styles.Flat}
        data={lista}
        keyExtractor={item => item.id}
        // renderItem={(itemdata) => (
        //   <Pressable onPress={() => {
        //     seleccionarItem(itemdata.item)
        //   }}>

        //     <Text style={styles.lista}>{itemdata.item.value}</Text>
        //   </Pressable>
        // )}
        renderItem={({ item, index }) => <ListTarea items={item}  />}
     
      ItemSeparatorComponent={() => <View style={{ height: 1, marginBottom:10, backgroundColor: 'black' }} />}
      ListHeaderComponent={() => <Text style={{ backgroundColor: 'white', marginTop: 20, }}>Lista de Items</Text>}
        />

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>

          <View style={styles.modalTitle}>
            <Text >Eliminar Item</Text>
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Está seguro que desea eliminar el item?</Text>
          </View>

          <View style={styles.modalActions}>
            <Button title='Cancelar' onPress={() => {
              setModalVisible(!modalVisible)
              setItemSeleccionado(null)
            }}></Button>

            <Button title='Eliminar' onPress={() => {
              setModalVisible(!modalVisible)
              removeItem(itemseleccionado.id)
            }}></Button>

          </View>




        </View>




      </Modal> */}

      <StatusBar style="auto" />




    </View>
  )
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  item: {
    width: '80%',
    marginTop: 20,
    backgroundColor: '#AAFA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
  },

  Flat: {
    width: '100%',

  },
  lista: {
    fontSize: 20,
    marginBottom: 5,
    backgroundColor: '#aed6f1',
    textAlign: 'left',
  },

  modalText: {
    fontSize: 25,
    color: 'black',
    marginBottom: 15,
    textAlign: "center"
  },
  modalContainer:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'rgba(0,0,0,0.5)'
  },


  
  ingreso: {

    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imagen: {
    width: 100,
    height: 100,
  },

  input: {
    borderBottomColor: 'black',
    marginBottom: 10,
    borderBottomWidth: 1,
    marginEnd: 10,
  },



  titulo: {
    marginTop: 20,
    fontSize: 25,

  }
}); 
