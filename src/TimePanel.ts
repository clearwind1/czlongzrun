/**
 * Created by pior on 16/4/6.
 */

class TimePanel extends GameUtil.BassPanel
{

    public curtime: number;
    public curtimetext: GameUtil.MyTextField;

    public timetag: number;

    private addtime: number;

    public constructor()
    {
        super();
    }
    public init()
    {
        this.curtime = 0;

        this.curtimetext = new GameUtil.MyTextField(526,53,45,0);
        //this.curtimetext.setText('时间 00:00');
        this.curtimetext.bold = true;
        this.curtimetext.textColor = 0xffb751;
        this.addChild(this.curtimetext);

        this.timetag = egret.setInterval(this.runtime,this,100);
    }

    private runtime()
    {
        this.curtime += this.addtime;
        this.updatatime();
    }

    private updatatime()
    {

    }

    public removeInterval()
    {
        egret.clearInterval(this.timetag);
    }

    private static _inst: TimePanel;
    public static _i(): TimePanel
    {
        if(this._inst == null)
        {
            this._inst = new TimePanel();
        }

        return this._inst;
    }

}