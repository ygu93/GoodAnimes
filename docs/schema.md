# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Animes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
Synopsis    | text      | not null
start_date  | date      | not null
end_date    | date      | not null
image       | string    | not null
score       | integer   | not null
episodes    | integer   | not null  

## UserAnimes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
anime_id        | integer   | not null, foreign key (references animes), indexed
user_rating     | integer   |
library_id      | integer   | not null, foreign key (references Anime Libraries), indexed
user_start_date | date      |
user_end_date   | date      |

## AnimeLibrary
column name   | data type | details
------------  |-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
user_anime_id | integer   | not null, foreign key (references user animes), indexed

## Reviews
column name   | data type | details
------------  |-----------|-----------------------
id            | integer   | not null, primary key
anime_id      | integer   | not null, foreign key (references animes), indexed
user_id       | integer   | not null, foreign key (references users), indexed
body          | text      | not null
