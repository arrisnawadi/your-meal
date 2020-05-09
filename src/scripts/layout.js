import { mealByCategory, mealByCountry, getDetail } from "./app";

// memanggil element
const listMealElement = document.getElementById("listMeals");

// menampilkan daftar kategori makanan
export const allCategories = (categories) => {
    const listCategoryElement = document.getElementById("listCategories");
    listCategoryElement.innerHTML = "";

    categories.forEach(category => {
        listCategoryElement.innerHTML += `
                <li class="list-group-item meal-category" id="${category.strCategory}">${category.strCategory}</li>
            `;
    });

    // melakukan filter berdasaran kategori makanan yang dipilih
    const selects = document.querySelectorAll(".meal-category");
    selects.forEach(select => {
        select.addEventListener("click", event => {
            const categoryId = event.target.id;
            mealByCategory(categoryId);
        });
    });
}

// menampilkan daftar negara makanan
export const allCountries = (countries) => {
    const listCountryElement = document.getElementById("listCountries");
    listCountryElement.innerHTML = "";

    countries.forEach(country => {
        listCountryElement.innerHTML += `
                <li class="list-group-item meal-country" id="${country.strArea}">${country.strArea}</li>
            `;
    });

    // melakukan filter berdasaran negara makanan yang dipilih
    const selects = document.querySelectorAll(".meal-country");
    selects.forEach(select => {
        select.addEventListener("click", event => {
            const categoryId = event.target.id;
            mealByCountry(categoryId);
        });
    });
}

// menampilkan daftar makanan yang dipiih
export const mealList = (meals) => {
    listMealElement.innerHTML = "";

    meals.forEach(meal => {
        listMealElement.innerHTML += `
            <div class="col mb-4">
                <div class="card h-100 mx-auto meal-card">
                    <img src=${meal.strMealThumb} class="card-img-top" alt="category_image">
                    <div class="card-body text-center">
                        <h5 class="card-title meal-title" id="${meal.idMeal}" data-toggle="modal"
                        data-target="#mealModal">${meal.strMeal}</h5>			
                    </div>
                </div>
            </div>
            `;
    });

    // melakukan filter berdasaran id makanan yang dipilih
    const selects = document.querySelectorAll(".meal-title");
    selects.forEach(select => {
        select.addEventListener("click", event => {
            const mealId = event.target.id;
            getDetail(mealId);
        });
    });
}

// menampilkan detail makanan
export const mealDetail = (meals) => {
    const listMealElement = document.getElementById("details");
    listMealElement.innerHTML = "";

    meals.forEach(meal => {
        // membuat baris baru setiap kalimat instruksi pembuatan
        let instruction = meal.strInstructions.replace(/(?<=\w\.)\s/g, "<br>");

        // filter bahan makanan
        let bahan = `${meal.strMeasure1} ${meal.strIngredient1}, ${meal.strMeasure2} ${meal.strIngredient2}, ${meal.strMeasure3} ${meal.strIngredient3}, ${meal.strMeasure4} ${meal.strIngredient4}, ${meal.strMeasure5} ${meal.strIngredient5}, ${meal.strMeasure6} ${meal.strIngredient6}, ${meal.strMeasure7} ${meal.strIngredient7}, ${meal.strMeasure8} ${meal.strIngredient8}, ${meal.strMeasure9} ${meal.strIngredient9}, ${meal.strMeasure10} ${meal.strIngredient10}, ${meal.strMeasure11} ${meal.strIngredient11}, ${meal.strMeasure12} ${meal.strIngredient12}, ${meal.strMeasure13} ${meal.strIngredient13}, ${meal.strMeasure14} ${meal.strIngredient14}, ${meal.strMeasure15} ${meal.strIngredient15}, ${meal.strMeasure16} ${meal.strIngredient16}, ${meal.strMeasure17} ${meal.strIngredient17}, ${meal.strMeasure18} ${meal.strIngredient18}, ${meal.strMeasure19} ${meal.strIngredient19}, ${meal.strMeasure20} ${meal.strIngredient20}`;
        let filterBahan = bahan.replace(/\,(?!\s\w)/g, "");

        listMealElement.innerHTML += `
            <div class="modal-header border-0">
                <h5 class="modal-title text-info font-weight-bold" id="mealModalTitle">${meal.strMeal}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="card border-0">
                    <img class="card-img-top mx-auto d-block mb-3" src=${meal.strMealThumb} alt="meal picture" style="width:50%;" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item font-weight-bold border-bottom-0 py-0">Country:</li>
                        <li class="list-group-item py-0">${meal.strArea}</li>
                        <li class="list-group-item font-weight-bold border-bottom-0 py-0">Ingredients:</li>
                        <li class="list-group-item py-0">${filterBahan}</li>
                        <li class="list-group-item font-weight-bold border-bottom-0 py-0">Steps:</li>
                        <li class="list-group-item py-0">${instruction}</li>
                    </ul>
                </div>
			</div>
            `;
    });
}