"use client";

import dynamic from "next/dynamic";
import Cursor from "./components/detailbox/Cursor";

const HomeClient = dynamic(() => import("./components/homeClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="cursor-default">
      <Cursor />
      <HomeClient />;
    </div>
  );
}
