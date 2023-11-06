// import {zenserpApiKey} from './zenserpkey.js';

async function fetchApi() {
  const url = "https://quotes15.p.rapidapi.com/quotes/random/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "755d95763emsh054ecfccbfb050cp1e70dfjsnea335e787a5f",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    // overlay-text
    const overlayText = document.querySelector(".overlay-text"),
      author = result.originator.name,
      quoteAuthor = "-- " + author,
      authorUrl = result.originator.url,
      quote = result.content + " ";
    overlayText.innerHTML =
      quote +
      `<a href='${authorUrl}' target='_blank' style='color: blue;'>` +
      quoteAuthor +
      "</a>";

    const heroImg = document.querySelector(".hero__img"),
      apiUrl = `https://app.zenserp.com/api/v2/search?apikey=${zenserpApiKey}&q=${author}&tbm=isch`;
    fetch(apiUrl)
      .then((response) => response.json())

      .then((data) => {
        const imageResults = data.image_results;

        if (imageResults && imageResults.length > 0) {
          imageResults.forEach((image) => {
            heroImg.src = image.sourceUrl;

            heroImg.alt = author;

            heroImg.classList.add("result-image");
          });
        }
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.error(error);
  }
}
fetchApi();
