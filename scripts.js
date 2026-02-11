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

