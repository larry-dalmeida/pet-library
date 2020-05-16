const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date
  
  type Photo {
    full: String!
    thumbnail: String!
  }

  enum PetStatus {
    AVAILABLE
    CHECKEDOUT
  }

  type Customer {
    username: ID!
    name: String!
    dateCreated: Date
  }

  interface Pet {
    id: ID!
    name: String!
    weight: Float
    status: PetStatus
    photo: Photo
    dueDate: Date
  }

  type Cat implements Pet {
    id: ID!
    name: String!
    weight: Float
    status: PetStatus
    photo: Photo
    dueDate: Date
    sleepAmount: Int
    curious: Boolean
  }

  type Dog implements Pet {
    id: ID!
    name: String!
    weight: Float
    status: PetStatus
    photo: Photo
    dueDate: Date
    good: Boolean
  }

  union FamilyPet = Cat | Dog

  type Query {
    allPets: [Pet!]!
    availablePets: Int!
    allAvailablePets: [Pet!]!
    allCheckedOutPets: [Pet!]!
    checkedOutPets: Int!
    familyPets: [FamilyPet!]!
    petById(id: ID!): Pet
    totalPets: Int!
    allCustomers: [Customer!]!
    totalCustomers: Int!
  }
`;

module.exports = typeDefs;