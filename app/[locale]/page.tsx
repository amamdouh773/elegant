import HomePage from "../components/Home";

export default async function Home({
  params:  { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="font-sans">
      <HomePage locale={locale} />
    </div>
  );
}
