import gsap from "gsap"

export function parallaxItems() {
  const items: HTMLElement[] = Array.from(document.querySelectorAll("[data-parallax='true']"))

  if (items.length <= 0) return

  items.forEach((item: HTMLElement) => {
    const speedX = item.dataset.speedX ?? "1"
    const speedY = item.dataset.speedY ?? "1"
    const dirX = item.dataset.directionX ?? "1"
    const dirY = item.dataset.directionY ?? "1"

    gsap.to(item, {
      xPercent: () => 100 * parseFloat(speedX) * parseFloat(dirX),
      yPercent: () => 100 * parseFloat(speedY) * parseFloat(dirY),
      scrollTrigger: {
        id: "parallax-item",
        // markers: true,
        scrub: true,
        start: "top center-=25%",
        trigger: item,
      },
    })
  })

  console.log("PARALLAX ITEMS INITIALIZED")
}
