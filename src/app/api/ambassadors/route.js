import axios from "axios";
import { NextResponse } from "next/server";

export async function POST (req){
    try {
        var body = await req.json();
        var response = await axios.post("https://admin.edifycit.com/api/ambassadors",body)
        console.log(response);
    } catch (error) {
        return NextResponse.json({
            error
        })
    }
}