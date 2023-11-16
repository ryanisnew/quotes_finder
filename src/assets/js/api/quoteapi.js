const url = "https://quotes15.p.rapidapi.com/quotes/random/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "755d95763emsh054ecfccbfb050cp1e70dfjsnea335e787a5f",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

async function fetchApi() {
  try {
    const res = await fetch(url, options);
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
  
}

fetchApi().then((data) => {
  let result = data;
  console.log(result)
  // // overlay-text
  const overlayText = document.querySelector(".quote"),
    author = result.originator.name,
    quoteAuthor = "<br >-- " + author,
    authorUrl = result.originator.url,
    quote = result.content + " ";
  overlayText.innerHTML =
    quote +
    `<a href='${authorUrl}' target='_blank' style='color: blue;'>` +
    quoteAuthor +
    "</a>";
})