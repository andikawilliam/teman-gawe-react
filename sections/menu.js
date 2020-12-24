import Quote from '../components/quote'
import Product from '../components/product'

export default function Menu(props) {
  return (
    <div className={props.className}>
      <div
        id="menu"
        className="text-2xl font-bold text-center mt-16 text-red-teman lg:text-3xl xl:w-3/5 xl:mx-auto"
      >
        Our Menu
      </div>
      <div className="justify-between mt-16 sm:mt-12 sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 lg:mt-4 xl:w-3/5">
        <Product
          className="text-kopi-susu"
          name="Gawe Kopi Susu"
          description="Our signature coffee milk. Ready to energize you."
          pricing="13k"
        />
        <Product
          className="text-kopi-coconut"
          name="Gawe Kopi Coconut"
          description="Our signature coffee milk with coconut blend. 🥥"
          pricing="14k"
        />
        <Product
          className="text-kopi-americano"
          name="Gawe Americano"
          description="Espresso and water. The American way. 🇺🇸"
          pricing="10k"
        />
      </div>
      <Quote className="sm:w-4/5 sm:mx-auto sm:mt-12 sm:text-center lg:w-1/2 xl:text-sm xl:w-2/5"/>
    </div>
  )
}