var html=`
<div id="head">
<h1>CG STREAMING</h1>
<button id="ct btn">Chris Tomlin</button>
<button id="tm btn">TobyMac</button>
<button id="cc btn">Casting Crowns</button>
<button id="pb btn">Pat Barret</button>
<button id="acom btn">A Christian On A Mission</button>
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
<div id="acom">
<h1>A Christian On A Mission</h1>
<h3>Trust In You - Building 429 (Bass Boosted By A Christian On A Mission)</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Trust_In_You_Building_429_bass_boosted_by_A_Christian_On_A_Mission.mp3" id="trust in you bass boosted" controls></audio>

<h3>When We All See Jesus Bas Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/When_we_all_see_Jesus__Casting_Crowns.mp3" id="acom wwasj"controls></audio>

<h3>Do It Again Elevation Worship Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Do_It_Again_Elevation_Worship_Bass_Boosted_by_ACOM%20(1).mp3" id="acom dia"controls></audio>

<h3>Jesus Messiah - Chris Tomlin Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Jesus_Messiah_Chris_Tomlin_Bass_Boosted_By_ACOM_Forkable.mp3" id="acom jmct"controls></audio>

<h3>Colten Dixon Miracles - Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Colton_Dixon_Miracles_Bass_Boosted_By_ACOM.mp3" id="acom cdm"controls></audio>

<h2>Follow A Christian On A Mission On Bandlab <a href="https://www.bandlab.com/achristianguy">@achristianguy</a></h2>

<h3>Chris Tomlin - Countless Wonders Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Chris_Tomlin__Countless_Wonders_Bass_Boosted.mp3" id="acom ctcw"controls></audio>

<h3>Jeremey Camp - Keep Me In The Moment Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/ForkableKeep_Me_In_The_MomentJeremy_Camp_Bass_Boosted_By_ACOM.mp3" id="acom jckmitm"controls></audio>

<h3>Jonny Diaz - Just Breath Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Just_BreathJonny_Diaz_Bass_Boosted_By_A_Christian_On_A_Mission.mp3" id="acom jdjb"controls></audio>

<h3>Way Up - Bizzle Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Way_Up_Bizzle_ft_Sevin_Bass_Boosted_by_ACOM.mp3" id="acom wub"controls></audio>

<h3>Gravity - Landry Cantrell Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Gravity_Landy_Cantrell_Bass_Boosted_By_A_Christian_On_A_Mission.mp3" id="acom glc"controls></audio>

<h3>TobyMac - This Is Not A Test Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/TobyMac_This_Is_Not_A_Test_Bass_Boosted_By_A_Christian_On_A_Mission.mp3" id="acom ttinat"controls></audio>

<h3>God's Country - Blake Shelton Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Gods_CountryBlake_Shelton_Bass_Boosted_By_A_Christian_On_A_Mission_.mp3" id="acom gcbs"controls></audio>

<h3>MercyMe - Even If Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Mercy_MeEven_If_Bass_Boosted__Reverbed_it_is_well.mp3" id="acom mib"controls></audio>
<h3>Ryan Stevenson - Eye Of The Storm Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/Eye_Of_The_StormRyan_Stevenson_Remix_By_achristinguy.mp3" id="acom rseots"controls></audio>
<h3>Hawk Nelson - He Still Does Miracles Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/He_Still_does_MiraclesHawk_Nelson.mp3" id="acom hnhsdm"controls></audio>
<h3>Chris Tomlin How Great Is Our God Bass Boosted By ACOM</h3>
<audio src="https://cdn.jsdelivr.net/gh/achristianonamission/musichost@main/How_Great_Is_Our_GodWorld_Edition_Bass_Enhanced.mp3" id="acom cthgiog" controls></audio>
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
document.getElementById("acom btn").onclick=function(){
var a=document.createElement("a")
a.href="#acom"
a.click()
}
