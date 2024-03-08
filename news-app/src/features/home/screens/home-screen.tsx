import { useTranslation } from 'hooks/use-translation';
import { Container } from 'components/Container';
import MenuBarComponent from '../components/menubar';
import NewsList from '../../news/screens/news-screens';
import ptBR from '../translations/pt-BR.json';

interface HomeScreenProps {
  handleChangeTheme: () => void;
}

function HomeScreen ({
  handleChangeTheme
}: HomeScreenProps) {
  const { t: local } = useTranslation('features.news.home', ptBR);
  const { t: global } = useTranslation('shared.labels');
  console.log(local('button-add-news'));
  console.log(global('add'));
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
