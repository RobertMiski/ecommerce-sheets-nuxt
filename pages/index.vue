<template>
  <div id="homepage">
    <div hidden id="snipcart" data-api-key="MTM5Yzg1MGQtNzM5MS00NDhkLWExNmItY2UxMzRiY2RjYzYyNjM3NTE1NDI2OTEwNzIxMjI1"></div>
    <nav>
    <div  class="nav-wrapper black">
      <a href="#" class="brand-logo truncate" style="font-size:23px">Cafetaria El Patron</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a class="btn-floating btn-large waves-effect waves-light grey darken-3 "><i class="material-icons">shopping_cart</i></a></li>

      </ul>
    </div>
  </nav>
    
    <div class="container">
      <div class="row">
        <div class="col m4 l4 cont">
          <div class="article m4 l4 categorie" v-for="article1 in article" v-bind:key="article1">
            <div class="card">
              
              <div class="card-image">
                <img v-bind:src="article1.image" alt="" height="220">
              </div>
              
              <div class="card-content">
                <span class="card-title" style="font-size:20px">
                 <strong>{{ article1.name }} </strong>  <br>
                </span>
                Pret
                <p> {{ article1.price }} LEI<i class="fa fa-life-ring" aria-hidden="true"></i></p> 
                <button
                  class="snipcart-add-item btn black white-text" style="border-radius:2rem !important; margin-top:0.5rem; font-size:13px"
                  v-bind:data-item-image="article1.image"
                  v-bind:data-item-id="article1.id"
                  v-bind:data-item-price="article1.price"
                  v-bind:data-item-name="article1.name"
                  data-item-url="/">  
                  Add to cart
                </button>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  </div>
    
</div>
</template>

<script>

const _ = require('lodash')

const url = 'https://spreadsheets.google.com/feeds/list/1QuNTaRm_mgvSwVyaZgLQ9XgaHPdVVnKSswNa02ruk0Y/od6/public/values?alt=json'
export default {//skr
  async asyncData () {
      const res  = await fetch("https://spreadsheets.google.com/feeds/list/1QuNTaRm_mgvSwVyaZgLQ9XgaHPdVVnKSswNa02ruk0Y/od6/public/values?alt=json");
      const data = await res.json();
      const data2 = data.feed.entry;
      console.log(data2);
      let article = [];
      data2.forEach(numbers => {
        let price = numbers.gsx$number.$t;
        let name = numbers.gsx$name.$t;
        let category = numbers.gsx$category.$t;
        let image = numbers.gsx$image.$t;
        let id = numbers.gsx$id.$t;
        
        let info = { 
        category:category,
        price: price,
        name:name,
      
        image:image,
        id:id
      
      
    }
      article.push(info);

      });
    return {article}
    console.log(article);
  }
}
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
  
}

.btn-large {
  text-align: center;
  height: 2rem;
  width: 10rem;
  font-weight: 600;
  vertical-align: middle;
}



</style>