export default async function Mascots({
  params,
}: {
  params: Promise<{ mascots: string }>;
}) {
  const { mascots } = await params;
  return <div>My Post: {mascots}</div>;
}
