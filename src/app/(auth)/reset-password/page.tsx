import Button from "@/_components/Button";
import Input from "@/_components/Input";
import Form from "next/form";

//Todo use form component
//But make sure to not expose email and password to query see how it is done
export default function ResetPassword() {
  return (
    <div className="w-full max-w-[370px] flex flex-col justify-center px-4 sm:px-0">
      <h2 className="text-4xl mb-4">Reset password</h2>
      <h4 className="text-base mb-8">
        Enter your email and we will send you password reset link
      </h4>

      <Form action="" className="grid justify-items-start gap-y-8">
        <Input name="email" label="Email" placeholder="Email" />

        <Button
          text="Send reset link"
          variant="primary"
          type="submit"
          className="w-full"
        />
      </Form>
    </div>
  );
}
