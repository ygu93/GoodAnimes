@animes.each do |anime|
  json.set! anime.id do
    json.extract! anime, :id, :title, :image
  end
end
