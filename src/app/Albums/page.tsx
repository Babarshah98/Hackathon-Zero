
import cloudinary from "cloudinary"
import { AlbumCard } from "./Albumcard"
import ForceRefresh from "@/components/force_refresh";
import MenuBar from "@/components/MenuBar";




export type Folder ={
name:string;
path:string
}




export default async function AlbumPage() {
   const {folders}= (await cloudinary.v2.api.root_folders()) as {
       
        
        folders: Folder[];
    }

    
  return (
    <section>
        <ForceRefresh/>
        <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">
                    Albums

                </h1>
                </div>
                <div className="grid grid-cols-2 gap-24 ">


                {folders.map((folder) => (
                        <AlbumCard key={folder.path} folder={folder}/>))}
                        </div>


        </div>
        
  
    </section>
  )}