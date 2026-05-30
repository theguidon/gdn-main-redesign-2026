export default function TitleLine({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center">
      <h3 className="font-chivo mr-2 font-bold text-[#101212]">{title}</h3>
      <div className="h-0 border-black border-b grow" />
    </div>
  );
}
