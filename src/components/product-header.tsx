import InputWithButtonInput, {
  IconButton,
} from "@/app/(customerFacing)/[category]/_components/search-input";
import { Search } from "lucide-react";

export function ProductHeader() {
  return (
    <>
      <div className="justify-between items-center flex">
        <h1 className="capitalize font-semibold text-lg sm:text-2xl ">
          Give all you need
        </h1>
        <InputWithButtonInput
          placeholder="Search on stuffus"
          text="Search"
          iconComponent={<Search className="stroke-inherit" />}
        />
        <IconButton
          label="search icon"
          icon={<Search className="stroke-inherit" />}
        />
      </div>
    </>
  );
}
