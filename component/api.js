const coinUtil = require("../js/coinUtil.js")
const storage = require("../js/storage.js")
const currencyList = require("../js/currencyList")
const axios = require("axios")

module.exports=require("../js/lang.js")({ja:require("./ja/api.html"),en:require("./en/api.html")})({
  data(){
    return {
      name:this.$store.state.apiName,
      param:this.$store.state.apiParam,

      qType:"none",

      password:"",
      dataDlg:false,
      dataToPassApp:"",
      successful:false
    }
  },
  store:require("../js/store.js"),
  methods:{
    yes(){
      switch(this.name){

          
      }
    },
    goWithPassword(){
      switch(this.name){
        case "signTx":
          storage.get("keyPairs").then((cipher)=>{
            const cur =currencyList.get(this.param.coinId)
            const txb=cur.lib.TransactionBuilder.fromTransaction(cur.lib.Transaction.fromHex(this.param.unsigned),cur.network)
            const pubKeyBufArr = this.param.pubs.map(v=>Buffer.from(v,"hex"))
            const signed=cur.signMultisigTx({
              entropyCipher:cipher.entropy,
              password:this.password,
              txBuilder:txb,
              path:[0,this.param.addrIndex],
              pubKeyBufArr,
              neededSig:this.param.neededSig|0,
              complete:this.param.complete
            }).toHex()
            this.password=""
            
            if(this.param.callbackURL){
              axios.post(this.param.callbackURL,{
                payload:this.param.payload,
                signature:signed
              }).then(()=>{
                this.successful=true
              })
            }else if(this.param.callbackPage){
              coinUtil.openUrl(this.param.callbackPage+`?payload=${this.param.payload}&signature=${signed}`)
              this.successful=true
            }else{
              this.successful=true
              this.dataToPassApp=signed
            }
          }).catch(e=>{
            this.$store.commit("setError",e.message||"Unknown")
          })
          break;
        case "signMsg":
          storage.get("keyPairs").then((cipher)=>{
            const cur =currencyList.get(this.param.coinId)
            let signed =cur.signMessage(this.param.message,cipher.entropy,this.password,[0,this.param.addrIndex])
            this.password=""
            
            if(this.param.callbackURL){
              axios.post(this.param.callbackURL,{
                payload:this.param.payload,
                signature:signed
              }).then(()=>{
                this.successful=true
              })
            }else if(this.param.callbackPage){
              coinUtil.openUrl(this.param.callbackPage+`?payload=${this.param.payload}&signature=${signed}`)
              this.successful=true
            }else{
              this.dataDlg=true
              this.dataToPassApp=signed
            }
          }).catch(e=>{
            this.$store.commit("setError",e.message||"Unknown")
          })
          break;
      }
    },
    no(){
      this.$emit("pop")
    }
  },
  computed:{
    
  },
  mounted(){
    switch(this.name){
      case "enableExtendedMode":
      case "disableExtendedMode":
        this.qType="yOrN"
        break;
      case "signTx":
      case "signMsg":
        this.qType="password"
        break
      case "shareSwapData":
        this.qType="direct"
        this.$emit("pop")
        this.$emit("push",require("./atomicswap.js"))
        break;
      default:
        this.qType="none"
    }
  }
})
