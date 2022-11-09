"use strict";
class Jukebox {
    constructor(title, artist, songId) {
        this.title = title;
        this.artist = artist;
        this.songId = songId;
    }
    change() {
        console.log('Now playing ' + this.title + ' by ' + this.artist + '.');
    }
}
class ChangeSong {
    constructor(songs) {
        this.songs = songs;
    }
    change() {
        var song = this.chooseSong();
        song.change();
    }
    chooseSong() {
        var songOption = 3;
        return this.songs[songOption];
    }
    randomSong() {
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    }
    allSongs() {
        return this.songs;
    }
}
var songs = [
    new Jukebox('Boom Boom Pow', 'Black Eyed Peas', 1),
    new Jukebox('Better Together', 'Jack Johnson', 2),
    new Jukebox('Garbage', 'Louie Zong', 3),
    new Jukebox('Gravy Train', 'Yung Gravy', 4),
    new Jukebox('You make me feel so young', 'Frank Sinatra', 5),
    new Jukebox('Candy', 'Nat King Cole', 6),
    new Jukebox('Harvey', 'Hers', 7)
];
var choice = new ChangeSong(songs);
console.log(choice.randomSong());
class Playlist {
    constructor(songId) {
        this.songId = songId;
        this.tunes = choice.allSongs();
    }
    addSong(songs) {
        if (this.tunes.length >= Playlist.maxSong) {
            throw new Error('Too many songs added to playlist!');
        }
        this.tunes.push(songs);
    }
}
Playlist.maxSong = 10;
var songList = new Playlist('PlayList 1');
console.log(songList);
