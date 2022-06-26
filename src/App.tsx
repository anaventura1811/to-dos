import { Router } from './routes/router';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>

  )
}

export default App
