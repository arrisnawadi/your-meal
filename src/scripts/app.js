import { allCategories, allCountries, mealList, mealDetail } from "./layout"

const listHeader = document.getElementById("list-header")

function app() {
    // memanggil element
    const searchInput = document.getElementById("searchMeal")
    const notFound = document.querySelector(".not-found")

    // cari makanan berdasarkan nama
    searchInput.addEventListener("search", function () {
        searchMeals(this.value)
        this.value = ""
        this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].firstElementChild.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })

    // ambil data makanan berdasarkan pencarian
    const searchMeals = async (keyword) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            const responseJson = await response.json()
            if (responseJson) {
                mealList(responseJson.meals)
                notFound.style.visibility = "hidden"
            } else {
                alert('error')
            }
        } catch (error) {
            notFound.style.visibility = "visible"
            notFound.innerHTML = `
            <div class="alert alert-danger w-75 p-2 text-center mx-auto" role="alert">
                Nama makanan tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
        }
    }

    // ambil data makanan berdasarkan kategori
    const getCategories = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            const responseJson = await response.json()
            if (responseJson) {
                allCategories(responseJson.meals)
            } else {
                alert("error")
            }
        } catch (error) {
            alert(error)
        }
    }

    // ambil data makanan berdasarkan negara
    const getCountries = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            const responseJson = await response.json()
            if (responseJson) {
                allCountries(responseJson.meals)
            } else {
                alert("error")
            }
        } catch (error) {
            alert(error)
        }
    }

    // ambil semua kategori makanan
    const randomMeal = async () => {
        try {
            const abjad = ["e", "f", "h", "k", "l", "m", "p", "r", "t"]
            const random = Math.floor(Math.random() * abjad.length)
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${abjad[random]}`)
            const responseJson = await response.json()
            if (responseJson) {
                mealList(responseJson.meals)
            } else {
                alert("error")
            }
        } catch (error) {
            notFound.innerHTML = `
            <div class="alert alert-danger w-75 p-2 text-center mx-auto" role="alert">
                Data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        getCategories()
        getCountries()
        randomMeal()
    })
}

// mengambil data makanan berdasarkan kategori
export const mealByCategory = async (categoryId) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
        const responseJson = await response.json()
        if (responseJson) {
            listHeader.scrollIntoView()
            mealList(responseJson.meals)
        } else {
            alert("error")
        }
    } catch (error) {
        notFound.innerHTML = `
            <div class="alert alert-danger w-75 p-2 text-center mx-auto" role="alert">
                Data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
    }
}

// mengambil data makanan berdasarkan negara
export const mealByCountry = async (categoryId) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${categoryId}`)
        const responseJson = await response.json()
        if (responseJson) {
            listHeader.scrollIntoView()
            mealList(responseJson.meals)
        } else {
            alert("error")
        }
    } catch (error) {
        notFound.innerHTML = `
            <div class="alert alert-danger w-75 p-2 text-center mx-auto" role="alert">
                Data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
    }
}

// mengambil data detail makanan berdasarkan id makanan
export const getDetail = async (mealId) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        const responseJson = await response.json()
        if (responseJson) {
            mealDetail(responseJson.meals)
        } else {
            alert("error")
        }
    } catch (error) {
        alert(error)
    }
}

export default app

