// 1. Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
// 2. Once the Giphy API has responded with data, append the GIF to the page
// 3. Allow the user to search for as many GIFs as they would like and keep appending them to the page
// 4. Allow the user to remove all of the GIFs by clicking a button

async function findGif(term){
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const num = Math.floor(Math.random() * 10);
   
    const gifImg = document.createElement('img');
    gifImg.setAttribute('id', 'gifImg');
    gifImg.setAttribute('src', res.data.data[num].url);
    $("#gif-display").append(gifImg);
    console.log(res.data.data[num].url);
}

$("#submit-btn").on('click', function (evt) {
    evt.preventDefault();
    const term = $("#search-input").val();
    findGif(term);
});