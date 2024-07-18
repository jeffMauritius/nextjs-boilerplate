export default function SnackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex-1 bg-[url("/beach.webp")] bg-cover`}>{children}</div>
  )
}
