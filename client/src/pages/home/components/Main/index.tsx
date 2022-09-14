export default function HomePageContent({
  children,
}: {
  children: JSX.Element | String;
}) {
  return (
    <div className="page__content--wrapper">
      <main className="page__content">{children}</main>
    </div>
  );
}
