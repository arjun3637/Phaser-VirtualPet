var BootState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAllignHorizontally = true;
        this.scale.pageAllignVertically = true;

    },
    preload: function(){
        this.load.image('preloadBar', 'images/bar.png');
        this.load.image('logo', 'images/logo.png');
    },
    create: function(){
        this.game.stage.backgroundColor = '#fff';

        this.state.start('PreloadState');
    },
};