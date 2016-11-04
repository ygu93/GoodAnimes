@anime_library.each do |library|
  json.set! library.id do
    json.extract! library, :id, :name, :animes
  end
end
