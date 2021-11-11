import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
    </ApolloProvider>
  );
}

export default App;
