'use client'

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";


export default function UploadButton(){
    const router = useRouter()
    return(
        <Button asChild className="bg-gray-900 text-white hover:bg-slate-800 ">
        <div className="flex gap-2">
        

    <CldUploadButton
onUpload={() =>{
    setTimeout(() =>{

    router.refresh(), 1000
// // {
// //     setImageId(result.info.public_id)

// // }} */}
})

}

}

uploadPreset="jrd0foxg" >
<div className="flex gap-2 items-center ">
<Icon icon="material-symbols:upload-sharp" height={25} width={25}/>
Upload
</div>

</CldUploadButton>
</div>
</Button>
    )
}