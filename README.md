##Website Performance Optimization portfolio project

Author: Tina D. Wu  
Date: 09 / 04 / 2015

###Part 1: Optimize PageSpeed Insights score for index.html

#### Goal
Perform opimizations to achieve a PageSpeed score of 90 on index.html.

#### To run the project
1. Check out the repository at https://github.com/diwu001/frontend-nanodegree-mobile-portfolio
2. Open a browser and visit localhost:8080  
3. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

4. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! The original score for mobile is 77 and for desktop is 90.  
5. Run grunt to do cssmin, inline and uglify automatically. 
6. The optimized code is in dist directory. To run the optimized website, change the page address in the public URL from index.html to dist/index.html. Run it through PageSpeed Insights and view new scores!

#### My Optimization
1. Minimize style.css, font.css and print.css using grunt-cssmin to avoid CSS render blocking  
2. Inline style.css and font.css to index.html using grunt-inline to avoid CSS render blocking  
3. Add media query for print.css to avoid CSS render blocking  
4. Minimize perfmatters.js using grunt-uglify to avoid JS parse blocking  
5. Set analytics.js to be async to avoid JS parse blocking  
6. Compress images for pizzeria.jpg and profilepic.jpg

Page Speed Insights Score: mobile 94; desktop 95


###Part 2: Optimize Frames per Second in pizza.html

#### Goal
Optimize the website until frames per second rate of views/pizza.html is 60 fps or higher.  
Optimize the pizzas resizing time to be less than 5 ms.

#### To run the project
Open views/pizza.html in chrome browser. Observe the log information in console. Use Developer tools->Timeline to check frames per second.

#### My Optimization
For views/js/main.js  
1. Define variable outside of the for-loop to save the array length. This can avoid quering DOM everytime in the for-loop.
2. Declare variable outside of the for-loop to avoid creating variable in each iteration.
3. Change document.querySelector to document.getElementById; change document.querySelectorAll to document.getElementsByClassName.  
4. Improve changePizzaSizes() function: avoid query DOM every time in the for-loop; stop Force Synchronous Layout; avoid changing between pixel and percentage. The time for resizing pizza is less than 1ms now.  
5. Improve the for-loop for creating and appending all of the pizzas: get variable pizzaDiv out of the for-loop; use createDocumentFragment() to append all pizzas to DOM at one time.  
6. Improve updatePositions() function: use variable scrollTop to avoid quering DOM everytime in for-loop.  
7. Improve DOMContentLoaded event listener: minimize the total number of pizza movers depending on the size of screen width; use createDocumentFragment() to append all pizza movers to DOM at one time.  

  
For views/css/style.css  
1. Add CSS transform animation to force GPU acceleration.


###References
1. https://developer.chrome.com/devtools/docs/tips-and-tricks
2. https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
3. https://medium.com/@matthiasak/removing-jquery-from-your-app-site-for-better-performance-4d37d4e0cc5b
4. http://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css
5. Udacity Website Performance Optimization course  
6. Udacity Browser Rendering Optimization course