import lottieIconEco from 'assets/lottie_icon_eco.json';
import Input from 'components/Input';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';

interface IReqSignup {
  email: string;
  password: string;
  passwordConfirm: string;
  role: 'ADMIN' | 'USER';
}

export default function Signup() {
  const INIT_REQ_SIGNUP: IReqSignup = {
    email: '',
    password: '',
    passwordConfirm: '',
    role: 'ADMIN',
  };
  const [signup, setSignup] = useState<IReqSignup>(INIT_REQ_SIGNUP);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([signup.email, signup.password, signup.passwordConfirm].some(e => e === '')) {
      setError('Please fill in all the forms');
      return;
    }
    if (signup.password !== signup.passwordConfirm) {
      setError("Password confirm doesn't match");
      return;
    }
    // navigate(ROUTES.projectOverview);
    // navigate(ROUTES.cloudOverview);
  };

  return (
    <div className="flex h-[90vh] flex-col justify-center items-center overflow-hidden gap-10 text-white">
      <h1 className="text-center text-green-400 text-[3rem] font-bold translate-y-20 ">Eco Stack</h1>
      <Lottie animationData={lottieIconEco} />
      <form className="flex flex-col w-[320px]" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <Input
          value={signup.email}
          onChange={e => setSignup(prev => ({ ...prev, email: e.target.value }))}
          type="text"
          className="mt-1 mb-4"
          id="email"
          name="email"
          placeholder="Please enter your email"
        />

        <label htmlFor="password">Password</label>
        <Input
          value={signup.password}
          onChange={e => setSignup(prev => ({ ...prev, password: e.target.value }))}
          type="password"
          className="mt-1 mb-4"
          id="password"
          name="password"
          placeholder="Please enter your password"
        />

        <label htmlFor="passwordConfirm">Password Confirm</label>
        <Input
          value={signup.passwordConfirm}
          onChange={e => setSignup(prev => ({ ...prev, passwordConfirm: e.target.value }))}
          type="password"
          className="mt-1 mb-4"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Please confirm your password"
        />

        <label htmlFor="role" className="flex justify-center cursor-pointer my-4">
          <div className="relative flex justify-between w-full h-8">
            <input
              checked={signup.role === 'ADMIN' ? false : true}
              onChange={e => setSignup(prev => ({ ...prev, role: e.target.checked ? 'USER' : 'ADMIN' }))}
              id="role"
              type="checkbox"
              className="hidden peer"
            ></input>
            <span className="text-center flex-grow relative z-20 self-center transition text-black peer-checked:text-white">
              ADMIN
            </span>
            <span className="text-center flex-grow relative z-20 self-center transition peer-checked:text-black text-white">
              USER
            </span>
            <span className="absolute toggle z-10 bg-green-400 h-8 w-[160px] rounded-full transition-all top-0 left-0 peer-checked:left-[calc(50%)]"></span>
          </div>
        </label>

        <div className="min-w-[320px] w-[60%] my-1 flex justify-between text-sm">
          <p onClick={() => navigate(ROUTES.signin)} className="hover:underline cursor-pointer">
            Signin
          </p>
          <p className="hover:underline cursor-pointer">Forgot Password?</p>
        </div>

        <Input
          className="rounded !bg-green-400 font-bold !text-black h-10 cursor-pointer hover:brightness-95"
          type="submit"
          value="Sign up"
        ></Input>

        {/* error */}
        <div className="text-red-500 w-full  h-auto break-words font-bold ">{error}</div>
      </form>
    </div>
  );
}
