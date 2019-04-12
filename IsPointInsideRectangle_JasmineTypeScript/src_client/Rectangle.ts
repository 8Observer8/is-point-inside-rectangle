import { Shape } from "./Shape";

export class Rectangle extends Shape
{
    private _width: number;
    public get Width(): number
    {
        return this._width;
    }
    public set Width(v: number)
    {
        this._width = v;
    }

    private _height : number;
    public get Height() : number {
        return this._height;
    }
    public set Height(v : number) {
        this._height = v;
    }
    
    public constructor(x: number, y: number, width: number, height: number)
    {
        super(x, y);
        this.Width = width;
        this.Height = height;
    }
}