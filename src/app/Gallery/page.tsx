import cloudinary from 'cloudinary'
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { Icon } from '@iconify/react';
import UploadButton from "./upload_button";
import ImageUpload from './imageUpload';
import ForceRefresh from '@/components/force_refresh';
import MenuBar from '@/components/MenuBar';
import SearchForm from './Search_Form';



export type SearchResult={
    public_id:string
    tags:string[]
}

export default async function GalleryPage({
    searchParams:{search},
}: {
    searchParams: {
        search:string
    }
}
) {
    const results= await cloudinary.v2.search
    .expression(`resource_type:image ${search ? ` AND tags=${search}` : ""}`)
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute () as {resources:SearchResult[]}
    

    
    
return (
    <section>
        
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold ">Gallery</h1>
            
           <UploadButton />
        </div>
        <div className='border-none mt-4'>
        <SearchForm initialSearch={search} />
        </div>

        <div className='columns-4 gap-4 mx-auto p-5 space-y-4'>
        {results.resources.map((items , i) => {
            return (
                <div key={i} >
        <ImageUpload className='rounded-sm'
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