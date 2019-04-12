
export abstract class Shape
{
    private _x: number;
    public get X(): number
    {
        return this._x;
    }
    public set X(v: number)
    {
        this._x = v;
    }

    private _y: number;
    public get Y(): number
    {
        return this._y;
    }
    public set Y(v: number)
    {
        this._y = v;
    }

    public constructor(x: number, y: number)
    {
        this.X = x;
        this.Y = y;
    }
}