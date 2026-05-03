import { Tally5 } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-6 text-center">
        <Tally5
          className="h-12 w-12 text-zinc-700 dark:text-zinc-300"
          strokeWidth={1}
        />
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Five
        </h1>
      </div>
    </main>
  );
}