export const RepositoryItem = ({repo}) => {
  return (
    <li>
      <strong>{repo.name ?? 'Defalt'}</strong>
      <p>{repo.description}</p>

      <a href={repo.html_url}>Acessar repositório</a>
    </li>
  )
}