import styled from 'styled-components';
import { List } from '../List';
import { Header } from '../../components/header';
import { Center } from '../../components/structure';
import { Login } from '../../components/login';
import { useEffect, useState } from 'react';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`;

const FullCenter = styled(Center)`
  width: 100%;
  min-height: 100%;
`;

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (window.location.hash !== '') {
      console.log(window.location.hash);
      setToken(window.location.hash?.substr(1)?.split('&')[0]?.split('=')[1]);
      window.location.hash = '';
    }
  }, []);
  const Component = token ? (token) => <List token={token} /> : () => <Login />;

  return (
    <AppWrapper>
      <Header />
      <FullCenter direction="column">{Component(token)}</FullCenter>
    </AppWrapper>
  );
}

export default App;
