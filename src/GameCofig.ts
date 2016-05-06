/**
 * Created by pior on 16/4/5.
 */

class GameCofig
{
    public constructor()
    {

    }

    private static inst: GameCofig;
    public static _i(): GameCofig
    {
        if(this.inst == null)
        {
            this.inst = new GameCofig();
        }

        return this.inst;
    }

}