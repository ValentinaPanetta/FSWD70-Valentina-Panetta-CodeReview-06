// Parent Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(image, name, city, address, zipCode, date) {
        this.image = "";
        this.name = "";
        this.city = "";
        this.address = "";
        this.zipCode = "";
        this.date = new Date();
        this.image = image;
        this.name = name;
        this.city = city;
        this.address = address;
        this.zipCode = zipCode;
        this.date = date;
    }
    // Returns content
    Place.prototype.getCard = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12 my-2\">\n\t\t\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top d-none d-sm-none d-md-block\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\"><small><i class=\"fa fa-map-marker darkpink-text\"></i> " + this.address + " " + this.zipCode + ", " + this.city + "</small></p>\n    \t\t\t<small>Created: " + this.date.toDateString() + "</small>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    // Render function
    Place.prototype.display = function () {
        document.getElementById("places").innerHTML += this.getCard();
    };
    return Place;
}());
// Child Classes
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(image, name, city, address, zipCode, date, category, telephone, website) {
        var _this = _super.call(this, image, name, city, address, zipCode, date) || this;
        _this.category = category;
        _this.telephone = telephone;
        _this.website = website;
        return _this;
    }
    // Returns content
    Restaurant.prototype.getCard = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12 my-2\">\n\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top d-none d-sm-none d-md-block\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\"><small><i class=\"fa fa-map-marker darkpink-text\"></i> " + this.address + " " + this.zipCode + ", " + this.city + "</small></p>\n    \t\t\t<p class=\"card-text\"><i class=\"fa fa-star darkpink-text\"></i> " + this.category + "</p>\n\t\t\t\t<p class=\"card-text\"><i class=\"fa fa-phone darkpink-text\"></i> " + this.telephone + "</p>\n\t\t\t\t<p class=\"card-text\"><a href=\"" + this.website + "\" target=\"_blank\" class=\"card-link darkpink-text\"><i class=\"fa fa-laptop darkpink-text\"></i> Go to Website</a></p>\n    \t\t\t<small>Created: " + this.date.toDateString() + "</small>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    // Render function
    Restaurant.prototype.display = function () {
        document.getElementById("restaurants").innerHTML += this.getCard();
    };
    return Restaurant;
}(Place));
var Concert = /** @class */ (function (_super) {
    __extends(Concert, _super);
    function Concert(image, name, city, address, zipCode, date, venue, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, image, name, city, address, zipCode, date) || this;
        _this.venue = venue;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    // Returns content
    Concert.prototype.getCard = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12 my-2\">\n\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top d-none d-sm-none d-md-block\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\"><i class=\"fa fa-music darkpink-text\"></i> " + this.venue + "</p>\n    \t\t\t<p class=\"card-text\"><small><i class=\"fa fa-map-marker darkpink-text\"></i> " + this.address + " " + this.zipCode + ", " + this.city + "</small></p>\n    \t\t\t<p class=\"card-text\"><i class=\"fa fa-calendar darkpink-text\"></i> " + this.eventDate + ", " + this.eventTime + "</p>\n\t\t\t\t<p class=\"card-text\"><i class=\"fa fa-money darkpink-text\"></i> " + this.ticketPrice + "\u20AC</p>\n    \t\t\t<small>Created: " + this.date.toDateString() + "</small>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    // Render function
    Concert.prototype.display = function () {
        document.getElementById("events").innerHTML += this.getCard();
    };
    return Concert;
}(Place));
// Instances
var locations = [];
// Places
locations.push(new Place("resources/img/cliffs.jpg", "Cliffs of Moher", "County Clare", "Linnascor", "037111", new Date(2018, 11, 24)));
locations.push(new Place("resources/img/skeppsholmen.jpg", "Skeppsholmen Island", "Stockholm", "Skeppsholmen", "11149", new Date(2017, 11, 24)));
locations.push(new Place("resources/img/highgate.jpg", "Highgate Cemetery", "London", "Swain's Lane", "N66PJ", new Date(2019, 7, 12)));
locations.push(new Place("resources/img/holyrood.jpg", "Holyrood Abbey", "Edinburgh", "Canongate", "8DX", new Date(2018, 1, 24)));
// Restaurants
locations.push(new Restaurant("resources/img/peggyporschen.jpg", "Peggy Porschen", "London", "116 Ebury St", "SW1W", new Date(2019, 3, 25), "Bakery", " +44 20 7730 1316", "https://www.peggyporschen.com"));
locations.push(new Restaurant("resources/img/milkinsta.jpg", "Milk Train", "London", "12 Tavistock St", "WC2E", new Date(2019, 3, 4), "Ice Cream Parlor", "+44 20 7670 1316", "https://www.milktraincafe.com"));
locations.push(new Restaurant("resources/img/bao.jpeg", "BAO Soho", "London", "53 Lexington St", "W1F", new Date(2017, 3, 25), "Taiwanese", "+44 90 7870 5316", "https://baolondon.com/"));
locations.push(new Restaurant("resources/img/saint.jpg", "Saint Aymes", "London", "231 Ebury St", "SW1W", new Date(2017, 11, 14), "Coffee Shop", "+44 20 7262 1185", "https://www.instagram.com/saintaymes/?hl=en"));
// Events
locations.push(new Concert("resources/img/hozier.jpg", "Hozier", "Vienna", "Lothringerstraße 20", "1030", new Date(2019, 3, 17), "Wiener Konzerthaus", "10 Sep 2019", "8pm", "from 50"));
locations.push(new Concert("resources/img/mitski.jpg", "Mitski", "Vienna", "Augartenbrücke 1", "1010", new Date(2019, 8, 17), "Flex", "13 Aug 2019", "8pm", "from 30"));
locations.push(new Concert("resources/img/weyes.jpg", "Weyes Blood", "Berlin", "Schlesisches Tor", "10977", new Date(2016, 3, 17), "Bi Nuu", "26 Oct 2019", "8pm", "from 30"));
locations.push(new Concert("resources/img/florence.jpg", "Florence and the Machine", "London", "Hyde Park", "142ha", new Date(2017, 3, 17), "Hyde Park", "13 Jul 2019", "8pm", "from 50"));
// Sorts instances in ascending order in their category
function sortAscending() {
    locations.sort(function (post1, post2) {
        return post1.date.getTime() - post2.date.getTime();
    });
}
// Sorts instances in descending order in their category
function sortDescending() {
    locations.sort(function (post1, post2) {
        return post2.date.getTime() - post1.date.getTime();
    });
}
// Retrieves current window path and executes sortAscending or sortDescending based on the path
var currentPath = window.location.pathname;
var currentPage = currentPath.split("/").pop();
if (currentPage == "index_asc.html") {
    sortAscending();
}
else if (currentPage == "index_desc.html") {
    sortDescending();
}
// Executes display() on every instance of the array
for (var iter in locations) {
    locations[iter].display();
}
