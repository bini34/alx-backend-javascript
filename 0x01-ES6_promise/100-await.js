import { uploadPhoto, createUser } from './utils.js';
export default async syncUploadUser(){
	try{
		const photo = await uploadPhoto();
		const user = await createUser();
		return { photo, user };
	}
	catch(error){
		return { photo: null, user: null };
	}
}
