new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Sidhu Moose Wala",
            artist: "SYL",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/SYL_Sidhu_Moose_Wala.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/SYL_320(PagalWorld.com.se).mp3",
            url: "https://www.youtube.com/watch?v=R4c0UoJnBrk",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala ft Sunny Malton ",
            artist: "Levels",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b2731cf092f7828a17c0790e2f00.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Levels.mp3",
            url: "https://www.youtube.com/watch?v=tpFljbJxZiw",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala",
            artist: "The Last Ride",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b27374568d5f6ec286a36613a517.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/The%20Last%20Ride.mp3",
            url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
            favorited: false
          },
          {
            name: "No Name",
            artist: "LOVE SICK",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b273fd2e3126a9d286550f9921a2.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Love%20Sick_320(PagalWorld.com.se).mp3",
            url: "https://www.youtube.com/watch?v=2VPYQaS0yVE",
            favorited: false
          },
          {
            name: "No Name",
            artist: "EVERYBODY HURTS",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b273fd2e3126a9d286550f9921a2.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Everybody_Hurts-Sidhu_Moose_Wala-(Djjaani.com).mp3",
            url: "https://www.youtube.com/watch?v=Eu-CJl1bsIU",
            favorited: false
          },
          {
            name: "No Name",
            artist: "BLOODLUST",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b273fd2e3126a9d286550f9921a2.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Bloodlust.mp3",
            url: "https://www.youtube.com/watch?v=GauAxW3x2l4",
            favorited: false
          },
          {
            name: "No Name",
            artist: "NEVER FOLD",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b273fd2e3126a9d286550f9921a2.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Never%20Fold%20-%20Sidhu%20Moose%20Wala_320-%20%5BPagalWorld.NL%5D.mp3",
            url: "https://www.youtube.com/watch?v=-CJ3_0vyzNs",
            favorited: false
          },
          {
            name: "No Name",
            artist: "0 TO 100",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b273fd2e3126a9d286550f9921a2.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/0_To_100-Sidhu_Moose_Wala-(Djjaani.com).mp3",
            url: "https://www.youtube.com/watch?v=pHtHF5Amw8Q",
            favorited: false
          },
          {
            name: "Sidhu moose wala",
            artist: "Scapegoat",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b27377a75668cab907b54f93f015.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Scapegoat.mp3",
            url: "https://www.youtube.com/watch?v=1mzP0yIdHuY",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Sunny Malton",
            artist: "F**k Em All ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput//Tribute-to-sidhu-moose-wala/master/ab67616d0000b273451dddd5224b297717ea34dd.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Fuck%20Em%20All.mp3",
            url: "https://www.youtube.com/watch?v=GzFnLZ2gyBY",
            favorited: false
          },
          {
            name: "Balkar Ankhila | Manjinder Gulshan",
            artist: "SIYASAT CH AA GEYA ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab6761610000e5eb65d54c88ab4c1abf204b360f.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Siyasat-Ch-Aa-Geya.mp3",
            url: "https://www.youtube.com/watch?v=6F27Hs1dEl8",
            favorited: false
          },
          {
            name: "Gulab Sidhu | Sidhu Moose Wala ",
            artist: "KIWE KADOGE  ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/d8539f36-7b26-4409-be98-136798896cbd.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Kive%20Kadoge%20-%20Sidhu%20Moose%20Wala(audiosong.in).mp3",
            url: "https://www.youtube.com/watch?v=V4k3RigFOSw",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Sunny Malton ",
            artist: "Youngest In Charge ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/ab67616d0000b27328f0e36464753984b0238d6c.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Youngest%20In%20Charge%20-%20Sidhu%20Moose%20Wala(audiosong.in).mp3",
            url: "https://www.youtube.com/watch?v=24yzfJB_5AM",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Tion Wayne | Moosetape ",
            artist: "Celebrity Killer",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Celebrity%20Killer%20(feat.%20Tion%20Wayne)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=MyYAglA_Cdk",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape  ",
            artist: "GOAT",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/GOAT%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=M8vDwlHigJA",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape ",
            artist: "Real One (SKIT)",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Real%20One%20(Skit)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=JQMmxnwpRKU",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape  ",
            artist: "Power",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Power%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=Kr36zukJbLg",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Feat. Morrisson | Moosetape ",
            artist: "IDGAF",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/IDGAF%20(feat.%20Morrisson)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=ctVAt8WGwJQ",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape  ",
            artist: "295",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/295%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=n_FCrCQ6-bA",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape  ",
            artist: "FACTS (SKIT)",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Facts%20(Skit)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=iMjZfPabHI4",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "Calaboose",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Calaboose.mp3%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=Xf-N1joH6h4",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Blockboi Twitch  | Moosetape  ",
            artist: "G - Shit",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/G-Shit%20(feat.%20Blockboi%20Twitch)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=YPPEZiDF4Xw",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "Built Different",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Built%20Different%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=y-abKv4oqjk",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala |  Moosetape  ",
            artist: "Amli Talk",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Amli%20Talk%20(Skit)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=Ik9xqwWiIok",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "Amora",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Aroma%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=tghIoadPRgE",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Stefflon Don |  Moosetape  ",
            artist: "INVINCIBLE ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Invincible%20(feat.%20Stefflon%20Don)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=n8M1PvCyKwA",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "B & W",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/B%20%26%20W%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=QM3PkDGQEDM",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  |  Moosetape  ",
            artist: "PIND HOOD DAMN GOOD (MALWA BLOCK INTRO)",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Pind%20Hood%20Damn%20Good%20(MGR%20Intro)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=Y_pHLV8Rfzw",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "Malwa Block",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Malwa%20Block%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=7uVIzQYdbGk",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala |  Moosetape  ",
            artist: "Regret",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Regret%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=xgMGfOt7XhU",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "Ultimatum",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Ultimatum%20(Intro)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=ybPbyWHJPKA",
            favorited: false
          },
          {
            name: " Sidhu Moose Wala | Bohemia  |  Moosetape  ",
            artist: "These Days ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/These%20Days%20(feat.%20Bohemia)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=gnpw_Z-mBlY",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala  | Moosetape  ",
            artist: "Ultimatum (Intro)",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Ultimatum%20(Intro)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=ybPbyWHJPKA",
            favorited: false
          },
          {
            name: " Sidhu Moose Wala | Moosetape  ",
            artist: "Sidhu son",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Sidhu%20Son%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=xIpQgJ-fGK8",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape  ",
            artist: "Me & My Girlfriend ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Me%20and%20My%20Girlfriend%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=7DPcBQ1sjX4",
            favorited: false
          },
          {
            name: " Sidhu Moose Wala | Moosetape  ",
            artist: "Chachu Huu (Skit)",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Chacha%20Huu%20(Skit)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=4BoIRXjg7J8",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Moosetape  ",
            artist: "Brown Shortie ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Brown%20Shortie%20(feat.%20Sonam%20Bajwa)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=AKg-PRzEuqo",
            favorited: false
          },
          {
            name: " Sidhu Moose Wala| Sonam Bajwan | Moosetape  ",
            artist: "Boo call (Skit)",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Boo%20Call%20(Skit)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=c01R-h5wRcU",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Feat Divine | Moosetape  ",
            artist: "Moosedrilla",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosedrilla%20(feat.%20DIVINE)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=GFUJ5mG_4NI",
            favorited: false
          },
          {
            name: " Sidhu Moose Wala| Raja Kumari | Moosetape  ",
            artist: "US",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/US%20(feat.%20Raja%20Kumari)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=c8UUWkUJu6E",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Feat Sikander | Moosetape  ",
            artist: "Racks and Rounds",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Racks%20and%20Rounds%20(feat.%20Sikander%20Kahlon)%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=b8hwZidIOEA",
            favorited: false
          },
          {
            name: " Sidhu Moose Wala | Moosetape ",
            artist: "Burberry",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Burberry.mp3%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=I1Llz8075MA",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala | Afsana Khan | Moosetape  ",
            artist: "UNFUCKWITHABLE ",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Unfuckwithable%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=tZt3Tp0MFZk",
            favorited: false
          },
          {
            name: "Sidhu Moose Wala |  Moosetape  ",
            artist: "Bitch I'm Back",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Moosetape.jpg",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Bitch%20I'm%20Back%20(DJJOhAL.Com).mp3",
            url: "https://www.youtube.com/watch?v=W5NgXKe4SJk",
            favorited: false
          },
            {
            name: "Sidhu Moose Wala ",
            artist: "Phantom",
            cover: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/sidhu-moosewala-16538305104x3.webp",
            source: "https://raw.githubusercontent.com/Tinny-rajput/Tribute-to-sidhu-moose-wala/master/Phantom-Sidhu_Moose_Wala-(Djjaani.com).mp3",
            url: "https://www.youtube.com/watch?v=0n83LS7cYII",
            favorited: false
          },
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
  
