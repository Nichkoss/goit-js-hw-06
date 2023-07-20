const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients")
const box=document.createDocumentFragment()
for (let ingr of ingredients) {
  const newLi = document.createElement("li")
  newLi.textContent = ingr
  newLi.classList.add("item")
  box.appendChild(newLi)
}
ul.append(box)
//тут щоб запушити всі лішки за одну операцію без фрагменту неможливо,правда?