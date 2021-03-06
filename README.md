The Epoch™ Voyager
========

Namesake
--------

[Voyager 1](https://en.wikipedia.org/wiki/Voyager_1) is a space probe launched by NASA on September 5, 1977. Part of the Voyager program to study the outer Solar System, Voyager 1 launched 16 days after its twin, Voyager 2. Having operated for 38 years and 25 days, the spacecraft still communicates with the Deep Space Network to receive routine commands and return data. At a distance of 133 AU (1.99×1010 km) as of autumn 2015, it is the farthest spacecraft from Earth and the only one in interstellar space.

Background
--------

This project started as a clone of [mocha-html-reporter](https://github.com/HermannPencole/mocha-html-reporter), but after some time in the environment, we realized that we can take advantage of [WebDriverIO](http://webdriver.io/)'s custom reporter: [http://webdriver.io/guide/testrunner/customreporter.html](http://webdriver.io/guide/testrunner/customreporter.html). 

So we made a [MaterializeCSS](http://materializecss.com/) template that met the minimal reporting needs. After which, we made a simple [JS-Template](https://www.npmjs.com/package/js-template). Now, upon command we can generate HTML from the JSON reports the [WDIO](http://webdriver.io/guide/testrunner/configurationfile.html) (WebDriverIO) session piped. 

Test Voyager
--------

To make this package usable out-the-box, we scripted more robust test coverage, and made it available in the package. Get the example running with the below steps.

### Dependancies ###
A global installation of the below:

1. node ≥ v0.12.x, read [more](https://nodejs.org/en/download/).
2. npm ≥ v2.x, read [more](https://nodejs.org/en/download/).
3. mocha ≥ v2.x
	
		npm install -g mocha

4. gulp ≥ v3.x

		npm install -g gulp

5. webdriverio ≥ v3.x
		
		npm install -g webdriverio

### Get this example running ###
1. Clone this repo
	
		git clone https://github.com/adcade/voyager.git
		
2. Run the following commands, in the order presented:

		npm install
		
3. Initialize the dependancies:

		gulp init

4. Create the tester:
		
		gulp user
		
5. Start selenium:

		gulp selenium
		
6. In a new terminal tab or window, serve the directory:

		gulp serve
		
7. Then run the tests:

		gulp test
		
8. Lastly, generate the results:

		gulp results
		
9. After all this, you can head to:

		http://127.0.0.1:7891
		
### Screenshot of the report generated ###

You should see a report similar to the below:

![Voyager Example Report](./reports/images/voyager.png "Voyager Example Report")