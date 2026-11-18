/* ==========================================================
   A. SONG + PODCAST DATA
   Every card, player title, artist and cover
   comes from this list. Add or edit songs here.
   id    = unique name (lyrics.js uses the same id)
   color = pink | purple | peach | mint | blue | yellow
   cover = picture path (the emoji shows if there is none)
   file  = audio file
   dur   = seconds (only used if the audio file can't load)
   ========================================================== */
const tracks = [
  {
    id: "s1",
    type: "song",
    title: "Glue",
    artist: "beabadoobee",
    emoji: "💗",
    color: "pink",
    cover: "covers/glue.jpg",
    file: "Gluesong1.mp3",
    dur: 182
  },
  {
    id: "s2",
    type: "song",
    title: "Tahan",
    artist: "Carl Timbol",
    emoji: "💜",
    color: "purple",
    cover: "covers/tahan.jpg",
    file: "Tahansong2.mp3",
    dur: 205
  },
  {
    id: "s3",
    type: "song",
    title: "Blue",
    artist: "Yung Kai",
    emoji: "🍑",
    color: "peach",
    cover: "covers/blue.jpg",
    file: "Bluesong3.mp3",
    dur: 168
  },
  {
    id: "s4",
    type: "song",
    title: "Love",
    artist: "Wave to Earth",
    emoji: "🌿",
    color: "mint",
    cover: "covers/love.jpg",
    file: "Lovesong4.mp3",
    dur: 221
  },
  {
    id: "s5",
    type: "song",
    title: "Grace",
    artist: "Laura Story",
    emoji: "📻",
    color: "blue",
    cover: "covers/grace.jpg",
    file: "Gracesong5.mp3",
    dur: 190
  },
  {
    id: "s6",
    type: "song",
    title: "Fearless",
    artist: "Taylor Swift",
    emoji: "🌅",
    color: "yellow",
    cover: "covers/fearless.jpg",
    file: "Fearlesssong6.mp3",
    dur: 174
  },
  {
    id: "s7",
    type: "song",
    title: "Amazing",
    artist: "Rex Orange County",
    emoji: "🛏️",
    color: "pink",
    cover: "covers/amazing.jpg",
    file: "Amazingsong7.mp3",
    dur: 198
  },
  {
    id: "s8",
    type: "song",
    title: "With A Smile",
    artist: "Eraserheads (Ruth Anna Cover)",
    emoji: "🧋",
    color: "purple",
    cover: "covers/withasmile.jpg",
    file: "With a Smilesong8.mp3",
    dur: 160
  },
  {
    id: "s9",
    type: "song",
    title: "Passenger Seat",
    artist: "Stephen Sanchez",
    emoji: "🌸",
    color: "peach",
    cover: "covers/passenger.jpg",
    file: "Passenger Seatsong.mp3",
    dur: 233
  },
  {
    id: "s10",
    type: "song",
    title: "Promise of the World",
    artist: "Yumi Kimura (Piano Cover)",
    emoji: "🌙",
    color: "blue",
    cover: "covers/promise.jpg",
    file: "Promise of the Worldsong10.mp3",
    dur: 187
  },

  /* Podcasts: rename title, artist and file to your episodes */
  {
    id: "p1",
    type: "podcast",
    title: "Things I no longer believed in",
    artist: "yan",
    emoji: "🎙️",
    color: "mint",
    cover: "covers/Podcast1.jpg",
    file: "Podcast1.mp3",
    dur: 600
  },
  {
    id: "p2",
    type: "podcast",
    title: "What do you have to lose",
    artist: "Kam",
    emoji: "🎧",
    color: "yellow",
    cover: "covers/Podcast2.jpg",
    file: "Podcast2.mp3",
    dur: 540
  },
  {
    id: "p3",
    type: "podcast",
    title: "The Mind of a Genius",
    artist: "Bygone Philosophy",
    emoji: "☕",
    color: "pink",
    cover: "covers/Podcast3.jpg",
    file: "Podcast3.mp3",
    dur: 720
  }
];

/* ==========================================================
   B. STATE: one object remembers what the player is doing
   ========================================================== */
const state = {
  index: -1,       /* which track is loaded (-1 = none) */
  next: -1,        /* which track plays next */
  playing: false,
  elapsed: 0,      /* seconds played */
  shuffle: false,
  loop: false,
  volume: 70,
  muted: false
};

const RECENT_MAX = 5;
const audio = new Audio();
let demo = false;        /* true = audio file failed, use a timer instead */
let demoTimer = null;

const $ = (id) => document.getElementById(id);

/* ==========================================================
   C. HELPER FUNCTIONS
   ========================================================== */

/* Turns seconds into "3:05" for the timeline */
function fmt(seconds) {
  const m = Math.floor(seconds / 60);
  const s = String(Math.floor(seconds % 60)).padStart(2, "0");

  return m + ":" + s;
}

/* Colors the filled (purple) part of a slider */
function paintRange(el) {
  const percent = (el.value / el.max) * 100 || 0;

  el.style.setProperty("--fill", percent + "%");
}

/* saving and loading data in the browser (themes, playlists, recent) */
function loadJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));

    return value === null ? fallback : value;
  } catch (err) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    /* storage unavailable: data just won't be remembered */
  }
}

/* The album picture. Shows the emoji first, then
   swaps in the cover image only if the track has one and it loads. */
function setCover(el, t) {
  el.dataset.color = t.color || "purple";
  el.dataset.id = t.id;
  el.textContent = t.emoji || "🎵";

  if (!t.cover) return;

  const img = new Image();

  img.alt = t.title + " cover";
  img.onload = () => {
    if (el.dataset.id === t.id) {
      el.replaceChildren(img);
    }
  };
  img.src = t.cover;
}

/* ==========================================================
   D. CARDS (main area)
   The song/podcast cards in "Recently played",
   "Top hits" and "Featured podcasts".
   ========================================================== */
function makeSpan(className, text) {
  const span = document.createElement("span");

  span.className = className;
  if (text) span.textContent = text;

  return span;
}

function buildCard(i) {
  const t = tracks[i];
  const card = document.createElement("button");

  card.type = "button";
  card.className = "track-card";
  card.dataset.i = i;
  card.setAttribute("aria-label", "Play " + t.title + " by " + t.artist);

  const cover = makeSpan("cover");

  setCover(cover, t);

  const playIcon = makeSpan("play-btn", "▶");

  playIcon.setAttribute("aria-hidden", "true");

  card.append(
    cover,
    makeSpan("card-title", t.title),
    makeSpan("card-artist", t.artist),
    playIcon
  );

  return card;
}

function renderCards(container, list) {
  container.replaceChildren(...list.map(buildCard));
}

/* split the list: songs and podcasts */
const songs = [];
const podcasts = [];

tracks.forEach((t, i) => {
  (t.type === "song" ? songs : podcasts).push(i);
});

/* "Recently played" shows the songs you really played
   (saved in the browser). It is padded with the first songs so it
   is never empty. */
let recent = loadJSON("recent", []).filter((id) =>
  tracks.some((t) => t.id === id)
);

function recentIndexes() {
  const list = recent.map((id) => tracks.findIndex((t) => t.id === id));

  songs.forEach((i) => {
    if (list.length < RECENT_MAX && !list.includes(i)) list.push(i);
  });

  return list.slice(0, RECENT_MAX);
}

function renderRecent() {
  renderCards($("recentGrid"), recentIndexes());
  markPlayingCards();
  applySearch();
}

function rememberPlayed(id) {
  recent = [id, ...recent.filter((r) => r !== id)].slice(0, RECENT_MAX);
  saveJSON("recent", recent);
  renderRecent();
}

/* The playing song's title turns purple on its card */
function markPlayingCards() {
  document.querySelectorAll(".track-card").forEach((c) => {
    c.classList.toggle("playing", Number(c.dataset.i) === state.index);
  });
}

/* draw the three rows when the page loads */
renderCards($("topGrid"), songs);
renderCards($("podcastGrid"), podcasts);
renderRecent();

/* ==========================================================
   E. GREETING
   "Good morning ☀️ / afternoon 🌼 / evening 🌙"
   in the banner, based on the time of day.
   ========================================================== */
(function setGreeting() {
  const hour = new Date().getHours();
  let greeting = "Good evening 🌙";

  if (hour < 12) {
    greeting = "Good morning ☀️";
  } else if (hour < 18) {
    greeting = "Good afternoon 🌼";
  }

  $("greeting").textContent = greeting;
})();

/* ==========================================================
   F. NAV LINKS (sidebar + phone bottom navbar)
   Home = scroll to top, Search = jump to the
   search bar, Library = scroll to the cards (and blink).
   ========================================================== */
document.querySelectorAll("[data-nav]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    closePlaylist();

    const page = link.dataset.nav;
    const main = $("main");

    /* mark the clicked link as the active one */
    document.querySelectorAll("[data-nav]").forEach((l) => {
      const active = l.dataset.nav === page;

      l.classList.toggle("active", active);

      if (active) {
        l.setAttribute("aria-current", "page");
      } else {
        l.removeAttribute("aria-current");
      }
    });

    if (page === "library") {
      const lib = $("library");

      lib.scrollIntoView({ behavior: "smooth", block: "start" });

      /* restart the blink animation */
      lib.classList.remove("flash");
      void lib.offsetWidth;
      lib.classList.add("flash");
      return;
    }

    main.scrollTo({ top: 0, behavior: "smooth" });

    if (page === "search") $("searchInput").focus();
  });
});

/* ==========================================================
   G. PROGRESS BAR (timeline)
   The slider with "0:00" and "-3:05" at the
   bottom player bar.
   ========================================================== */
function trackDur() {
  if (state.index < 0) return 0;

  if (!demo && isFinite(audio.duration)) {
    return audio.duration;
  }

  return tracks[state.index].dur;
}

function updateProgress() {
  const d = trackDur();

  $("seek").max = d || 100;
  $("seek").value = state.elapsed;
  paintRange($("seek"));

  $("timeNow").textContent = fmt(state.elapsed);
  $("timeLeft").textContent = "-" + fmt(Math.max(d - state.elapsed, 0));
}

/* ==========================================================
   H. NEXT TRACK
   "Up next: ..." in the right info panel.
   The next song is chosen in advance so the label always
   matches what really plays, even with shuffle on.
   ========================================================== */
function pickNext() {
  if (state.index < 0) return;

  let n = (state.index + 1) % tracks.length;

  if (state.shuffle && tracks.length > 1) {
    do {
      n = Math.floor(Math.random() * tracks.length);
    } while (n === state.index);
  }

  state.next = n;
  $("infoNext").textContent = tracks[n].title;
}

/* ==========================================================
   I. LOAD A TRACK
   When you pick a song, the bottom player bar,
   the right info panel and the highlighted card all update.
   ========================================================== */
function loadTrack(i) {
  demo = false;
  clearInterval(demoTimer);

  state.index = i;
  state.elapsed = 0;

  const t = tracks[i];

  audio.src = t.file;

  /* bottom player bar */
  setCover($("pCover"), t);
  $("pTitle").textContent = t.title;
  $("pArtist").textContent = t.artist;

  /* right info panel */
  setCover($("infoCover"), t);
  $("infoTitle").textContent = t.title;
  $("infoArtist").textContent = t.artist;

  pickNext();
  markPlayingCards();
  updateProgress();

  if (t.type === "song") rememberPlayed(t.id);
}

/* ==========================================================
   J. PLAY / PAUSE
   The big round ▶ / ⏸ button.
   ========================================================== */

/* backup timer, used only when the audio file can't load */
function startDemo() {
  clearInterval(demoTimer);

  demoTimer = setInterval(() => {
    state.elapsed++;

    if (state.elapsed >= trackDur()) {
      onEnded();
    } else {
      updateProgress();
    }
  }, 1000);
}

function setPlaying(on) {
  state.playing = on;
  $("playBtn").textContent = on ? "⏸" : "▶";
}

function play() {
  setPlaying(true);

  if (demo) {
    startDemo();
    return;
  }

  const promise = audio.play();

  if (promise) {
    promise.catch((err) => {
      /* AbortError = a newer track replaced this one: ignore.
         NotAllowedError = the browser blocked autoplay: stay paused. */
      if (err.name === "NotSupportedError") {
        demo = true;
        if (state.playing) startDemo();
      } else if (err.name === "NotAllowedError") {
        setPlaying(false);
      }
    });
  }
}

function pause() {
  setPlaying(false);
  audio.pause();
  clearInterval(demoTimer);
}

function playIndex(i) {
  loadTrack(i);
  play();
}

function togglePlay() {
  if (state.index < 0) {
    playIndex(0);
    return;
  }

  if (state.playing) {
    pause();
  } else {
    play();
  }
}

/* ==========================================================
   K. NEXT / PREVIOUS / LOOP
   The ⏮ ⏭ buttons and what happens when a song ends.
   ========================================================== */
function nextTrack() {
  if (state.index < 0) return;

  playIndex(state.next);
}

/* ⏮ restarts the song if more than 3 seconds passed,
   otherwise goes to the previous song */
function prevTrack() {
  if (state.index < 0) return;

  if (state.elapsed > 3) {
    playIndex(state.index);
    return;
  }

  playIndex((state.index - 1 + tracks.length) % tracks.length);
}

function onEnded() {
  if (state.loop) {
    playIndex(state.index);
  } else {
    nextTrack();
  }
}

/* ==========================================================
   L. VOLUME + MUTE
   The 🔊 button and volume slider (bottom right).
   Note: iPhone Safari ignores audio.volume; the phone's own
   volume buttons control it there.
   ========================================================== */
function applyVolume() {
  const v = state.muted ? 0 : state.volume;

  audio.volume = v / 100;
  $("vol").value = v;
  paintRange($("vol"));

  let icon = "🔊";

  if (v === 0) {
    icon = "🔇";
  } else if (v < 50) {
    icon = "🔉";
  }

  $("muteBtn").textContent = icon;
  $("muteBtn").setAttribute("aria-label", v === 0 ? "Unmute" : "Mute");
}

/* ==========================================================
   M. EVENTS: connect buttons to the functions above
   ========================================================== */

/* the audio file reports its time, length and end */
audio.addEventListener("timeupdate", () => {
  if (!demo) {
    state.elapsed = audio.currentTime;
    updateProgress();
  }
});

audio.addEventListener("loadedmetadata", updateProgress);
audio.addEventListener("ended", onEnded);

/* the audio file is missing or broken: keep the screen working with a timer */
audio.addEventListener("error", () => {
  demo = true;
  if (state.playing) startDemo();
});

/* Clicking ANY card plays it (one listener for all cards)
   and opens the full-screen player on every device. */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".track-card");

  if (!card) return;

  playIndex(Number(card.dataset.i));
  openNowPlaying();
});

/* bottom player bar buttons */
$("playBtn").addEventListener("click", togglePlay);
$("nextBtn").addEventListener("click", nextTrack);
$("prevBtn").addEventListener("click", prevTrack);

/* 🔀 shuffle button (turns purple when on) */
$("shuffleBtn").addEventListener("click", (e) => {
  state.shuffle = !state.shuffle;
  e.currentTarget.classList.toggle("on", state.shuffle);
  pickNext();
});

/* 🔁 loop button (turns purple when on) */
$("loopBtn").addEventListener("click", (e) => {
  state.loop = !state.loop;
  e.currentTarget.classList.toggle("on", state.loop);
});

/* the timeline slider: drag to jump in the song */
$("seek").addEventListener("input", (e) => {
  if (state.index < 0) {
    e.target.value = 0;
    return;
  }

  state.elapsed = Number(e.target.value);

  if (!demo) {
    audio.currentTime = state.elapsed;
  }

  updateProgress();
});

/* the volume slider */
$("vol").addEventListener("input", (e) => {
  state.volume = Number(e.target.value);
  state.muted = state.volume === 0;
  applyVolume();
});

/* the mute / unmute button */
$("muteBtn").addEventListener("click", () => {
  state.muted = !state.muted;

  if (!state.muted && state.volume === 0) {
    state.volume = 50;
  }

  applyVolume();
});

/* keyboard: Spacebar = play / pause (not while typing or on a button) */
document.addEventListener("keydown", (e) => {
  if (e.code !== "Space" || e.repeat) return;
  if (e.target.closest("input, textarea, button, a, dialog, [role='button']")) return;

  e.preventDefault();
  togglePlay();
});

/* paint the volume slider when the page loads */
applyVolume();

/* ==========================================================
   N. REAL-TIME SEARCH
   Typing in the search bar hides cards that don't
   match (title, artist or "song"/"podcast"). A section title
   disappears when all its cards are hidden.
   ========================================================== */
function applySearch() {
  const q = $("searchInput").value.toLowerCase().trim();

  document.querySelectorAll(".track-card").forEach((card) => {
    const t = tracks[card.dataset.i];
    const text = (t.title + " " + t.artist + " " + t.type).toLowerCase();

    card.hidden = !text.includes(q);
  });

  let shown = 0;

  document.querySelectorAll(".track-section").forEach((sec) => {
    const hasCards = sec.querySelector(".track-card:not([hidden])") !== null;

    sec.hidden = !hasCards;

    if (hasCards) shown++;
  });

  /* "No results found." */
  $("noResults").hidden = shown > 0;
}

$("searchInput").addEventListener("input", applySearch);

/* ==========================================================
   O. FULL-SCREEN NOW PLAYING VIEW
   The pastel screen with the spinning record
   (songs) or the radio (podcasts), and the lyrics.
   ========================================================== */
let npDragging = false;

function openNowPlaying() {
  if (state.index < 0) return;

  $("np").hidden = false;
  syncNowPlaying();

  /* laptop/desktop only: browser full screen */
  if (window.innerWidth >= 1024 && !document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

function closeNowPlaying() {
  $("np").hidden = true;

  if (document.fullscreenElement) document.exitFullscreen();
}

/* leaving full screen (Esc) also closes the player */
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) $("np").hidden = true;
});


/* click (or Enter / Space) on the song info in the player bar opens it */
$("nowBtn").addEventListener("click", openNowPlaying);

$("nowBtn").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openNowPlaying();
  }
});

/* the ⌄ button or the Escape key closes it */
$("npClose").addEventListener("click", closeNowPlaying);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNowPlaying();
});

/* the buttons here press the player bar's real buttons,
   so the logic is not written twice */
$("npPlay").addEventListener("click", () => $("playBtn").click());
$("npPrev").addEventListener("click", () => $("prevBtn").click());
$("npNext").addEventListener("click", () => $("nextBtn").click());
$("npShuffle").addEventListener("click", () => $("shuffleBtn").click());
$("npLoop").addEventListener("click", () => $("loopBtn").click());

/* the timeline slider here (don't fight the user while dragging) */
$("npSeek").addEventListener("pointerdown", () => {
  npDragging = true;
});

["pointerup", "pointercancel"].forEach((type) => {
  $("npSeek").addEventListener(type, () => {
    npDragging = false;
  });
});

$("npSeek").addEventListener("input", (e) => {
  $("seek").value = e.target.value;
  $("seek").dispatchEvent(new Event("input"));
});

/* copy the player's state onto the full-screen view:
   title, artist, time, slider, ▶/⏸, spinning record, arm, radio */
function syncNowPlaying() {
  if ($("np").hidden || state.index < 0) return;

  const t = tracks[state.index];

  if ($("npCover").dataset.id !== t.id) {
    setCover($("npCover"), t);
  }

  $("npTitle").textContent = t.title;
  $("npArtist").textContent = t.artist;
  $("npTimeNow").textContent = $("timeNow").textContent;
  $("npTimeLeft").textContent = $("timeLeft").textContent;

  if (!npDragging) {
    $("npSeek").max = $("seek").max;
    $("npSeek").value = $("seek").value;
    paintRange($("npSeek"));
  }

  $("npPlay").textContent = state.playing ? "⏸" : "▶";
  $("vinyl").classList.toggle("spinning", state.playing);
  $("tonearm").classList.toggle("playing", state.playing);

  /* podcasts show the radio instead of the record */
  $("np").classList.toggle("is-podcast", t.type === "podcast");
  $("radioEmoji").textContent = t.emoji || "🎙️";
  $("radio").classList.toggle("on", state.playing);

  $("npShuffle").classList.toggle("on", state.shuffle);
  $("npLoop").classList.toggle("on", state.loop);
}

setInterval(syncNowPlaying, 250);

/* ==========================================================
   P. THEME PICKER
   The 3 picture squares (top right) that change
   the main background. The choice is remembered.
   ========================================================== */
const themeButtons = document.querySelectorAll(".theme-btn");

function applyTheme(n) {
  document.body.dataset.theme = n;

  themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === String(n));
  });

  saveJSON("theme", String(n));
}

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
});

const savedTheme = loadJSON("theme", "1");

if (["1", "2", "3"].includes(savedTheme)) {
  applyTheme(savedTheme);
}

/* ==========================================================
   Q. PLAYLISTS
   The playlists in the sidebar/chips, the
   playlist page and the "Add to this playlist" page.
   They are saved in the browser. The pages open inside the
   main area so the player bar stays visible.
   ========================================================== */
let playlists = loadJSON("playlists", []);
let currentPl = null;

const mainEl = $("main");

function savePlaylists() {
  saveJSON("playlists", playlists);
}

function getPl() {
  return playlists.find((p) => p.id === currentPl);
}

/* One white song row (cover, title, artist, button) */
function trackRow(i, btnText, btnClass) {
  const t = tracks[i];
  const li = document.createElement("li");
  const cover = makeSpan("cover");
  const info = document.createElement("div");
  const title = document.createElement("b");
  const artist = document.createElement("small");
  const btn = document.createElement("button");

  li.className = "pl-row";
  li.dataset.i = i;

  info.className = "pl-info";
  title.textContent = t.title;
  artist.textContent = t.artist;
  info.append(title, artist);

  btn.type = "button";
  btn.className = "pl-btn" + (btnClass ? " " + btnClass : "");
  btn.textContent = btnText;
  btn.setAttribute("aria-label", btnText + ": " + t.title);

  setCover(cover, t);
  li.append(cover, info, btn);

  return li;
}

/* Playlist names in the sidebar AND the chips under
   the search bar (same data, two places) */
function renderPlaylistLists() {
  ["playlistList", "playlistChips"].forEach((id) => {
    const items = playlists.map((p) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const x = document.createElement("button");

      a.href = "#";
      a.className = "playlist-link" + (p.id === currentPl ? " active" : "");
      a.textContent = p.name;
      a.dataset.pl = p.id;

      x.type = "button";
      x.className = "pl-x";
      x.textContent = "✕";
      x.dataset.pl = p.id;
      x.setAttribute("aria-label", "Remove playlist " + p.name);

      li.append(a, x);

      return li;
    });

    $(id).replaceChildren(...items);
  });
}

/* The playlist page with its songs */
function renderPlaylistPage() {
  const p = getPl();

  if (!p) return;

  $("plTitle").textContent = p.name;

  const rows = p.songs
    .map((id) => tracks.findIndex((t) => t.id === id))
    .filter((i) => i >= 0)
    .map((i) => trackRow(i, "Remove", "remove"));

  if (rows.length === 0) {
    const empty = document.createElement("li");

    empty.className = "pl-empty";
    empty.textContent = "No songs yet. Tap “Add to this playlist”.";
    rows.push(empty);
  }

  $("plSongs").replaceChildren(...rows);
}

/* The "Add to this playlist" page (all songs, with
   an Add / Added ✓ button; filtered by its search bar) */
function renderAddPage() {
  const p = getPl();

  if (!p) return;

  const q = $("addSearch").value.toLowerCase().trim();
  const rows = [];

  tracks.forEach((t, i) => {
    if (!(t.title + " " + t.artist).toLowerCase().includes(q)) return;

    const added = p.songs.includes(t.id);

    rows.push(trackRow(i, added ? "Added ✓" : "Add", added ? "remove" : ""));
  });

  $("plAdd").replaceChildren(...rows);
}

/* open a playlist page (hides the home content) */
function openPlaylist(id) {
  currentPl = id;
  mainEl.classList.add("playlist-open");
  $("addView").hidden = true;
  $("playlistView").hidden = false;
  renderPlaylistPage();
  renderPlaylistLists();
  mainEl.scrollTo({ top: 0 });
}

/* go back to the home content */
function closePlaylist() {
  currentPl = null;
  mainEl.classList.remove("playlist-open");
  $("playlistView").hidden = true;
  $("addView").hidden = true;
  renderPlaylistLists();
}

/* ----------------------------------------------------------
   Create playlist popup
   The "Name your playlist" box.
   (Older browsers without <dialog> use prompt() instead.)
   ---------------------------------------------------------- */
const plDialog = $("plDialog");

function addPlaylist(name) {
  const clean = name.trim();

  if (!clean) return;

  const p = { id: "pl" + Date.now(), name: clean, songs: [] };

  playlists.push(p);
  savePlaylists();
  openPlaylist(p.id);
}

function createPlaylist() {
  if (typeof plDialog.showModal !== "function") {
    addPlaylist(prompt("Name your playlist:") || "");
    return;
  }

  $("plName").value = "";
  plDialog.showModal();
  $("plName").focus();
}

/* both "Create playlist" buttons (sidebar + phone navbar) */
document.querySelectorAll(".js-new-playlist").forEach((b) => {
  b.addEventListener("click", createPlaylist);
});

$("plForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addPlaylist($("plName").value);
  plDialog.close();
});

$("plCancel").addEventListener("click", () => plDialog.close());

/* clicking the dark area outside the box closes it */
plDialog.addEventListener("click", (e) => {
  if (e.target === plDialog) plDialog.close();
});

/* ----------------------------------------------------------
   Open / delete a playlist from the sidebar or the chips.
   The ✕ needs two taps: first "Delete?", then delete.
   ---------------------------------------------------------- */
["playlistList", "playlistChips"].forEach((id) => {
  $(id).addEventListener("click", (e) => {
    e.preventDefault();

    const x = e.target.closest(".pl-x");
    const a = e.target.closest(".playlist-link");

    if (x) {
      if (x.dataset.armed !== "1") {
        x.dataset.armed = "1";
        x.textContent = "Delete?";

        setTimeout(() => {
          x.dataset.armed = "";
          x.textContent = "✕";
        }, 2500);

        return;
      }

      playlists = playlists.filter((p) => p.id !== x.dataset.pl);
      savePlaylists();

      if (currentPl === x.dataset.pl) {
        closePlaylist();
      } else {
        renderPlaylistLists();
      }
    } else if (a) {
      openPlaylist(a.dataset.pl);
    }
  });
});

/* ← back button on the playlist page */
$("plBack").addEventListener("click", closePlaylist);

/* "+ Add to this playlist" button: open the Add page */
$("plAddBtn").addEventListener("click", () => {
  $("addSearch").value = "";
  $("playlistView").hidden = true;
  $("addView").hidden = false;
  renderAddPage();
  mainEl.scrollTo({ top: 0 });
});

/* ← back button on the Add page */
$("addBack").addEventListener("click", () => {
  $("addView").hidden = true;
  $("playlistView").hidden = false;
  renderPlaylistPage();
});

/* search bar on the Add page */
$("addSearch").addEventListener("input", renderAddPage);

/* songs inside the playlist page: click = play, button = remove */
$("plSongs").addEventListener("click", (e) => {
  const row = e.target.closest(".pl-row");

  if (!row) return;

  const i = Number(row.dataset.i);

  if (e.target.closest(".pl-btn")) {
    const p = getPl();

    p.songs = p.songs.filter((id) => id !== tracks[i].id);
    savePlaylists();
    renderPlaylistPage();
  } else {
    playIndex(i);
  }
});

/* songs inside the Add page: the button toggles Add / Added ✓ */
$("plAdd").addEventListener("click", (e) => {
  const row = e.target.closest(".pl-row");

  if (!row || !e.target.closest(".pl-btn")) return;

  const p = getPl();
  const id = tracks[Number(row.dataset.i)].id;

  if (p.songs.includes(id)) {
    p.songs = p.songs.filter((s) => s !== id);
  } else {
    p.songs.push(id);
  }

  savePlaylists();
  renderAddPage();
});

/* draw the playlist names when the page loads */
renderPlaylistLists();

/* ==========================================================
   R. SOFT SNOW
   The white snowflakes falling over the page.
   Skipped when the user prefers reduced motion, and paused when
   the tab is hidden. Turn on/off with setSnow(true/false).
   ========================================================== */
(function snow() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const COUNT = 60;    /* number of flakes */
  const SPEED = 0.6;   /* lower = softer / slower */
  const flakes = [];
  let w = 0;
  let h = 0;
  let frame = null;
  let enabled = true;

  canvas.className = "snow";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);

  function resize() {
    const dpr = window.devicePixelRatio || 1;

    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeFlake(startTop) {
    return {
      x: Math.random() * w,
      y: startTop ? -10 : Math.random() * h,
      r: Math.random() * 2.5 + 0.8,
      s: (Math.random() * 0.6 + 0.4) * SPEED,
      o: Math.random() * 0.5 + 0.3,
      a: Math.random() * Math.PI * 2,
      d: Math.random() * 0.02 + 0.005
    };
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (const f of flakes) {
      f.a += f.d;
      f.y += f.s + f.r * 0.1;
      f.x += Math.sin(f.a) * 0.4;

      if (f.y > h + 10) Object.assign(f, makeFlake(true));
      if (f.x > w + 10) f.x = -10;
      if (f.x < -10) f.x = w + 10;

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + f.o + ")";
      ctx.shadowBlur = 6;
      ctx.shadowColor = "rgba(255,255,255,0.6)";
      ctx.fill();
    }

    frame = requestAnimationFrame(draw);
  }

  function start() {
    if (enabled && frame === null) frame = requestAnimationFrame(draw);
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = null;
  }

  resize();

  for (let i = 0; i < COUNT; i++) flakes.push(makeFlake(false));

  window.addEventListener("resize", resize);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  window.setSnow = (on) => {
    enabled = on;
    canvas.hidden = !on;

    if (on) {
      start();
    } else {
      stop();
    }
  };

  start();
})();
