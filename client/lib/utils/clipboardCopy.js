export function copy(text) {
  return text = navigator.clipboard.writeText(text);
}