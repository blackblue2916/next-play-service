export default async function getAllUsers() {
  const res = fetch("");
  if (!res.ok) throw new Error("Not Found");
  return (await res).json();
}
