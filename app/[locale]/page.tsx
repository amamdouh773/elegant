import HomePage from "../components/Home";

export default async function Home({
  params
}: {
  params: { locale: string }
}) {
  const {locale} = await params;
  return (
    <div className="font-sans">
      <HomePage locale={locale} />
    </div>
  );
}
