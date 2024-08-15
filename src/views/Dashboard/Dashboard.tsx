import { useSessionStore } from "@/app/useStore";

export function Dashboard() {
  const user = useSessionStore((state) => state.user);

  return (
    <div className="h-dvh w-full dark:text-gray-200 dark:bg-tile-pattern-dark bg-tile-pattern-light">
      Dashboard
      <pre className="flex justify-center pt-40">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
