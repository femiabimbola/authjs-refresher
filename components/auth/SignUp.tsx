"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {RegisterSchema} from "@/lib/schemas";
import {MailIcon} from "lucide-react";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {InputSuffix} from "../ui/input-suffix";
import {PasswordInput} from "../ui/password-input";
import CardWrapper from "../shared/CardWrapper";
import axios from "axios";
import {Separator} from "@/components/ui/separator";
import Social from "@/components/auth/social";
import WordSeparator from "../shared/separator";

const SignUp = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    // console.log(values);
    axios
      .post("/api/register", values)
      .then((response) => console.log(response));
  };
  return (
    <CardWrapper
      title={"Sign up"}
      footerLabel={"Have an account? Sign In"}
      footerLink={"/login"}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Enter your email</FormLabel>
                <FormControl>
                  <InputSuffix
                    placeholder="hello@mail.com"
                    suffix={<MailIcon />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
          >
            Submit
          </Button>
        </form>
      </Form>
      <WordSeparator word="Or sign up with" />
      <Social />
    </CardWrapper>
  );
};

export default SignUp;
