import React from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white">
    <header>
      <Header heading="GitHub Profile README Generator" />
    </header>
    <main className="flex-grow">{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
)
export default Layout
