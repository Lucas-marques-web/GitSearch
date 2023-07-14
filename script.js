// Asynchronous function to get user data from the GitHub API
async function getUser(userProfile) {
  try {
      // Make a request to the GitHub API to get user data
      let response = await fetch('https://api.github.com/users/' + userProfile);
      
      // Convert the response to JSON format
      let userData = await response.json();
      
      // Call the function to create HTML elements with user data
      createElements(userData);
      
      // Return the user data
      return userData;
  } catch (error) {
      console.error(error);
      return null;
  }
}

// Function to create HTML elements with user data and update the DOM
function createElements(userData) {
  console.log(userData);

  // Get the avatar image element and set the src attribute with the user's avatar URL
  const imgElement = document.querySelector('.avatarImg');
  imgElement.src = userData.avatar_url;

  // Get the bio element and set the text content with the user's bio (or 'no bio' if none)
  const bio = document.querySelector('.bio');
  bio.textContent = userData.bio || 'no bio';

  // Get the login element and set the text content with the user's login (or 'null' if none)
  const login = document.querySelector('.login');
  login.textContent = userData.login || 'null';

  // Get the name element and set the text content with the user's name (or 'no name' if none)
  const name = document.querySelector('.name');
  name.textContent = userData.name || 'no name';

  // Get the created account date element and set the text content with the user's creation date
  const createdAccountDate = document.querySelector('.created-at')
  createdAccountDate.textContent = userData.created_at;

  // Get the location element and set the text content with the user's location (or 'null' if none)
  const location = document.querySelector('.location');
  location.textContent = userData.location || 'null';

  // Get the followers element and set the text content with the number of user's followers (or 'null' if none)
  const followers = document.querySelector('.followers');
  followers.textContent = userData.followers || 'null';

  // Get the profile link element and set the href attribute with the user's profile URL
  const profileLink = document.querySelector('.profileLink');
  profileLink.href = userData.html_url;
}

// Asynchronous function to get a new user on form submission
async function getnewUser(event) {
  event.preventDefault();

  // Get the user profile name from the input field
  const profileName = document.querySelector('#profileName').value;
  
  // Call the function to get user data
  const userData = await getUser(profileName);
  console.log(userData);

  // If user data is successfully obtained, display the main content section and hide the search section
  if (userData) {
      document.querySelector('.mainContent').classList.remove('hidden');
      document.querySelector('.searchContent').classList.add('hidden');
  } else {
      console.log('User not found.');
  }
}

// Function to go back to the search section
function goBack() {
  document.querySelector('.mainContent').classList.add('hidden');
  document.querySelector('.searchContent').classList.remove('hidden');
}

// Function to handle the mouseover event on the back button
function goBackOver() {
  document.querySelector('.backButton').style.height = '48px';
}

// Function to handle the mouseout event on the back button
function goBackOut() {
  document.querySelector('.backButton').style.height = '32px';
}
