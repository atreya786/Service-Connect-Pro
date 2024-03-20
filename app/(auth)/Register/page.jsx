import AuthForm from "@components/Form";
import Image from "next/image";
import auth from "../../../public/auth.png";

const Register = () => {
  return (
    <div>
      <div className="container relative top-0 h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="flex justify-center items-center inset-0 w-full h-full">
            <Image src={auth} width={0} height={0} />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto w-full">
            <AuthForm type="register" />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
