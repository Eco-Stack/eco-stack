import { useSigninMutation } from 'apis/user';
import lottieIconEco from 'assets/lottie_icon_eco.json';
import clsx from 'clsx';
import Input from 'components/Input';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';

export default function Signin() {
  const navigate = useNavigate();
  const { isPending, isSuccess, isError, error, mutate: login } = useSigninMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(
      {},
      {
        onSuccess: () => navigate(ROUTES.cloudOverview),
      },
    );

    // navigate(ROUTES.projectOverview);
    // navigate(ROUTES.cloudOverview);
  };

  return (
    <div className="flex h-full flex-col justify-center items-center overflow-hidden gap-10 text-white">
      <h1 className="text-center text-green-400 text-[3rem] font-bold translate-y-20 ">Eco Stack</h1>
      <Lottie animationData={lottieIconEco} />
      <form className="flex flex-col" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <Input type="text" className="mt-1 mb-4" id="email" name="email" placeholder="Please enter your email" />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          className="mt-1"
          id="password"
          name="password"
          placeholder="Please enter your password"
        />

        <div className="min-w-[320px] w-[60%] my-1 flex justify-between text-sm">
          <p onClick={() => navigate(ROUTES.signup)} className="hover:underline cursor-pointer">
            Signup
          </p>
          <p className="hover:underline cursor-pointer">Forgot Password?</p>
        </div>

        <Input
          className="rounded !bg-green-400 font-bold !text-black h-10 cursor-pointer hover:brightness-95"
          type="submit"
          value={`Login ${isSuccess ? 'Success!' : ''} ${isError ? 'Failed!' : ''} ${isPending ? '...' : ''}`}
        ></Input>

        {/* error */}
        <div
          className={clsx([
            'text-red-500 w-full h-auto break-words font-bold transition-all',
            isError ? 'opacity-100' : 'opacity-0',
          ])}
        >
          {error?.message}
        </div>
      </form>
    </div>
  );
}
