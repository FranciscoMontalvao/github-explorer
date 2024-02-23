import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss'; // Import global

export const App = () => {

  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}