import { propertyForSaleArr } from "/properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "/properties/placeholderPropertyObj.js";
console.log(placeholderPropertyObj);
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

*/
function getPropertyHtml(defaultProperty = "", property) {
  const renderHTML = property
    .map((item) => {
      const eachRoomM2 = item.roomsM2.reduce(
        (total, currentItem) => total + currentItem
      );
      return `
            <section class="card">
                <img src="/images/${item.image}">
                <div class="card-right">
                    <h2>${item.propertyLocation}</h2>
                    <h3>$${item.priceGBP}</h3>
                    <p>${item.comment}</p>
                    <h3>${eachRoomM2} m2</h3>
                </div>
            </section> 
        `;
    })
    .join("");
  return renderHTML;
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById("container").innerHTML = getPropertyHtml(
  placeholderPropertyObj
);
