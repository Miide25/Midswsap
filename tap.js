// Get the image element
const image = document.getElementById('myimage');

// Initialize the counter and user status
let count = 0;
let userStatus = 'Bronze';

// Add an event listener to the image
image.addEventListener('click', () => {
  // Increment the counter
  count++;

  // Update the user status based on the count
  if (count >= 1000) {
    userStatus = 'Legend';
  } else if (count >= 500) {
    userStatus = 'Diamond';
  } else if (count >= 300){
    userStatus = 'Platinum';
  } else if (count >= 200){
    userStatus = 'Gold';
  } else if (count >= 100){
    userStatus = 'Sliver';
  } else if (count >= 50){
    userStatus = 'Bronze';
  }

  // Display the updated count and user status
  document.getElementById('count').innerHTML = `Clicks: ${count}`;
  document.getElementById('status').innerHTML = `Status: ${userStatus}`;
});