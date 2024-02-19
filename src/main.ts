import DM = require("./index")
import {DmRet} from "./types";
// const {dll} = require("./index")
const {Boss5} = require("./mxd/Boss5")

// const {spawn, Thread} = require("threads")

async function main() {
    // const auth = await spawn(new Boss5())
    // const hashed = await auth.hashPassword("Super secret password", "1234")
    //
    // console.log("Hashed password:", hashed)
    //
    // await Thread.terminate(auth)
    console.log(DM.enumWindowByClassName("MapleStoryClass"))
    let hwnds = DM.enumWindowByClassName("MapleStoryClass")
    for (let i = 0; i < hwnds.length; i++) {
        const hwnd = hwnds[i];
        let client = new Boss5(i === 0, hwnd);
        client.attack();
    }

    let ret = DM.bindWindow(hwnds[0], "dx", "dx", "dx", 0)
    if (ret === DmRet.Success) {
        console.log("主线程绑定成功");
        DM.keyPress(68);
    } else {
        console.log("主线程绑定失败");
    }

}

main().catch(console.error)
