import Image from "next/image";
import axios from "axios";

async function getUserData(){
  await new Promise((r)=>setTimeout(r,2000)) 
  const response = await axios.get("http://localhost:3004/api/user")
  return response.data;
}

//create async component
export default async function Home() {
  const usereDetails = await getUserData();//data fetching in next Server side rendering
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {usereDetails?.name}
            </div>
            
            {usereDetails?.email}
        </div>
    </div>
</div>
    
  );
}
