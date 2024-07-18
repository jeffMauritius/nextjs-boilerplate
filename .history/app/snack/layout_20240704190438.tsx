export default function SnackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex-1 bg-[url("/maurice.jpeg")] bg-cover`}>
      {children}
    </div>
  )
}
