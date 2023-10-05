import cloudinary from 'cloudinary'
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { Icon } from '@iconify/react';
import ImageUpload from '@/app/Gallery/imageUpload';
import ForceRefresh from '@/components/force_refresh';
import MenuBar from '@/components/MenuBar';
import AlbumName from './AlbumUpload';



export type SearchResult={
    public_id:string
    tags:string[]
}

export default async function GalleryPage({params}:{params:{AlbumName:string}}) {
    const results= await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.AlbumName}`)
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute () as {resources:SearchResult[]}
    

    
    
return (
    <section>
        
        <div className="flex ">
            <h1 className="text-4xl font-bold ">{`Album Name : ${params.AlbumName}`}</h1>
           
        </div>

        <div className='columns-4 gap-4 mx-auto p-5 space-y-4'>
        {results.resources.map((items , i) => {
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
        />
       
        
        </div>
            )

})}

        </div>
    </section>
)
}