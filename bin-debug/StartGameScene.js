/**
 * Created by pior on 16/3/17.
 */
var StartGameScene = (function (_super) {
    __extends(StartGameScene, _super);
    function StartGameScene() {
        _super.call(this);
    }
    var d = __define,c=StartGameScene;p=c.prototype;
    p.init = function () {
        this.showbg();
    };
    p.showbg = function () {
        //背景
        var bg = new GameUtil.MyBitmap(RES.getRes('startbg_jpg'), this.mStageW / 2, 0);
        bg.setanchorOff(0.5, 0);
        this.addChild(bg);
        //开始按钮
        var startbtn = new GameUtil.Menu(this, 'redbtnframe_png', 'redbtnframe_png', this.startgame);
        startbtn.setScaleMode();
        startbtn.addButtonImg('startbtn_png');
        startbtn.x = this.mStageW / 2;
        startbtn.y = GameUtil.setscreenY(866);
        this.addChild(startbtn);
        //出品文字
        var tiptext = new GameUtil.MyTextField(this.mStageW / 2, GameUtil.setscreenY(1304), 15);
        tiptext.setText('盛讯游戏出品');
        tiptext.textColor = 0x8a998d;
        tiptext.touchEnabled = true;
        this.addChild(tiptext);
        //微信分享
        this.addChild(SharePage._i());
        SharePage._i().getSignPackage();
    };
    p.startgame = function () {
        GameUtil.GameScene.runscene(new GameScene());
    };
    return StartGameScene;
})(GameUtil.BassPanel);
egret.registerClass(StartGameScene,"StartGameScene");
