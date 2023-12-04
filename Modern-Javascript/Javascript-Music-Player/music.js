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
    new Music("Adriel Rivera - so close (Official Audio)","Adriel Rivera","Plak-background.png","Adriel Rivera - so close (Official Audio).m4a"),
    new Music("Adele - Someone Like You (Official Music Video)","Adele","back-ground.png","Adele - Someone Like You (Official Music Video).m4a"),
    new Music("After School (After School)","(After School)","back-ground.png","After School (After School).m4a")
];