export default async function getPreviewVideo() {
  const res = fetch("");
  if (!res.ok) throw new Error("Not Found");
  return (await res).json();
}
