import gsap from "gsap"

export function parallaxItems() {
  const items: HTMLElement[] = Array.from(document.querySelectorAll("[data-parallax='true']"))

  if (items.length <= 0) return

  items.forEach((item: HTMLElement) => {
    const speedX = item.dataset.speedX || "0"
    const speedY = item.dataset.speedY || "0"
    const dirX = item.dataset.directionX || "0"
    const dirY = item.dataset.directionY || "0"

    gsap.to(item, {
      xPercent: () => 100 * parseFloat(speedX) * parseFloat(dirX),
      yPercent: () => 100 * parseFloat(speedY) * parseFloat(dirY),
      scrollTrigger: {
        id: "parallax-item",
        trigger: item,
        scrub: true,
        markers: true,
        start: "top center-=25%",
      },
    })
  })

  console.log("PARALLAX ITEMS INITIALIZED")
}
