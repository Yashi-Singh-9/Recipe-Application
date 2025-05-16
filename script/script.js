// Homepage: Fetch and render recipe cards
if (document.getElementById("recipes")) {
  fetch("https://dummyjson.com/recipes?limit=18")
    .then(res => res.json())
    .then(data => {
      const recipes = data.recipes;
      const container = document.getElementById("recipes");
      container.innerHTML = recipes.map(recipe => `
        <div class="recipe-card">
          <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img" />
          <h3 class="recipe-name">${recipe.name}</h3>
          <p class="time-taking">
            <img src="assets/mdi--clock-time-eight-outline.svg" class="icon" /> ${recipe.cookTimeMinutes} mins  
            <img src="assets/mdi--fire.svg" class="icon" /> ${recipe.caloriesPerServing} cal
            <img src="assets/mdi--star.svg" class="icon" /> ${recipe.rating} (${recipe.reviewCount})
          </p>
          <a class="button" href="pages/recipe.html?id=${recipe.id}">View</a>
        </div>
      `).join('');
    });
}

// Detail Page: Load individual recipe data
if (document.getElementById("recipe-details")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const pathPrefix = location.pathname.includes("pages/") ? "../" : "";

  fetch(`https://dummyjson.com/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => {
      document.getElementById("recipe-details").innerHTML = `
        <h1 class="recipe-name">${recipe.name}</h1>
        <p class="time-taking">
          <img src="${pathPrefix}assets/mdi--clock-time-eight-outline.svg" class="icon" /> ${recipe.cookTimeMinutes} mins  
          <img src="${pathPrefix}assets/mdi--fire.svg" class="icon" /> ${recipe.caloriesPerServing} cal  
          <img src="${pathPrefix}assets/mdi--star.svg" class="icon" /> ${recipe.rating} (${recipe.reviewCount})
        </p>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <h2>Ingredients</h2>
        <div class="ingredients">
          ${recipe.ingredients.map((ing, i) => `
            <label>
              <input type="radio" id="ing-${i}" />
              <span>${ing}</span>
            </label>
          `).join('')}
        </div>
        <h2>Instructions</h2>
        <ol>
          ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
      `;
    });
}
