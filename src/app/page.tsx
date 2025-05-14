"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("./components/homeClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <HomeClient />;
    </div>
  );
}
