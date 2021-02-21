/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'

const apiPoke = 'https://pokeapi.co/api/v2/pokemon'
const apiImagePoke = 'https://pokeres.bastionbot.org/images/pokemon/'

class Pokemon {
  constructor(json) {
    this.id = json.id
    this.name = json.name[0].toUpperCase() + json.name.slice(1)
    this.weight = json.weight
    this.types = json.types.map(
      (element) =>
        element.type.name[0].toUpperCase() + element.type.name.slice(1),
    )
    // this.imageURL = json.sprites.front_default
    this.imageURI = apiImagePoke + this.id + '.png'
  }
}

async function getAllPoke() {
  try {
    let response = await fetch(apiPoke)
    let responseJson = await response.json()
    return responseJson.results
  } catch (error) {
    console.log('Error:' + error)
  }
}

async function getDetailPokes(start, end) {
  if (start === undefined) start = 1
  if (end === undefined) end = 20
  let result = []
  for (let i = start; i <= end; i++) {
    try {
      let response = await fetch(apiPoke + '/' + i)
      let responseJson = await response.json()
      result.push(new Pokemon(responseJson))
    } catch (error) {
      console.log('Error:' + error)
    }
  }
  return result
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
export { Pokemon, getAllPoke, getDetailPokes }
export { postTemplates }
