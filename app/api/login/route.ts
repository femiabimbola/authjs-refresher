import {LoginSchema} from "@/lib/schemas";
import {NextResponse} from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const {email, password} = LoginSchema.parse(body);
    console.log(email, password);
    return NextResponse.json({message: "Thank you, I'm here"}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "something went wrong"}, {status: 500});
  }
};
