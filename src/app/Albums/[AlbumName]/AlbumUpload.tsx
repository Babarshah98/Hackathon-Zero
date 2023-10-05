'use client'
import { Icon } from "@iconify/react/dist/iconify.js"
import { HeartIcon, MenuIcon, } from "lucide-react"
import { CldImage, CldImageProps } from "next-cloudinary"
import { Hearticon } from "@/app/frontpage/icons/Hearticon"
import {setFavouriteImage} from "./action"
import { useState, useTransition } from "react"
import { SearchResult } from "./page"
import Fullheart from "@/app/frontpage/icons/Fullheart"
import MenuBar from "@/components/MenuBar"

        

export default function AlbumName(
  props:
  {Imagedata:SearchResult;
   onUnheart?:(UnheartedResources:SearchResult) =>void}
  &  Omit<CldImageProps, 'publicId'> ){
   
   

      const [Transition, startTransition] = useTransition()
      const {Imagedata, onUnheart} = props
      const [isFavourite, setisFavourite ] = useState(Imagedata.tags.includes('favourite'))
      
        return(
            <div className="relative ">
             
            <CldImage
            {...props}/>
            { isFavourite ?
          
              ( <Fullheart
              onClick={() => {
                onUnheart?.(Imagedata)
                setisFavourite(false)
                startTransition(() => {
                setFavouriteImage(Imagedata.public_id, false)

                })
              
              }}
              className="cursor-pointer   hover:scale-150 transform transition-transform duration-300   absolute top-2 left-2"/>
        ) :
            (
              <HeartIcon 
              onClick={() => {
                setisFavourite(true)
                startTransition(() => {
                setFavouriteImage(Imagedata.public_id, true )

                })
              
              }}
              className="cursor-pointer  hover:scale-150 transform transition-transform duration-300 hover:text-red-500  absolute top-2 left-2"/>
            
            )}
            
           
              <MenuBar Image={Imagedata}/>

         
          
              </div>
              
          

            
        )
      }