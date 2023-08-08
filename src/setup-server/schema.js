import {buildSchema} from "graphql/utilities/index.js";

export const schema = buildSchema(`
        type Query {
            image(id: Int!): Image
            images(category: String): [Image]
        }
        
        input ImageInput {
            title: String
            category: String
            owner: String
            url: String
        }
        
        type Mutation {
            createImage(input: ImageInput): Image
            updateImage(id: Int!, input: ImageInput): Image
            deleteImage(id: Int!): String
        }
        
        type Image {
            id: Int!
            title: String
            category: String
            owner: String
            url: String
        }
`);