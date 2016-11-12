# Good Animes
[Heroku link][heroku]
[heroku]: https://goodanimes.herokuapp.com/

GoodAnimes is a single page web app that is designed for both new and old watchers of anime to find new animes to watch and keep track of the ones they've already watched. It is built with a rails backend, react/redux frontend and a postgres database.

## Seed Data
Goodanimes gets its anime seed data via myanimelist's API, it make several search queries to the api and converts the XML response to an object that can be used to create an anime mode.

## Features and Implementation

Goodanimes uses the React Router to keep all of its content on a single root page. While navigating the site, such as user data, anime, and reviews are all managed in a local store. It gets this information from the backend rails API, which serves data in json format using jbuilder. To further condense the number of routes in the react router, the site uses modals for several of its features. These include the login form and the create/edit  review form.


###View all your libraries
You can view all the animes you've added to your libraries via the library index. The relevant information is fetched for you in the backend by filtering the libraries to the current user's using active record. Then jbuilder is used to feed the relevant information with active record relationships. Each library object contains its anime objects and such and no additional information needs to be retrieved from the front end. An artificial all library is also generated to show the unique animes in the users library.

```ruby

{
"0": {
"name": "All",
"animes": [
{
"id": 37,
"user_anime_id": 1,
"title": "Toaru Kagaku no Railgun",
"image": "https://myanimelist.cdn-dena.com/images/anime/8/53581.jpg",
"score": 7.87,
"type": "TV",
"anime_id": 37,
"libraries": [
"Watched"
],
"currentUserReview": null
},
{
```

### Add reviews to animes
Reviews can be added to animes by two different places, the anime show page and the library index. These are accomplished via modals. Reviews are retrieved by both the anime and the library using the backend. Then custom actions in redux are created to either update the library's state or the anime page's state based on the location prop that is passed to the container. Like the library all the data is called from just the anime show controller.
```ruby
{
"id": 138,
"title": "Fullmetal Alchemist: Brotherhood",
"synopsis": "&quot;In order for something to be obtained, something of equal value must be lost.&quot;<br />\n<br />\nAlchemy is bound by this Law of Equivalent Exchange&mdash;something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression&mdash;Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward&#039;s right arm that he is able to affix Alphonse&#039;s soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called &quot;automail&quot; and become a state alchemist, the Fullmetal Alchemist.<br />\n<br />\nThree years of searching later, the brothers seek the Philosopher&#039;s Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher&#039;s Stone, but their country&#039;s murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.<br />\n<br />\n[Written by MAL Rewrite]",
"start_date": "2009-04-05",
"end_date": "2010-07-04",
"image": "https://myanimelist.cdn-dena.com/images/anime/5/47421.jpg",
"score": 9.26,
"episodes": 64,
"media_type": "TV",
"status": "Finished Airing",
"libraries": [
"Action"
],
"reviews": [
{
"id": 1,
"user_id": 1,
"anime_id": 138,
"user_rating": 10,
"user_start_date": "2015-07-08",
"user_end_date": "2015-07-20",
"body": "First of all, I have seen the original FMA and although it was very popular and original, the pacing and conclusion did not sit too well with me. Brotherhood is meant to be a remake of the original, this time sticking to the manga all the way through, but there were people who thought it would spoil the franchise. That myth should be dispelled, as there's only one word to describe this series - EPIC.",
"updated_at": "2016-11-11T23:06:43.899Z",
"user": {
"id": 1,
"username": "Guest",
"password_digest": "$2a$10$xMBpDjs3llCxu2wnYt8Qheh7yQhuX/Z4A1jZLT4oRMjzHOsVYpi1S",
"session_token": "hSACMLU4Xm3Cc-pnyd8hTQ",
"created_at": "2016-11-11T23:06:42.904Z",
"updated_at": "2016-11-11T23:07:39.029Z"
},
"created_at": "2016-11-11"
},
```




## Future Features
There are still features goodanimes is missing, the ones that are the most crucial are:

### Search
Browsing an anime index is nice but a user wants to be able to search for a title by name to access it quicker.

### Infinite pagination
On the other hand, a user might want to browse the anime index page for a while, and right now the anime database is limited because I do not want to show too many animes on one page. Infinite pagination would fix this issue.

### Genres/Search by genre
While users can browse animes, they can't filter by a specific genre they might already like. Adding a tag like feature to each anime to give them a genre tag would improve user experience by telling the user what type of show the anime is as well as allowing the user to filter for their favorite genres.
