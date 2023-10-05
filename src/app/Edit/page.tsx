"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CldImage } from "next-cloudinary"

import { useState } from "react"


export default  function EditPage({
    searchParams:{publicId},
}: {
    searchParams: {
        publicId:string
    }
}){
    const [transformation, settransformation]= useState< undefined | "generative-fill" | "blur" | "removeBackground"| "Zoom & Pan" >()
     const [prompt, setprompt] = useState('')
     const [pendingPrompt, setpendingPrompt] = useState('')
    return (
        <section>
        
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold ">Edit {publicId}</h1>
           
        </div>
        <div className="flex gap-10">

        <Button variant="secondary" className="bg-white hover:bg-slate-300 mt-2 rounded-[12px] 
         text-black" onClick={() => settransformation(undefined)}>
            Clear All
            </Button>
            
        <div className="flex flex-col gap-4 ">
        <Button variant="secondary" className="bg-white hover:bg-slate-300 mt-2 rounded-[12px]
         text-black" onClick={() => {settransformation("generative-fill")
         setprompt(pendingPrompt)
         
         }}>
            Apply Generative Fill
            </Button>
            <Label className="font-bold">Prompt</Label>
            <Input className="rounded-2xl border" value={pendingPrompt} onChange={e => setpendingPrompt(e.currentTarget.value)
            }/>

            </div>

            <Button variant="secondary" className="bg-white hover:bg-slate-300 mt-2 rounded-[12px]
         text-black" onClick={() => settransformation("blur")}>
            Apply Blur
            </Button>

            <Button variant="secondary" className="bg-white hover:bg-slate-300 mt-2 rounded-[12px]
         text-black" onClick={() => settransformation("removeBackground")}>
            Remove Background 
            </Button>

            <Button variant="secondary" className="bg-white hover:bg-slate-300 mt-2 rounded-[12px]
         text-black" onClick={() => settransformation("Zoom & Pan")}>
            Zoom & Pan
            </Button>

            
            </div>
        <div className="grid grid-cols-2 gap-12 mt-2">

        <CldImage alt={"alt"} src={publicId} height={400} width={400}className="mt-4"/>
        
        {transformation === "generative-fill" && (
            <CldImage
            
            src={publicId}
            alt="alt"
            width={400}
            height={400}
            crop="pad"
            fillBackground={{
                prompt,
            }
                
            }
            />
        )}
        {transformation === "blur" && (
            <CldImage
            
            src={publicId}
            alt="alt"
            width={400}
            height={400}
            
            />
        )}

{transformation === "removeBackground" && (
            <CldImage
            
            src={publicId}
            alt="alt"
            width={400}
            height={400}
            removeBackground
            />
        )}

        
{transformation === "Zoom & Pan" && (
            <CldImage
            
            src={publicId}
            alt="alt"
            width={400}
            height={400}
            zoompan="loop"
            />
        )}
        </div>

</section>
        

)
}