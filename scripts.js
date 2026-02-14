// load Catagory to aside
const loadCategory = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
      displayLoadCatagory(data.categories);
    });
};
loadCategory();

// Display Catagory to aside
const displayLoadCatagory = catagories => {
  // step-1 : Get the container & empty
  const catagoryContainer = document.getElementById('catagory-container');
  catagoryContainer.innerHTML = '';
  // step-2 : Get into every lessons
  for (const catagory of catagories) {
    // step-3 : crete element
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = ` 
               <ul id="catagory-btn-${catagory.id}" onclick="showCatagoricalTree(${catagory.id})"
              class="space-y-2 text-sm bg-[#DCFCE7] common-btn">
             <li class="px-3 py-2 rounded-md hover:bg-[#15803D] cursor-pointer transition">
             ${catagory.category_name}
              </li>
              </ul>
              `;
    // step-4 : append into container
    catagoryContainer.append(btnDiv);
  }
};

const removeActive = () => {
  const caAllBtn = document.querySelectorAll('.common-btn');
  //console.log(caAllBtn)
  caAllBtn.forEach(btn => btn.classList.remove('active'));
};

// https://openapi.programming-hero.com/api/category/${id}
//onClick(showSpecificTree()

const showCatagoricalTree = id => {
  manageSpinner(true); //

  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
      removeActive();
      const clickCtaButton = document.getElementById(`catagory-btn-${id}`);
      clickCtaButton.classList.add('active');
      displayCatagoricalTree(data.plants);
    });
};

const displayCatagoricalTree = catWords => {
  const allCatPlantsContainer = document.getElementById('all-plants');
  allCatPlantsContainer.innerHTML = '';
  // step-2 : Get into every lessons
  for (const catWord of catWords) {
    // step-3 : crete element
    const allCatPlantDiv = document.createElement('div');

    allCatPlantDiv.innerHTML = ` 
                             <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 w-full">
                  <figure class="p-3">
                    <img class="rounded-md h-36 w-full object-cover" src="${catWord.image}" alt="" />
                  </figure>

                  <div class="p-4 space-y-2 cursor-pointer transition ">
                    <h2 onclick="showWordDetailforModal(${catWord.id})"class="text-sm font-semibold">${catWord.name}</h2>

                    <p class="text-xs text-gray-500">
                      ${catWord.description}
                    </p>

                    <div class="flex justify-between items-center">
                      <span onClick() class="text-xs bg-[#CFF0DC] text-[#15803D] px-2 py-1 rounded-full">
                        ${catWord.category}
                      </span>
                      <span class="font-semibold text-sm">৳<span> ${catWord.price}</span></span>
                    </div>
               <button
              onclick="addToCart('${catWord.name}', '${catWord.price}')" 
              class="w-full mt-2 text-sm py-2 rounded-full bg-[#15803D] text-white hover:bg-green-700 cursor-pointer transition">
              Add to Cart
             </button>
                  </div>
                </div>
              `;
    // step-4 : append into container
    allCatPlantsContainer.append(allCatPlantDiv);
  }
  manageSpinner(false);
  //console.log(catWords);
  // get the container empty
  // get into every lesson
  // crete elemet
  // append
};

// load plants
const loadPlants = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => {
      displayLoaAllPlants(data.plants);
    });
};
loadPlants();

// Display Catagory to aside
const displayLoaAllPlants = allPlants => {
  // step-1 : Get the container & empty
  const allPlantsContainer = document.getElementById('all-plants');
  // console.log(allPlantsContainer);
  // console.log(allPlants)
  allPlantsContainer.innerHTML = '';
  // step-2 : Get into every lessons
  for (const plant of allPlants) {
    // step-3 : crete element
    const allPlantDiv = document.createElement('div');
    allPlantDiv.innerHTML = ` 
                             <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 w-full">
                  <figure class="p-3">
                    <img class="rounded-md h-36 w-full object-cover" src="${plant.image}" alt="" />
                  </figure>

                  <div class="p-4 space-y-2 cursor-pointer transition">
                    <h2 onclick="showWordDetailforModal(${plant.id})" class="text-sm font-semibold">${plant.name}</h2>

                    <p class="text-xs text-gray-500">
                      ${plant.description}
                    </p>

                    <div class="flex justify-between items-center">
                      <span onClick() class="text-xs bg-[#CFF0DC] text-[#15803D] px-2 py-1 rounded-full">
                        ${plant.category}
                      </span>
                      <span class="font-semibold text-sm">৳<span> ${plant.price}</span></span>
                    </div>

                    <button
                   onclick="addToCart('${plant.name}', '${plant.price}')" 
                   class="w-full mt-2 text-sm py-2 rounded-full bg-[#15803D] text-white hover:bg-green-700 cursor-pointer transition">
                   Add to Cart
                  </button>
                  </div>
                </div>
              `;
    // step-4 : append into container
    allPlantsContainer.append(allPlantDiv);
  }
};

// Modal Part
const showWordDetailforModal = async id => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  //console.log(url)
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetailforModal(details.plants);
};
const displayWordDetailforModal = details => {
  console.log(details);
  const detailsModal = document.getElementById('modal-container');
  detailsModal.innerHTML = `<h1 class="font-bold text-xl">${details.name}</h1>
        <img class="rounded-md h-56 w-full object-cover" src="${details.image}" alt="">
        <h2><span class="font-bold">Catagory:</span>${details.category} </h2>
        <p><span class="font-bold">Price:</span>৳${details.price}</p>
        <P> <span class="font-bold">Description:</span>${details.description}</P>`;
  document.getElementById('modal-design').showModal();
};

// spinner
const manageSpinner = status => {
  if (status == true) {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('all-plants').classList.add('hidden');
  } else {
    document.getElementById('all-plants').classList.remove('hidden');
    document.getElementById('spinner').classList.add('hidden');
  }
};

let cart = [];
let totalAmount = 0;


const addToCart = (name, price) => {
  const item = {
    id: Date.now(), // unique ID for removing
    name: name,
    price: parseInt(price),
  };

  cart.push(item);
  updateCartUI();
};

const updateCartUI = () => {
  const cartContainer = document.querySelector('#cart-details .space-y-3');
  const totalElement = document.querySelector(
    '#cart-details .flex.justify-between.font-semibold.text-sm span:last-child',
  );

  cartContainer.innerHTML = '';
  let currentTotal = 0;

  cart.forEach(item => {
    currentTotal += item.price;

    const cartItem = document.createElement('div');
    cartItem.className =
      'bg-green-100 flex justify-between items-center rounded-md p-3';

    cartItem.innerHTML = `
      <div>
        <h4 class="font-semibold text-sm">${item.name}</h4>
        <p class="text-xs text-gray-500">৳${item.price} × 1</p>
      </div>
      <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 font-bold text-lg transition">
        ×
      </button>
    `;

    cartContainer.appendChild(cartItem);
  });

  totalElement.innerText = `৳${currentTotal}`;
};

const removeFromCart = (id) => {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
};
