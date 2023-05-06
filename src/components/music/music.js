import React from "react";
import Player from "@madzadev/audio-player";
import "../music/music.css";
const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Mandala - Te cuento",
    tags: ["cumbia"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Mandala - Crimen Perfecto",
    tags: ["cumbia"],
  },
];

export default function Music() {
  return (
    <div class="container-music">
      <div class="container container-playlist">
        <Player trackList={tracks} 
        includeTags={true}
        includeSearch={false}
        showPlaylist={true}
        autoPlayNextTrack={true}/>
      </div>
      <div class="about-us">
        <div class="container container-text">
          <img
            src="https://drive.google.com/uc?export=view&id=1vxq3uq4zC5c7lnRPfjjav3-WtDglU5FV"
            height="200"
          />
          <p class="paragraph">
            <br />
            Lorem ipsum dolor sit Famet, consectetur adipiscing elit. Sed at
            metus porta neque hendrerit vulputate eu eget ante. Phasellus sit
            amet dui cursus, mollis arcu eget, blandit metus. Aenean laoreet
            eget tortor eget imperdiet.
            <br />
            <br />
            Proin mollis, dolor nec tincidunt porttitor, lorem tortor mattis
            tortor, a auctor risus purus ac sapien. Vestibulum tempus tortor
            eget blandit tincidunt. Quisque eros mi, viverra id nibh nec,
            aliquam iaculis lorem. Nam et massa nec libero dapibus vestibulum ut
            in odio. Proin tincidunt sagittis suscipit. Vestibulum interdum dui
            porta lorem volutpat aliquet.
          </p>
        </div>
        <div class="container-image-album">
          <img
            src="https://drive.google.com/uc?export=view&id=1RpZn3znHsPn_lg9tsXfbapdp8b_Xsdc-"
            class="album-image"
          />
        </div>
      </div>
    </div>
  );
}
