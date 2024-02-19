export declare class Boss5 {
    leader: boolean;
    hwnd: number;
    buffHandler: number;
    buffTimer: number;
    panaceaHandler: number;
    panaceaTimer: number;
    attackHandler: number;
    attackTimer: number;
    private X;
    private Y;
    private ladder;
    private direction;
    private dm;
    constructor(leader: boolean, hwnd: number);
    start(): void;
    leftHand(): void;
    attack(): void;
}
