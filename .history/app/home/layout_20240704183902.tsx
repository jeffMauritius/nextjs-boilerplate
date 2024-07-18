export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex h-4/5 bg-[url("/maurice.jpeg")] bg-cover`}>
      {children}
    </div>
  )
}
