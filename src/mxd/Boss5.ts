import {Direction, DmRet} from "../types";

import DM = require("../index");

export class Boss5 {
    leader: boolean = false
    hwnd: number = 0
    buffHandler: number = 0
    buffTimer: number = 0
    panaceaHandler: number = 0
    panaceaTimer: number = 0
    attackHandler: number = 0
    attackTimer: number = 0
    private X!: number
    private Y!: number
    private ladder!: number
    private direction!: Direction
    private dm: Object = DM.dll;

    constructor(leader: boolean, hwnd: number) {
        this.leader = leader
        this.hwnd = hwnd;
        let ret = DM.bindWindow(hwnd, "gdi", "dx", "normal", 0)
        if (ret === DmRet.Success) {
            console.log("绑定成功");
        } else {
            console.log("绑定失败");
        }
    }

    start() {
        this.leftHand()
    }

    leftHand(): void {
        this.X = -370
        this.Y = -422
        this.ladder = -447
        this.direction = Direction.right

    }

    attack(): void {
        let handle = setInterval(() => {
            DM.keyDown(65);
        }, 100)
    }

}
