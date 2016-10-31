## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**NavBarContainer**
  -Navbar


**HomeContainer**
 - UserAnimeIndex
  * UserAnimeIndexItem
 - AnimeLibraryIndex
  * AnimeLibraryIndexItem
 - Add Library
 - Remove Library
 - Edit User Anime Details Button

 **AnimeIndexContainer**
  - AnimeIndexItem


**AnimeDetailsContainer**
 - AnimeDetails
 - UserAnimeDetailsContainer
  * UserAnimeDetails
 - ReviewIndex
  * ReviewIndexItem
 - Add Review Button

**EditUserAnimeFormContainer**
 - EditUserAnime
 - ReviewForm
 - Delete Review Button






## Routes

|Path        | Component   |
|-------     |-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home"    | "NavBarContainer" |
| "/home/User/:Id" | "HomeContainer" |
| "/home/anime/" | "AnimeIndexContainer" |
| "/home/anime/:id" | "AnimeDetailsContainer" |
| "/home/User/:Id/anime/:id/edit" | "EditUserAnimeFormContainer"
