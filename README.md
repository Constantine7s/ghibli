# Studio Ghibli Movie List App
This is a simple React application that fetches a list of Studio Ghibli movies from an API and displays them in a user-friendly format. The app utilizes the Chakra UI library for styling and Cypress for testing purposes.

##  Features
- Fetches movie data from the Studio Ghibli API (https://ghibliapi.vercel.app/).
- Displays a list of movies with details such as title, thumbnail, release year, and length.
- Allows users to filter movies by title or release year.
- Provides a detailed view page for each movie with additional information such as title, original title, original title romanized, description, director, producer, release date, running time, image, and a list of people involved.
- Supports pagination for browsing through the movie list.
- Includes a loading skeleton to provide a better user experience while fetching movie data.
- Responsive design for seamless viewing on different devices.
- Includes testing scripts with Cypress for automated end-to-end testing.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Chakra UI: A simple and modular UI component library for React.
- Cypress: A JavaScript end-to-end testing framework for web applications.

## Installation

### Installation
1. Clone the git repository 
```bash
  git clone https://github.com/Constantine7s/ghibli
```

2. Navigate to the project directory:
```bash
cd ghibli
```

3. Install the dependencies using npm:
```bash
 npm install
```

4. Start the development server:
```bash
 npm install
```

Open your web browser and visit http://localhost:3000 to view the app.

## Usage
Upon opening the app, you will see a list of Studio Ghibli movies.

- Use the search bar at the top of the page to filter movies by title or release year.
- Click on a movie to view more details on a separate page.
- Use the pagination buttons at the bottom of the list to navigate through the movie pages.
- The app is responsive and can be used on various screen sizes and devices.

## Testing 
This project includes automated tests using Cypress for end-to-end testing. To run the tests, make sure you have the development server running.

1. Open a new terminal window.
2. Navigate to the project directory if you haven't already.
3. Run the Cypress testing suite:

```bash
 npm cypress
```

Cypress will launch and execute the defined tests, providing you with real-time feedback on the results.
