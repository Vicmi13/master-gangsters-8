function getMovie() {
    this.name = 'movie!!';
    this.director = '';
    this.actores = [];
}

function getMusic() {
    this.name = 'music!!';
    this.album = '';
}

function getImg() {
    this.name = 'img!!';
    this.dimensions = '';
}

function getPdf() {
    
}

function getFile(media) {
    if(movie) {
        getMovie();
    }
    if(music) {
        getMusic();
    }
    if(img) {
        getImg();
    }
    if(pdf) {
        getPdf()
    }
}

