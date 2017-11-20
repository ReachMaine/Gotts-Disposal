//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#882---------------
//F:\Internet\Websites\Doug Gott\site\wastemgt\waste-menu.awm
var awmMenuName='disposal-menu';
var awmLibraryBuild=882;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata/disposal-menu';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='gotts-disposal-header.jpg';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='SPYXITGCAFIQZWKCJIWOVB';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmCreateCSS(0,1,0,n,n,n,n,n,'solid','0','#000066','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,0,'#E7CD3A',n,n,'bold 16px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','3px 8px 3px 8',1,'0px / 0px',n);
awmCreateCSS(0,2,0,'#E7CD3A',n,n,'bold 16px Tahoma, Arial, Helvetica, sans-serif','underline','none','0','#000000','3px 8px 3px 8',1,'0px / 0px',n);
awmCreateCSS(0,2,0,'#E7CD3A',n,n,'16px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','3px 8px 3px 8',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,10,10,0,1,0,1,0,1,n,n,100,2,0,30,105,100,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1);
it=s0.addItem(1,2,3,"Residential",n,n,"","residential.htm",n,n,n,"residential.htm",n,0,0,2,0,0,1,n);
it=s0.addItem(1,2,3,"Municipal",n,n,"","municipal.htm",n,n,n,"municipal.htm",n,0,0,2,0,0,2,n);
it=s0.addItem(1,2,3,"Commercial",n,n,"","commercial.htm",n,n,n,"commercial.htm",n,0,0,2,0,0,8,n);
it=s0.addItem(1,2,3,"Recycling",n,n,"","recycling.htm",n,n,n,"recycling.htm",n,0,0,2,0,0,9,n);
it=s0.addItem(1,2,3,"Pay Online",n,n,"","payments.htm",n,n,n,"payments.htm",n,0,0,2,0,0,10,n);
s0.pm.buildMenu();
}}