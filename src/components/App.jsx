import { BASE_URL } from "../../Utils/constants"
import styles from "./App.module.css"
import Card from "./Card"
import { useState, useEffect } from "react"

export default function App() {

  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchApi = async (currentPage) => {
    setLoading(true)
    const response = await fetch(`${BASE_URL}/character?page=${currentPage}`)
    const data = await response.json()
    setCharacters(data.results)
    setTotalPages(data.info.pages)
    setLoading(false)
  }

  useEffect(() => {
    fetchApi(page)
  }, [page])

  return (
    <div className={styles.wrapper}>

      <h1 className={styles.titulo}>PERSONAJES DE RICK AND MORTY</h1>

      {loading ? (
        <p className={styles.loading}>Cargando...</p>
      ) : (
        <div className={styles.container}>
          {characters.map((character) => (
            <Card personaje={character} key={character.id} />
          ))}
        </div>
      )}

      <div className={styles.paginacion}>
        <button
          className={styles.btnPag}
          onClick={() => setPage(p => p - 1)}
          disabled={page === 1}
        >
        </button>

        <span className={styles.pageInfo}>
          {page} <span className={styles.pageSep}>/</span> {totalPages}
        </span>
        <button
          className={styles.btnPag}
          onClick={() => setPage(p => p + 1)}
          disabled={page === totalPages}
        >  
        </button>
      </div>

    </div>
  )
}