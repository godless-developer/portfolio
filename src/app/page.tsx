"use client";

import dynamic from "next/dynamic";
import SplashCursor from "./Bits/Cursor";

const HomeClient = dynamic(() => import("./components/homeClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="cursor-default">
      <SplashCursor />
      <HomeClient />;
    </div>
  );
}
