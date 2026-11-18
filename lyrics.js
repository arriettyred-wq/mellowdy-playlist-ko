/* ==========================================================
   LYRICS DATA
   WHAT YOU SEE: the text in the white lyrics box on the
   full-screen player. The key is the song id (s1, s2 ... s10).

   Option A, plain text: paste text between backticks
   Option B, synced: [[seconds, "line"], ...]
   With synced lyrics the current line turns bold and the box
   scrolls by itself while the song plays.
   A song with no entry shows "Lyrics not available yet."
   ========================================================== */

const lyrics = {
 s1: [
[0, "🎵"],
[12.22, "I've never known someone like you"],
[18.93, "Tangled in love, stuck by you, from the glue"],
[25.24, "Don't forget to kiss me, or else you'll have to miss me"],
[31.14, "I guess I'm stuck forever by the glue, oh, and you"],
[38.21,  "Mm-mm"],
[41.16,  "Mm-mm-mm-mm"],
[44.48,  "Mm-mm-mm"],
[50.16,  "Finding the right words"],
[53.05,  "to use for this song"],
[56.69,  "I have you in mind"],
[58.10,  "so it won't take so long"],
[63.20,  "Never thought I'd find you, but you're here"],
[66.21,  "And so l love you"],
[69.05,  "I'm not wrong, when I say I've been stuck"],
[72.00,  "By the glue onto you"],
[80.08,  "I've been stuck by a glue"],
[86.55,  "Right onto you"],
[92.52,  "I've been stuck by a glue"],
[100.92, "I've never known"],
[105.41, "🎵"],
[107.48, "I've never known someone like you"],
[113.57, "I've never known"],
[119.54, "I've never known someone like you"],
[126.04, "🎵"],
],
 
 s2: [
    [3.10, "🎵"],
    [23.40, "Tahan na, andito ka na"],
    [28.77, "'Di na tayo mag-iisa"],
    [33.46, "Oh aking sinta, mahal kong sinta"],
    [39.63, "Kay lakas ng ulan kay ganda mong tingnan"],
    [45.14, "Kailan pa kita nakilala"],
    [50.48, "Kay tagal ng hindi masaya"],
    [56.23, "At sa wakas ay nandito ka na"],
    [61.30, "Kay ganda ng langit at ng 'yong mata"],
    [66.97, "Sa gitna ng ilaw ng ating siyudad"],
    [72.30, "Sa ngayon, bukas at noon"],
    [76.94, "Buong buhay ko"],
    [81.38, "Ako'y sa'yong sa'yo"],
    [89.62, "🎵"],
    [104.98, "Sa ngayon at sa pagtanda"],
    [110.58, "Ito ang aking nadarama"],
    [115.52, "Itahan mo 'ko sa duyan mo"],
    [121.44, "Bibigay ang gabay para habang buhay"],
    [126.92, "Kahit kailan, ganito o ganiyan"],
    [132.14, "Pangakong ako ay nandito lamang"],
    [137.94, "At wala na 'kong hahanapin pa"],
    [143.09, "O kay ganda ng langit at ng 'yong mata"],
    [148.73, "Sa gitna ng ilaw ng ating siyudad"],
    [154.19, "Pwede ba o giliw 'wag nang mag-iiba"],
    [164.36, "Nangangamba palagi nang nag-iisa"],
    [170.54, "Sa wakas nahanap ang aking tahanan sa'yo"],
    [177.99, "Oh buhay ko hanggang dulo"],
    [184.94, "Ako'y sa'yong sa'yo"],
    [188.98, "Mahal kita"],
    [193.30, "Sa hirap at ginhawa"],
    [200.61, "At panghabang buhay na tayong dalawa"],
    [222.64, "🎵"],
    [227.69, "O kay ganda ng langit at ng 'yong mata"],
    [233.30, "Sa gitna ng ilaw ng ating siyudad"],
    [238.83, "Pwede ba o giliw 'wag nang mag-iiba"],
    [248.56, "Nangangamba palagi nang nag-iisa"],
    [255.12, "Sa wakas nahanap ang aking tahanan sa'yo"],
    [262.73, "Oh buhay ko hanggang dulo"],
    [269.36, "Ako'y sa'yong sa'yo"],
    [273.73, "🎵"],

 ],

 
s3: [
[19.10,  "Your morning eyes"],
[22.00,  "I could stare like watching stars"],
[26.38,  "I could walk you by"],
[29.00,  "and I'll tell without a thought"],
[32.00,  "To be mine"],
[34.98,  "Would you mind if I took your hand tonight"],
[40.34,  "Know you're all that I want - this life"],
[48.18,  "I'll imagine we fell in love"],
[50.72,  "I'll nap under moonlight skies with you"],
[54.75,  "I think I'll picture us, you with the waves"],
[58.36,  "The ocean's colors on your face"],
[62.21,  "I'll leave my heart with your air"],
[66.25,  "So let me fly with you"],
[69.56,  "Will you be forever with me?"],
[75.94,  "🎵"],
[106.83, "My love will always stay by you"],
[112.78, "I'll keep it safe, so don't you worry a thing"],
[117.94, "I'll tell you I love you more"],
[121.20, "It's stuck with you forever"],
[124.00, "so promise you won't let it go"],
[128.12, "I'll trust the universe"],
[130.00, "will always bring me to you"],
[136.64, "I'll imagine we fell in love"],
[139.28, "I'll nap under moonlight skies with you"],
[143.15, "I think I'll picture us, you with the waves"],
[146.73, "The ocean's colors on your face"],
[150.33, "I'll leave my heart with your air"],
[154.78, "So let me fly with you"],
[158.15, "Will you be forever with me?"],
[164.46, "🎵"]
 ],
 
 s4: [
    [2.75, "🎵"],
    [33.38, "사람 사이 사람"],
    [37.31, "바람 사이 바람"],
    [41.32, "각자의 염원이 바래고"],
    [50.78, "덧칠되어"],
    [56.49, "오, 발이 닿을 만큼 굳어지면"],
    [71.21, "아, 비로소 내 세상이 되어줘, 아"],
    [95.38, "나의 작은 마음도"],
    [102.46, "그 안에 자란 나음도"],
    [110.22, "부서지고 굳어지고"],
    [118.28, "녹아내리고나면 그제서야 보이는 나의 영원"],
    [134.00, "🎵"],
    [165.13, "사람 사이 사랑"],
    [168.91, "모두 함께 모여서, 오오 (아아)"],
    [180.66, "영원을 바라고"],
    [184.43, "몸 마음 묻어내면, 오오"],
    [199.81, "비로소 우리의"],
    [207.55, "세상이 완벽해, 오"],
    [219.31, "사랑으로"],
    [223.18, "사랑으로"],
    [227.01, "나의 작은 마음도"],
    [234.28, "그 안에 작은 파도처럼"],
    [241.85, "부서지고 밀려와선"],
    [250.61, "네게 녹아내리고 그제서야 보이는 나의 영원"],
    [269.34, "🎵"],
    [271.18, "오오오"],
    [279.01, "우우우"],
    [280.99, "🎵"],
 ],
 s5: [
      [0.00, "🎵"],
    [13.27, "My heart is so proud"],
    [17.95, "My mind is so unfocused"],
    [22.49, "I see the things You do through me"],
    [27.10, "As great things I have done"],
    [31.92, "And now You gently break me"],
    [36.12, "Then lovingly You take me"],
    [41.00, "And hold me as my father"],
    [45.70, "And mold me as my maker"],
    [51.54, "I ask you, \"How many times will you pick me up"],
    [57.07, "When I keep on letting you down?\""],
    [61.68, "And each time I will fall short of Your glory"],
    [66.11, "How far will forgiveness abound?"],
    [70.45, "And You answer, \"My child, I love you"],
    [75.40, "And as long as you're seeking My face"],
    [80.57, "You'll walk in the power of My daily sufficient grace\""],
    [93.96, "At times, I may grow weak"],
    [98.74, "And feel a bit discouraged"],
    [103.35, "Knowing that someone"],
    [106.80, "Somewhere could do a better job"],
    [112.58, "For who am I to serve You?"],
    [117.13, "I know I don't deserve You"],
    [121.82, "And that's the part that burns in my heart"],
    [126.42, "And keeps me hanging on"],
    [130.31, "I ask you, \"How many times will you pick me up"],
    [135.38, "When I keep on letting you down?\""],
    [140.28, "And each time I will fall short of Your glory"],
    [144.67, "How far will forgiveness abound?"],
    [148.83, "And You answer, \"My child, I love you"],
    [153.98, "And as long as you're seeking My face"],
    [158.52, "You'll walk in the power of My daily sufficient grace\""],
    [168.34, "You are so patient with me, Lord"],
    [181.25, "As I walk with You, I'm learning"],
    [186.31, "What Your grace really means"],
    [191.09, "The price that I could never pay"],
    [195.73, "Was paid at Calvary"],
    [200.24, "So, instead of trying to repay You"],
    [204.81, "I'm learning to simply obey You"],
    [209.42, "By giving up my life to You"],
    [213.94, "For all that You've given to me"],
    [217.97, "I ask you, \"How many times will you pick me up"],
    [223.35, "When I keep on letting you down?\""],
    [227.97, "And each time I will fall short of Your glory"],
    [232.63, "How far will forgiveness abound?"],
    [236.82, "And You answer, \"My child, I love you"],
    [241.57, "And as long as you're seeking My face"],
    [246.48, "You'll walk in the power of My daily sufficient grace\""],
 ],
 
 s6: [
[19.85,  "There's somethin' 'bout the way"],
[22.00,  "The street looks when it's just rained"],
[25.00,  "There's a glow off the pavement"],
[28.00,  "You walk me to the car"],
[30.00,  "And you know I wanna ask you"],
[32.00,  "to dance right there"],
[34.62,  "In the middle of the parking lot, yeah"],
[39.62,  "🎵"],
[42.42,  "Oh, yeah"],
[48.68,  "We're drivin' down the road"],
[51.00,  "I wonder if you know"],
[53.60,  "I'm tryin' so hard not to get caught up now"],
[58.30,  "But you're just so cool"],
[59.76,  "Run your hands through your hair"],
[62.83,  "Absentmindedly makin' me want you"],
[67.46,  "And I don't know how"],
[70.00,  "it gets better than this"],
[72.12,  "You take my hand and drag me head first"],
[76.00,  "Fearless"],
[77.00,  "And I don't know why but with you"], 
[80.01,  "I'd dance"],
[82.05,  "In a storm in my best dress, fearless"],
[87.17,  "🎵"],
[96.78,  "So baby drive slow 'til we run out of road"],
[102.00, "In this one-horse town"],
[104.00, "I wanna stay right here"],
[106.86, "In this passenger's seat, you put your eyes on me"],
[111.57, "In this moment now, capture it, remember it"],
[116.06, "Cause I don't know how"],
[118.00, "It gets better than this"],
[121.12, "You take my hand and drag me head first"],
[123.00, "Fearless"],
[125.51, "And I don't know why but with you, I'd dance"],
[130.00, "In a storm in my best dress"],
[133.00, "Fearless"],
[134.25, "🎵"],
[139.00, "Oh, oh"],
[140.36, "🎵"],
[154.00, "Well, you stood there with me in the doorway"],
[158.45, "My hands shake, I'm not usually this way but"],
[163.99, "You pull me in and I'm a little more brave"],
[167.72, "It's the first kiss, it's flawless, really somethin"],
[174.00,  "It's fearless"],
[180.53,  "Oh, yeah"],
[185.00,  "Cause I don't know how it gets better than this"],
[189.95,  "You take my hand and drag me headfirst, Fearless"],
[194.63,  "And I don't know why but with you, I'd dance"],
[199.87,  "In a storm in my best dress, fearless"],
[204.27,  "Cause I don't know how it gets better than this"],
[209.00, "You take my hand and drag me head first"], 
[212.00, "Fearless"],
[214.00, "And I don't know why but with you, I'd dance"],
[218.96, "In a storm in my best dress, fearless"],
[224.45, "Oh, oh"],
[226.86, "Oh-oh, yeah"],
[228.44, "🎵"],
],
 s7: [
    [0.00, "🎵"],
    [30.19, "There's no way to time it"],
    [35.12, "And where you may find it is unknown"],
    [40.91, "Until then, you're a loner"],
    [45.87, "So you see her (see her)"],
    [48.07, "She's over (over) in the corner (corner)"],
    [51.54, "And you can't (you can't) ignore her (you can't ignore her)"],
    [55.66, "There must be a reason"],
    [59.69, "You see it, believe it now"],
    [62.46, "Search the definition of shame"],
    [64.91, "I'm sure you'll see my face"],
    [70.13, "Who's gonna save me now?"],
    [72.78, "I hope it's you, my babe"],
    [77.14, "Don't change a thing, you are amazing"],
    [81.23, "I can't believe you've come and saved me"],
    [85.13, "We can stay here, spend every day here"],
    [89.46, "I don't mind, no"],
    [92.77, "Don't change a thing, you are amazing"],
    [96.80, "I can't believe you've come and saved me"],
    [100.51, "We can stay here, spend every day here"],
    [105.29, "I don't mind"],
    [107.67, "See her"],
    [109.47, "She's over in the corner"],
    [113.24, "And I can't ignore her"],
    [117.33, "I hope there's a reason"],
    [121.40, "To see it, I see it now (now, oh)"],
    [123.80, "🎵"],
    [139.85, "Search the definition of afraid"],
    [142.13, "And I'm sure you'll see my face"],
    [147.50, "Who's gonna save me now?"],
    [149.83, "I hope it's you, my babe"],
    [154.75, "Don't change a thing, you are amazing"],
    [158.80, "I can't believe you've come and saved me"],
    [162.48, "We can stay here, spend everyday dear"],
    [167.30, "I wouldn't mind"],
    [170.33, "Don't change a thing, you are amazing"],
    [174.44, "I can't believe you've come and saved me"],
    [178.24, "We can stay here, spend every day here"],
    [182.22, "Oh, I don't mind, that's all right"],
    [188.93, "(Yeah)"],
    [191.46, "🎵"],
  
 ],
 s8: [
    [4.83, "🎵"],
    [32.91, "Lift your head, baby, don't be scared"],
    [39.63, "Of the things that could go wrong along the way"],
    [45.90, "You'll get by with a smile"],
    [52.81, "You can't win at everything, but you can try"],
    [58.67, "Baby, you don't have to worry"],
    [62.71, "'Cause there ain't no need to hurry"],
    [66.05, "No one ever said that there's an easy way"],
    [72.16, "When they're closing all their doors"],
    [75.60, "And they don't want you anymore"],
    [78.63, "This sounds funny, but I'll say it anyway"],
    [85.40, "Boy, I'll stay through the bad times"],
    [92.42, "Even if I have to fetch you everyday"],
    [98.55, "We'll get by with a smile"],
    [105.38, "You can never be too happy in this life"],
    [111.64, "'Cause in a world where everybody hates a happy ending story"],
    [118.51, "It's a wonder love can make the world go round"],
    [124.95, "But dont let it bring you down"],
    [128.03, "And turn your face into a frown"],
    [131.72, "You'll get along with a little prayer and a song"],
    [141.73, "🎵"],
    [153.15, "Let me hear you sing it"],
    [155.23, "🎵"],
    [167.71, "'Cause in a world where everybody hates a happy ending story"],
    [174.25, "It's a wonder love can make the world go round"],
    [180.91, "But don't let it bring you down"],
    [183.92, "And turn your face into a frown"],
    [187.57, "You'll get along with a little prayer and a song"],
    [197.03, "Lift your head, baby, don't be scared"],
    [204.20, "Of the things that could go wrong along the way"],
    [210.05, "You'll get by with a smile"],
    [216.96, "Now it's time to kiss away those tears goodbye"],
    [224.26, "🎵"],
    [235.13, "Let me hear you sing it"],
    [239.61, "🎵"],
 ],
 s9: [
     [1.25, "🎵"],
    [26.68, "I look at her and have to smile"],
    [29.80, "As we go driving for a while"],
    [32.93, "Her hair blowing in the open window of my car"],
    [38.47, "And as we go, i see the lights"],
    [42.27, "I watch them glimmer in her eyes"],
    [45.77, "In the darkness of the evening"],
    [50.79, "And I've got all that I need"],
    [55.63, "Right here in the passenger seat"],
    [63.45, "And I can't keep my eyes on the road"],
    [68.24, "Knowing that she's inches from me"],
    [73.10, "🎵"],
    [76.77, "We stop to get something to drink"],
    [80.10, "My mind clouds and I can't think"],
    [83.26, "Scared to death to say I love her"],
    [89.38, "Then the moon peeks from the clouds"],
    [92.63, "I hear my heart, it beats so loud"],
    [95.97, "Try to tell her simply"],
    [100.91, "That I've got all that I need"],
    [105.82, "Right here in the passenger seat"],
    [113.48, "Oh, and I can't keep my eyes on the road"],
    [118.29, "Knowing that she's inches from me"],
    [125.91, "Oh, I've got all that I need"],
    [130.78, "Right here in the passenger seat"],
    [138.40, "Oh, and I can't keep my eyes on the road"],
    [143.16, "Knowing that she's inches from me"],
    [150.65, "Oh, and I know"],
    [156.55, "That this love will grow"],
    [164.46, "🎵"],
    [188.61, "Oh, and I've got all that I need"],
    [193.30, "Right here in the passenger seat"],
    [200.92, "Oh, and I can't keep my eyes on the road"],
    [205.82, "Knowing that she's inches from me"],
    [210.78, "ohhh"],
    [214.12, "And I've got all that I need (I look at her and have to smile)"],
    [218.11, "Right here in the passenger seat (as we go driving for a while)"],
    [221.26, "(Her hair blowing in the open window of my car)"],
    [226.46, "Oh, and I can't keep my eyes on the road (and as we go, the traffic lights)"],
    [230.47, "Knowing that she's inches from me (I watch them glimmer in her eyes)"],
    [233.38, "(In the darkness of the evening)"],
    [238.60, "And I've got all that I need (I look at her and have to smile)"],
    [242.92, "Right here in the passenger seat (as we go driving for a while)"],
    [247.58, "(Her hair blowing in the open window of my car)"],
    [251.48, "Oh, and I can't keep my eyes on the road (and as we go, the traffic lights)"],
    [255.46, "Knowing that she's inches from me (I watch them glimmer in her eyes)"],
    [258.63, "(In the darkness of the evening)"],
    [263.62, "And I've got all that I need (I look at her and have to smile)"],
    [268.20, "Right here in the passenger seat (as we go driving for a while)"],
 ],
 s10: `⋆˚࿔♫💿✮˚.⋆`
};

/* >>> END OF LYRICS DATA <<< */


/* ==========================================================
   LYRICS CODE (you don't need to change anything below)
   ========================================================== */
let lyricsId = null;     /* which song the box is showing */
let lyricLines = [];     /* the <p> element of each line */
let lyricTimes = [];     /* the time (seconds) of each line */
let activeLine = -2;     /* which line is highlighted */

/* WHAT YOU SEE: fills the lyrics box with the lines of one song */
function buildLyrics(t) {
  const box = $("lyricsBody");
  const data = lyrics[t.id];

  box.replaceChildren();
  box.scrollTop = 0;
  lyricLines = [];
  lyricTimes = [];
  activeLine = -2;

  /* no lyrics for this song */
  if (!data || data.length === 0) {
    const empty = document.createElement("p");

    empty.className = "ly-empty";
    empty.textContent = "Lyrics not available yet.";
    box.appendChild(empty);
    return;
  }

  /* plain text = no timestamps; array = [seconds, text] */
  const rows =
    typeof data === "string"
      ? data.split("\n").map((line) => [null, line])
      : data;

  rows.forEach(([time, text]) => {
    const p = document.createElement("p");

    p.className = "ly-line";
    p.textContent = text || "\u00A0";
    box.appendChild(p);

    lyricLines.push(p);
    lyricTimes.push(time);
  });
}

/* WHAT YOU SEE: highlights the line being sung and scrolls to it
   (runs 4 times per second while the full-screen player is open) */
function syncLyrics() {
  if ($("np").hidden || state.index < 0) return;

  const t = tracks[state.index];

  /* the song changed: build its lyrics */
  if (lyricsId !== t.id) {
    lyricsId = t.id;
    buildLyrics(t);
  }

  /* plain lyrics have no timing: nothing to follow */
  if (lyricTimes.length === 0 || lyricTimes[0] === null) return;

  /* find the last line whose time has passed */
  let cur = -1;

  for (let i = 0; i < lyricTimes.length; i++) {
    if (state.elapsed >= lyricTimes[i]) {
      cur = i;
    } else {
      break;
    }
  }

  if (cur === activeLine) return;

  activeLine = cur;

  /* bold only the current line */
  lyricLines.forEach((el, i) => {
    el.classList.toggle("active", i === cur);
  });

  /* scroll so the current line is in the middle of the box */
  if (cur >= 0) {
    const box = $("lyricsBody");
    const el = lyricLines[cur];

    box.scrollTo({
      top: el.offsetTop - box.clientHeight / 2 + el.clientHeight / 2,
      behavior: "smooth"
    });
  }
}

setInterval(syncLyrics, 250);