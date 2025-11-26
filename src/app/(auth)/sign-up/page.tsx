import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Form from "next/form";

//Todo use form component
//But make sure to not expose email and password to query see how it is done
export default function SignUp() {
  return (
    <div className="w-full max-w-[370px] flex flex-col justify-center px-4 sm:px-0">
      <h2 className="text-4xl mb-4">Create an account</h2>
      <h4 className="text-base mb-8">Enter your details below</h4>

      <Form action="" className="grid justify-items-start gap-y-8">
        <Input
          name="username"
          label="Username"
          placeholder="Username"
          required
        />
        <Input name="email" label="Email" placeholder="Email" required />
        <Input
          name="password"
          label="Password"
          placeholder="Password"
          required
        />

        <Button
          text="Create account"
          variant="primary"
          type="submit"
          className="w-full"
        />
        <div className="flex flex-col items-center sm:flex-row justify-center w-full gap-4 sm:gap-4">
          <div>Already have an account?</div>
          <Button text="Log in" variant="tertiary" type="button" />
        </div>
      </Form>
    </div>
  );
}
