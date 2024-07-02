// should I keep these??

import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-[30vh] w-full text-center flex justify-around items-center">
      <LoaderCircle className="animate-spin" size={30} />
    </div>
  );
}
