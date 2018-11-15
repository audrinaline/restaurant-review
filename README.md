# Restaurant Review Project - Stage 1

For this stage one of the Restaurant Review, a static webpage is transformed into a user friendly--accesible to any user such as screen reader. In addition, the webpage is repsonsive to any type of displays(phone, table, laptop, etc). Lastly, a service worker is implemented so that user can have a better experience with offline connection.

------------------

![](restaurant-review-1.gif)

------------------

![](restaurant-review.gif)


------------------

### Specification

"You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality."

#Installment

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

------------------

If you wished to review or use this repo:

1. You must first get your own Mapbox API key/access token at [Mapbox](https://www.mapbox.com/install/) (you must have an account first before getting the access token. Also, it's *FREE*).

2. After getting the access token, you will need to place it `<YOUR MAPBOX API KEY HERE>` inside of your `main.js` and `restaurant_info.js`.

3. Once you applied the key, you can run python command [from above] and open the localhost on your desktop to view everything in the repo provided. 

# Dependencies
* [leafletjs](https://leafletjs.com/) 
* [Mapbox](https://www.mapbox.com/)
* Normalize.css

# Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

