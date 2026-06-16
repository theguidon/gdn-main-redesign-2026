import { SquarePen, Calendar, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { label: "Pitch a Story", icon: SquarePen, delay: "delay-150" },
  { label: "Suggest an Event", icon: Calendar, delay: "delay-200" },
  { label: "Share an Opinion", icon: ImageIcon, delay: "delay-300" },
];

export default function TakeTheLede() {
  return (
    <main className="flex flex-col items-center px-[5vw] py-24 md:py-32">
      <section className="w-full max-w-[896px] bg-(--off-white) p-8 md:p-10 flex flex-col gap-6">
        <h1 className="font-tiempos-headline font-bold text-(--gdn-blue) text-4xl md:text-5xl leading-tight animate-in fade-in slide-in-from-bottom-4 fill-mode-both animation-duration-500 motion-reduce:animate-none">
          Got any leads, ideas, or suggestions that you would like to share with
          The GUIDON?
        </h1>
        <p className="font-tiempos-text text-(--alt-black) text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-3 fill-mode-both animation-duration-500 delay-100 motion-reduce:animate-none">
          Do you have any story ideas that you would like to pitch? Is there an
          event that you would like us to cover or organize? Click on the links
          below to contribute your ideas to us.
        </p>
        <div className="flex flex-row flex-wrap gap-3">
          {actions.map(({ label, icon: Icon, delay }) => (
            <Button
              key={label}
              className={`h-auto cursor-pointer gap-2 bg-(--gdn-blue) px-4 py-2.5 text-base font-bold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#15356a] hover:shadow-[0_10px_24px_-6px_rgba(28,68,128,0.45)] animate-in fade-in slide-in-from-bottom-3 fill-mode-both animation-duration-500 motion-reduce:animate-none ${delay}`}
            >
              <Icon className="transition-transform duration-200 ease-out group-hover/button:scale-110" />
              {label}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
