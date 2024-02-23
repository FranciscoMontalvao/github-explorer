import { RepositoryItem } from "./RepositoryItem"

const repo = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/FranciscoMontalvao'
}

export const RepositoryList = () => {

  return (
    <section className="repository-list">
      <h1>
        Lista de repositórios
      </h1>

      <ul>
      <RepositoryItem  repo={repo}/>
      <RepositoryItem  repo={repo}/>
      <RepositoryItem  repo={repo}/>
      </ul>
    </section>
  )
}