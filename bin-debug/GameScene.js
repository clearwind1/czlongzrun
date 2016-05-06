/**
 * Created by pior on 16/5/4.
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
    }
    var d = __define,c=GameScene;p=c.prototype;
    p.init = function () {
        this.showbg();
        this.showboat();
        this.addChild(new TickPanel());
    };
    p.showbg = function () {
        var dic = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 1, 0xffffff);
        this.addChild(dic);
    };
    p.showboat = function () {
        this.mplayerboat = new GameUtil.MyBitmap(RES.getRes('boat_png'), this.mStageW / 2, this.mStageH / 2);
        this.addChild(this.mplayerboat);
    };
    GameScene._i = function () {
        if (this._inst == null) {
            this._inst = new GameScene();
        }
        return this._inst;
    };
    return GameScene;
})(GameUtil.BassPanel);
egret.registerClass(GameScene,"GameScene");
