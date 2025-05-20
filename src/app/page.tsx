"use client";

import dynamic from "next/dynamic";
import Cursor from "./components/Cursor";

const HomeClient = dynamic(() => import("./components/homeClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Cursor/>
      <HomeClient />;
    </div>
  );
}
