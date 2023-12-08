import { useState } from 'react';
import Svg from 'components/Svg';
import lottieIconEco from 'assets/lottie_icon_eco.json';
import Lottie from 'lottie-react';

export default function Signin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col justify-center items-center overflow-hidden gap-10 text-white">
      <h1 className="text-center text-green-400 text-[1.5rem] font-bold translate-y-20 ">Eco Stack</h1>
      <Lottie animationData={lottieIconEco} />
      <form className="flex flex-col" onSubmit={e => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          className="min-w-[320px] w-[60%] border-white/40 bg-transparent mb-4 text-white"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          className="min-w-[320px] w-[60%] border-white/40 bg-transparent text-white mb-4"
          id="password"
          name="password"
        />

        <input className="min-w-[320px] w-[60%] border-white/40 bg-transparent h-8" type="submit" value="Login"></input>
      </form>
    </div>
  );
}
