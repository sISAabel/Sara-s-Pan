let gallery = [
    'src/img/gallery_index/photo1.jpg',
    'src/img/gallery_index/photo2.jpg',
    'src/img/gallery_index/photo3.jpg',
    'src/img/gallery_index/photo4.jpg'
]
let num = 0
function left() {
    if (num > 0) {
        num--
    } else {
        num = gallery.length - 1
    }
    document.getElementById("img_gallery").src = gallery[num]
}
function right() {
    if (num < gallery.length - 1) {
        num++
    } else {
        num = 0
    }
    document.getElementById("img_gallery").src = gallery[num]
}