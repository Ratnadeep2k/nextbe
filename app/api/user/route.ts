import { NextRequest } from "next/server"

// export function GET(){
//     //database logic 

//     return  Response.json({
//         name:"John Doe",
//         email:"John@gmail.com"
//     })
// }
export async function POST(req:NextRequest){
    //database logic 
    //extract the body
    const body = await req.json();
    //store the body in  the db
    console.log(body);

    return  Response.json({
        message:'user logged in'
    })
}