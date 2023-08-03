import {imagesData} from "./images.js";

export const resolvers = {
    Query: {
        image: (args, context, info) =>{
            let foundImage = {};
            imagesData.forEach((image) => {
                if(image.id === args.id){
                    foundImage = image;
                }
            })
            return foundImage;
        },
        images: (args, context, info) =>{
            if(args.category) {
                return imagesData.filter((image) => image.category.toLocaleLowerCase() === args.category.toLocaleLowerCase());
            }
            return imagesData;
        }
    },
    Mutation: {
        createImage: (args, context, info) => {
            let newImage = {
                id: imagesData.findLast((image) => image.id).id + 1,
                title: args.input.title,
                owner: args.input.owner,
                category: args.input.category,
                url: args.input.url
            }
            imagesData.push(newImage);
            return imagesData.findLast((image) => image.id);
        },
        updateImage: (args, context, info) => {
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
        },
        deleteImage: (args, context, info) => {
            const imageToBeDeleted = imagesData.find((image) => image.id === args.id);
            if(imageToBeDeleted === undefined){
                return `The image with the id: ${args.id} doesn't exist`;
            }
            imagesData = imagesData.filter((image) => image.id !== args.id)
            return `The image with the id: ${args.id} has been deleted`;
        }
    }
}