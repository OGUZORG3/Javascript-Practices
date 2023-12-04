class Music {
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}
const musicList = [
    new Music("1-Music.mp3","1-Music.mp3","Plak-background.png","1-Music.mp3"),
    new Music("2-Music.mp3","2-Music.mp3","back-ground.png","2-Music.mp3"),
    new Music("3-Music.mp3","3-Music.mp3","Plak-background.png","3-Music.mp3")
];