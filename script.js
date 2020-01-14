
var taro = new Vue({
    el: "#app",
    data: {
      quiz:[
        [
          {question:"今から数万年前、地質年代でいう「？？世」の終わり頃は海水面が低く、日本列島は大陸と地続きだった。",answer:"更新世"},
          {question:"旧石器文化では、「？？石器」が用いられた",answer:"打製石器"},
          {question:"群馬県の「？？遺跡」から打製石器が発見され、日本の旧石器文化の存在が証明された。",answer:"岩宿遺跡"},
          {question:"日本列島の気候が温暖になったのは、地質年代でいうと「？？世」である",answer:"完新世"},
        ]
      ],
      items:[
        "原始時代(簡単)",
        "飛鳥時代(簡単)",
      ],
      nowquizs:[],
      nowquiz:"問題",
      nowanswer:"答え",
      nownumber:0,
      correct:"",
      message:"",
      corrects:0
    },
    methods:{
        star: function(){
          ///表示切り替え処理
          document.getElementById("form1").style.display="none";
          document.getElementById("quizform").style.display="block";
          ///問題表示処理
          this.nowquizs=this.quiz[document.getElementById("selectbox").selectedIndex]
          this.plusnumber()
        },
        nextquestion: function(event){
          if(event.keyCode !== 13) return
          if(this.message == this.nowanswer){
            this.correct="正解"
            this.corrects+=1
          }else{
            this.correct="不正解　答え："+this.nowanswer
          }
          if(this.nownumber>=this.nowquizs.length){
            alert("終了！　正解数:"+this.nowquizs.length+"問中 "+this.corrects+"問")
            document.getElementById("mes").style.display="none";
            return
          }
          this.plusnumber()
        },
        plusnumber: function(){
          this.nownumber+=1  
          this.nowquiz=this.nowquizs[this.nownumber-1].question
          this.nowanswer=this.nowquizs[this.nownumber-1].answer
          this.message=""
        }
    }
})