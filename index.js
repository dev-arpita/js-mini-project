import { propertyForSaleArr } from "/properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "/properties/placeholderPropertyObj.js";

function getPropertyHtml(property = [placeholderPropertyObj]) {
  const renderHTML = property
    .map((item) => {
      const eachRoomM2 = item.roomsM2.reduce(
        (total, currentItem) => total + currentItem
      );
      const { image, propertyLocation, priceGBP, comment } = item;
      return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>$${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${eachRoomM2} m2</h3>
                </div>
            </section> 
        `;
    })
    .join("");
  return renderHTML;
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById("container").innerHTML = getPropertyHtml();
