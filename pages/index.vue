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
  
  <div class="row" style="margin-top:2rem">
    <div class="categories center" >
        <ul id="menu" ref="menu">
          <li class="z-depth-1 broker" v-bind:data-category ="categories[index*0].category" v-for="(categories,index) in entries"   v-bind:key="categories">
          <a class="  transparent black-text  ">{{categories[index*0].category}}</a> 
          </li>
        </ul>
        
      
      </div>
  </div>
  


    <div class="container">
      
      <div class="row">
        <div class="col m4 l4 cont" ref="cont">
          <div class="article m4 l4 categorie" ref="cox" v-for="article1 in article" v-bind:key="article1" v-bind:data-filter="article1.category">
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
    let array = [];
    const res  = await fetch("https://spreadsheets.google.com/feeds/list/1QuNTaRm_mgvSwVyaZgLQ9XgaHPdVVnKSswNa02ruk0Y/od6/public/values?alt=json");
      const data = await res.json();
      const data2 = data.feed.entry;
      
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
      
      var grouped = _.groupBy(article, 'category');
      array.push(grouped);
      const entries = Object.values(array[0]);
      console.log(entries);
  

    return {article,entries}
    
  },
  mounted() {
    let butoane = this.$refs.menu.children;
    
    let main = this.$refs.cont.children;
    for (let i = 0;i<butoane.length;i++) {
    
    butoane[i].addEventListener('click',function () {
      for (let x = 0;x<butoane.length;x++) {
        butoane[x].classList.remove("active");
      }
      this.classList.add("active");
      const displayItems = this.getAttribute('data-category');

    /*   console.log(displayItems); */
      for(let z = 0;z<main.length;z++) {
        /* console.log(main[z]); */
        main[z].classList.add("hide");

        if((main[z].getAttribute('data-filter')==displayItems) ) {
          main[z].classList.remove("hide");
          main[z].classList.add("show");
          
        }
        
      }
    } )  
  }
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

.broker{
  list-style-type:none;
  width: 7rem !important;
  background-color: white;
  justify-content: center;
  padding: 0.5rem !important;
  border-radius: 1rem !important;
  font-size: 14px;
  display: inline-flex;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
}

.hide {
  display: none;
}

.show {
  display: block;
}

.active {
  background-color: #333 !important;
}

.active a {
  color: white !important;
}

</style>