import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ContactFormUI() {
  return (
    <Card className="w-full  bg-[#1a1f24] border-none rounded-xl">
      <CardContent className="p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-400">
              Email <span className="text-[#ff5733]">*</span>
            </Label>
            <Input
              id="email"
              placeholder="Email"
              className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-400">
              Phone <span className="text-[#ff5733]">*</span>
            </Label>
            <div className="flex gap-2">
              <div className="w-[80px] bg-[#242b33] border-none text-gray-300 rounded-md flex items-center justify-center">
                🇺🇸 +1
              </div>
              <Input
                id="phone"
                placeholder="(XXX) XXX-XXXX"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-gray-400">
              Website <span className="text-[#ff5733]">*</span>
            </Label>
            <Input
              id="website"
              placeholder="Website"
              className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
            />
          </div>

          <Button 
            type="submit" 
            className="w-32 bg-[#ff5733] hover:bg-[#ff5733]/90 text-white"
          >
            SUBMIT
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

