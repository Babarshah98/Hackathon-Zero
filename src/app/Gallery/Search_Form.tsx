"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchForm({initialSearch}:{initialSearch:string}){

    const [tagName, settagName] = useState(initialSearch ?? "")
    const router= useRouter()

    useEffect(()=>
    {
        settagName(initialSearch)

    }, [initialSearch])


    return(
        <form onSubmit={(e) =>{
            e.preventDefault()
            router.replace(`/Gallery?search=${encodeURIComponent(tagName)}`)
            router.refresh()
            
            }}>
             <Label htmlFor="tag-name" className="text-right ">
              Search by Tag
            </Label>
            <div className="flex gap-4">
            <Input
             onChange={(e) => settagName(e.currentTarget.value)}
              id="name"
              defaultValue={tagName}
              className="col-span-3 border text-slate-500 rounded-xl"
            />
            <Button type="submit" className="bg-white text-black rounded-xl hover:bg-slate-400">Search</Button>
            </div>
        </form>


    )


}