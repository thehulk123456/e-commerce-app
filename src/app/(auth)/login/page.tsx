import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Form from "next/form";

//Todo use form component
//But make sure to not expose email and password to query see how it is done
export default function Login() {
  return (
    <div className="w-full max-w-[370px] flex flex-col justify-center px-4 sm:px-0">
      <h2 className="text-4xl mb-4">Log in to Exlusive</h2>
      <h4 className="text-base mb-8">Enter your details below</h4>

      <Form action="" className="grid justify-items-start gap-y-8">
        <Input name="email" label="Email" placeholder="Email" />
        <Input name="password" label="Password" placeholder="Password" />

        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
          <Button text="Log In" variant="primary" type="submit" />
          <Button text="Forgot Password?" variant="secondary" type="button" />
        </div>
      </Form>
    </div>
  );
}
