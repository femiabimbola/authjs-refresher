import {Separator} from "@/components/ui/separator";

const WordSeparator = ({word}: {word: String}) => {
  return (
    <div className="flex justify-center gap-x-2 mt-2">
      <Separator className=" mt-3 bg-slate-500 w-[30%] " />
      <p className="font-normal text-sm">{word}</p>
      <Separator className="bg-slate-500 mt-3 w-[30%]" />
    </div>
  );
};

export default WordSeparator;
