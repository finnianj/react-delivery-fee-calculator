import React from 'react';
import './Info.scss';


function Info() {

  return (
    <div id="info">
      <h1>Hello there! 👋</h1>
      <h2>This was a little React/Typescript gadget I made for a job application.</h2>
      <h3><em><a href='https://github.com/finnianj/react-delivery-fee-calculator' target='_blank'>Here is my code</a></em></h3>
      <em>
        <p>
          Rules for calculating a delivery fee:
        </p>
        <ul>
          <li>If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.</li>
          <li>A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.</li>
          <li>Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m = 3€</li>
          <li>Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m = 3€</li>
          <li>Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m = 4€</li>
          <li>If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item. An extra "bulk" fee applies for more than 12 items of 1,20€</li>
          <li>Example 1: If the number of items is 4, no extra surcharge</li>
          <li>Example 2: If the number of items is 5, 50 cents surcharge is added</li>
          <li>Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added</li>
          <li>Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)</li>
          <li>The delivery fee can never be more than 15€, including possible surcharges.</li>
          <li>The delivery is free (0€) when the cart value is equal or more than 100€.</li>
          <li>During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).</li>
        </ul>
      </em>

      <h2>Have a great day 😊</h2>
    </div>
  );
}

export default Info;
