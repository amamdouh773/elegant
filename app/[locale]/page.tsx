import HomePage from "../components/Home";

type PageProps = {
  params: Promise<{ locale: string }>; // Correct type
};


export default async function Home({
  params
}: PageProps) {
  const {locale} = await params;
  return (
    <div className="font-sans">
      <HomePage locale={locale} />
    </div>
  );
}
