(function () {
  //var classes = CSVToArray( classList , "," );
  
  function csvStringToArray(strData) {
    var objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\\,\\r\\n]*))"),"gi");
    var arrMatches = null, arrData = [[]];
    while (arrMatches = objPattern.exec(strData)){
      if (arrMatches[1].length && arrMatches[1] !== ",") arrData.push([]);
      arrData[arrData.length - 1].push(
        arrMatches[2] ? arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"") : arrMatches[3]
      );
    }
    return arrData;
  }
})();

new Vue({
  el: '#app',
  data: {

  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    uploadFile(event) {
      //fetch()
    }
  }
})