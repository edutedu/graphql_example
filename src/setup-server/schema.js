import { buildSchema } from "graphql/utilities/index.js";

export const schema = buildSchema(`
        type Query {
            image(id: Int!): Image
            images(category: String): [Image]
        }
        
        input OwnerInput {
          name: String!
        }
        
        input ImageInput {
            ownerId: Int!
            title: String
            category: String
            owner: String
            url: String
        }
        
        input UpdateImage {
            id: Int!
            title: String
            category: String
            owner: String
            url: String
        }
        
        type Mutation {
            createOwner(input: OwnerInput): Owner
            createImage(input: ImageInput): Image
            updateImage(input: UpdateImage): Image
            deleteImage(id: Int!): String
        }
        
        type Image {
            id: Int!
            title: String
            category: String
            owner: String
            url: String
        }
        
        type Owner {
            id: Int!
            name: String
        }
`);
