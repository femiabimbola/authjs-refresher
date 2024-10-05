import {LoginSchema} from "@/lib/schemas";
import {NextResponse} from "next/server";
import {getUserByEmail} from "@/data/user";
import {signIn} from "@/auth";

export const POST = async (request: Request) => {


  const body = await request.json();
  const validatedFields = LoginSchema.safeParse(body);
  
  if (!validatedFields.success)
    return NextResponse.json({error: "Invalid Field"}, {status: 401});

  const {email, password} = validatedFields.data;
  
  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return NextResponse.json(
      {error: "Email or User does not exist"},
      {status: 400}
    );
  }

  try {
    console.log("about to")
    await signIn("credentials", { email, password, redirectTo:'/client' });
    
    return NextResponse.json({success: "Sign in successfully"}, {status: 200});
  } catch (error) {
    return NextResponse.json( {error: "something went wrong again"}, {status: 500} );
  }
};
