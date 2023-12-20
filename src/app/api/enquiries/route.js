import axios from "axios";
import { NextResponse } from "next/server";


export async function POST (req){
    try {
        var body = await req.json();
        var {data} = await axios.post("https://admin.edifycit.com/api/enquiries",body)
        return NextResponse.json(data,{
            status:200
        })
    } catch (error) {
        
        return NextResponse.json(error.response.data,
            {
                status:400
            })
    }
}