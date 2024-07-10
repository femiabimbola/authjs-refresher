import {NextResponse} from "next/server";
import db from "@/lib/db";
import {RegisterSchema} from "@/lib/schemas";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const {email, username, password} = RegisterSchema.parse(body);

    
    //  Finding user by email
    const existingUserByEmail = await db.user.findUnique({
      where: {email: email},
    });

    if (existingUserByEmail)
      return NextResponse.json(
        {user: null, message: "user already exist"},
        {status: 409}
      );
      
      
    // Find user
    const existingUserByUsername = await db.user.findUnique({
      where: {email: email},
    });
    if (existingUserByUsername)
      return NextResponse.json(
        {user: null, message: "username not available"},
        {status: 409}
      );

    

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {username: username, email: email, password: hashedPassword},
    });

    const {password: newUserPassword, ...rest} = newUser;

    return NextResponse.json(
      {user: rest, message: "user created sucessfully"},
      {status: 201}
    );
  } catch (error) {
    return NextResponse.json({message: "something went wrong"}, {status: 500});
  }
};
