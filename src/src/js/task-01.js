const ulCategories = document.getElementById("categories")
console.log(`Number of categories: ${ulCategories.children.length}`)

const firstLi = document.querySelectorAll(".item")
firstLi.forEach(li => {
    console.log(`Category: ${li.firstElementChild.textContent}`)
    console.log(`Elements: ${li.getElementsByTagName("li").length}`)
})