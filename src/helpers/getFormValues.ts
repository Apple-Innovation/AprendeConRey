export function getFormValues<FormProps>(
  e: React.FormEvent<HTMLFormElement>
): FormProps {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries()) as FormProps;

  return formValues;
}
