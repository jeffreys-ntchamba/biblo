module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  nom: String!
  categorie: String!
  statut: String!
  date1: String!
  date2: String!
  date3: String!
  photo: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  nom: String!
  categorie: String!
  statut: String!
  date1: String!
  date2: String!
  date3: String!
  photo: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  nom_ASC
  nom_DESC
  categorie_ASC
  categorie_DESC
  statut_ASC
  statut_DESC
  date1_ASC
  date1_DESC
  date2_ASC
  date2_DESC
  date3_ASC
  date3_DESC
  photo_ASC
  photo_DESC
}

type UserPreviousValues {
  id: ID!
  nom: String!
  categorie: String!
  statut: String!
  date1: String!
  date2: String!
  date3: String!
  photo: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  nom: String
  categorie: String
  statut: String
  date1: String
  date2: String
  date3: String
  photo: String
}

input UserUpdateManyMutationInput {
  nom: String
  categorie: String
  statut: String
  date1: String
  date2: String
  date3: String
  photo: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nom: String
  nom_not: String
  nom_in: [String!]
  nom_not_in: [String!]
  nom_lt: String
  nom_lte: String
  nom_gt: String
  nom_gte: String
  nom_contains: String
  nom_not_contains: String
  nom_starts_with: String
  nom_not_starts_with: String
  nom_ends_with: String
  nom_not_ends_with: String
  categorie: String
  categorie_not: String
  categorie_in: [String!]
  categorie_not_in: [String!]
  categorie_lt: String
  categorie_lte: String
  categorie_gt: String
  categorie_gte: String
  categorie_contains: String
  categorie_not_contains: String
  categorie_starts_with: String
  categorie_not_starts_with: String
  categorie_ends_with: String
  categorie_not_ends_with: String
  statut: String
  statut_not: String
  statut_in: [String!]
  statut_not_in: [String!]
  statut_lt: String
  statut_lte: String
  statut_gt: String
  statut_gte: String
  statut_contains: String
  statut_not_contains: String
  statut_starts_with: String
  statut_not_starts_with: String
  statut_ends_with: String
  statut_not_ends_with: String
  date1: String
  date1_not: String
  date1_in: [String!]
  date1_not_in: [String!]
  date1_lt: String
  date1_lte: String
  date1_gt: String
  date1_gte: String
  date1_contains: String
  date1_not_contains: String
  date1_starts_with: String
  date1_not_starts_with: String
  date1_ends_with: String
  date1_not_ends_with: String
  date2: String
  date2_not: String
  date2_in: [String!]
  date2_not_in: [String!]
  date2_lt: String
  date2_lte: String
  date2_gt: String
  date2_gte: String
  date2_contains: String
  date2_not_contains: String
  date2_starts_with: String
  date2_not_starts_with: String
  date2_ends_with: String
  date2_not_ends_with: String
  date3: String
  date3_not: String
  date3_in: [String!]
  date3_not_in: [String!]
  date3_lt: String
  date3_lte: String
  date3_gt: String
  date3_gte: String
  date3_contains: String
  date3_not_contains: String
  date3_starts_with: String
  date3_not_starts_with: String
  date3_ends_with: String
  date3_not_ends_with: String
  photo: String
  photo_not: String
  photo_in: [String!]
  photo_not_in: [String!]
  photo_lt: String
  photo_lte: String
  photo_gt: String
  photo_gte: String
  photo_contains: String
  photo_not_contains: String
  photo_starts_with: String
  photo_not_starts_with: String
  photo_ends_with: String
  photo_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    