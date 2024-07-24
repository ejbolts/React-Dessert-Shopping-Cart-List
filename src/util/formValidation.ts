export function validateForm(data: Record<string, FormDataEntryValue>) {
  const errors: Record<string, string> = {};
  if (
    !data.firstName ||
    typeof data.firstName !== "string" ||
    data.firstName.trim() === ""
  ) {
    errors.firstName = "First name is required";
  }
  if (
    !data.lastName ||
    typeof data.lastName !== "string" ||
    data.lastName.trim() === ""
  ) {
    errors.lastName = "Last name is required";
  }
  if (
    !data.email ||
    typeof data.email !== "string" ||
    !/\S+@\S+\.\S+/.test(data.email)
  ) {
    errors.email = "A valid email is required";
  }
  if (
    !data.address ||
    typeof data.address !== "string" ||
    data.address.trim() === ""
  ) {
    errors.address = "Address is required";
  }
  return errors;
}
