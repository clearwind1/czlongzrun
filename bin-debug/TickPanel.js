/**
 * Created by pior on 16/5/6.
 */
var TickPanel = (function (_super) {
    __extends(TickPanel, _super);
    function TickPanel() {
        _super.call(this);
    }
    var d = __define,c=TickPanel;p=c.prototype;
    p.init = function () {
        this.tickcount = 0;
        this.touchEnabled = true;
        this.showtickarea();
    };
    p.showtickarea = function () {
        var tickarea = new GameUtil.MyBitmap(RES.getRes('greenbtnframe_png'), 0, this.mStageH);
        tickarea.setanchorOff(0, 1);
        tickarea.$setWidth(this.mStageW);
        this.addChild(tickarea);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tick, this);
    };
    p.tick = function (evt) {
        if (this.tickcount == 0) {
            this.tickcount = 1;
        }
        else {
            this.tickcount = 0;
        }
        console.log('tickcount====', this.tickcount);
    };
    return TickPanel;
})(GameUtil.BassPanel);
egret.registerClass(TickPanel,"TickPanel");
