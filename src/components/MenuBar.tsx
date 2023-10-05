"use client"
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import MenuIcon from '@/app/frontpage/icons/menu' 
import { Button } from './ui/button'
import { User, FolderPlus, Pencil } from 'lucide-react'
import { DialogBox } from './add-to-Album-DialogBox'
import { SearchResult } from '@/app/Gallery/page'
import Link from 'next/link'


  
  

const MenuBar = ({Image}:{Image: SearchResult}) => {
  const[open, setopen] = useState(false)
 

  return (
    <div className='top-2 right-2 absolute mt-1'>
       <DropdownMenu open={open} onOpenChange={setopen}>
       <DropdownMenuTrigger asChild >
        <Button variant="ghost" size="md" className='bg-slate-700 px-2 py-4 hover:bg-slate-400 rounded-full'><MenuIcon/></Button>
      </DropdownMenuTrigger>
  <DropdownMenuContent className='w-10rem'>
  <DropdownMenuItem asChild >
    {/* <FolderPlus className='mr-2 h-4 w-4'/>
      <span >Add to Album</span> */}
      <DialogBox 
      Image={Image} onClose={()=>setopen(false)}
      />
      

    </DropdownMenuItem>
    <DropdownMenuItem asChild >
    <Button asChild variant="outline" className="bg-slate-800 hover:bg-slate-50 border-none cursor-pointer flex justify-start">
     <Link href={`/Edit?publicId=${encodeURIComponent(Image.public_id)}`} >
        <Pencil className='mr-2 w-4 h-4 ml-2 '/>
        Edit</Link>
        </Button>
    </DropdownMenuItem>

    
    
   
  </DropdownMenuContent>
</DropdownMenu>


  </div>
  )
}

export default MenuBar