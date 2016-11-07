# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'
require 'net/http'
require 'uri'

def anime_seed
  queries = ["fate",
             "shirobako",
             "shigatsu",
             "clannad",
             "railgun",
             "geass",
             "chihayafuru",
             "bakemonogatari",
             "haikyuu",
             "kuroko",
            "toradora",
            "k-on",
            "madoka",
            "ookami",
            "fullmetal"]
  queries.each do |query|
    uri = URI.parse("https://myanimelist.net/api/anime/search.xml?q=#{query}")
    request = Net::HTTP::Get.new(uri)
    request.basic_auth("onlymyrailgunx", "fullstackprojec")

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") do |http|
      http.request(request)
    end

    parsed1= Hash.from_xml(response.body)
    parsed1["anime"]["entry"].each do |result|
      key_params = ["title", "synopsis", "start_date", "end_date", "image", "score", "episodes", "status", "type"]
      anime_params = {}
      key_params.each do |param|
        if param =="type"
          anime_params["media_type"] = result[param]
        elsif param == "synopsis" && result[param]!= nil
          anime_params["synopsis"] = result[param].gsub("[i]", "")
          anime_params["synopsis"] = anime_params["synopsis"].gsub("[/i]", "")
        else
          anime_params[param] = result[param]
        end
      end
      Anime.create(anime_params)
    end
  end
end
anime_seed
User.create({username:"Guest", password:"password"})
AnimeLibrary.create({user_id:1, name:"Watched"})
AnimeLibrary.create({user_id:1, name:"Currently Watching"})
AnimeLibrary.create({user_id:1, name:"Plan to Watch"})
AnimeLibrary.create({user_id:1, name:"Action"})
AnimeLibrary.create({user_id:1, name:"Drama"})
AnimeLibrary.create({user_id:1, name:"Slice of Life"})
