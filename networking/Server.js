/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'

const apiPoke = 'https://pokeapi.co/api/v2/pokemon?limit=100'

async function getAllPoke() {
  try {
    let response = await fetch(apiPoke)
    let responseJson = await response.json()
    return responseJson.results
  } catch (error) {
    console.log('Error: ${error}')
  }
}

async function postTemplates(params) {
  try {
    let response = await fetch(apiPoke, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    let responseJson = await response.json()
    return responseJson.results
  } catch (error) {
    console.log('Error: ${error} ')
  }
}
export { getAllPoke }
export { postTemplates }
