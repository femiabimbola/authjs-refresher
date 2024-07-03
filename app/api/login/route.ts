import {LoginSchema} from "@/lib/schemas";
import {NextResponse} from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const {email, password} = LoginSchema.parse(body);
    co;
  } catch (error) {
    return NextResponse.json({message: "something went wrong"}, {status: 500});
  }
};
