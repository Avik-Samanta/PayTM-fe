import { siginUser } from "@/api/auth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function SigninForm({ ...props }: React.ComponentProps<typeof Card>) {
  const navigate = useNavigate();
  const [signinInput, setSigninInput] = useState({
    name: "", password: "",
  })
  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await siginUser(signinInput);
      alert(data.message);
      console.log(data);
      navigate("/dashboard");
    } catch (e) {
      console.log("signin failed" + e);
    }
  }
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>
          Enter your information below to log in your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={signin}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" onChange={(e) => {
                setSigninInput(c => ({
                  ...c,
                  name: e.target.value
                }));
              }} required />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required onChange={(e) => {
                setSigninInput(c => ({
                  ...c,
                  password: e.target.value
                }));
              }} />
            </Field>
            <FieldGroup>
              <Field>
                <Button className="cursor-pointer" type="submit">Log In</Button>
                <FieldDescription className="px-6 text-center">
                  Don't have an account? <Link to={"/signin"}>Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card >
  )
}
