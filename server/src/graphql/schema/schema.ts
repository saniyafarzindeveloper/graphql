export const typeDefs = `#graphql
type User {
    _id: String
    name: String!
    email: String!
    password: String
    googleId: String
    role: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    updatedAt: String!
}

type Course{
    _id: ID!,
    title: String!,
    description: String!,
    instructor: User!,
    ratingsAverage: Int!,
    ratingsQuantity: Int!,
    price: Int!,
    category: String!,
    subCategory: String!,
    level: String!,
    language: String!,
    whatYouWillLearn: [String!]!,
    requirements: [String!]!,
    targetAudience: [String!]!,
    isPublished: Boolean!,
    isApproved: Boolean!,
    isRejected: Boolean!,
    isFeatured: Boolean!,
    isTrending: Boolean!,
    isBestseller: Boolean!,
    coverImage: String!,
    previewVideo: String!,
    students: [String!]!,
    createdAt: String!,
    updatedAt: String!,
}

type Query {
    hello: String
    users: [User]
    courses: [Course]
    # sections: [Section]
    # lectures: [Lecture]

}
`;
