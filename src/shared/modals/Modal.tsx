import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import colors from '~constants/colors'
import ModalError from './components/ModalError'
import { useModal } from '~hooks/modal'

const Modal = () => {
  const { content, changeContent } = useModal()
  useEffect(() => {
    if (content?.type) {
      setTimeout(() => {
        changeContent(null)
      }, content?.timeout ?? 4000)
    }
  }, [content])
  return (
    <TouchableOpacity
      onPress={() => changeContent(null)}
      style={[styles.container, { display: content === null ? 'none' : 'flex' }]}
    >
      {content?.type === 'ERROR' ? <ModalError message={content?.message ?? ''} /> : ''}
    </TouchableOpacity>
  )
}

export default Modal

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    width: '100%',
    height: '100%',
    backgroundColor: colors.blackLight,
  },
})
