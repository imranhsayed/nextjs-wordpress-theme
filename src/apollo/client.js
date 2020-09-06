import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import clientConfig from "../client-config";

/**
 * Instantiate required constructor fields
 */
const cache = new InMemoryCache();
const link = createHttpLink({
	uri: `${clientConfig.wordPressSiteURL}/graphql`,
});

const client = new ApolloClient({
	cache,
	link,
});

export default client;
