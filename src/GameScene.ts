/**
 * Created by pior on 16/5/4.
 */

class GameScene extends GameUtil.BassPanel
{

    public mplayerboat: GameUtil.MyBitmap;

    public constructor()
    {
        super();
    }
    public init()
    {
        this.showbg();
        this.showboat();
    }

    private showbg()
    {
        var dic: egret.Shape = GameUtil.createRect(0,0,this.mStageW,this.mStageH,1,0xffffff);
        this.addChild(dic);
    }
    private showboat()
    {
        this.mplayerboat = new GameUtil.MyBitmap(RES.getRes('boat_png'),this.mStageW/2,this.mStageH/2);
        this.addChild(this.mplayerboat);
    }

    private static _inst: GameScene;
    public static _i(): GameScene
    {
        if(this._inst == null)
        {
            this._inst = new GameScene();
        }

        return this._inst;
    }
}