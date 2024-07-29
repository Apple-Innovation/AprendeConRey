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
import { LOGIN } from "@/router/routes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Card className="w-fit border-none bg-gray-100 ">
      <CardHeader className="bg-blue-400 rounded-t-md">
        <CardTitle className="text-center text-gray-50">
          {t("nsLoginRegister.register.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-gray-800">
                {t("nsLoginRegister.register.username")}
              </Label>
              <Input
                id="name"
                placeholder={t("nsLoginRegister.register.usernamePlaceholder")}
                className="min-w-80"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="text-gray-800">
                {t("nsLoginRegister.register.password")}
              </Label>
              <Input
                type="password"
                id="password"
                placeholder={t("nsLoginRegister.register.passwordPlaceholder")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword" className="text-gray-800">
                {t("nsLoginRegister.register.confirmPassword")}
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder={t(
                  "nsLoginRegister.register.confirmPasswordPlaceholder"
                )}
              />
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-orange-400 px-10 shadow-lg border-4 border-white outline outline-1 outline-gray-200"
                style={{ transform: "perspective(300px) rotateY(-30deg)" }}
              >
                {t("nsLoginRegister.register.register")}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 justify-center">
        <Button
          className="bg-blue-400 text-gray-50"
          onClick={() => navigate(LOGIN)}
        >
          {t("nsLoginRegister.register.login")}
        </Button>
      </CardFooter>
    </Card>
  );
}
