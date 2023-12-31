function ApartmentContainerInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full flex-col lg:flex-row gap-5 ">
      {children}
    </div>
  )
}
export default ApartmentContainerInfo