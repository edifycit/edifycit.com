import axios from "axios";
import { NextResponse } from "next/server";

export async function GET (req){
    try {
  
        var response = await axios.get("https://admin.edifycit.com/api/courses?titlesOnly=true")
   return NextResponse.json(response.data.message);
    } catch (error) {
        return NextResponse.json({
            error
        })
    }
}