/**
 * Created by pior on 16/4/6.
 */
var TimePanel = (function (_super) {
    __extends(TimePanel, _super);
    function TimePanel() {
        _super.call(this);
    }
    var d = __define,c=TimePanel;p=c.prototype;
    p.init = function () {
        this.curtime = 0;
        this.curtimetext = new GameUtil.MyTextField(526, 53, 45, 0);
        //this.curtimetext.setText('时间 00:00');
        this.curtimetext.bold = true;
        this.curtimetext.textColor = 0xffb751;
        this.addChild(this.curtimetext);
        this.timetag = egret.setInterval(this.runtime, this, 100);
    };
    p.runtime = function () {
        this.curtime += this.addtime;
        this.updatatime();
    };
    p.updatatime = function () {
    };
    p.removeInterval = function () {
        egret.clearInterval(this.timetag);
    };
    TimePanel._i = function () {
        if (this._inst == null) {
            this._inst = new TimePanel();
        }
        return this._inst;
    };
    return TimePanel;
})(GameUtil.BassPanel);
egret.registerClass(TimePanel,"TimePanel");
