// Declaring all the state arrays
var arkansas = ["Arkansas", "assets/images/Arkansas.png",
 "This state became the 25th state in the union on June 15th, 1836.",
 "This state houses the largest producer of dulcimers in the world.",
 "The honeybee is the state insect in which state?"];
var flordia = ["Flordia", "assets/images/Flordia.png",
 "In what state is the city with the highest rate per capita of lightning strikes?",
 "The first Snapper riding lawn mower was developed in this state.",
 "A city in this state is known as the Venice of America."];
var louisiana = ["Louisiana", "assets/images/Louisiana.png",
 "Which state has the tallest state capital building?",
 "This state has the oldest running street car railway in operation.",
 "This state was named in honor of King Louis XIV."];
var michigan = ["Michigan", "assets/images/Michigan.png",
 "This state is home of world largest cement plant.",
 "This state has more shoreline other than Alaska.",
 "In what state is Battle Creak the Cereal Capital of the World?"];
var minnesota = ["Minnesota", "assets/images/Minnesota.png",
 "Which state is home of the oldest continuously running theater.",
 "This state has one recreational boat per six people, more than any other state.",
 "The stapler was invented in this state."];
var missouri = ["Missouri", "assets/images/Missouri.png",
 "The first successful parachute jump was made from a plane in this state in 1912.",
  "The state animal of this state is a mule.",
	"The tallest man in medical history at 8 feet-11 inches hailed from this state."];
var newyork = ["New York", "assets/images/NewYork.png",
 "This state hosted the first American chess tournament in 1843.",
 "In 1807 The Clermont made its maiden voyage being the first steamboat to do so.",
 "This state was first to require license plates on cars."];
var ohio = ["Ohio", "assets/images/Ohio.png",
 "The first ambulance service was established in this state.",
 "The first traffic light was used in this state.",
 "Teflon was invented in 1938 in this state."];
var southcarolina = ["South Carolina", "assets/images/SouthCarolina.png",
 "Which state houses the oldest minor league stadium in the nation?",
  "The highest cascade of falls east of the Mississippi River is in this state.",
	"The first boll weevil found in this state is still on display."];
var texas = ["Texas", "assets/images/Texas.png",
 "The world’s first rodeo was held in this state on July 4th, 1883?",
 "Which state has the most farmed land?",
 "What state has the world’s largest helium well?"];
var westvirginia = ["West Virginia", "assets/images/WestVirginia.png",
 "What state adopted the first state sales tax?",
 "The first free mail delivery was started in October 6, 1896 in this state.",
 "The first free mail delivery was started in October 6, 1896 in this state."];
var wisconsin = ["Wisconsin", "assets/images/Wisconsin.png",
 "The first hydroelectric dam was built in this state.",
 "A city in this state is home to the Harley Davidson Motorcycle Company.",
 "Ringling Brothers Circus was first staged in this state."];
var states = [arkansas, flordia, louisiana, michigan, minnesota,
	 missouri, newyork, ohio, southcarolina, texas, westvirginia, wisconsin];
var randomState = [];
var randomNumber = 0;
var randomQuestion =[];
var right = 0;
var wrong = 0;
var percentage = 0;
// Getting random number from 0-11 for states-fuction because it is used frequently
function getRandomTwelve() {
	randomNumber = (Math.floor(Math.random() * 12));
	return randomNumber;
}
// Get five different random numbers - used for the states
function getFive() {
		randomState = [];
    for (i = 0; i < 5; i++) {
		user = getRandomTwelve();
		if (i === 1) {
			while (user === randomState[0]) {
				user = getRandomTwelve();
			}
		}
		if (i === 2) {
			while (user === randomState[0] || user === randomState[1]) {
				user = getRandomTwelve();
			}
		}
		if (i === 3) {
			while (user === randomState[0] || user === randomState[1] || user === randomState[2]) {
				user =getRandomTwelve();
			}
		}
		if (i === 4) {
			while (user === randomState[0] || user === randomState[1] || user === randomState[2] || user === randomState[3]) {
				user =getRandomTwelve();
			}
		}
		randomState.push(user);
	}
}
// Get four random numbers - used for the questions
function getFour() {
		randomQuestion = [];
    for (i = 0; i < 4; i++) {
		user = (Math.floor(Math.random() * 3) + 2);
		randomQuestion.push(user);
	}
}
// Use random number to get five states and replace in html
function getAndPlaceStates() {
	$("#first-image").attr("src", states[randomState[0]][1]);
	$("#second-image").attr("src", states[randomState[1]][1]);
	$("#third-image").attr("src", states[randomState[2]][1]);
	$("#fourth-image").attr("src", states[randomState[3]][1]);
	$("#fifth-image").attr("src", states[randomState[4]][1]);
}
// use random number to get four questions and replace in html
function getQuestion() {
	$(".first-question").text(states[randomState[0]][randomQuestion[0]]);
	$(".second-question").text(states[randomState[1]][randomQuestion[1]]);
	$(".third-question").html(states[randomState[2]][randomQuestion[2]]);
	$(".fourth-question").html(states[randomState[3]][randomQuestion[3]]);
}
// Reset new states and questions
	$(".button").on("click", function() {
		getFive();
		getAndPlaceStates();
		getFour();
		getQuestion();

		
		console.log(states[randomState[0]][randomQuestion[0]]);
	});
