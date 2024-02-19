// node
const dm = require('')
// typescript
// import dm = require('dm.dll')
console.log(dm.dll.ver())
// import {Boss5} from "./src/mxd/Boss5";
// import {spawn, Thread, Worker} from "threads"

async function test() {
    // const auth = await spawn(new Boss5())
    // const hashed = await auth.hashPassword("Super secret password", "1234")
    //
    // console.log("Hashed password:", hashed)
    //
    // await Thread.terminate(auth)
    console.log(dm.enumWindowByClassName("MapleStoryClass"))

}

// test().catch(console.error)




