export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className={`flex-1 bg-[url("/maurice.jpeg")] bg-cover`}>
        {children}
      </div>
    </div>
  )
}
