FactoryGirl.define do
  factory :anime do
    title 'Fate Zero'
    synopsis 'Holy Grail War'
    start_date "2015-04-03"
    end_date "2015-08-03"
    image "fake.com"
    score 10
    episodes 26
    media_type "TV"
    status "Finished Airing"
  end
end
