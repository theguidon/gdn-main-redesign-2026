export default function Chip({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`px-2 py-1 max-w-min whitespace-nowrap uppercase font-chivo font-bold text-white text-md`}
    >
      {text}
    </div>
  );
}
