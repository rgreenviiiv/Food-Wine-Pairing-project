  let imageClicked = document.querySelector('.clicked');
  let textForm = document.querySelector('.textForm');
  let recipeDiv = document.querySelector('.hidden');
  let recipeDiv2 = document.querySelector('.hidden2');
  let recipeDiv3 = document.querySelector('.hidden3');
  let recipesTitles = document.getElementById('recTitle');
  let recipeIngredientsImg = document.querySelector('li');
  let h1 = document.querySelector('.recipelist');
  let sourceUrl = document.querySelector('.sourceUrl');
  let CURRENT_RECIPE;
  let email_form = document.querySelector('#user_email_form');
  let drywhite = document.querySelector('.drywhite');
  let richwhite = document.querySelector('.richwhite');
  let sparkling = document.querySelector('.sparkling');
  let sweetwhite = document.querySelector('.sweetwhite');
  let lightred = document.querySelector('.lightred');
  let mediumred = document.querySelector('.mediumred');
  let boldred = document.querySelector('.boldred');
  let dessert = document.querySelector('.dessert');

   drywhite.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "vegatables")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })

   richwhite.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "Lobster")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })
   sparkling.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "vegatables")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
           listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })

   sweetwhite.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "cheese")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })
   lightred.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "vegatables")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })

   mediumred.addEventListener('click', function(e){
     e.preventDefault();
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "red meat")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })

   boldred.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "cured meat")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })

   dessert.addEventListener('click', function(e){
     recipeDiv.style.display = "inline";
     recipeDiv3.style.display = "none";
     axios.all([
         axios.get('/food2fork/' + "dessert")
       ]).then(function(result) {
         let recIng = result[0].data.recipes;
         console.log(recIng);

         recIng.forEach((recipe) => {
          let listOfRecipes = document.createElement("li");
           listOfRecipes.setAttribute('class','title is-3')
           let recipeIngredients = document.createTextNode(recipe.title);
          //  listOfRecipes.append(recipeIngredients);
          listOfRecipes.textContent = recipe.title;
           recipesTitles.prepend(listOfRecipes);
           listOfRecipes.addEventListener('mouseover',function(e){
            //  e.preventDefault();
             CURRENT_RECIPE = recipe;
             recipeDiv2.style.display = "inline";
             document.moreRecipes.src = recipe.image_url;
             h1.textContent = recipe.title;
             sourceUrl.textContent = recipe.source_url;
             //
           })
         });
       })
       .catch(function(error) {
         console.log(error);
       })
   })

  imageClicked.addEventListener('click', function(e) {
    // alert('its been clicked ' + textForm.value );
    // console.log(textForm.value);
    let underThis;
    recipeDiv.style.display = "inline";
    recipeDiv3.style.display = "none";
    axios.all([
        axios.get('/food2fork/' + "chicken")
      ]).then(function(result) {
        // console.log(data);
        let recIng = result[0].data.recipes;
        console.log(recIng);

        recIng.forEach((recipe) => {
          // console.log(recIng[i].title);
          // document.querySelector('.recTitle').innerHTML = "<li>" + recIng[i].title + "</li>";
          let listOfRecipes = document.createElement("li");
          listOfRecipes.setAttribute('class','title is-3')
          let recipeIngredients = document.createTextNode(recipe.title);
          listOfRecipes.append(recipeIngredients);
          recipesTitles.append(listOfRecipes);

          listOfRecipes.addEventListener('mouseover',function(e){
            CURRENT_RECIPE = recipe;
            recipeDiv2.style.display = "inline";
            document.moreRecipes.src = recipe.image_url;
            h1.textContent = recipe.title;
            sourceUrl.textContent = recipe.source_url;
            //
          })

        });


        // console.log(result.length);
        // let whatIneed = recipesTitles.textContent
        // console.log(recipesTitles.textContent);
        // console.log(recipeIngredients);
        // console.log(li.textContent);
// save the recipe information to the email and connect the
      })
      // console.log(listOfRecipes);
      // setInterval()

      .catch(function(error) {
        console.log(error);
      })
  });
  function myHide() {
    recipeDiv.style.display = "none";
    recipeDiv2.style.display = "none";
  }
email_form.addEventListener('submit',function(e){
  e.preventDefault();
  const data = {
    email: email_form.querySelector('#email-input').value,
    favorites: JSON.stringify([CURRENT_RECIPE])
  }
  axios.post('/users', data)
  .then((user) => {
    console.log(user);
  })
  .catch(function(){
    console.log("retrying");
    axios.get('/users',{
      params:{
        email: data.email
      }
    }).then((response) => {
      const user = response.data[0]
      data.favorites = JSON.parse(data.favorites).concat(user.favorites)
      axios.patch(`/users/${user.id}`, data)
      .then((user) => {
        console.log(user);
      })
    })
  })
})
window.onload = myHide();
