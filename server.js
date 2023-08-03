import express from "express"
import {graphqlHTTP} from "express-graphql";
import {graphql} from "graphql/graphql.js";
import {buildSchema} from "graphql/utilities/index.js";

let imagesData = [
    {
        id: 1,
        title: "Stacked Brwonies",
        owner: "Ella Olson",
        category: "Desserts",
        url: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
    },
    {
        id: 2,
        title: "Shallow focus photography of Cafe Latte",
        owner: "Kevin Menajang",
        category: "Coffee",
        url: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg",
    },
    {
        id: 3,
        title: "Sliced Cake on White Saucer",
        owner: "Quang Nguyen Vinh",
        category: "Desserts",
        url: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
    },
    {
        id: 4,
        title: "Beverage breakfast brewed coffee caffeine",
        owner: "Burst",
        category: "Coffee",
        url: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    },
    {
        id: 5,
        title: "Pancake with Sliced Strawberry",
        owner: "Ash",
        category: "Desserts",
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
];


const schema = buildSchema(`
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
        
        input UpdateInput{
            id: Int!
            title: String
            category: String
            owner: String
            url: String
        }
        
        type Mutation {
            createImage(input: ImageInput): Image
            updateImage(input: UpdateInput): Image
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

function getImage(args){
    let foundImage = {};
    imagesData.forEach((image) => {
        if(image.id === args.id){
            foundImage = image;
        }
    })
    return foundImage;
}

function getImages(args){
    if(args.category) {
        return imagesData.filter((image) => image.category.toLocaleLowerCase() === args.category.toLocaleLowerCase());
    }
    return imagesData;
}

function addImage(args){
    let newImage = {
        id: imagesData.findLast((image) => image.id).id + 1,
        title: args.input.title,
        owner: args.input.owner,
        category: args.input.category,
        url: args.input.url
    }
    imagesData.push(newImage);
    return imagesData.findLast((image) => image.id);
}

function updateImage(args){
    const imageToUpdate = imagesData.find((image) => image.id === args.input.id);
    if(!imageToUpdate){
        throw new Error(`Couldn't find author with id ${args.id}`);
    }
    if(args.input.category !== undefined){
        imageToUpdate.category = args.input.category;
    }
    if(args.input.owner !== undefined){
        imageToUpdate.owner = args.input.owner;
    }
    if(args.input.url !== undefined){
        imageToUpdate.url = args.input.url;
    }
    if(args.input.title !== undefined){
        imageToUpdate.title = args.input.title;
    }
    return imageToUpdate;
}

function deleteImage(args){
    const imageToBeDeleted = imagesData.find((image) => image.id === args.id);
    if(imageToBeDeleted === undefined){
        return `The image with the id: ${args.id} doesn't exist`;
    }
    imagesData = imagesData.filter((image) => image.id !== args.id)
    return `The image with the id: ${args.id} has been deleted`;
}


const root = {
    image: getImage,
    images: getImages,
    createImage: addImage,
    updateImage: updateImage,
    deleteImage: deleteImage
};

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(5000, () => {
   console.log("GraphQL server is running on port 5000");
});