export default function SnackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className={`flex-1 bg-[url("/beach.webp")] bg-cover`}>
        {children}
      </div>
    </div>
  )
}
