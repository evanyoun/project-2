// jshint esversion: 6

let main = function() {
  /*
    let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    let flickrTag = $("input").???();
    let requestURL = prefixURL + flickrTag + suffixURL;

    //clear old photos
    $(".photos").???("");
*/
  let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

  $.getJSON(requestURL, function(response) {
    console.log(response);
    console.log(`Article ${response[0].id}
Title: ${response[0].title}
Content: ${response[0].content}`);

    response.forEach(function(json_obj) {
      //make some elements
      let div = document.createElement("div");
      let header = document.createElement("h3");
      let p = document.createElement("p");
      let p2 = document.createElement("p2");
      //  let h2 = document.getElementById("h2").textContent;
      //  document.getElementById("div").appendChild("h2");

      header.textContent = `Article ${json_obj.id}`;
      p.textContent = `Title ${json_obj.title}`;
      p2.textContent = `Content ${json_obj.content}`;

      //put elements inside each other
      div.appendChild(header);
      div.appendChild(p);
      div.appendChild(p2);
      let container = document.getElementsByClassName("articles")[0];
      container.appendChild(div);
    });
    /*
    flickrResponse.items.forEach(function(item, index) {

      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
    });

  */
  });
};

$(document).ready(main);
