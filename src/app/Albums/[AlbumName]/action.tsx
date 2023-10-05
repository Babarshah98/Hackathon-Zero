"use server"
import cloudinary from 'cloudinary'



export async function setFavouriteImage
           (publicid:string,
            isFavourite:boolean,
            )
             {
              if(isFavourite ){
                   await cloudinary.v2.uploader.add_tag('favourite', [publicid])

              }
              else{
    
                    await cloudinary.v2.uploader.remove_tag('favourite', [publicid])

              }

                   
}