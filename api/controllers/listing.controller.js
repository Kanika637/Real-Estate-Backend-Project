import Listing from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js";

export const createListing= async (req,res,next)=>{
    //   console.log("create listing");
    try {
        
        const listing=await Listing.create(req.body)
        return res.status(201).json(listing);
    } catch (error) {
     next(error);   
    }
}


export const deleteListing=async(req,res,next)=>{

   const listing=await Listing.findById(req.params.id);

   if(!listing){
    next(errorHandler(401),'Listing not found!')
   }

   if(req.user.id!=listing.userRef){
    next(errorHandler('401','You can only delete your own listings!'))
   }

   try {
    
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted')

   } catch (error) {
    next(error);
   }
}

export const updateListing= async (req,res,next)=>{
   
   const listing= await Listing.findById(req.params.id);

   if(!listing){
    return next(errorHandler(401),'Listing not found!')
   }
//this is coming from that the cookie of jwt token
   if(req.user.id!==listing.userRef){
   return next(errorHandler('401','You can only update your own listings!'))
   }
   
    try {
        
        //update the fields that have been modified by user

        const updatedListing=await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json(updatedListing)
    } catch (error) {
        next(error);
    }
}


export const getListing=async (req,res,next)=>{
    try {
    const listing=await Listing.findById(req.params.id);

    if(!listing){
        return next(errorHandler(404,'Listing not found!'))
    }

    res.status(200).json(listing);

} catch (error) {
    next(error);

}
}

export const getListings= async(req,res,next)=>{

    try {

        const limit=parseInt(req.query.limit) || 9;
        const startIndex=parseInt(req.query.startIndex) || 0;
        let offer=req.query.offer;

        let furnished=req.query.furnished;

        let parking=req.query.parking;

        let type=req.query.type;


        if(offer===undefined || offer==='false'){
            offer= {$in:['true','false']}
        }

        if(furnished===undefined || furnished==='false'){
            furnished= {$in:['true','false']}
        }

        if(parking===undefined || parking==='false'){
           parking= {$in:['true','false']}
        }

        if(type===undefined || type==='all'){
            type= {$in:['rent','sale']}
        }

        const searchTerm= req.query.searchTerm || '' ;

        const sort=req.query.sort || 'createdAt';
        const order=req.query.order || 'desc';

        const listings=await Listing.find({
            name:{$regex:searchTerm, $options:'i'},
            offer,
            parking,
            furnished,
            type,
        }).sort({
            [sort]:order
        }).limit(limit).skip(startIndex)

        return res.status(200).json(listings);





        
    } catch (error) {
        next(error);

    }
}