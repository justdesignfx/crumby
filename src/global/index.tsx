export interface Product {
  desc: string
  name: string
  imgs: string[]
  similarProducts: CardProduct[]
  specs: {
    name: string
    icon: string
  }[]
  accordion: {
    desc: string
    title: string
  }[]
  media: {
    mediaType: "video" | "image"
    src: string
  }
}

export interface CardProduct {
  hoverImg: { bottom: string; top: string }
  name: string
  img: string
}
