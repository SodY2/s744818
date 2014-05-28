Ads_BA_doparsethis=true;

if (typeof(debugmode)=="undefined") debugmode=false;
if (typeof(Ads_BA_InstantFlush)=="undefined") Ads_BA_InstantFlush=true;
if (typeof(Ads_BA_detecterror)=="undefined") Ads_BA_detecterror=true;
if (typeof(Ads_BA_debug)=="undefined") Ads_BA_debug=false;
if ((typeof(Ads_BA_ADIDsection)=="undefined")&&(typeof(ADIDsection)!="undefined")) Ads_BA_ADIDsection=ADIDsection;
if (typeof(Ads_BA_ADIDsection)=="undefined") Ads_BA_ADIDsection='rotation';
if (typeof(Ads_BA_ADIDnetworkprefix)=="undefined") Ads_BA_ADIDnetworkprefix='P4574.';

if (typeof(Ads_BA_ADIDsite)=="undefined") Ads_BA_ADIDsite='wilex.de';

// add Network Prefix
Ads_BA_ADIDsite=Ads_BA_ADIDnetworkprefix+Ads_BA_ADIDsite;

// cleanup ADIDsection:
Ads_BA_ADIDsection=Ads_BA_ADIDsection.toLowerCase().substr(0,35);

// wirtschaftschaftslexikon.gabler.de
Ads_BA_ADIDlib='BS**728x90,468x60**FLB**770x250**CAD**300x250,300x600**CAD2**300x250,336x280**CAD3**300x250**SKY**120x600,160x600**BUT**300x60;pos=BUT_top**BUT2**300x60;pos=BUT_bottom**FOOT**728x60**TEXT**468x120**MICRO**800x600**';
Ads_BA_ADIDinterstitial="none";

// Library v d2.7c - Do not modify below this line
// 2012-08-15
Ads_BA_ADIDversion="20120815";
Ads_BA_timestamp=Math.random()*10000000000000000;
Ads_BA_tilecounter=0;

var Ads_BA_debuglog='';

if(Ads_BA_doparsethis)
{
function Ads_BA_debugmsg(message)
 {
 Ads_BA_Now = new Date();
 Ads_BA_loadtime=Ads_BA_Now.getTime()-Ads_BA_Inittime.getTime();
 Ads_BA_debuglog=Ads_BA_debuglog+'\n'+(Ads_BA_loadtime/1000)+'sec :'+message;
 }

Ads_BA_Inittime = new Date();
Ads_BA_debugmsg('Start Parsing');
var Ads_BA_ADIDs = new Array(); 
var Ads_BA_move = new Array();
var Ads_BA_loaded = new Array();
var Ads_BA_preloaded = new Array();

function Ads_BA_Init()
 {
 Ads_BA_debugmsg('Init');
 Ads_BA_debugmsg('Section: '+Ads_BA_ADIDsection);

 var Ads_BA_ADIDliba = Ads_BA_ADIDlib.split('**');

 for (i=0;i<Ads_BA_ADIDliba.length/2;i++) 
 {
 werbeform=Ads_BA_ADIDliba[i*2]
 Ads_BA_ADIDs[Ads_BA_ADIDliba[i*2]]=Ads_BA_ADIDliba[i*2+1]; 
 Ads_BA_DIVname='Ads_BA_'+werbeform;
 // Ads_BA_debugmsg('Check preloaded:'+werbeform);
 if (document.getElementById(Ads_BA_DIVname)!=null) 
  {
  Ads_BA_debugmsg('Preload detected:'+werbeform);
  Ads_BA_preloaded.push(werbeform);
  Ads_BA_move[werbeform]=true; 
  }
 }
 }

Ads_BA_ladeaufgaben="";

function Ads_BA_onloadaction(aufgabe) { Ads_BA_ladeaufgaben=Ads_BA_ladeaufgaben+aufgabe; }
 
function Ads_BA_AD(AI)
 {
 if ((Ads_BA_ADIDs[AI]!=undefined)&&(Ads_BA_ADIDs[AI]!="blocked")&&(Ads_BA_ADIDs[AI]!="42x42"))
 {
 Ads_BA_debugmsg('=> '+AI + ' delivery');
 if (Ads_BA_move[AI]==undefined) Ads_BA_move[AI]=false;
 Ads_BA_loaded[AI]=true;
 divname="Ads_BA_"+AI;

if (typeof(Ads_BA_keyword)=="undefined") { Ads_BA_keyword=Ads_BA_ADIDsection; }
Ads_BA_tilecounter++;

Ads_BA_ADIDsection_tmp=Ads_BA_ADIDsection;
Ads_BA_ADIDsite_tmp=Ads_BA_ADIDsite;
Ads_BA_ADIDsize_tmp=Ads_BA_ADIDs[AI];

if ((AI==Ads_BA_ADIDinterstitial)&&(Ads_BA_ADIDsection!="premium")) {Ads_BA_ADIDsection_tmp=Ads_BA_ADIDsection_tmp+';dcopt=ist'} // Wenn Interstitial-Kürzel, dann dcopt=ist ergänzen

document.write('<scr'+'ipt type="text/javasc'+'ript" language="javascr'+'ipt" src="http://ad.de.doubleclick.net/adj/'+Ads_BA_ADIDsite_tmp+'/'+Ads_BA_ADIDsection_tmp+';tile='+Ads_BA_tilecounter+';sz='+Ads_BA_ADIDsize_tmp+';kw='+Ads_BA_keyword+';wf='+AI+';ord=' + Ads_BA_timestamp + '?"></scr'+'ipt>');
Ads_BA_debugmsg('delivered: '+Ads_BA_ADIDsite+'/'+Ads_BA_ADIDsection+';tile='+Ads_BA_tilecounter+';sz='+Ads_BA_ADIDsize_tmp+';kw='+Ads_BA_keyword+';wf='+AI+';ord=' + Ads_BA_timestamp+'');

  if(Ads_BA_debug)
  {
  document.getElementById(divname).style.backgroundColor="red";
  document.getElementById(divname).style.border="red solid 1px";
  document.write('<span style="font-family:Courier">'+divname+' '+Ads_BA_ADIDsite+'/'+Ads_BA_ADIDsection+';tile='+Ads_BA_tilecounter+';sz='+Ads_BA_ADIDs[AI]+';kw='+Ads_BA_keyword+';wf='+AI+';ord=' + Ads_BA_timestamp + '?</span>');
  }
 }
 else
 { Ads_BA_debugmsg('**FAILED** ID ist 0 fuer '+AI);}
 }

Ads_BA_Init();

}

else
{
 eval('function Ads_BA_AD(AI) {}');
}