export default function Chip({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}) {
  return (
    <div
      className={`px-2 py-1 bg-[${bgColor}] uppercase font-chivo font-bold text-sm`}
    >
      {text}
    </div>
  );
}
