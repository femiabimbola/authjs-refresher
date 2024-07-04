"use client";
import {useCallback, useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import CardWrapper from "../shared/CardWrapper";
import {LoginSchema} from "@/lib/schemas";
import axios from "axios";
import {Button} from "@/components/ui/button";
import {InputSuffix} from "../ui/input-suffix";
import {PasswordInput} from "../ui/password-input";
import {MailIcon} from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import WordSeparator from "../shared/separator";
import Social from "@/components/auth/social";

const Login = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    axios.post("/api/login", values).then((response) => console.log(response));
  };

  return (
    <CardWrapper
      title="Login"
      footerLabel={"Don't have an account, Sign up"}
      footerLink={"/signup"}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
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
      <WordSeparator word="Or sign in with" />
      <Social />
    </CardWrapper>
  );
};

export default Login;
