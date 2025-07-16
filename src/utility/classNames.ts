/**
 * @author Suraj Singh Chahar
 * @description Utility function for combining CSS class names
 */

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
