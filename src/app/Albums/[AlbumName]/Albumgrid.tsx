'use client'

import cloudinary from 'cloudinary'
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { Icon } from '@iconify/react';
import UploadButton from '@/app/Gallery/upload_button';
import ImageUpload from './AlbumUpload';
import ForceRefresh from '@/components/force_refresh';
import { useEffect, useState } from 'react';
import AlbumName from './AlbumUpload';



export type SearchResult={
    public_id:string
    tags:string[]
}

export default function FavouritesGrid({intialResources,}:{intialResources:SearchResult[]}) {
    
    const [Resources, setResources] = useState(intialResources)

    useEffect(()=>
    {
        setResources(intialResources)
    }, [intialResources])

return (
    
       

        <div className='columns-4 gap-4 mx-auto p-5 space-y-4'>
        {Resources.map((items , i) => {
            return (
                <div key={i} >
        <AlbumName className='rounded-sm'
        key={items.public_id}
       
        src={items.public_id}
        // publicid={items.public_id}
        Imagedata={items}
        height={400}
        width={400}
        alt='publicId'
        onUnheart={(UnheartedResources) => {
            setResources((currentResources) => 
            currentResources.filter((resources) =>
             resources.public_id !== UnheartedResources.public_id)

            )
        }}
        
        />
        </div>
            )

})}
        </div>
    
)
}