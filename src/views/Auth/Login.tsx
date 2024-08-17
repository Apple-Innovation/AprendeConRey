import { useSessionStore } from "@/app/useStore";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import { ROUTES } from "@/router/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { FormInput } from "./FormInput";

export const loginSchema = z.object({
  username: z
    .string({ required_error: "ZOD_REQUERIDO" })
    .min(3, { message: "ZOD_MIN minimo 3 caracteres" })
    .max(20, { message: "ZOD_MAX máximo 3 caracteres" }),
  password: z
    .string({ required_error: "ZOD_REQUERIDO" })
    .min(3, { message: "ZOD_MIN minimo 3 caracteres" })
    .max(20, { message: "ZOD_MAX máximo 3 caracteres" }),
});
export type LoginSchema = z.infer<typeof loginSchema>;

export function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(loginSchema),
  });
  const { updateUser, login } = useSessionStore((state) => ({
    updateUser: state.updateUser,
    login: state.login,
  }));
  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    updateUser(data);
    login(data);
    navigate(ROUTES.DASHBOARD, { replace: true });
  };

  return (
    <Card className="w-fit border-none bg-gray-100 ">
      <CardHeader className="dark:bg-slate-950 bg-blue-400 rounded-t-md">
        <CardTitle className="text-center text-gray-50">
          {t("nsLoginRegister.login.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <FormInput
              label={t("nsLoginRegister.login.username")}
              inputType="text"
              inputId="username"
              inputPlaceholder={t("nsLoginRegister.login.usernamePlaceholder")}
              inputAutoComplete="username"
              error={errors.username?.message}
              {...register("username")}
            />

            <FormInput
              label={t("nsLoginRegister.login.password")}
              inputType="password"
              inputId="password"
              inputPlaceholder={t("nsLoginRegister.login.password")}
              inputAutoComplete="current-password"
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="flex items-center space-x-2">
              <Switch id="remember-me" defaultChecked />
              <Label htmlFor="remember-me">
                {t("nsLoginRegister.login.rememberMe")}
              </Label>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-orange-400 px-10 shadow-lg border-4 border-white outline outline-1 outline-gray-200"
                style={{ transform: "perspective(300px) rotateY(-30deg)" }}
              >
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
        <Button
          className="bg-blue-400 text-gray-50"
          onClick={(e) => {
            e.preventDefault();
            navigate(ROUTES.SIGNUP, { replace: true });
          }}
        >
          {t("nsLoginRegister.login.register")}
        </Button>
      </CardFooter>
    </Card>
  );
}
