"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Galleryicon } from "./icons/Galleryicon";


export default function RouterButton(){
    const router=useRouter()
    return(
        <Button onClick={() => {
            router.push("/Gallery")
          }} variant="secondary" className="w-full justify-start flex gap-2 rounded  hover:bg-gray-900 hover:text-gray-100">
            <Galleryicon />
            Gallery
          </Button>
    )
}
