import CryptoJS from 'crypto-js'
import JsEncrypt from 'jsencrypt'

function randomNum(num){
    return function(){
        let libaray ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let key='';
        for(var i=0;i<num;i++){
            let random = Math.floor(Math.random()*libaray.length)
            key += libaray.substring(random,random+1);
        }
        return key
    }
}
export function setRsa(val){
    
    const _pubKey = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDR/+VmTW5VT0igEcuwNhWvaTBF
    6M8PHm3OzpWLvWnYxEoeQDajd9YAj/w/KVFJ/D06jwIUI7cBAYl07uWe26GkxqH7
    2bdpX1ZDVEiQrXIj9nJefx6wpJkhApfyLsjtE3JLTb0iP6ZJMz4/bmFposEhM/nX
    fILE/XiAJhjcdukPQwIDAQAB
    -----END PUBLIC KEY-----`
    
    let jse = new JsEncrypt()
    jse.setPublicKey(_pubKey)
    console.log('jse.encrypt',jse.encrypt())
    return jse.encrypt(val+'')
}
export function Encrypt(val){
    let key = CryptoJS.enc.Utf8.parse(randomNum(16))
    var iv = CryptoJS.enc.Utf8.parse(iv)
    let encryted =  CryptoJS.AES.encrypt(val,key,
        { iv:iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        })
      return encryted.toString();
  
}