import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { snippet } from '../apis/youtube';
import Playlist from '../components/Playlist';

function Home() {
  const [channelResults, setChannelResults] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { items },
      } = await snippet.get('/playlists', {
        params: {
          channelId: 'UCzAypSoOFKCZUts3ULtVT_g',
        },
      });
      setChannelResults(items);
    })();
  }, []);

  return (
    <main>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {channelResults.map((result, index) => (
            <Playlist data={result} key={index} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Home;
