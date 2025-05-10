"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    // URL замыг шинэ хэлний дагуу өөрчлөх
    const segments = pathname.split("/");
    segments[1] = lng; // хэлний хэсгийг шинэчилнэ
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => changeLanguage("en")}>
        EN
      </Button>
      <Button variant="outline" onClick={() => changeLanguage("mn")}>
        MN
      </Button>
    </div>
  );
}
