/**
 * Created by pior on 16/3/17.
 */
class StartGameScene extends GameUtil.BassPanel
{
    public constructor()
    {
        super();
    }

    public init()
    {
        this.showbg();
    }

    private showbg()
    {

        //背景
        var bg: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('startbg_jpg'),this.mStageW/2,0);
        bg.setanchorOff(0.5,0);
        this.addChild(bg);
        //开始按钮
        var startbtn: GameUtil.Menu = new GameUtil.Menu(this,'redbtnframe_png','redbtnframe_png',this.startgame);
        startbtn.setScaleMode();
        startbtn.addButtonImg('startbtn_png');
        startbtn.x = this.mStageW/2;
        startbtn.y = GameUtil.setscreenY(866);
        this.addChild(startbtn);

        //出品文字
        var tiptext: GameUtil.MyTextField = new GameUtil.MyTextField(this.mStageW/2,GameUtil.setscreenY(1304),15);
        tiptext.setText('盛讯游戏出品');
        tiptext.textColor = 0x8a998d;
        tiptext.touchEnabled = true;
        this.addChild(tiptext);
        //微信分享
        this.addChild(SharePage._i());
        SharePage._i().getSignPackage();

    }

    private startgame()
    {
        GameUtil.GameScene.runscene(new GameScene());
    }


}