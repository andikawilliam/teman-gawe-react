import Nav from '../components/nav'
import Header from './header'
import About from './about'
import Menu from './menu'
import Footer from './footer'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div
        className="relative px-8 sm:px-12 lg:px-16 bg-coffee-splash-mobile lg:bg-coffee-splash bg-image-config"
      >
        <Header className="pt-28 pb-8 w-full pr-2 sm:pr-10 sm:pt-44 lg:w-2/3 lg:pb-44 xl:w-3/5"/>
        <About className="sm:mt-16"/>
      </div>
      <Menu className="pb-16 px-8 sm:px-12 lg:px-16"/>
      <Footer className="border-t-2"/>
    </div>
  )
}
