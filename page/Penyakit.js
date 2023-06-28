import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Penyakit() {
    useEffect(() => {
        console.log("useEffect 3")
    },[])
  return (
    <View>
      <Text>Penyakit</Text>
    </View>
  )
}

const styles = StyleSheet.create({})