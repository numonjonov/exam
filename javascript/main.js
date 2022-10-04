



const dateShowing = date => {
    return new Date(date);
}

const tempParrots = document.querySelector(".template");

const showingParrots = products.slice();

const parrotsList = document.getElementById("parrots-list");


const renderParrot = (parrot) => {
    const {
        id,
        title,
        img,
        price,
        birthDate,
        sizes: {
            width,
            height
        },
        features
    } = parrot;

    const tempBox = tempParrots.content.cloneNode(true);


    const parrotsTitle = tempBox.querySelector(".parrots__title")
    parrotsTitle.textContent = title;

    const parrotsImg = tempBox.querySelector(".parrots__img");
    parrotsImg.src = img;

    const parrotsMark = tempBox.querySelector(".parrots__mark");
    parrotsMark.textContent = `$${price}`;

    

    const parrotsBirthDate = tempBox.querySelector(".parrots__date");
    parrotsBirthDate.textContent = birthDate;

    const parrotsSize = tempBox.querySelector(".parrots__subtitle");
    parrotsSize.textContent = `${width} x ${height}`;

    // const parrotIsFavorite = templateBox.querySelector(".parrots__star-btn");
    const parrotFeatures = tempBox.querySelector(".parrots__list-item");
    parrotFeatures.innerText = features;

    const parrotsDelBtn = tempBox.querySelector(".parrots__edit-btn");
    parrotsDelBtn.setAttribute("data-parrot", id);

    const parrotEditBtn = tempBox.querySelector(".parrots__del-btn");
    parrotEditBtn.setAttribute("data-parrot", id);

    return tempBox;
} 

const renderParrots = () => {
    parrotsList.innerHTML = "";


    const parrotsFragment = document.createDocumentFragment();

    showingParrots.forEach(parrot => {
        const tempBoxing = renderParrot(parrot);
        parrotsFragment.append(tempBoxing);
    })

    parrotsList.append(parrotsFragment);
}

renderParrots();


const addForm = document.querySelector("#add-form");
const addParrotModalEl = document.querySelector("#add-parrot-modal");
const addParrotModal = new bootstrap.Modal(addParrotModalEl);

addForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const elements = event.target.elements

    const titleValue = elements.title.value
    const imgValue = elements.img.value
    const priceValue = elements.price.value
    const dateValue = elements.date.value
    const widthValue = elements.width.value
    const heightValue = elements.height.value
    const featuresValue = elements.features.value

    if (titleValue.trim() && imgValue.trim() && priceValue.trim() && dateValue.trim() && widthValue.trim() && heightValue.trim() && featuresValue.trim()) {
        const parrot = {
            title: titleValue,
            img:String(imgValue),
            price:priceValue,
            birthDate: dateValue,
            sizes: {
                width: widthValue,
                height: heightValue
            },
            features: featuresValue,
        }

        products.push(parrot)
        localStorage.setItem('products', JSON.stringify(products))
        showingParrots.push(parrot)

        addForm.reset()
        addParrotModal.hide()

        renderParrots()
    }
})




// parrotsList.addEventListener("click",function(evt) {
//     if(evt.target.matches(".parrots__del-btn")){
//         const deleteBtn = +evt.target.dataset.delete;
//         const deleteBtnIndex = tempBox.findIndex(product =>{
//             return product.id === deleteBtn;
//         })
//         localStorage.setItem("products",JSON.stringify(products));
//         products.splice(deleteBtnIndex,1);  
//         tempBox.splice(deleteBtnIndex,1)
//         renderParrots();
//     }
// }

















