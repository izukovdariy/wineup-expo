import React from 'react'
import styled from 'styled-components/native'
import { Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export interface PopUpProps {
  visible: boolean
  handleClose: () => void
}

function PopUp({ visible, handleClose }: PopUpProps) {
  const onClose = () => {
    handleClose()
  }

  const cleanFavorites = () => {}

  return (
    <Modal animated animationType='fade' visible={visible} transparent>
      <ModalOverlay onPress={onClose} />
      <Container>
        <ModalTitle>
          Вы уверены, что хотите <BoldText>очистить избранное</BoldText>?
        </ModalTitle>
        <Buttons>
          <Touchable onPress={cleanFavorites}>
            <AntDesign name='check' size={20} color='white' />
            <ApplyLabel>Да</ApplyLabel>
          </Touchable>
          <Touchable onPress={onClose}>
            <AntDesign name='close' size={20} color='white' />
            <ApplyLabel>Нет</ApplyLabel>
          </Touchable>
        </Buttons>
      </Container>
    </Modal>
  )
}

export default PopUp

const Container = styled.View`
  position: absolute;
  top: 40%;
  padding: 50px 40px;
  background: white;
  width: 100%;
  box-shadow: 0px 3px 4px rgba(178, 178, 178, 0.5);
  border: 1px solid #b2b2b220;
  position: absolute;
`

const ModalTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`
const ModalOverlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const ApplyLabel = styled.Text`
  margin-left: 5px;
  font-family: Roboto_400Regular;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: #ffffff;
`
const Touchable = styled.TouchableOpacity`
  width: 35%;
  height: 50px;
  background: #931332;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #fff;
`
const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
`
const BoldText = styled.Text`
  font-weight: bold;
`