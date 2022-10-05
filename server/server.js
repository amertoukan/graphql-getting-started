const { ApolloServer } = require('apollo-server-express');
const express = require('express'); 

//fake data
const authors = [
    {
        id: "1", 
        info : { 
            name: "Joe Kelly", 
            age: 32, 
            gender: "M"
        }, 
        id: 2, 
        info: {
            name: "Mary Jane", 
            age: 40, 
            gender: "F"
        }
    }
]; 

//GraphQL Schema in string form 
const typeDefs = `
type Author {
    id: ID! 
    info: Person
}
type Person {
    name: String! 
    age: Int
    gender: String 
}
type Query {
    getAuthors: [Author]
}
`

//Resolvers
const resolvers = { 
    Query: { 
        getAuthors: () => authors
    }
}; 

const PORT = 3500; 

//Put together a schema 

const server = new ApolloServer({typeDefs, resolvers}); 
const app = express(); 
server.start().then(res => {
    server.applyMiddleware({ 
            app, 
            path: '/graphql' 
        }); 
    app.listen({ port: PORT }, () => { 
        console.log(`Server is running on port: http://localhost:${PORT}${server.graphqlPath}`)
    })
}); 