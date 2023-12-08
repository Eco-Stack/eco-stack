import lottieIconEco from 'assets/lottie_icon_eco.json';
import Input from 'components/Input';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';

export default function Signin() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // navigate(ROUTES.projectOverview);
    // navigate(ROUTES.cloudOverview);
  };

  return (
    <div className="flex h-[90vh] flex-col justify-center items-center overflow-hidden gap-10 text-white">
      <h1 className="text-center text-green-400 text-[3rem] font-bold translate-y-20 ">Eco Stack</h1>
      <Lottie animationData={lottieIconEco} />
      <form className="flex flex-col" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <Input type="text" className="mt-1 mb-4" id="email" name="email" placeholder="Please enter your email" />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          className="mt-1 mb-4"
          id="password"
          name="password"
          placeholder="Please enter your password"
        />

        <Input
          className="rounded !bg-green-400 font-bold !text-black h-10 cursor-pointer hover:brightness-95"
          type="submit"
          value="Login"
        ></Input>
      </form>
    </div>
  );
}
