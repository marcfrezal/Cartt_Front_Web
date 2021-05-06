import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const url = 'http://api.dev.cartt.fr/'
// console.log(`Apollo server ${process.env.REACT_APP_SERVER}`)
const httpLink = createHttpLink({
	// uri: `${process.env.REACT_APP_SERVER}`,
	uri: `${url}`,
	credentials: 'include',
	
})

export const Client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache({
		addTypename: false
	}),
});

export * from './UserRequests';
