var video = document.getElementById("myVideo");
document.body.ondragenter = function(e){
    e.preventDefault();
    e.stopPropagation();
}
document.body.ondrop = function(e){
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    if(!file){
        alert("请选择文件!")
    }
    try{
        var url =  window.URL.createObjectURL(file);
        video.src = url;
    }catch (e){
        alert("当前浏览器不支持视频播放，请使用其他浏览器！");
    }

}
document.body.ondragover = function(e){
    e.preventDefault();
    e.stopPropagation();
}
document.body.ondragend = function(e){
    e.preventDefault();
    e.stopPropagation();
}
document.getElementById("speed").onchange = function(e){
    video.playbackRate = parseFloat(e.currentTarget.value);

}
