export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`h-lvh flex-1 bg-[url("/maurice.jpeg")] bg-cover`}>
      {children}
    </div>
  )
}
