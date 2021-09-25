import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Navbar } from './components/home/navbar/Navbar';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div>
            <ApolloProvider client={client}>
                <Navbar />
            </ApolloProvider>
        </div>
    );
}

export default App;
