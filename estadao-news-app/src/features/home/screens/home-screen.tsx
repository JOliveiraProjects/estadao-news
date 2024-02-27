import MenuBarComponent from '../components/menubar';
import NewsList from '../../news/screens/news-screens';
import { Container } from 'components/Container';

interface HomeScreenProps {
  handleChangeTheme: () => void;
}

function HomeScreen ({
  handleChangeTheme
}: HomeScreenProps) {

  return (
    <Container>
      <MenuBarComponent/>
      <Container>
        <NewsList />
      </Container>
    </Container>
  );
}

export default HomeScreen;
