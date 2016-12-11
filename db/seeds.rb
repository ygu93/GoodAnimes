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
          anime_params["synopsis"] = result[param].gsub("[b]", "")
          anime_params["synopsis"] = anime_params["synopsis"].gsub("[/b]", "")
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
User.create({username:"Rem", password:"password"})
User.create({username:"Elric7", password:"password"})
User.create({username:"kurigohan", password:"password"})
User.create({username:"kamehameha", password:"password"})
User.create({username:"superhacker", password:"password"})
User.create({username:"Elucidator", password:"password"})
User.create({username:"Orchard", password:"password"})
User.create({username:"Sweezie", password:"password"})
User.create({username:"th3lls1st", password:"password"})
User.create({username:"iphiclies", password:"password"})
AnimeLibrary.create({user_id:1, name:"Watched"})
AnimeLibrary.create({user_id:1, name:"Currently Watching"})
AnimeLibrary.create({user_id:1, name:"Plan to Watch"})
AnimeLibrary.create({user_id:1, name:"Action"})
AnimeLibrary.create({user_id:1, name:"Drama"})
AnimeLibrary.create({user_id:1, name:"Favorites"})
UserAnime.create({user_id:1, anime_id:37, anime_library_id:1})
UserAnime.create({user_id:1, anime_id:123, anime_library_id:1})
UserAnime.create({user_id:1, anime_id:134, anime_library_id:1})
UserAnime.create({user_id:1, anime_id:85, anime_library_id:2})
UserAnime.create({user_id:1, anime_id:73, anime_library_id:2})
UserAnime.create({user_id:1, anime_id:115, anime_library_id:3})
UserAnime.create({user_id:1, anime_id:104, anime_library_id:3})
UserAnime.create({user_id:1, anime_id:47, anime_library_id:4})
UserAnime.create({user_id:1, anime_id:66, anime_library_id:4})
UserAnime.create({user_id:1, anime_id:30, anime_library_id:5})
UserAnime.create({user_id:1, anime_id:93, anime_library_id:5})
UserAnime.create({user_id:1, anime_id:28, anime_library_id:6})
UserAnime.create({user_id:1, anime_id:6, anime_library_id:6})
UserAnime.create({user_id:1, anime_id:111, anime_library_id:2})
UserAnime.create({user_id:1, anime_id:68, anime_library_id:3})
UserAnime.create({user_id:1, anime_id:102, anime_library_id:4})
UserAnime.create({user_id:1, anime_id:18, anime_library_id:6})
UserAnime.create({user_id:1, anime_id:138, anime_library_id:4})
UserAnime.create({user_id:1, anime_id:102, anime_library_id:1})
UserAnime.create({user_id:1, anime_id:65, anime_library_id:2})
UserAnime.create({user_id:1, anime_id:134, anime_library_id:3})
Review.create({user_id:1, anime_id:138 ,user_rating:10, user_start_date:"2015-07-08", user_end_date:"2015-07-20", body:"First of all, I have seen the original FMA and although it was very popular and original, the pacing and conclusion did not sit too well with me. Brotherhood is meant to be a remake of the original, this time sticking to the manga all the way through, but there were people who thought it would spoil the franchise. That myth should be dispelled, as there's only one word to describe this series - EPIC."})
Review.create({user_id:2, anime_id:138 ,user_rating:9,   body:"Brotherhood is just as entertaining and involving as its predecessor, and it's a testament to Arakawa's skill as a mangaka that she has been able to produce a tale that, at the very least, rivals the original anime adaptation.Yes, Brotherhood is more typically shounen than the other version, but the nice thing about this is that fans are given two very good versions of the same story, and that is something rare in anime."})
Review.create({user_id:3, anime_id:138 ,user_rating:8,   body:"Fullmetal Alchemist: Brotherhood gets an immense amount of praise in the MAL community, is the #1 ranked show and is constantly referred to as a masterpiece and the greatest show ever created. I've seen many fans preach about how it lives up to the hype and can never receive too much praise. Now this is just the opinion of one guy. I'm certainly not the law of the land or anything. However, I personally feel as though calling FMA:B a masterpiece and the champion of all shows is a bit of a stretch."})
Review.create({user_id:4, anime_id:35 ,user_rating:10,   body:"I laughed...
I cried...
I experienced something that changed my life...

In a nutshell, Clannad ~After Story~ influenced the way I will live for the rest of my life and not just in some half-assed way like any other show would. It legitimately moved me to make certain decisions, for better or for worse. In that sense, no other anime can compare, as no other anime has provided an equivalent reaction on my part."})
Review.create({user_id:5, anime_id:35 ,user_rating:9, user_start_date:"2016-05-10", user_end_date:"2016-05-13", body:"Recently I had the absolute pleasure of watching Clannad: After Story. I had previously seen the original Clannad and liked it as a light-hearted slice of life anime, good but not amazing. I went into After Story expecting the same thing, but what I got was something fantastically different."})
Review.create({user_id:6, anime_id:35 ,user_rating:9, user_start_date:"2016-05-08", user_end_date:"2016-05-14", body:"After watching many anime and reading many manga, I would recommend Clannad AS to most people just as strongly as when I first finished it. (I cry to it just as much too.) What sets After Story apart for me is the encompassing world it develops in addition to the main story. The completeness of the narrative is beautiful and rare, since many other media products of our time give up on telling a complete story for a variety of reasons. A plethora of stories are all told at once for the imaginative viewer who appreciates all of the series' nuances."})
Review.create({user_id:7, anime_id:47 ,user_rating:9,   body:"Code Geass: Hangyaku no Lelouch R2 is both more of the same and yet a departure for the series in several ways. On one hand, it’s often even more ridiculous and over the top than its predecessor, and on the other surprisingly dramatic, with an emotional resonance not found in the first season. This results in the show feeling more like a reboot/reimagining of the series rather than a simple continuation of the storyline."})
Review.create({user_id:8, anime_id:47 ,user_rating:10,   body:"Put on your seatbelts and brace yourself, for you will be taken on a rabidly-paced and concluding journey, slaloming through plot twists and character development at a tempo that will leave you longing for a new episode at the end of each one. Save a lot of time, for this is obnoxiously addictive. This is... Code Geass: Hangyaku no Lelouch... R2!"})
Review.create({user_id:9, anime_id:47 ,user_rating:8,   body:"Code Geass - Hangyaku no Lelouch R2 is the long awaited sequel to the masterpiece Code Geass - Hangyaku no Lelouch. Although it was generally perceived as a piece of trainwreck, especially during the latter half of the show, there is absolutely no doubt that it has made its mark in the anime industry. To be honest, I was pretty depressed after reading some of the interviews with director Taniguchi."})
Review.create({user_id:10, anime_id:73 ,user_rating:8,   body:"To be honest, I'm guilty of being biased and judgemental, and more than once to boot. A few years ago I had seen my friend's collection of Naruto manga. I scoffed and even teased him a bit, having seen what appeared to be ridiculous anime promos on TV aimed at children. Within a year, I had discovered anime and manga myself. I have since apologized. Then, a year ago in the fall FAL league, I found myself incredulous at how popular and highly praised the sequel to Kuroko no Basket was. "})
Review.create({user_id:11, anime_id:73 ,user_rating:9,   body:"The most important thing in a team sports is, without a doubt, the team. This holds especially true for volleyball. Having six talented players is all fine, but as long as they aren’t a team and don’t show team spirit, that talent is surely in vain. But what if it’s the other way round; is it a surefire way to win when you have one team where not everyone is talented?"})
Review.create({user_id:1, anime_id:73 ,user_rating:10, user_start_date:"2016-05-03", user_end_date:"2016-05-18", body:"So if you can tell from my score, I really freaking love this anime. I have to preface this by saying, I am NOT a sports anime fan. It's one of the last genres I look to because I've disliked/dropped over 90% of the ones I've seen. So I'm incredibly biased."})
Review.create({user_id:2, anime_id:30 ,user_rating:10,   body:"I nearly skipped this gem just because of the music tag. Not really big into music anime but somehow the art dragged me into watching the first few episodes. First episode was an average episode with few interesting plot lines. But the second episode was the hook. Irony. The tag that made me nearly skip this anime was the one that kept me in it. The music, the music... THE MUSIC.. what can I say? It was just right down my taste. "})
Review.create({user_id:3, anime_id:30 ,user_rating:9,   body:"Even though the story isn't anything new, the way it was written and directed make it feel like one. It is a story that revolves around music and how it connects people and how it affects them. It does not only affect them in a good way, but in a bad way too. And with that premise, a beautiful story about tennagers started."})
Review.create({user_id:4, anime_id:30 ,user_rating:7,   body:"here are mainly only two sides to the debate on this show -- those that absolutely love it, and those that strongly dislike it. Is there an abundance of melodrama? Yes. Does this show try too hard at some points? Sure it does. Does that mean that this show is bad? Not necessarily. This show is neither the best thing ever, as some people seem to be saying, but it's not the worst either. Basically, what I'm about to do is help find some middle ground between the two viewpoints."})
Review.create({user_id:5, anime_id:123 ,user_rating:9,   body:"Ookami Kodomo no Ame to Yuki translates to Wolf Children Ame and Yuki. What the film's title promises is accurate, but this is secondary to what the film is actually about. This is a movie entirely about the enduring and triumphant nature of maternal love.

Teenage Hana is a hardworking girl putting herself through college. During a class, her eyes fall on a man who enthusiastically and diligently takes notes, but he has no textbooks and he disappears before roll is taken. Intrigued, she searches him out and learns that he sits through classes but doesn't attend the school."})
Review.create({user_id:6, anime_id:123 ,user_rating:9,   body:"I saw this film yesterday and, having enjoyed it immensely, was pleased to read that it has won the award for Best Animated Feature Film at the 45th annual Sitges International Fantastic Film Festival (a Spanish film festival). This perhaps comes as little surprise given that it is the work of Mamoru Hosoda, acclaimed director of The Girl Who Leapt Through Time and Summer Wars (both of which also won the same award at previous Sitges festivals). I dare say that Mamoru has exceeded himself with this film, taking observations and musings from his own life "})
Review.create({user_id:7, anime_id:44 ,user_rating:8,   body:"Code Geass is one of my favorite anime. Why? It's filled with so much action, bombastic dialogue, and has such eye-catching visuals that it tops the charts in entertainment value. This is an exciting and epic anime and it's over the top. "})
Review.create({user_id:8, anime_id:44 ,user_rating:9,   body:"These are titles that attract us to the newest animes, but Code Geass, much like our beloved Suzumiya Haruhi was (and is) a fall/winter sleeper success. This anime, backed by Sunrise, director Goro Taniguchi (s-CRY-ed, Gun X Sword) and scriptwriter Ichiro Okouchi (Azumanga, RahXephon, Eureka 7) showcases an excellent engine of entertainment. "})
Review.create({user_id:9, anime_id:44 ,user_rating:6,   body:"Alright, its taken me since April to reach this point so I may as well dispense with any further delays and say it outright. Code Geass: Lelouch of the Rebellion is not a masterpiece, it isn’t a great show nor is it a very good one. What it is is a marginally good television program that takes concepts and characters from a wide variety of successful anime productions from the last decade and stitches them all together into twenty-five episodes of vulgarity and excess, a Frankenstein’s monster of a production that has the cold manufactured feel of a product of a focus read more"})
Review.create({user_id:10, anime_id:7 ,user_rating:9,   body:"The Holy Grail War: A war fought between seven selected masters and their servants to determine a sole victor, who will then bless one miracle upon the world. The Holy Grail War can either bring about an ideal wish that saves innocent lives or lead to chaotic destruction in the process. Or both. The Fate Zero series' plot circles around the Holy Grail War, its history and its future. The previous season focused on the characters' backgrounds, and in this season it is now all-out war. "})
Review.create({user_id:11, anime_id:7 ,user_rating:9,   body:"From the mind that gave us works such as Madoka and Saya no Uta comes a tale spun as a predecessor to the wildly popular series Fate/Stay Night. Of course, anyone who has read or watched Fate/Stay Night knows the outcome of the fourth Holy Grail War, but only half the fun of a journey is the destination. Gen Urobuchi and studio Ufotable guide us through a magnificent world saturated with dynamic characters, a beautiful score, jaw-dropping visuals and fluctuating idealistic views, which all congeal into a compelling narrative. "})
Review.create({user_id:1, anime_id:7 ,user_rating:10, user_start_date:"2015-11-01", user_end_date:"2015-11-02", body:"The Holy Grail—an omnipotent wish granting device which grants the owner any one wish of their deepest desire. For generations, the Holy Grail Wars were held every 60 years to decide who would be worthy to yield an item of such immense power; seven Masters coupled with seven Servants duke it out in a battle royale to the death, but only one Master and Servant can be victorious.

Fate/Zero is a thrilling, engaging, intellectual and mature anime"})
Review.create({user_id:2, anime_id:71 ,user_rating:9,   body:"The story is the best one you can get from a sports anime. Of course there's nothing complex, such as a great mystery or an awesome plot full of twists and something like that. Nevertheless, it's still awesome and original. We actually get some background on almost every character, even the less important ones. Our main characters are a yin-yang duo: they are opposites of each other, and yet, they become a single destructive weapon for their team."})
Review.create({user_id:3, anime_id:71 ,user_rating:9,   body:"As you probably already know, competitive spirit, teamwork, communication, and perseverance are all common themes that unite the sports genre as a whole. Therefore, to truly differentiate one show from other similar shows, scriptwriters need to engage the audience in a remarkably new and refreshing way.

I think for some people, this show is able to connect with them on some deeper, meaningful level. The way that this show engages with its audience is truly something else. The way Karasuno interacts, the way they crack jokes, and their never-ending drive to succeed – it makes you feel excited."})
Review.create({user_id:4, anime_id:71 ,user_rating:9,   body:"The sports genre.. if you're not a fan of it then it can't be helped but GODDAMN how much you're missing out. Most people don't start watching anime with the sports genre and even when they dive deeper into the vast sea of anime genres, it is one that usually is missed out"})
Review.create({user_id:5, anime_id:85 ,user_rating:9,   body:"At this point, Kuroko no Basket (Kuroko’s Basketball) is a series that needs no introduction. After two seasons of competitive gameplay, we have the third and final season to conclude the entire story based off the manga written by Tadatoshi Fujimaki. If you’re really anxious to see how the Winter Cup will be decided and who will earn the ultimate glory, then this is a must-see for KnB fans. Otherwise, I confess to myself that the third season is a bit of a hit or miss."})
Review.create({user_id:6, anime_id:85 ,user_rating:8,   body:"Finally... I got to finish this anime. Even few hours after I finished watching, adrenaline still overflowing inside of me. I really enjoy this season. Okay, before reviewing, I have read all the manga chapters before the anime even started the third season. Even though I did enjoy reading it, I was not that hyped up for the ending... but the anime did the reverse. With solid story as the base, characters we have grown to love, animated in such an astounding way, this is one of the rare case when I feel more enjoyment with the anime. "})
Review.create({user_id:8, anime_id:79 ,user_rating:9,   body:"As expected, the second season acted as a continuation from the first, cutting straight to the Winter Cup and previewing of most of the main participating teams. If I were to describe the plot in one sentence, it would simply be 'Seirin High fights to win the Winter Cup.' "})
Review.create({user_id:9, anime_id:79 ,user_rating:7,   body:"Kuroko no Basket is actually one of the most exciting sports anime I've watched so far, indeed, some people may say it like damn those characters can play fcking godly! for most kiseki no sedai players, but that's what makes the show more interesting right?"})
Review.create({user_id:10, anime_id:79 ,user_rating:8,   body:"Sequel to season one, Kuroko No Basket 2 does not disappoint. The new season begins with a mild time-skip after the inter-high matches. Seiren High—no longer the underdog—is now of equal footing in terms of basketball recognition. The most notable difference the time-skip offers would be the physical improvement of the players; all other improvements—such as unique skills—are publicly developed in season 2."})
Review.create({user_id:11, anime_id:6 ,user_rating:9,   body:"Being the prequel of the well known franchise Fate/Stay Night, Fate/zero certainly captured the attention of many very easily. What is immediately clear about this production though is not only does it match its predecessor, it far surpasses it in every way imaginable. Whether it be the directing, visuals, character exposition, or anything you can possibly think of, Fate/zero manages to move into a class of its own. In the end, this all adds up to a much more complex and interesting tale, which one will certainly not be soon to forget."})
Review.create({user_id:1, anime_id:6 ,user_rating:10, user_start_date:"2015-11-11", user_end_date:"2015-11-20", body:"Every once in awhile there will be an epic masterpiece that appears which is truly outstanding and fascinating. Fate/Zero is one of them, and i believe it has the potential to be one of the best anime of the year.

Story wise, it's been following the light novel consistently with great precision, picking up almost every single finest detail that are required to elaborate the story into a fine piece. The battle scenes are just simply amazing, you could never get enough of the fighting scenes, some of the episodes filled with action just make your blood boiled when you watch them."})
Review.create({user_id:3, anime_id:66 ,user_rating:8,   body:"I started off watching this anime because my brother recommended me it, so if it wasn't for him, I wouldn't have watched it. I started off watching the first season, and I just thought that the art was pretty good, it wasn't the best but the main characters attracted me, Chihaya mostly. So therefore, I really people out there to watch this anime too, or give it a try because it's not too shabby."})
Review.create({user_id:4, anime_id:66 ,user_rating:9,   body:"Twenty five more episodes worth of charming romance and competitive karuta fun? Yes please. But don't expect a balance between the two; there's more latter quantity than the former, and whether you should be satisfied or not is up to your preference!
"})
Review.create({user_id:5, anime_id:66 ,user_rating:7,   body:"If there is one word that describes Chihayafuru, it is passion - indeed, Chihaya furu means passionate. On the surface there is little that separates it from typical sports anime, from the focus on the team and team spirit to rivalries to tournament story arcs where you're typically served the main characters' opponents' motivations and reasons for participating in this sport."})
Review.create({user_id:7, anime_id:104 ,user_rating:8,   body:"You have just stumbled upon the ultimate Mahou Shoujo, one that doesn't care if it's morally ambiguous or not, one with no stock footage, and one where the magic used substitutes candy for bloodbaths.
"})
Review.create({user_id:8, anime_id:104 ,user_rating:9,   body:"It's been a long while since I watched and completed a magical girl series. So when I first read about SHAFT's first original anime production entitled Puella Magi Madoka Magica I was a bit skeptical at first, seeing how I usually don't watched the genre but at the same time curious on how SHAFT and Shinbou Akiyuki will gonna make one with their very unique visual style that defines SHAFT animated works. After watching their previous magical and supernatural series like Bakemonogatari, Dance in The Vampire Bund, Negima, and Natsu no Arashi, I'm convinced that I should at least try the series.
"})
Review.create({user_id:9, anime_id:107 ,user_rating:10,   body:"I don't think I've ever given perfect 10's across a rating scale. I don't think the third Madoka Magica movie deserves 10's across the board either, but this is the closest I'll probably ever get.

I dreaded the day that a sequel came to fruition for Madoka Magica. This was a show that ended on a rather ambiguous note but still left a good, everlasting impression in its original run, hinting that there was really no need for a sequel, an explanation, or an After Story, for that matter. I'm not saying I don't want any more of it, not at all. "})
Review.create({user_id:10, anime_id:107 ,user_rating:8,   body:"The final chapter in the highly acclaimed Madoka trilogy/show has come to a close, and studio Shaft has closed this book right (if not heart wrenching). The story is all tied to Homura after the events of the first two films. We follow her as the story travels down a road most fans never saw coming, but since this is the final chapter there is an end to this road."})
Review.create({user_id:11, anime_id:106 ,user_rating:8,   body:"Recaps are usually episodes/movies that re-tell a story that has already been told, but in a shorter and more compact way. It tells you valid points and informative parts in a story without all the unnecessary bits.

Mahou Shoujo Madoka★Magica Movie 2: Eien no Monogatari is a recap of the last four episodes in the original series; Mahou Shoujo Madoka★Magica but squeezed into a 2 hour long action-packed thrilling movie. When I first finished the original series of Madoka Magica I felt like I didn't watch it to my full potential (being distracted or not focusing at some points of the show.)"})
Review.create({user_id:1, anime_id:106 ,user_rating:8,   body:"This movie is essentially another recap of the TV series and thus, there is no original material in terms of storytelling or plot twists."})
Review.create({user_id:2, anime_id:28 ,   body:"One phrase that would perfectly describe Shirobako is simply ingenious. Surprisingly, the series has cleverly put together a lot of elements into one stand-out show. Aside from being an exposition of how anime series are made, it also tells us a cute and charming story all while boasting a splendid cast of characters and vibrant, dynamic designs.

The art in Shirobako is lovely. Although vibrant and dynamic, it is never flashy nor exaggerating. It is clean-cut and simple but more than enough to bring the story into fruition and to distinguish one character from the other."})
Review.create({user_id:3, anime_id:28 ,user_rating:10,   body:"Shirobako is a love letter to the anime industry. It doesn't glorify it or portray animators as hyper-talented geniuses, and many of the characters in the show admit they do not even understand why they're working in the industry. But there's something that keeps them passionate about what they do, even if it may not be the most respected form of media out there. "})
Review.create({user_id:4, anime_id:28 ,user_rating:9,   body:"An anime about the creation process of an anime - or some kind of meta-animation or animeception - that is not only a daring approach to new age infotainment, but also an excellent opportunity for the creators to put in their passion associated with this kind of work, and to tell a realistic tale on the hardships that newbies in this industry are likely to encounter."})
Review.create({user_id:5, anime_id:77 ,user_rating:9,   body:"he most common criticism I've seen so far of Kuroko no Basket has been how unrealistic it is. I myself am an avid basketball fan who plays regularly and watches NBA games. I can understand the criticism as this anime has a lot of spectacular dunks, blocks and flashy passes, the stuff you usually only see in highlight reels, but occurs regularly throughout the games in here. There's also the shounen elements with the special powers of Generation of Miracles members and other things such as the martial arts Seiho employs.
That being said, I am completely ok with this."})
Review.create({user_id:6, anime_id:77 ,user_rating:9,   body:"If your a sports anime fan then 2 words automatically...no even magically came to your mind, Slam Dunk. However sports anime fans or not im sure realize just how awesome this anime is. This could very well be Slam Dunk Successor."})
Review.create({user_id:7, anime_id:113 ,user_rating:9,   body:"As foreshadowed by the prequel OVA, Spice and Wolf II focus heavily on the romance aspect between our protagonists. By and large, this second adaptation has been regarded as equally successful as its predecessor (if not more successful). In terms of the light novels adaptation, it has been widely accepted for its accurate following of the “actual” story, unlike most anime adaptation. While previous knowledge of the series is not absolutely required to enjoy the show, it is highly recommended for viewers to watch the first season"})
Review.create({user_id:8, anime_id:113 ,user_rating:8,   body:"Continuing a beloved series and making it greater or just as great can be a challenging task to take. This is not much of a problem for anime that are step-by-step adaptations of any type of original source medium. Spice and Wolf, if you don’t know, is one series that won me over from the previous season. Likewise, I was hoping that this 2nd season would have the same positive impact that the 1st season did for me. "})
Review.create({user_id:10, anime_id:93 ,user_rating:9,   body:"I don't usually watch the romantic comedy genre of things. I always enjoyed action, fantasy, adventure like Soul Eater, Cowboy Bebop, Trigun etc. but for some reason I was in the mood for something different.

Toradora is just the 3rd romcom anime series i watched and I can truly say that it has become my FAVORITE anime."})
Review.create({user_id:1, anime_id:93 ,user_rating:9,   body:"Toradora!= Another normal romance/drama anime involving high school...We had many anime of this kind. In fact, these type of anime are very common nowadays. I had watched this type many times, but mostly ended up so wrongly.

But this time, Toradora! is done the right way. Yup, I ended up loving this normal anime. Story involves two high-schoolers, a normal guy, and a short girl....Now where have I heard that from? Many anime had this kind of story. Yup, It kinda gives me feelings of Deja Vu-ness. This time its done the way I like it."})
Review.create({user_id:2, anime_id:24 ,user_rating:8,   body:"At the end of Unlimited Blade Works we were left with a rather monotonous and filler-full episode.
Season 2 kicks off with a rather hefty amount of character development and back story to further develop the overarching story as a whole.
It's clear and concise, and creates a competent understanding of who the characters are, and what their motives are for."})
Review.create({user_id:3, anime_id:24 ,user_rating:8,   body:"The prologue/first few episodes of Unlimited Budget Works establishes the Fifth Holy Grail War; a battle royale between seven servants (made up of mythological figures such as Heracles) and mages where the last survivor is rewarded with being presented the Holy Grail which can grant them any wish they desire. During these episodes it is emphasized how dangerous this war is where even witnesses of the war will be murdered."})
Review.create({user_id:4, anime_id:18 ,user_rating:8,   body:"If there’s one word that any anime fan can be familiar with, it may be ‘Fate’. The franchise adapted from the highly popular Type-Moon visual novel has been around for a decade. In 2006, an anime adaptation by studio DEEN was released in an attempt to adapt the visual novel. And while it included the characters from the series, there were controversy regarding the actual adaptation. Then, there was the movie titled ‘Fate Stay Night: Unlimited Blade Works’ movie that was released four years later. "})
Review.create({user_id:5, anime_id:18 ,user_rating:9,   body:"As a note, I have not read/played any of the Type Moon visual novels from which this anime is based. I did however find Fate/Zero to be excellent. Coming off of Fate/Zero I was completely pumped to jump right back into the world in Fate/Stay Night. After watching the entire first season I have to say that I'm slightly disappointed."})
Review.create({user_id:6, anime_id:68 ,user_rating:9,   body:"To describe Bakemonogatari’s plot simply: it’s a harem anime. The show features our ~mysteriously charismatic~ hero, Arararararagi-kun (sorry, my tongue slipped) as he somehow manages to charm a whole load of girls – whilst, at the same time, he battles with the supernatural to sort out their problems. Minus the ‘supernatural’ aspect (which seems kind of like a cheap gimmick, to spice up this ‘harem’ style story we’ve surely seen countless of times before), there is nothing special about Bakemonogatari.
"})
Review.create({user_id:7, anime_id:68 ,user_rating:9,   body:"For every medium, there are few masterpieces that transcend the genre and become something special. Since I consider anime, as a genre, to be just as legitimate an art form (despite the bad rep it often gets), I will also review Bakemonogatari as a work of art, and it is irrefutably one of the special few anime series that fully capitalize on the strengths of the anime medium."})
Review.create({user_id:8, anime_id:111 ,user_rating:8,   body:"Wolf and spice can be summed up fairly easily. Be prepared for ALOT of dialog. In essence, its about a story about merchant trading during medieval times. A time when the word of the catholic church was more important than anything else and anyone else was deemed a witch or heretic. Since it is set in such archaic times it would be a perfect fit to have an anime about merchant trading.
"})
Review.create({user_id:9, anime_id:111 ,user_rating:9,   body:"Personally, I believe Spice and Wolf's central theme to be a rephrasing of the saying 'Never judge the content by the cover'. The story is one of the most unique in anime, despite the presence of a naked wolf girl that would normally slap a bold 'FANSERVICE' stamp right across the middle. Spice and Wolf is inexplicable, to be honest. It's a medieval fantasy, but has nothing to do with swords and spellcraft, but rather trading and economics."})
Review.create({user_id:10, anime_id:88 ,user_rating:7,   body:"Fun watch to see post season 3"})
Review.create({user_id:11, anime_id:102 ,user_rating:9,   body:"K-ON may be a controversial series, and some may think anything to do with K-ON is nothing but overrated. Subjectively, I love the series. The daily school lives of the light music club and the live gigs, are never tiring to watch. Throughout season one and two, the series had shown us a simple, fun, relaxing and heart-warming ambiance through and through. As soon as the movie’s subs was out, it doesn’t take long for me to pop up my video player, and enjoy another near two hours of cuteness and fluffiness."})
Review.create({user_id:1, anime_id:102 ,user_rating:9,   body:"Many people have found themselves wondering what truly qualifies as something exemplary. For some, this kind of quality is attributed to titles with deep themes and complex storytelling, and for others it may be something as subjective as what's fun. What can be agreed by everybody though, is that no matter what the nature of a title is, when the inherent quality is up there it’s going to shine through in the story. It’s going to make the audience feel something of significance and it’s going to leave them awed and speechless when the credits roll."})
Review.create({user_id:1, anime_id:65 ,user_rating:8,   body:"At first, this anime really didn't catch my interest. It was plain and dry, like trying to shape out the dry clay; but as it went on, I found myself immersed in it. Like a sea of colors vibrantly expanding across an infinite of sky. Yes, even now, fifteen minutes after I finally saw the last episode, I am still numbed by its excellence."})
Review.create({user_id:1, anime_id:134 ,user_rating:7,   body:"It's darker than the remake but now following the manga story really killed part of this show."})
Review.create({user_id:1, anime_id:23 ,user_rating:8,   body:"Good introduction to the series, very faithful to the VN route, fun watch."})
Review.create({user_id:1, anime_id:105 ,user_rating:7,   body:"Good recap of the first part of the movie."})
Review.create({user_id:1, anime_id:33 ,user_rating:8,   body:"The first time I watched Clannad was back in 2008, and I just finished re-watching it for the 3rd time this past few days. Now I realize that will take years before I watch something that does the same impact on me like this anime did. I was moved by it the first time I watched, and the third as well, but surprisingly in a different way. "})
Review.create({user_id:1, anime_id:133 ,  body:"Okay, first things first. One: If you haven't watched the original Full Metal Panic! series, watch it beforehand. Knowing the characters *will* make the humor better. Two, if you didn't like the part of the original series that was about Sosuke and Chidori's everything but normal high school life, turn around, because that's all Fumoffu is about. "})
Review.create({user_id:1, anime_id:41 ,user_rating:9,   body:"In this world, there are some people who excels in certain things more than others. These might be anything in the field of academics, sports, games, etc. For a particular middle school girl though, she is already know for being a prominent level 5 esper who excels in academics, her electromaster abilities, and is even given the nickname the 'Railgun' for her signature attack. Thus, begins the story of a certain girl, the one and only Misaka Mikoto of the Railgun.
"})
Review.create({user_id:1, anime_id:100 ,user_rating:8,   body:"For any individual, there always are surprises to be found in the long walk of life. Things that initially appear flavorless and dull, but reveal themselves to be something much more colorful. These are the kinds of experiences that impact a person and make them feel something of significance. They may make them laugh or cry, but in the end these are the kinds of stories that hold a special place in one's heart. The second season of K-ON is, for me (and for many), this very experience. "})
Review.create({user_id:2, anime_id:65 ,user_rating:8,   body:"Man, Chihayafuru is freaking good. I wasn’t going to watch this show. You look at the promo. It’s a shoujo/josei type joint about some chick who plays Japanese cards or some nonsense. How can that be good?"})
Review.create({user_id:2, anime_id:134 ,user_rating:9,   body:"Personally I feel this one is stronger than brotherhood because of its darker atmosphere."})
Review.create({user_id:2, anime_id:23 ,user_rating:7,   body:"They missed parts of the VN like Rin's monologues but overall good intro."})
Review.create({user_id:2, anime_id:33 ,user_rating:8,   body:"I  have to thank Clannad, for increasing my Japanese vocabulary and introducing me to a new word. While watching Clannad at my local anime soc, I could feel a certain something radiating from it. I'd encountered similar feelings before from other anime, but never quite so strongly. By the end of it, I picked up a new word to go with that feeling.
"})
Review.create({user_id:2, anime_id:133 ,   body:"After watching all the FMP seasons I have to say that, without a doubt, Full Metal Panic? Fumoffu is the best one. FMP F are just spin-offs, side stories that take place right after the first Full Metal Panic! and before Second Raid season. If you are looking for a good laugh this is definitely one of the best options around.
"})
Review.create({user_id:2, anime_id:41 ,user_rating:8,   body:"While the second installment of the Railgun series picks up almost directly after the conclusion of the first series, A Certain Scientific Railgun S goes for a different kind of approach thematically and in terms of emotional appeal. Overall, there is a larger focus on the troubles of Misaka Mikoto herself. S1 gave a pretty even amount of screen time to all four of our main characters, so she was not put entirely into the spotlight before, but now she leads this show head on following the events that take place during the sisters arc."})
Review.create({user_id:2, anime_id:100 ,user_rating:6,   body:"I'm not a huge fan of the moe wave, if you want to call it, that has over-saturated the anime market for good part of the last five years. Personally, I don't really wish to encourage a lack of creativity in Japanese studios to continue with the on-going cute girls going cute things mentality, but I have to admit as much as I' might dislike or completely forgo these moe series, something about K-ON!! (and its prequel) keep me entertained."})
Review.create({user_id:3, anime_id:34 ,user_rating:9, user_start_date:, user_end_date:, body:"Magic, pure magic. Everything that is wrong with Nagisa is right with Tomoyo.

Premise:
Filial piety is restored, and the father receives his child back into his arms by Tomoyo's grace. All mighty, all holy, all loving Tomoyo. None shall come before the father except by her.

Basically, its the Tomoyo/Canon ending for Clannad

Conclusion:
IN one stroke, we fix everything that was wrong with Clannad's ending and avoid the unmitigated catastrophe that was Clannad Afterstory. If that's not worth a ten, I don't know what is. If you're already watching Clannad, watch this, be momentarily happy, and then take the dive and watch Afterstory."})
Review.create({user_id:3, anime_id:139 ,user_rating:8, user_start_date:, user_end_date:, body:"Fullmetal Alchemist is a mega success, specially the Brotherhood anime. Proof of that is the fact that it's ranked number 2 in this page, since who knows how many months. And, as with any successful product, OVA, specials and movies are created. Unfortunately, in most cases, these products tend to be mediocre at best, therefore, prudent consumers often face these creations with skepticism, or directly not expecting much. So, i watched Brotherhood's special with the intention of having fun, but not expecting anything great or mind blowing. I mean, four fifteen minutes long self conclusive episodes? What could you get of that?. A lot. This is one of the few cases in wich the product took me by surprise."})
Review.create({user_id:3, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:3, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:3, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:4, anime_id:34 ,user_rating:9, user_start_date:, user_end_date:, body:"This one episode Clannad OVA is to me one that is filled with emotions. Aside from that, it manages to do three things to the Clannad series: One, it provides the romance that was mostly minimal in Clannad. Two, it provides the drama that gradually fell from the plot after Fuko and and Kotomi's arc. And three, it allows satisfaction to Tomoyo supporters, since not everyone was a Nagisa fan. Many people expected Clannad to be a series with significant romantic struggles and a high level of drama, but it instead turned into a slice-of-life comedy after the first one or two arcs."})
Review.create({user_id:4, anime_id:139 ,user_rating:8, user_start_date:, user_end_date:, body:"The Blind Alchemist is about Ed and Al hearing a rumor that a state alchemist named Judas successfully made a human transmutation to save her daughter from dying and what they see is rather disturbing. The Blind Alchemist showcases more on the consequences of human transmutation and how can affect on people's lives. It's been done in other FMA episodes, but this OVA is still emotionally heartbreaking and a nice start to the OVA Collection."})
Review.create({user_id:4, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:4, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:4, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:4, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:5, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:5, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:5, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:5, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:5, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:6, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:6, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:6, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:6, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:7, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:7, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:7, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:7, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:8, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:8, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:8, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:8, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:9, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:9, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:9, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:9, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:10, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:10, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:10, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:10, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:10, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:11, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:11, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:11, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
Review.create({user_id:11, anime_id: ,user_rating:, user_start_date:, user_end_date:, body:})
