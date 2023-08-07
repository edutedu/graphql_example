import {Image} from "./models/Image.js"
export const resolvers = {
    Query: {
        getImageById: async(args, context, info) =>{
            const image = await Image.findByPk(args.id);
            if(!image){
                throw new Error(`Couldn't find author with id ${args.id}`);
            }
            return image;
        },
        getImagesByCategory: async(args, context, info) =>{
            return await Image.findAll({
                where: {
                    category: args.category
                }
            });
        }
    },
    Mutation: {
        createImage: async(args, context, info) => {
            return await Image.create({
                title: args.input.title,
                owner: args.input.owner,
                category: args.input.category,
                url: args.input.url
            })
        },
        updateImage: async(args, context, info) => {
            const imageToUpdate = await Image.findByPk(args.input.id);
            if(!imageToUpdate){
                throw new Error(`Couldn't find image with id ${args.id}`);
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
            return await imageToUpdate.save();
        },
        deleteImage: async(args, context, info) => {
            const imageToBeDeleted = await Image.findByPk(args.id)
            if(imageToBeDeleted === undefined){
                return `The image with the id: ${args.id} doesn't exist`;
            }
            await imageToBeDeleted.destroy();
            return `The image with the id: ${args.id} has been deleted`;
        }
    }
}