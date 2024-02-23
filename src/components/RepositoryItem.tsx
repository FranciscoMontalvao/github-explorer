interface RepositoryItemProps {
  repo: {
    name: string;
    description: string;
    html_url: string;
  }

}

export const RepositoryItem = ({repo}: RepositoryItemProps) => {
  return (
    <li>
      <strong>{repo.name ?? 'Defalt'}</strong>
      <p>{repo.description}</p>

      <a href={repo.html_url}>Acessar repositório</a>
    </li>
  )
}