@animes.each do |anime|
  json.set! (@animes.index(anime)+1) do
    json.extract! anime, :id, :title, :image, :score
  end
end
