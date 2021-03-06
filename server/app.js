const express = require('express');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers/index');

//Models
const User = require('./models/User');
const Snap = require('./models/Snap');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/schema.graphql'),
    resolvers,
    context: {
        User,
        Snap,
    }
});

mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => console.log(e));

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () => {
    console.log('Server ready at 4001');
});