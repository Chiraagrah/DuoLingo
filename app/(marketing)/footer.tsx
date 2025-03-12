import { Button } from "@/components/ui/button";
import Image from "next/image";

const languages = [
  { code: "hr", name: "Croatian" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "jp", name: "Japanese" },
];

export const Footer = () => {
  return (
    <footer className="hidden lg:block w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-center gap-4 px-4 h-full">
        {languages.map(({ code, name }) => (
          <Button 
            key={code} 
            size="lg" 
            variant="ghost" 
            className="flex items-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px] w-auto"
            aria-label={`Select ${name}`}
          >
            <Image
              src={`/${code}.svg`}
              alt={name}
              height={32}
              width={40}
              className="mr-2 rounded-md"
            />
            {name}
          </Button>
        ))}
      </div>
    </footer>
  );
};
