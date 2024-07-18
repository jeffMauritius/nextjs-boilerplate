import Image from "next/image"

export default function Home() {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4">
      <div className="row-span-3">
        <Image src={`beach.webp`} />
      </div>
      <div className="col-span-2">
        <h1>Bienvenue chez Camille Snack</h1>
      </div>
      <div className="col-span-2 row-span-2">
        <p>
          Bienvenue chez Camille Snack, votre halte gourmande incontournable sur
          la magnifique plage de la Cuvette à Grand Baie. Venez savourer nos
          délicieuses gaufres dorées, nos crêpes sucrées ou salées, et une
          variété de petits snacks parfaits pour accompagner vos journées
          ensoleillées au bord de l'eau. Que vous souhaitiez une pause douceur
          après une baignade ou simplement un petit encas pendant votre
          promenade sur la plage, Camille Snack vous promet des produits frais
          et savoureux dans un cadre idyllique. Rejoignez-nous pour goûter au
          plaisir des vraies saveurs maison, les pieds dans le sable !
        </p>
      </div>
    </div>
  )
}
