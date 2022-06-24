import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rvwlyv1ndc01wbcn5b64b0/master',
  cache: new InMemoryCache()
})