/**
 * Created by pior on 16/5/6.
 */

class TickPanel extends GameUtil.BassPanel
{
    private tickcount: number;

    public constructor()
    {
        super();
    }
    public init()
    {
        this.tickcount = 0;
        this.touchEnabled = true;
        this.showtickarea();
    }

    private showtickarea()
    {
        var tickarea: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('greenbtnframe_png'),0,this.mStageH);
        tickarea.setanchorOff(0,1);
        tickarea.$setWidth(this.mStageW);
        this.addChild(tickarea);

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tick,this);

    }

    private tick(evt:egret.TouchEvent)
    {
        if(this.tickcount == 0){
            this.tickcount = 1;
        }else {
            this.tickcount = 0;
        }

        console.log('tickcount====',this.tickcount);

    }


}