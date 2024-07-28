import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import { useTranslation } from "react-i18next";

export function Login() {
  const { t } = useTranslation();
  return (
    <Card className="w-fit border-none bg-gray-100 ">
      <CardHeader className="bg-blue-400 rounded-t-md">
        <CardTitle className="text-center text-gray-50">
          {t("nsLoginRegister.login.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-gray-800">
                {t("nsLoginRegister.login.username")}
              </Label>
              <Input
                id="name"
                placeholder={t("nsLoginRegister.login.usernamePlaceholder")}
                className="min-w-80"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-gray-800">
                {t("nsLoginRegister.login.password")}
              </Label>
              <Input
                id="name"
                placeholder={t("nsLoginRegister.login.passwordPlaceholder")}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="remember-me" defaultChecked />
              <Label htmlFor="remember-me">
                {t("nsLoginRegister.login.rememberMe")}
              </Label>
            </div>
            <div className="flex justify-center">
              <Button className="bg-orange-400 px-10 shadow-lg border-4 border-white -skew-y-2">
                {}
                {t("nsLoginRegister.login.enter")}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 justify-center">
        <p className="text-blue-400">
          {t("nsLoginRegister.login.forgotPassword")}
        </p>
        <Button className="bg-blue-400 text-gray-50">
          {t("nsLoginRegister.login.register")}
        </Button>
      </CardFooter>
    </Card>
  );
}
