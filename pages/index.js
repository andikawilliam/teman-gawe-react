import Nav from '../components/nav'
import Header from '../components/header'
import About from '../components/about'
import Menu from '../components/menu'
import Footer from '../components/footer'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div
        className="relative px-8 sm:px-12 lg:px-16 bg-image"
      >
        <Header className="pt-28 pb-8 w-4/5 sm:pt-44 lg:w-2/3 lg:pb-44 xl:w-3/5"/>
        <About className="sm:mt-16"/>
      </div>
      <Menu className="pb-16 px-8 sm:px-12 lg:px-16"/>
      <Footer className="border-t-2"/>
    </div>
  )
}
