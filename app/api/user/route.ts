import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient(); 

export function GET(){
    //database logic 

    return  Response.json({
        name:"John Doe",
        email:"John@gmail.com"
    })
}
export async function POST(req:NextRequest){
    //database logic 
    //extract the body
    const body = await req.json();
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    //store the body in  the db

    return  Response.json({
        message:'user logged in'
    })
}