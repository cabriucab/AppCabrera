import { View, Text, Switch, StyleSheet, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const listTareas = ({ items }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [verificarEstado, setVerificarEstado] = useState(false)
    const [item, setItem] = useState('')
   
    const [itemseleccionado, setItemSeleccionado] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [lista, setLista] = useState([])


  const seleccionarItem = (item) => {
    setItemSeleccionado(item)
   setModalVisible(true)

   
   
   };

   const removeItem = (id) => {
    setLista((lista) => lista.filter((item) => item.id !== id));
     setModalVisible(false);
    setItemSeleccionado(null)

 };
    



    return (
        <View style={styles.item}>
            <Text style={styles.title}>{items.value} </Text>

            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <Button title='Modificar' ></Button>
            <Button title='Eliminar' onPress={() => {
             seleccionarItem({items})
             }} ></Button>



<Modal
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
      removeItem(itemseleccionado.items.id)
    }}></Button>

  </View>




</View>




</Modal>


        </View>



    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    item: {},
    title: {},


});

export default listTareas