import Tag, { TagProps } from "./tag";
import { Card } from "./ui/card";

export default function CuratedCard({ text }: TagProps) {
  return (
    <Card className="w-full rounded-xl md:aspect-[4/3] aspect-[3/4] relative">
      <Tag text={text} className="md:bottom-4 md:left-4 bottom-2 left-2" />
    </Card>
  );
}
