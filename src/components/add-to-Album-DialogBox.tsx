"use client"
import { SearchResult } from "@/app/Gallery/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import { AddImagetoAlbum } from "./action"
import Link from "next/link"

export function DialogBox({
  Image, 
  onClose
}:{Image: SearchResult; onClose: () => void}) {

   const [openAlbum, setopenAlbum] = useState('')
   const [open, setopen] = useState(false)
  return (
    <div >
    <Dialog open={open} onOpenChange={(newOpenstate)=>{
      setopen(newOpenstate)
      if(!newOpenstate){
      onClose()
      }

    }}>
      <DialogTrigger asChild >
        <Button className="bg-slate-800 hover:bg-slate-700 border-none">
        <FolderPlus className='mr-2 h-4 w-4'/>
      <span >Add to Album</span>
        </Button>
        
        
        {/* <Link href={`/Edit/${Image.public_id}`}>Edit</Link> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type Album you want to move this Image into.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
             onChange={(e) => setopenAlbum(e.currentTarget.value)}
              id="name"
              defaultValue={openAlbum}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
           
            {/* <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            /> */}
          </div>
        </div>
        <DialogFooter>
          <Button 
          onClick={async () => {
            onClose()
            setopen(false)
            await AddImagetoAlbum(Image, openAlbum)
          }}
          className='border' type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
