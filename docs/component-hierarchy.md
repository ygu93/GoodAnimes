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

 **AnimeIndexContainer**
  - AnimeIndexItem


**AnimeDetailsContainer**
 - AnimeDetails
 - UserAnimeDetailsContainer
  * UserAnimeDetails
 - ReviewIndex
  * ReviewIndexItem

**EditFormContainer**
 - EditForm







## Routes

|Path        | Component   |
|-------     |-------------|
| "/"        | "AuthFormContainer" |
| "/"        | "NavBarContainer" |
| "/home"    | "HomeContainer" |
| "/anime/"  | "AnimeIndexContainer" |
| "/anime/:id" | "AnimeDetailsContainer" |
| "/user-anime/:id/edit" | "EditFormContainer"
