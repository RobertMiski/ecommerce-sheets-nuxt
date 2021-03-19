<template>
  <div id="homepage">
    <h1>Cafetaria El Patron</h1>
    <div class="article" v-for="article1 in article" v-bind:key="article1">
      <h2> {{ article1.name }} </h2>
      <p> {{ article1.category }} </p>
      <p> {{ article1.price }} </p>
      <p>{{article1.id}}</p>
      <button
  class="snipcart-add-item"
  v-bind:data-item-id="article1.id"
  v-bind:data-item-price="article1.price"
  v-bind:data-item-name="article1.name"
  data-item-url="/"
  >
  Add to cart
</button>
      
    </div>
  </div>
</template>

<script>

const _ = require('lodash')
//  your spreadsheet has to be PUBLIC and SHARED with everybody to be accessed this way
//  https://sheets.googleapis.com/v4/spreadsheets/{SPREASHEET_ID}/values/{SHEET_TAB_NAME}!{CELLS}?key={GOOGLE_API_KEY}
const url = 'https://spreadsheets.google.com/feeds/list/1QuNTaRm_mgvSwVyaZgLQ9XgaHPdVVnKSswNa02ruk0Y/od6/public/values?alt=json'
export default {
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
      
        image:image
      
      
      
    }
      article.push(info);

      });
    return {article}
  }
}
</script>

<style>
#homepage {
  padding-top: 10vh;
  max-width: 70vw;
  margin: auto;
}
#homepage h1 {
  padding-bottom: 5vh;
}
#homepage .article {
  padding-bottom: 5vh;
}
</style>