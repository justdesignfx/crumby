export interface Product {
  desc: string
  name: string
  imgs: string[]
  similarProducts: Product[]
  specs: {
    name: string
    icon: string
  }[]
  specs2: {
    desc: string
    title: string
  }
  video: string
}

export interface CardProduct {
  cakes: { bottom: string; top: string }
  name: string
  img: string
}
