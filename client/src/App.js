import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

// imports react components
import Sidebar from './components/Sidebar';

// import pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import CreateRoom from './pages/CreateRoom';

// uses proxy server in package.json and sets endpoint to /graphql
const httpLink = createHttpLink({
  uri: '/graphql',
});

// retrieves the token from local storage and adds it to header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// combines the httpLink with the authLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const loggedIn = Auth.loggedIn();

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container no-drag flex flex-wrap">
          {loggedIn && <Sidebar />}
          <Switch>
            <Route exact path="/">
              {loggedIn ? (<Redirect to='/dashboard' />) : (<Redirect to='/login' />)}
            </Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/createRoom" component={CreateRoom} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
