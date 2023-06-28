import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Kabar() {
    useEffect(() => {
        console.log("useEffect 2")
    },[])
  return (
    <View>
      <Text>Kabar</Text>
    </View>
  )
}

const styles = StyleSheet.create({})