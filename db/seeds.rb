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
  queries = ["fate", "shirobako", "shigatsu", "clannad", "railgun", "geass", "chihayafuru", "bakemonogatari", "haikyuu"]
  queries.each do |query|
    uri = URI.parse("https://myanimelist.net/api/anime/search.xml?q=#{query}")
    request = Net::HTTP::Get.new(uri)
    request.basic_auth("onlymyrailgunx", "fullstackprojec")

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") do |http|
      http.request(request)
    end

    parsed1= Hash.from_xml(response.body)
    parsed1["anime"]["entry"].each do |result|
      key_params = ["title", "synopsis", "start_date", "end_date", "image", "score", "episodes"]
      anime_params = {}
      key_params.each { |param| anime_params[param] = result[param]}
      Anime.create(anime_params)
    end
  end
end
User.create({username:"Guest", password:"password"})
anime_seed
