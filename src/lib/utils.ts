export function generateClassName(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
