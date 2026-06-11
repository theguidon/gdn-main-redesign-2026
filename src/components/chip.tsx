export default function Chip({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}) {
  const color = bgColor.startsWith("--")
    ? `bg-(${bgColor})`
    : `bg-[${bgColor}]`;
  return (
    <div
      className={`px-2 py-1 ${color} uppercase font-chivo font-bold text-white text-md`}
    >
      {text}
    </div>
  );
}
