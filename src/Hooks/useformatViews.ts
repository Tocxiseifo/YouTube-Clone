export function useFormatViews(views?: string | number): string {
  if (!views) return "0";
  const num = typeof views === "string" ? parseInt(views) : views;
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
}