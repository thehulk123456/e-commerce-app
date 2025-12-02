"use client";

import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Form from "next/form";
import { LoginErrors, loginUser } from "./actions";
import { useActionState } from "react";
import FormError from "@/_components/FormError";

export default function Login() {
  const initialState: LoginErrors = {};

  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState
  );

  return (
    <div className="w-full max-w-[370px] flex flex-col justify-center px-4 sm:px-0">
      <h2 className="text-4xl mb-4">Log in to Exlusive</h2>
      <h4 className="text-base mb-8">Enter your details below</h4>

      <Form action={formAction} className="grid justify-items-start gap-y-8">
        <Input
          name="username"
          label="Username"
          placeholder="Username"
          error={state?.username}
        />
        <Input
          name="password"
          label="Password"
          placeholder="Password"
          error={state?.password}
        />

        {state && state.serverError ? (
          <FormError error={state.serverError} />
        ) : null}

        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
          <Button
            text="Log In"
            variant="primary"
            type="submit"
            disabled={isPending}
          />
          <Button text="Forgot Password?" variant="secondary" type="button" />
        </div>
      </Form>
    </div>
  );
}
