import styled from 'styled-components';

const Image = styled.img`
  width: 300;
  height: 300;
`;

const Title = styled.p`
  margin-top: 0.5em;
  color: white;
  text-align: center;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  margin: 1em;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  :hover {
    transform: scale(1.1);
  }
`;

export function Card({ item }) {
  const cover = item?.album?.images[1]?.url;
  const name = item?.name;
  const artist = item?.artists;
  const link = item?.external_urls?.spotify;

  console.log(cover, name, artist);

  return (
    <Container
      href={link}
      target="_blank"
      title={`${name} by ${artist.reduce(
        (prev, art) => prev + art.name + ', ',
        ''
      )}`}
    >
      <Image src={cover} alt="Album cover" />
      <Title>{name}</Title>
    </Container>
  );
}
