import React, { useState } from "react";
import Svg from "../components/Svg";

export default function Signin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center overflow-hidden">
      <h1 className="text-center">
        Eco Stack <Svg icon="icon_eco"></Svg>
      </h1>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input className="bg-white/50 text-white" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input
          className="bg-white/50 text-white"
          id="password"
          name="password"
        />

        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}
