const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
var app = new Vue({
  el: "#app",
  data: {
    info: null,
    LBC: null,
    kb: null
  },
  methods: {
    query: function(event) {
      var querydata = { id: this.userid };
      axios
        .get(apiUrl)
        .then((response) => {
          this.info = JSON.parse(response.data);
          console.log(this.info);
        })
        .catch((error) => console.log(error));
    }
  }
});
