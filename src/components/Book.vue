<template>
  <div class="text-center">
    <div class="filter">
      <form class="form-inline md-form mr-auto">
        <input
          type="text"
          v-model="search"
          placeholder="Search for a book"
          class="align-middle mt-5 mr-5 form-control mr-sm-2"
          aria-label="Search"
        />
      </form>
    </div>

    <div class="flip-card text-center" v-for="book in filteredBooks" v-bind:key="book">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class="flip-card" v-bind:src="book.cover" />
        </div>

        <div class="flip-card-back">
          <h2>{{book.title}}</h2>

          <p>{{book.description}}</p>
          <p>
            <button
              type="button"
              class="btn btn-dark"
              data-fancybox="gallery"
              V-bind:data-caption="book.title"
              v-bind:href="book.detail"
            >More information</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

 import json from '../assets/bookstore_data';
     

export default {
  data() {
    return {
      books: json.books,
      search: ""
    };
  },

created() {

   /*
    fetch("https://api.myjson.com/bins/zyv02", {
      method: "GET"
    })
      .then(function(response) {
        return response.json();
      })
      .then(dataFromServer => {
        console.log("fetch working");
        this.books = dataFromServer.books;
      });

        */

       
  },



  computed: {

    filteredBooks: function() {
      console.log(json.books);
      return this.books.filter(book => {
        return book.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style>
.filter {
  position: absolute;
  left: 750px;
  top: 50px;
}


.flip-card {
  background-color: transparent;
  display: inline-block;


  width: 270px;
  height: 350px;
  perspective: 1000px;
  padding: 0;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back h2 {
  color: black;
  font-weight: bold;
  padding: 10px;
}

.flip-card-back p {
  padding: 1px 10px;
}
</style>