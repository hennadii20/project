(function (){
    let homeHtml = 'main_content.html';
    let categoryHtml = 'menu.json';
    let finalCategoryCode = '<h2 id="menu-categories-title" class="text-center wow zoomIn">Menu categories</h2>';
    let nav_menu = document.querySelectorAll('.nav_menu'); 

    document.addEventListener('DOMContentLoaded', function(event){
        fetch(homeHtml)
            .then((response) => response.text())
            .then((data) => document.querySelector('#main-content').innerHTML = data);
    })

    nav_menu.forEach(item => {
        item.addEventListener('click', (event) =>{
            console.log(event);
            fetch(categoryHtml)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for(let i=0; i < data.length; i++){
                    finalCategoryCode += ` 
                        <div class="col-md-3 col-sm-4 col-xs-6 col-xxs categories-tile-margin">
                            <a href="single-category.html">
                                <div class="category-tile wow zoomIn" data-wow-delay="0.2s">
                                    <img class="single-category-cup" src="${data[i].url}" alt="${data[i].name}" width="200" height="200">
                                    <span>${data[i].name}</span>
                                </div>
                            </a>
                        </div>`;
                }
                document.querySelector('#main-content').innerHTML = `<section class="row">${finalCategoryCode}</section>`;
            })
        })
    })
})();