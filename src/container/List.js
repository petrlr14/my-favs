import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/card';
import Select from 'react-select';

const TYPES = {
  TRACKS: { value: 'tracks', label: 'Tracks' },
  ARTISTS: { value: 'artists', label: 'Artists' },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
  overflow: scroll;
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1em;
  > {
    margin-left: 1em;
  }
`;

export function List({ token }) {
  const [type] = useState(TYPES.TRACKS.value);
  const [item, setItems] = useState([]);

  useEffect(() => {
    async function bootstrap() {
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/${type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      console.log(json.items);
      setItems(json.items);
    }
    bootstrap();
  }, [type, token]);

  return (
    <>
      <Container>
        {item.map((i, key) => {
          return <Card key={key} item={i} />;
        })}
      </Container>
    </>
  );
}
