export default function ProductsDetailsLayout({
  children,
} : {
  children: React.ReactNode;
}
){
  return(
    <>
    {children}
    <h1>Featured Products--------!</h1>
    </>
  )
}