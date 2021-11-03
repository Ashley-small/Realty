//sticky nav//
window.addEventListener("scroll", () => {
  let navbar = document.querySelector("header")
  navbar.classList.toggle("sticky", window.scrollY > 0)


})







//toggle classes//

let property = document.getElementsByClassName("property");
let propertyArr = [...property];
console.log(propertyArr);
let flat = [...property].filter(element => element.classList.contains("flat"))
let villa = [...property].filter(element => element.classList.contains("villa"))
let house = [...property].filter(element => element.classList.contains("house"))

document.getElementById("all-btn").addEventListener("click", () => {
  propertyArr.forEach(x => x.classList.add("show"))
});




document.getElementById("flat-btn").addEventListener("click", () => {
  flat.forEach(x => x.classList.add("show"));
  const nonFlat = propertyArr.filter(x => !flat.includes(x));
  nonFlat.forEach(x => x.classList.remove("show"));
})

document.getElementById('villa-btn').addEventListener("click", () => {
  villa.forEach(x => x.classList.add("show"));
  const nonVilla = propertyArr.filter(x => !villa.includes(x));
  nonVilla.forEach(x => x.classList.remove("show"));
})
document.getElementById('house-btn').addEventListener("click", () => {
  house.forEach(x => x.classList.add("show"));
  const nonHouse = propertyArr.filter(x => !house.includes(x));
  nonHouse.forEach(x => x.classList.remove("show"));
})


document.getElementById('reset-btn').addEventListener("click", () => {
  propertyArr.forEach(x => x.classList.remove("show"))
})
