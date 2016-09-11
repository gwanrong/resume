(function (){
    var desW=640,
        winW=document.documentElement.clientWidth,
        ratio=winW/desW,
        oMain=document.querySelector('.main');
    if(winW>desW){
        oMain.style.margin='0 auto';
        oMain.style.width=desW+'px';
        return;
    }
    document.documentElement.style.fontSize=ratio*100+'px';
})();

new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    onSlideChangeEnd:function(swiper){
        var slideAry=swiper.slides,
            curIn=swiper.activeIndex,
            total=slideAry.length;
        var targetId='page';
        switch(curIn){
            case 0:
                targetId+=total-3;
                break;
            case (total-1):
                targetId+=total-2;
                break;
            default:
                targetId+=curIn;
        }
        [].forEach.call(slideAry,function(item,index){
            if(curIn === index){
                item.id=targetId;
                return;
            }
            item.id=null;
        });
    }
});
//->MUSIC
~function () {
    var musicMenu = document.getElementById('music'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {//->ÔÝÍ£
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();
