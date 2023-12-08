import lottieIconEco from 'assets/lottie_icon_eco.json';
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
        <input
          autoComplete="off"
          className="min-w-[320px] rounded w-[60%] border-white/40 bg-transparent mt-1 mb-4 text-white focus:ring-green-400 focus:border-green-400"
          id="email"
          name="email"
          placeholder="Please enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="off"
          className="min-w-[320px] rounded w-[60%] border-white/40 bg-transparent text-white mt-1 mb-4 focus:ring-green-400 focus:border-green-400"
          id="password"
          name="password"
          placeholder="Please enter your password"
        />

        <input
          className="min-w-[320px] w-[60%] rounded bg-green-400 font-bold text-black h-10 cursor-pointer hover:brightness-95"
          type="submit"
          value="Login"
        ></input>
      </form>
    </div>
  );
}
