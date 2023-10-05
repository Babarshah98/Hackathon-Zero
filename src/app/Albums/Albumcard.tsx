import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Folder } from "./page"
import Link from "next/link"

export function AlbumCard({folder}:{folder: Folder}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} Images.</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="flex justify-end">
        
        <Button asChild className="bg-white text-black font-bold
         transition-transform duration-200 shadow-sm rounded-[10px]
          hover:bg-slate-300"><Link href={`/Albums/${folder.name}`}>View Album</Link></Button>
      </CardFooter>
    </Card>
  )
}
