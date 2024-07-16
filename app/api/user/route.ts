import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient(); 

export async function GET(req:NextRequest){
    //database logic 
    const user = await client.user.findFirst();

    return  Response.json({
        name:'dada',
        email: user?.username
    })
}
export async function POST(req:NextRequest){
    //database logic 
    //extract the body
    const body = await req.json();
    try {
        await client.user.create({
            data:{
                username:body.username,
                password:body.password
            }
        })

        return  Response.json({
            message:'user logged in'
        })
        
    } catch (error) {
       return Response.json({
              message:error
       })
        
    }
   
    //store the body in  the db

    
}