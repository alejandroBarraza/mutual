import './App.css';
import { Navbar } from './components/home/navbar/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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
