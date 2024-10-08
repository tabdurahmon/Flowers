import { LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "../lib/zustand";
import DarkMode from "./DarkMode";

export default function Header() {
  const setAdmin = useAppStore((state) => state.setAdmin);

  return (
    <div className="border-b py-3">
      <div className="base-container flex items-center justify-between py-5">
        <h2 className="h2 ml-3">Gullar</h2>
        <DarkMode />
        <Button
          onClick={() => {
            const checker = confirm("Tizimdan chiqmoqchimisiz?");

            checker && setAdmin(null);
          }}
          variant="outline"
          className="flex items-center gap-2"
        >
          Chiqish
          <LogOutIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
