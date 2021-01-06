import { ApolloServer } from 'apollo-server'

import "reflect-metadata";
import { buildSchema } from "type-graphql";

import { Container } from "typedi"

import DummyResolver from "./Dummy/DummyResolver"

const run = async () => {
    Container.set('dummy','Hello World!')

    const schema = await buildSchema({
        resolvers: [DummyResolver],
        container: Container,
    });

    const server = new ApolloServer({ schema });

    // Start the server
    const { url } = await server.listen(4000);

    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

run()