const { gql } = require("apollo-server");

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

  type Rabbit implements Pet {
    id: ID!
    name: String!
    weight: Float
    status: PetStatus
    photo: Photo
    dueDate: Date
    inCareOf: Customer
    favoriteFood: String
    floppy: Int
  }

  type Stingray implements Pet {
    id: ID!
    name: String!
    weight: Float
    status: PetStatus
    photo: Photo
    dueDate: Date
    inCareOf: Customer
    chill: Int
    fast: Boolean
  }

  union FamilyPet = Cat | Dog

  union ExoticPet = Rabbit | Stingray

  type Query {
    allPets: [Pet!]!
    availablePets: Int!
    allAvailablePets: [Pet!]!
    allCheckedOutPets: [Pet!]!
    checkedOutPets: Int!
    familyPets: [FamilyPet!]!
    exoticPets: [ExoticPet!]!
    petById(id: ID!): Pet
    totalPets: Int!
    allCustomers: [Customer!]!
    totalCustomers: Int!
  }
`;

module.exports = typeDefs;
