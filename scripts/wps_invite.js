const axios = require("axios");
let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
invite_sid = [
  "V02S2UBSfNlvEprMOn70qP3jHPDqiZU00a7ef4a800341c7c3b",
  "V02StVuaNcoKrZ3BuvJQ1FcFS_xnG2k00af250d4002664c02f",
  "V02SWIvKWYijG6Rggo4m0xvDKj1m7ew00a8e26d3002508b828",
  "V02Sr3nJ9IicoHWfeyQLiXgvrRpje6E00a240b890023270f97",
  "V02SBsNOf4sJZNFo4jOHdgHg7-2Tn1s00a338776000b669579",
  "V02ScVbtm2pQD49ArcgGLv360iqQFLs014c8062e000b6c37b6",
  "V02S2oI49T-Jp0_zJKZ5U38dIUSIl8Q00aa679530026780e96",
  "V02ShotJqqiWyubCX0VWTlcbgcHqtSQ00a45564e002678124c",
  "V02SFiqdXRGnH5oAV2FmDDulZyGDL3M00a61660c0026781be1",
  "V02S7tldy5ltYcikCzJ8PJQDSy_ElEs00a327c3c0026782526",
  "V02SPoOluAnWda0dTBYTXpdetS97tyI00a16135e002684bb5c",
  "V02Sb8gxW2inr6IDYrdHK_ywJnayd6s00ab7472b0026849b17",
  "V02SwV15KQ_8n6brU98_2kLnnFUDUOw00adf3fda0026934a7f",
  "V02SC1mOHS0RiUBxeoA8NTliH2h2NGc00a803c35002693584d",
];
async function invite(id) {
  url = "http://zt.wps.cn/2018/clock_in/api/invite";
  await axios.post(url, `invite_userid=${wpsinviteid}&client_code=${randomWord(false, 32)}&client=alipay`, {
    headers: { sid: id },
  });
}

//随机生成
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

async function wpsdaka() {
  wpsinviteid = config.wps.uid; //就是自己账号id
  for (id of invite_sid) {
    await invite(id);
    console.log("等待两秒延迟中...")
    await sleep(3000);
  }
  return "【WPS邀请】：邀请完毕,任务结束,记得去[打卡](mp://ClzaJXNlvgVBAtx)呦";
}

//wpadaka()
module.exports = wpsdaka;
