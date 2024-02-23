import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

// https://api.github.com/users/FranciscoMontalvao/repos
export const RepositoryList = () => {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/FranciscoMontalvao/repos')
      .then(response => response.json())
      .then(data => setRepo(data))
  }, [])


  return (
    <section className="repository-list">
      <h1>
        Lista de repositórios
      </h1>

      <ul>
        {repo.map(repo => { 
        return <RepositoryItem key={repo.name} repo={repo}/>
        })}
      </ul>
    </section>
  )
}