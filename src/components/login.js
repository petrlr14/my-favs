import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 2.3em;
  border-radius: 500px;
  background-color: var(--accent);
  border: 1px solid transparent;
  color: white;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

const data = {
  CLIENT_ID: process.env.REACT_APP_SPOTIFY_TOKEN,
  REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000',
  SCOPES: ['user-top-read'],
};

export function Login() {
  return (
    <Link
      href={`https://accounts.spotify.com/authorize?client_id=${
        data.CLIENT_ID
      }&redirect_uri=${data.REDIRECT_URI}&scope=${data.SCOPES.join(
        '%20'
      )}&response_type=token&show_dialog=false`}
    >
      Autorizame!
    </Link>
  );
}
