export const RepositoryItem = ({repo}) => {
  return (
    <li>
      <strong>{repo.name ?? 'Defalt'}</strong>
      <p>{repo.description}</p>

      <a href={repo.link}>Acessar repositório</a>
    </li>
  )
}