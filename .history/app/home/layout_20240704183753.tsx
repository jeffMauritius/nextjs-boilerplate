export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex h-full bg-[url("/maurice.jpeg")] bg-cover`}>
      {children}
    </div>
  )
}
