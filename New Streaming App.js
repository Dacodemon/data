var html=`
<div id="head">
<h1>CG STREAMING</h1>
<button id="ct btn">Chris Tomlin</button>
<button id="tm btn">TobyMac</button>
<button id="cc btn">Casting Crowns</button>
<button id="pb btn">Pat Barret</button>
<button id="autoplay">AutoPlay</button>
</div>
<div id="Chris Tomlin">
<h3>Sing Sing Sing - Chris Tomlin</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/01%20Sing%2C%20Sing%2C%20Sing.mp3" controls id="sss ct"></audio>
<h3>Awake My Soul - Chris Tomlin</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20Awake%20My%20Soul.mp3"controls id="ams ct"></audio>
<h3>Jesus Messiah - Chris Tomlin</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20Jesus%20Messiah.mp3"controls id="jm ct"></audio>
<h3>Jesus - Chris Tomlin</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20Jesus.mp3"controls id="j ct"></audio>
<h3>Made To Worship - Chris Tomlin</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20Made%20To%20Worship.mp3"controls id="mtw ct"></audio>
</div>
<div id="TobyMac">
<h3>Like A Match - TobyMac</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/01%20Like%20A%20Match.mp3"controls id="lam tm"></audio>
<h3> Me Without You - TobyMac (Telemintary Remix)</h3> 
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/01%20Me%20Without%20You%20(Telemitry%20Remix).mp3" controls id="mwy tm"></audio>
<h3>Backseat Driver - TobyMac</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20Backseat%20Driver.mp3"controls id="bd tm"></audio>
</div>
<div id="Casting Crowns">
<h3>What If His People Prayed - Casting Crowns</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/01%20What%20If%20His%20People%20Prayed.mp3" controls id="wihpp cc"></audio>
<h3>When We All Get To Heaven- Casting Crowns</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/01%20When%20We%20All%20Get%20To%20Heaven.mp3"controls id="wwagth cc"></audio>
<h3>Nothing But The Blood - Casting Crowns</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20Nothing%20But%20The%20Blood.mp3"controls id="nbtb cc"></audio>
</div>
<div id="Pat Barret">
<h3>God Is So Good (You Are Worthy) - Pat Barret</h3>
<audio src="https://cdn.jsdelivr.net/gh/Dacodemon/data@data/02%20God%20Is%20So%20Good%20(You%20Are%20Worthy).mp3"controls id="gisg pb"></audio>
</div>
`
document.getElementById("div").innerHTML=html
document.getElementById("ct btn").onclick=function(){
var a=document.createElement("a")
a.href="#Chris Tomlin"
a.click()
}
document.getElementById("tm btn").onclick=function(){
var a=document.createElement("a")
a.href="#TobyMac"
a.click()
}
document.getElementById("cc btn").onclick=function(){
var a=document.createElement("a")
a.href="#Casting Crowns"
a.click()
}
document.getElementById("pb btn").onclick=function(){
var a=document.createElement("a")
a.href="#Pat Barret"
a.click()
}