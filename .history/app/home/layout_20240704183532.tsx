export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-fit flex-1 bg-[url("/maurice.jpeg")] bg-cover`}>
      {children}
    </div>
  )
}
