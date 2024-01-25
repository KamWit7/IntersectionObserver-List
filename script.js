let items = document.querySelectorAll(".item")

const animate = (entries) => {
  entries.forEach((e, idx, arr) => {
    e.target.classList.toggle("elo", e.isIntersecting)

    if (e.isIntersecting && e.target.classList.contains("last")) {
      console.log(e.target.innerText)

      addItems(e.target)
    }
  })
}

const observer = new IntersectionObserver(animate, {
  threshold: 1,
})

const changeLastItem = (newItem, oldItem) => {
  oldItem.innerText = "Item"
  oldItem.classList.remove("last")

  newItem.innerText = "Last Item"
  newItem.classList.add("last")
}

const addItems = (lastItem) => {
  const wrapper = document.querySelector(".wrapper")

  Array.from(Array(10).keys()).forEach((_i, idx, arr) => {
    const element = document.createElement("div")

    element.classList.add("item")
    element.innerText = "Item"

    const isLastElement = arr.length === idx + 1
    if (isLastElement) changeLastItem(element, lastItem)

    wrapper.appendChild(element)
    observer.observe(element)
  })
}

items.forEach((item) => {
  observer.observe(item)
})
