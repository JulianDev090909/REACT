import { useState } from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../Utils/constants"
import { useEffect } from "react"



export default function CharacterPage({params}){
    const { id } = useParams()
    const [character, setCharacter] = useState(null)

    const getCharacter = async ()=>{
        const response = await fetch(`${BASE_URL}/character/${id}`)
        const data = await response.json()
        console.log(data)
        setCharacter(data)
    }
    useEffect(
        ()=>{
            getCharacter()
        }, []
    )

    if(!character) return <h2>Cargando...</h2>

    const { name } = character

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}