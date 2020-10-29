import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 5px 0;
  border-bottom: 1px solid var(--accent);
  background-color: black;
  z-index: 100;
`;

const Title = styled.h1`
  margin-right: 1em;
  color: var(--acent);
`;

const Image = styled.img`
  margin-left: 1em;
  width: 240px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Image src="img/spotify.png" alt="spotify branding logo" />
      <Title>My Favs</Title>
    </HeaderWrapper>
  );
};
