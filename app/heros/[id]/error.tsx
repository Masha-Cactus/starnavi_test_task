"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error(
  { error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="bg-bgGrey self-center justify-self-center">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className={`text-2xl font-bold leading-10 tracking-tight bg-clip-text text-transparent bg-secondary`}>
					Something went wrong
        </h1>
        <p className={`mt-6 max-w-2xl text-base leading-7 bg-clip-text text-transparent bg-secondary`}>
          <code>{error.message}</code>
        </p>
        <button
          className={`mt-8 h-10 rounded-md bg-purple px-6 font-semibold text-text`}
          onClick={() => reload()}
        >
					Try again
        </button>
      </div>
    </div>
  );
}