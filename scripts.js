// load Catagory
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
              <ul class="space-y-2 text-sm bg-[#DCFCE7]">
                <li class="px-3 py-2 rounded-md hover:bg-[#15803D] cursor-pointer transition">
                  ${catagory.category_name}
                </li>
              </ul>
              `;
    // step-4 : append into container
    catagoryContainer.append(btnDiv);
  }
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

                  <div class="p-4 space-y-2">
                    <h2 class="text-sm font-semibold">${plant.name}</h2>

                    <p class="text-xs text-gray-500">
                      ${plant.description}
                    </p>

                    <div class="flex justify-between items-center">
                      <span class="text-xs bg-[#CFF0DC] text-[#15803D] px-2 py-1 rounded-full">
                        ${plant.category}
                      </span>
                      <span class="font-semibold text-sm">৳<span> ${plant.price}</span></span>
                    </div>

                    <button
                      class="w-full mt-2 text-sm py-2 rounded-full bg-[#15803D] text-white hover:bg-green-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              `;
    // step-4 : append into container
    allPlantsContainer.append(allPlantDiv);
  }
};

