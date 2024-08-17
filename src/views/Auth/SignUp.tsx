import { useSessionStore } from "@/app/useStore";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { ROUTES } from "@/router/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { FormInput } from "./FormInput";

export const signUpSchema = z
  .object({
    email: z
      .string({ required_error: "ZOD_REQUERIDO" })
      .min(3, { message: "ZOD_MIN minimo 3 caracteres" })
      .max(20, { message: "ZOD_MAX máximo 3 caracteres" })
      .email({ message: "ZOD_EMAIL email inválido" }),
    password: z
      .string({ required_error: "ZOD_REQUERIDO" })
      .min(3, { message: "ZOD_MIN minimo 3 caracteres" })
      .max(20, { message: "ZOD_MAX máximo 3 caracteres" }),
    confirmPassword: z
      .string({ required_error: "ZOD_REQUERIDO" })
      .min(3, { message: "ZOD_MIN minimo 3 caracteres" })
      .max(20, { message: "ZOD_MAX máximo 3 caracteres" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "ZOD_REFINE contraseña no coincide",
    path: ["confirmPassword"],
  });
export type SignupSchema = z.infer<typeof signUpSchema>;

export function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    defaultValues: { email: "", password: "", confirmPassword: "" },
    resolver: zodResolver(signUpSchema),
  });
  const signup = useSessionStore((state) => state.signup);
  const onSubmit: SubmitHandler<SignupSchema> = async (data) => {
    signup(data);
    navigate(ROUTES.DASHBOARD, { replace: true });
  };

  return (
    <Card className="w-fit border-none bg-gray-100 ">
      <CardHeader className="dark:bg-slate-950 bg-blue-400 rounded-t-md">
        <CardTitle className="text-center text-gray-50">
          {t("nsLoginRegister.register.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <FormInput
              label={t("nsLoginRegister.register.email")}
              inputType="email"
              inputId="email"
              inputPlaceholder={t("nsLoginRegister.register.emailPlaceholder")}
              inputAutoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />
            <FormInput
              label={t("nsLoginRegister.register.password")}
              inputType="password"
              inputId="password"
              inputPlaceholder={t(
                "nsLoginRegister.register.passwordPlaceholder"
              )}
              inputAutoComplete="new-password"
              error={errors.password?.message}
              {...register("password")}
            />
            <FormInput
              label={t("nsLoginRegister.register.confirmPassword")}
              inputType="password"
              inputId="confirmPassword"
              inputPlaceholder={t(
                "nsLoginRegister.register.confirmPasswordPlaceholder"
              )}
              inputAutoComplete="new-password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
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
        <Button type="submit" className="bg-blue-400 text-gray-50">
          {t("nsLoginRegister.register.login")}
        </Button>
      </CardFooter>
    </Card>
  );
}
