import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function Quote(props) {
  return (
    <div className={ props.className }>
      <p className="text-black-gawe text-base font-light italic lg:text-xl">
        "<span className="font-medium">Everyone deserves a great coffee. </span>
        Everyday, we strive to provide the best coffee to help people focus 
        on their daily tasks.“
      </p>
      <p className="mt-4 text-xs lg:text-base font-bold">
        Aflah Nadhif
      </p>
      <p className="text-xs lg:text-base text-gray-500">
        Teman Gawe co-founder
      </p>
    </div>
  )
}