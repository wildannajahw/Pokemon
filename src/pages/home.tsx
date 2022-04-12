
import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Coba from '../component/Coba';
import Page from '../component/Page';

function App() {
  return (
    <Page title='Homepage'>
      <Box>
        <Link
          to={{
            pathname: '/pokemon',
          }}
        >
          pokemon
        </Link>
        <Coba/>
      </Box>
    </Page>
  )
}

export default App