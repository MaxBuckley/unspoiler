import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { snippet } from '../apis/youtube';
import SearchItem from '../components/SearchItem';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();

  useEffect(() => {
    const { channelId, query } = params;
    (async () => {
      const {
        data: { items },
      } = await snippet.get('/search', {
        params: {
          channelId: channelId,
          q: `${query} Game 1`,
        },
      });
      setSearchResults(items);
    })();
  }, [params]);

  return (
    <main>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {searchResults.map((result, index) => (
            <SearchItem data={result} key={index} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Home;
