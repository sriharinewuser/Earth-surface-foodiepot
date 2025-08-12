import { v2 as cloudinary } from 'cloudinary';


export const configCloudinary = () =>{
    cloudinary.config({ 
        cloud_name: CLOUDINARY_CLOUD_NAME , 
        api_key: CLOUDINARY_API_KEY , 
        api_secret: CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API secret
    });

    return cloudinary;
}