"use client"
import React, { useState } from 'react'

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';

export type UploadResult = {
    info: {
      public_id: string;
    };
    event: "success";
  };

export default function Frontpage() {
    const [ImageId , setImageId] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  p-24">
      
      <Button asChild className=' text-white hover:bg-gray-700 rounded bg-gray-800'>
    <CldUploadButton 
    onUpload={(result) =>
    {
      let res = result as UploadResult
        setImageId(res.info.public_id)

    }}
    
    uploadPreset="jrd0foxg" />
    </Button>
    {
        ImageId && (
    



    <CldImage
      width="960"
      height="600"
      src={ImageId}
      sizes="100vw"
      alt="Description of my image"
/>
        )}



    </main>
  )}