var express = require('express');  
const graphqlHTTP = require('express-graphql').graphqlHTTP;
//var graphqlHTTP = require('express-graphql');  
const { buildSchema, GraphQLSchema, GraphQLObjectType , GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');  
// Construct a schema, using GraphQL schema language  
// var schema = buildSchema(`  
//   type Query {  
//     id:String
//     name: String  
//     price:String
//     image:String
//     quantity:String
//   }  
// `);  
  
const ProductType = new GraphQLObjectType({
     name:'product',
     description:'this is product',
     fields: () =>({
       id:{ type : GraphQLNonNull(GraphQLInt)},
       name:{ type : GraphQLNonNull(GraphQLString)},
       price:{ type : GraphQLNonNull(GraphQLInt)},
       image:{ type : GraphQLNonNull(GraphQLString)},
       quantity:{ type : GraphQLNonNull(GraphQLInt)},

     })


})
const RootQueryType = new GraphQLObjectType({
    name : "Query",
    description : "Root Query",
    fields: () =>({
        products:{
            type : new GraphQLList(ProductType),
            resolve :()=> products
        }
    })

})
const schema = new GraphQLSchema({
    query: RootQueryType
}

)

const products = 
  [
    {
        "id": 1,
        "name": "winter baby mustard jacket",
        "price": 20,
        "image": "/card_large (1).jpg",
        "quantity": 1
    },
    {
        "id": 2,
        "name": "Mustard Shoes",
        "price": 15,
        "image": "/card_large (2).jpg",
        "quantity": 1
    },
    {
        "id": 3,
        "name": "winter baby mustard jacket",
        "price": 25,
        "image": "/card_large.jpg",
        "quantity": 1
    },
    {
        "id": 4,
        "name": "pink winter cap",
        "price": 27,
        "image": "/card_large (4).jpg",
        "quantity": 1
    },
    
    {
        "id": 5,
        "name": "winter baby nevy blue jacket",
        "price": 25,
        "image": "/card_large (5).jpg",
        "quantity": 1
    },
    {
        "id": 6,
        "name": "Shoes",
        "price": 30,
        "image": "/card_large (6).jpg",
        "quantity": 1
    },
    {
        "id": 7,
        "name": "light pink cap",
        "price": 10,
        "image": "/card_large (7).jpg",
        "quantity": 1
    },
    {
        "id": 8,
        "name": "pink baby shoes",
        "price": 23,
        "image": "/card_large (8).jpg",
        "quantity": 1
    },
    {
        "id": 9,
        "name": "pink jacket",
        "price": 36,
        "image": "/card_large (9).jpg",
        "quantity": 1
    },
    
    {
        "id": 10,
        "name": "red winter shoes",
        "price": 29,
        "image": "/card_large (10).jpg",
        "quantity": 1
    },
    {
        "id": 11,
        "name": "winter baby sky blue jacket",
        "price": 39,
        "image": "/card_large (11).jpg",
        "quantity": 1
    },
    {
        "id": 12,
        "name": "onesize romper",
        "price": 19,
        "image": "/card_large (13).jpg",
        "quantity": 1
    },
    {
        "id": 13,
        "name": "blue winter shoes",
        "price": 10,
        "image": "/card_large (14).jpg",
        "quantity": 1
    },
    {
        "id": 14,
        "name": "winter baby mustard jacket",
        "price": 15,
        "image": "/card_large (1).jpg",
        "quantity": 1
    },
    {
        "id": 15,
        "name": "mustard Shoes",
        "price": 18,
        "image": "/card_large (2).jpg",
        "quantity": 1
    },
    {
        "id": 16,
        "name": "winter baby pink jacket",
        "price": 39,
        "image": "/card_large.jpg",
        "quantity": 1
    },
    {
        "id": 17,
        "name": "brown cap",
        "price": 7,
        "image": "/card_large (4).jpg",
        "quantity": 1
    },
    
    {
        "id": 18,
        "name": "winter baby blue jacket",
        "price": 19,
        "image": "/card_large (5).jpg",
        "quantity": 1
    },
    {
        "id": 19,
        "name": "black Shoes",
        "price": 25,
        "image": "/card_large (6).jpg",
        "quantity": 1
    },
    {
        "id": 20,
        "name": "cap",
        "price": 29,
        "image": "/card_large (7).jpg",
        "quantity": 1
    },
    {
        "id": 21,
        "name": "pink shoes 14",
        "price": 45,
        "image": "/card_large (8).jpg",
        "quantity": 1
    },
    {
        "id": 22,
        "name": "pink light jacket ",
        "price": 79,
        "image": "/card_large (9).jpg",
        "quantity": 1
    },
    
    {
        "id": 23,
        "name": "red winter shoes",
        "price": 9,
        "image": "/card_large (10).jpg",
        "quantity": 1
    },
    {
        "id": 24,
        "name": "sky blue sweater",
        "price": 29,
        "image": "/card_large (11).jpg",
        "quantity": 1
    },
    {
        "id": 25,
        "name": "onepieace",
        "price": 29,
        "image": "/card_large (13).jpg",
        "quantity": 1
    },
    {
        "id": 26,
        "name": "blue shoes",
        "price": 25,
        "image": "/card_large (14).jpg",
        "quantity": 1
    }
]




// The root provides a resolver function for each API endpoint  
// var root = {  
//   id: () =>{
//     return '0';  
//   } , 
//   name: () => {  
//     return 'Hello world!';  
//   }, 
//   price: () => {  
//     return '9999';  
//   }, 
//   image: () => {  
//     return '/macbookair.png';  
//   }, 
//   quantity: () => {  
//     return 'Hello world!';  
//   }, 

// };  
var app = express();  
app.use('/graphql', graphqlHTTP({  
  schema: schema,  
 // rootValue: root,  
  graphiql: true,  
}));  
app.listen(4000);  
console.log('Running a GraphQL API server at http://localhost:4000/graphql');  