import { useSessionStore } from "@/app/useStore";
import cabezaVelazquez from "@/assets/cabezaVelazquez.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/NavigationMenu";
import { NavigationMenuSub } from "@/components/NavigationMenu/NavigationMenuSub";
import { CircleAlert } from "lucide-react";

export function Dashboard() {
  const { user, logout } = useSessionStore((state) => ({
    user: state.user,
    logout: state.logout,
  }));

  return (
    <div className="h-dvh flex flex-row dark:text-gray-200 dark:bg-tile-pattern-dark bg-tile-pattern-light">
      <section className="text-nowrap bg-white dark:bg-slate-950">
        <h1 className="text-blue-400 text-xl font-fredoka p-4">
          APRENDE CON <span className="text-orange-400">REY</span>
        </h1>

        <Avatar className="mx-auto size-40 bg-gray-200 p-5 border-8 border-gray-50 shadow">
          <AvatarImage src={cabezaVelazquez} alt="Velázques" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>

        <h2 className="p-4 pb-0 text-center">¡Bienvenido!</h2>
        <NavigationMenu
          className="flex flex-col max-w-full p-4 text-sm"
          orientation="vertical"
        >
          <NavigationMenuSub className="flex-col w-full">
            <NavigationMenuList className="flex flex-col space-x-0">
              <NavigationMenuItem className="w-full bg-inherit text-gray-800 dark:text-gray-200 hover:text-gray-50 hover:bg-orange-400 cursor-pointer py-2 px-4 rounded transition-colors duration-100 ease-in-out">
                <NavigationMenuLink className="flex flex-row items-center">
                  <CircleAlert className="size-4 mr-2" />
                  Jugar
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full bg-inherit text-gray-800 dark:text-gray-200 hover:text-gray-50 hover:bg-orange-400 cursor-pointer py-2 px-4 rounded transition-colors duration-100 ease-in-out">
                <NavigationMenuLink className="flex flex-row items-center">
                  <CircleAlert className="size-4 mr-2" />
                  Videos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full bg-inherit text-gray-800 dark:text-gray-200 hover:text-gray-50 hover:bg-orange-400 cursor-pointer py-2 px-4 rounded transition-colors duration-100 ease-in-out">
                <NavigationMenuLink className="flex flex-row items-center">
                  <CircleAlert className="size-4 mr-2" />
                  Mi perfil
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenu>
        <Button
          type="button"
          className="fixed z-10 bottom-20 bg-red-500 px-10 shadow-lg border-4 border-white outline outline-1 outline-gray-200"
          style={{ transform: "perspective(300px) rotateY(-30deg)" }}
          onClick={logout}
        >
          Cerrar sesión
        </Button>
      </section>
      <section className="w-full">
        <pre className="flex justify-center pt-40">
          {JSON.stringify(user, null, 2)}
        </pre>
      </section>
    </div>
  );
}
