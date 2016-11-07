@anime_libraries.each do |library|
  json.set! library.id do
    json.id library.id
    json.name library.name
  end
end
