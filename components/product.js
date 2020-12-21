import CoffeeCup from './coffee-cup'

export default function Product(props) {
  return (
    <div className={props.className}>
      <div className="flex relative my-8 sm:block lg:my-16">
        <CoffeeCup />
        <div className="text-black-gawe w-2/3 ml-4 sm:w-full sm:mx-0 sm:text-center ">
          <p className="font-bold lg:text-lg">
            {props.name}
          </p>
          <p className="italic font-light text-sm lg:text-base ">
            {props.description}
          </p>
          <p className="pt-2 lg:text-lg">
            IDR {props.pricing}
          </p>
        </div>
      </div>
    </div>
  )
}