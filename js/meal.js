const searchFood =() =>{
    var search=document.getElementById('search-field').value;
   // console.log(search.value);
var    url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    // fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data=>display(data.meals))
}

const display = meals =>{
   // console.log(meals.strMeal)
   var mealdiv=document.getElementById('meals')
  
   meals.forEach(meal => {
    const div=document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top ">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
    </div>
  </div>

    `;
mealdiv.appendChild(div);
       console.log(meal.strMeal)
   });
}

// function display(data){
//     console.log(data.meals.strMeal)
// }