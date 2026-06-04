import { BASE_URL } from "../Utils/constants"
import styles from "./App.module.css"
import Card from "./components/Card"
import { useState } from "react"
import { useEffect } from "react"


export default function App() {

  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  const fetchApi = async (endpoint) => {
    const params = new

    const response = await fetch(`${BASE_URL}/${endpoint}`)
    const data = await response.json()
    return data
  }

  useEffect(
    () => {

      fetchApi('character').then(
        (data) => {
          console.log(data)
          setCharacters(data.results)
        }
      )
    }
    , [])


  return (

    <div className={styles.container}>

      <h1 className={styles.titulo}>PERSONAJES DE RICK AND MORTY</h1>

      {
        characters.map(
          (characters) => (
            <Card
              personaje={characters}
              key={characters.id}
            />
          )
        )
      }

    </div>

  )



}

