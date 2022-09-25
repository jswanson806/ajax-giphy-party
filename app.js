

//await response from api.giphy containing matches for user search term
async function findGif(term) {
  let res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=EHBAMezpffAObSISZXnTSA7bvHsf2tPQ`
  );
  
  //generate random whole number between 0 and 10 and save to variable
  const num = Math.floor(Math.random() * 20);

  //save imgSrc to var using random num var as [i] to get a single image from res
  const imgSrc = res.data.data[num].images.original.url;

  //create new gifImg, set id attribute and src attribute to imgSrc var
  const gifImg = $(`<img id='gif-img' src=${imgSrc}></img>`);

  //append the image to the div container
  $("#gif-display").append(gifImg);

  //log the response from axios.get in the console
  console.log(res);
}

//on button click, grab value of input and pass to findGif()
$("#submit-btn").on("click", function () {
  const term = $("#search-input").val();
  findGif(term);
});

//on reset button click, call removeAll()
$("#reset-btn").on("click", function () {
  removeAll();
});

//remove all children of the gif-display div, in this case, all gifImg elements
function removeAll(){
  $('#gif-display').children().remove();
}