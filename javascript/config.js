	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : '',
	homePage : '',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#444444";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#444444";bookConfig.iconColor="#CCCCCC";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.ShareButtonVisible="Hide";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="No";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="403";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="False";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="100";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="40";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="400";bookConfig.LinkDownColor="#0000FF";bookConfig.LinkAlpha="0.4";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=6;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2525;;bookConfig.securityType="1";bookConfig.bookTitle="2024 新北市社會福利手冊";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",frmSearchPrompt:"Clear",btnBookMark:"Table of content",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmark",AnnotmarkbtnHelp:"Open Table of content",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Backward",btnPageForward:"Forward",SelectTextCopy:"Copy Selected Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmBookMark:"Bookmark",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",btnNote:"Annotation",lblDescription:"Title",frmLinkLabel:"Link",infNotSupportHtml5:"Your browser does not support HTML5.",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."},{ language : "Chinese(Traditional)",btnFirstPage:"第一頁",btnNextPage:"下一頁",btnLastPage:"最後一頁",btnPrePage:"前一頁",btnDownload:"下載",btnPrint:"列印",btnSearch:"搜尋",btnClearSearch:"搜尋技巧",frmSearchPrompt:"清除",btnBookMark:"目錄",btnHelp:"幫助",btnHome:"Home",btnFullScreen:"全螢幕",btnDisableFullScreen:"普通螢幕",btnSoundOn:"打開聲音",btnSoundOff:"關閉聲音",btnShareEmail:"分享",btnSocialShare:"朋友分享",btnZoomIn:"放大",btnZoomOut:"縮小",btnDragToMove:"移動",btnAutoFlip:"自動翻頁",btnStopAutoFlip:"停止翻頁",btnGoToHome:"返回主頁",frmHelpCaption:"幫助",frmHelpTip1:"可以點擊兩次進行放大或縮小",frmHelpTip2:"拖動頁面的角落可以進行翻頁",frmPrintCaption:"列印視窗",frmPrintBtnCaption:"列印",frmPrintPrintAll:"列印所有頁面",frmPrintPrintCurrentPage:"列印目前頁面",frmPrintPrintRange:"列印範圍：",frmPrintExampleCaption:"例如：2,5,8-26",frmPrintPreparePage:"正在準備頁面：",frmPrintPrintFailed:"列印失敗：",pnlSearchInputInvalid:"（最少需要輸入3個字元）",loginCaption:"登入",loginInvalidPassword:"你輸入的密碼不正確！",loginPasswordLabel:"密碼：",loginBtnLogin:"登入",loginBtnCancel:"取消",btnThumb:"縮圖",lblPages:"頁數：",lblPagesFound:"找到頁數：",lblPageIndex:"頁",btnAbout:"關於",frnAboutCaption:"關於我們",btnSinglePage:"單頁",btnDoublePage:"雙頁",btnSwicthLanguage:"切換語言",tipChangeLanguage:"請在下面選擇一種語言",btnMoreOptionsLeft:"更多選擇",btnMoreOptionsRight:"更多選擇",btnFit:"自動適應",smallModeCaption:"點擊全螢幕",btnAddAnnotation:"增加注釋",btnAnnotation:"注釋列表",FlipPageEditor_SaveAndExit:"儲存並退出",FlipPageEditor_Exit:"退出",DrawToolWindow_Redo:"重做",DrawToolWindow_Undo:"恢復上一步",DrawToolWindow_Clear:"清除",DrawToolWindow_Brush:"筆刷",DrawToolWindow_Width:"筆刷寬度",DrawToolWindow_Alpha:"筆刷透明度",DrawToolWindow_Color:"筆刷顔色",DrawToolWindow_Eraser:"刪除",DrawToolWindow_Rectangular:"矩形",DrawToolWindow_Ellipse:"橢圓",TStuff_BorderWidth:"邊框寬度",TStuff_BorderAlph:"邊框透明度",TStuff_BorderColor:"字體顔色",DrawToolWindow_TextNote:"文字備註",AnnotMark:"書簽",lastpagebtnHelp:"最後一頁",firstpagebtnHelp:"第一頁",homebtnHelp:"返回首頁",aboubtnHelp:"關於",screenbtnHelp:"全螢幕開啟",helpbtnHelp:"打開說明視窗",searchbtnHelp:"從書頁中搜索",pagesbtnHelp:"預覽小冊子的縮圖",bookmarkbtnHelp:"打開目錄",AnnotmarkbtnHelp:"打開書簽",printbtnHelp:"列印小冊子",soundbtnHelp:"開啟或關閉的聲音",sharebtnHelp:"傳送 Email",socialSharebtnHelp:"分享至社群",zoominbtnHelp:"放大",downloadbtnHelp:"下載本手冊",pagemodlebtnHelp:"單頁和雙頁",languagebtnHelp:"切換語言",annotationbtnHelp:"添加批注",addbookmarkbtnHelp:"個人化書簽",removebookmarkbtnHelp:"移除書簽",updatebookmarkbtnHelp:"更新書簽",btnShoppingCart:"購物車按鈕",Help_ShoppingCartbtn:"購物車",Help_btnNextPage:"下頁",Help_btnPrePage:"上頁",Help_btnAutoFlip:"自動翻頁",Help_StopAutoFlip:"停止自動翻頁",btnaddbookmark:"新增",btndeletebookmark:"刪除",btnupdatebookmark:"更新",frmyourbookmarks:"你的書簽",frmitems:"項目",DownloadFullPublication:"整份手冊",DownloadCurrentPage:"目前頁面",DownloadAttachedFiles:"附件",lblLink:"分享連結",btnCopy:"復制按鈕",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"是否從上次的位置開始",tmpl_Backgoundsoundon:"背景音樂開",tmpl_Backgoundsoundoff:"背景音樂關",tmpl_Flipsoundon:"翻頁聲開",tmpl_Flipsoundoff:"翻頁聲關",Help_PageIndex:"當前頁碼",tmpl_PrintPageRanges:"頁范圍",tmpl_PrintPreview:"預覽",btnSelection:"選擇文字",loginNameLabel:"您的名字:",btnGotoPage:"跳至",btnSettings:"設置",soundSettingTitle:"聲音選項",closeFlipSound:"翻頁聲開關",closeBackgroundSound:"背景聲開關",frmShareCaption:"分享",frmShareLinkLabel:"連結：",frmShareBtnCopy:"複製",frmShareItemsGroupCaption:"朋友分享",TAnnoActionPropertyStuff_GotoPage:"轉到頁",btnPageBack:"後退",btnPageForward:"前進",SelectTextCopy:"文本復制",selectCopyButton:"復制",TStuffCart_TypeCart:"購物車",TStuffCart_DetailedQuantity:"數量",TStuffCart_DetailedPrice:"價格",ShappingCart_Close:"關閉",ShappingCart_CheckOut:"付款",ShappingCart_Item:"項目",ShappingCart_Total:"總計",ShappingCart_AddCart:"添加到購物車",ShappingCart_InStock:"有貨",TStuffCart_DetailedCost:"運費",TStuffCart_DetailedTime:"交貨時間",TStuffCart_DetailedDay:"天數(s)",ShappingCart_NotStock:"無貨",btnCrop:"截圖",btnDragButton:"拖動",btnFlipBook:"翻頁書",btnSlideMode:"水平滑動翻頁",btnSinglePageMode:"單頁模式",btnVertical:"上下翻頁瀏覽",btnHotizontal:"左右翻頁瀏覽",btnClose:"關閉",btnDoublePage:"雙頁",btnBookStatus:"視圖",checkBoxInsert:"加入當前網頁",lblLast:"這是最後一頁。",lblFirst:"這是第一頁。",lblFullscreen:"點擊查看全螢幕",lblName:"名稱",lblPassword:"密碼",lblLogin:"登入",lblCancel:"取消",lblNoName:"用戶名稱不能為空。",lblNoPassword:"密碼不能為空。",lblNoCorrectLogin:"請輸入正確的用戶名和密碼。",btnVideo:"影像總覽",btnSlideShow:"幻燈片放映",pnlSearchInputInvalid:"（最少需要輸入3個字元）",btnDragToMove:"移動",btnPositionToMove:"滑鼠移動",lblHelp1:"拖動頁面角查看",lblHelp2:"按兩下放大，縮小",lblCopy:"複製",lblAddToPage:"添加到頁面",lblPage:"頁",lblTitle:"標題",lblEdit:"編輯",lblDelete:"删除",lblRemoveAll:"删除所有",tltCursor:"滑鼠指標",tltAddHighlight:"添加高亮",tltAddTexts:"添加文字",tltAddShapes:"添加形狀",tltAddNotes:"添加注釋",tltAddImageFile:"添加影像檔案",tltAddSignature:"添加簽名",tltAddLine:"添加直線",tltAddArrow:"添加箭頭",tltAddRect:"添加矩形",tltAddEllipse:"添加橢圓",lblDoubleClickToZoomIn:"雙擊進行放大。",frmShareCaption:"分享",frmShareLabel:"分享",frmShareInfo:"您可以輕鬆地分享本出版物中對社交網絡。只需點擊下面的相應按鈕。",frminsertLabel:"插入到網站",frminsertInfo:"使用下面的代碼本出版物中嵌入到你的網站。",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"預覽",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmBookMark:"書籤",btnFullscreen:"全屏",btnExitFullscreen:"退出全屏",btnMore:"更多",frmPrintall:"打印所有頁面",frmPrintcurrent:"打印當前頁面",frmPrintRange:"打印頁面範圍",frmPrintexample:"示例: 2,3,5-10",frmPrintbtn:"打印",frmaboutcaption:"聯繫",frmaboutcontactinformation:"聯繫信息",frmaboutADDRESS:"地址",frmaboutEMAIL:"電子郵件",frmaboutWEBSITE:"網站",frmaboutMOBILE:"手機",frmaboutAUTHOR:"作者",frmaboutDESCRIPTION:"描述",frmSearch:"蒐索",frmToc:"目錄",btnTableOfContent:"目錄",btnNote:"筆記",lblDescription:"標題",frmLinkLabel:"鏈接",infNotSupportHtml5:"您的瀏覽器不支持HTML5。",frmQrcodeCaption:"用手機掃描底部的二維碼。"}];function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[]]}; bookConfig.isFlipPdf=true;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
