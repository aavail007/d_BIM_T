//datatable.js的UI
var datatablePrevious = "<i class='mdi mdi-chevron-left'>";
var datatableNext = "<i class='mdi mdi-chevron-right'>";
//系統功能編號
var funNoInfo = "43F27864-D10D-447C-9C04-BB15987E0973";//文章維護
//代碼表
var typeCodeInfo = 2;//文章類型維護的類別代碼
var typeCodeSys = 1;//系統預設功能的類別代碼
var typeCodeSysHasFront = 3;//系統預設功能的類別代碼(有前台功能的)
var typeCodeInfoMgd = 1;//文章類別維護的代碼
var forumSubjectType = 1;//聯絡我們類別代碼
var forumSubjectStatus = 2;//聯絡我們狀態代碼
var groupCourseMgdTypeCode = 1;//系列學程類別代碼
var typeSubscription = 1;//電子報項目大類
var typeSubscriptionItem = 2;//電子報項目
var typeCodeMemberCopType = 1;//帳號管理(產業別)
var typeCodeMemberWork = 2;//帳號管理(職務)
var typeCodeMemberTopical = 3;//帳號管理(主題)
var typeCodeMemberTag = 4;//帳號管理(標籤)
var forumCourseService = 1;//聯絡我們(專屬課程規劃師)-(服務)
var forumCourseTopical = 2;//聯絡我們(專屬課程規劃師)-(主題)
//附件類型
var carouselPicType = 1;//大輪播附圖
var infoCoverType = 2;//文章封面圖
var infoAttType = 3;//文章附件
var infoHTMLEditPic = 4;//文章HTML編輯器上傳圖片
var groupCourseHTMLEditPic = 5;//系列學程HTML編輯器上傳圖片
var groupCourseCoverType = 6;//學程封面圖
var groupCourseMapType = 7;//學程學習地圖
var groupCourseRecomendType = 8;//專家推薦
var carouselMp4Type = 9;//大輪播影片
var hotLessonCover = 10;//首頁主打課程封面
var profilePic = 11;//大頭照
var memImportExcel = 12;//帳號匯入Excel
var GalleryPic = 13;//圖庫
//群組功能編號
var grfNoCarousel = "FC7C36FC-5554-4947-A17E-4E2A04316B37";//首頁輪播管理
var grfNoMeta = "EE9E090A-0AED-4372-849D-ADB2D76E84D9";//Meta管理
var grfNoInfoGrf = "FA8F03CB-04BD-4B12-A555-25A48242442B";//文章類型維護
var grfNoGroupCourse = "C129EF5C-1DF9-4042-BC6A-5A4FEF7CC91A";//系列學程維護
var grfNoMenu = "826C6A48-FA50-41F3-8FE4-A2F5E4BB4496";//前台選單維護
var grfNoMember = "A2DBA017-FAEA-4CD2-99B5-E5EAAE3E79F7";//帳號管理
var grfNoCourse = "72E5395D-226A-4666-B80A-7753FB1D5F65";//課程設定
var grfNoForumSubject = "71166FAB-4BA9-406E-92C3-34F2951E5B6C";//聯絡我們管理(聯絡我們)
var grfNoForumCourse = "C14F7D1B-AF5D-43B1-A178-384F98CD5557";//聯絡我們管理(專屬課程規劃師)
var grfNoAuth = "52E49130-027B-41D6-A681-0C42F0CD5FC7";//權限設定
var grfNoKeyword = "0BD74577-990D-456A-8867-060E33971CD5";//關鍵字維護
var grfNoViewLog = "86CB1CCC-20C6-4954-97F4-AB477A40EC06";//點閱率維護
var grfNoGallery = "6E20D14C-8652-4D3A-987D-E047E89B99DB";//圖庫維護
var grfNoHotLesson = "6080461F-BCE4-4FBE-BF90-548E00A4A99C";//首頁主打課程管裡
var grfNoSubscription = "D9141524-40E9-4DB3-99B6-E01D116611C2";//電子報訂閱
//Email通知範本編號
var mailForgetSswordCtoNo = "406A9393-880A-4245-81C1-8D89AA8C2112";//忘記密碼通知
var mailCheckMailCtoNo = "42E758A9-1AA6-4E91-9E4F-5FA9CF50D4A7";//驗證Email通知
var mailSubscriptionCtoNo = "BC7E7477-1207-453D-BC95-15A2F89B154D";//電子報訂閱確認通知
var mailForumSubjectMgrCtoNo = "42CEDE54-B8AD-49EA-A7C8-39EC51F76EE4";//留言通知PM及聯絡人
var mailForumSubjectSenderCtoNo = "67029ACA-999D-4DD5-A569-9A431981BC30";//留言通知留言者
var mailForumSenderReplyCtoNo = "45D60FE4-290D-4A08-B8D3-AEE453271AFC";//客戶留言，通知課程的PM和聯絡人
var mailForumMgrReplyCtoNo = "1A7D3285-A00F-4F55-8F8C-B63F64EA71A8";//管理者留言，通知留言者
var mailImportMemberCtoNo = "B90FEB25-C80A-40BF-84E8-616C43336FA0";//匯入帳號通知更換密碼
var mailApiExceptionCtoNo = "B49FEF61-1436-450C-8390-888CD761F838";//API錯誤
var mailCheckCopMailCtoNo = "0B3ABB03-3AAC-43D6-A6B6-224F454654BB";//驗證公司Email通知
var mailCustomerServiceCtoNo = "3FFFD8C4-95FA-464D-8A24-0E3F9C8F87CA";//企推客服信箱(專屬課程規劃師)
//Email通知類型代碼
var mailForgetSswordTypeCode = 1;//忘記密碼通知
var mailCheckMailTypeCode = 2;//驗證Email通知
var mailSubscriptionTypeCode = 3;//電子報確認通知
var mailForumSubjectTypeCode = 4;//留言通知
var mailImportMemberTypeCode = 5;//匯入帳號通知
var mailApiExceptionTypeCode = 6;//API錯誤通知
var mailCheckCopMailTypeCode = 7;//公司Email驗證信通知
//通知方式代碼
var notifyEmailSendCode = 1;
var notifyLineSendCode = 2;
var notifySMSSendCode = 3;

/*----- 子網站操作代碼------*/
//生技醫藥BIM
// var webURL = 'https://intertest5.itri.org.tw/collegeone/'; //主站網址
var webURL = 'https://college.itri.org.tw/'; //TODO: 暫時替換
// var webURL2 = '/'; // TODO: 暫時換本機
var webURL2 = '/d_BIM_T/'; // TODO: 暫時換git雲端
var langCode = 'TW';//語系:預設空值
var storyCode = 'H002';
var FoldType = 'BIM';
var FolderGuid;
//var pathCode = '';
//首頁代碼
var PSID = '89E8416D-B920-4D2C-A7D9-493C1042FADD'; //領域代碼, 生技醫藥：89E8416D-B920-4D2C-A7D9-493C1042FADD
var DefaultGrfno0 = 'F6E19F2D-F81C-421C-BC36-EA6409BA0A5D'; //延伸閱讀群組編號, 學習專欄:F6E19F2D-F81C-421C-BC36-EA6409BA0A5D
var DefaultKeyword0 = '生技醫藥'; //延伸閱讀關鍵字
var DefaultTypeMgdNo0 = ''; //延伸閱讀類別編號, 科技新知:9d61350c-f016-4cbf-aba2-9f94ed6a63ff
var DefaultGrfno4 = '753F304C-B211-4670-A14F-F072E5B417BE'; //學習推薦群組編號, 推薦證言:753F304C-B211-4670-A14F-F072E5B417BE
var DefaultKeyword4 = ''; //學習推薦關鍵字
var DefaultTypeMgdNo4 = '8a4c83e5-dbc7-4e2f-8ff1-3f573b2e63e9'; //學習推薦類別編號,test生技醫藥:6EB01E14-B16D-45F2-9CE5-FD1F2A099DCB

//文章查詢預設代碼
var sortFields = 'inf_sdate'; //sortFields：排序的欄位(inf_bdate建檔日、inf_sdate上架日、inf_topdate置頂日、inf_viewcount查閱次數、inf_viewmemcount查閱人數)
var sortDirection = 'DESC'; //sortDirection：排序的方向(ASC順向、DESC反向)

//課程查詢預設代碼
var GetS = 'N';//課程總覽, 是否抓特色S：Y 是、N 否
var courseType = 0; //1 一般課程、2 雲端自學、0 全部
var searchDurationTypeCode = 1; //開課日期查詢類別代碼：1 即日起、2 最近一個月、3 最近三個月、4 最近六個月、5 過去一年、6 過去兩年
var searchLocationList = ''; //上課地點，多個以逗號分隔
var holidayClass = 99; //課程班別： 1:全假日班, 0:全平日班, 2:其他班(多日課程跨到非假日),99:不限
var actConfirm = 95; //開班狀態：0 取消開班, 1 確定開班, 98 (else)尚未開班, 95 排除活動已取消、報名截止, 99 全部
var actAttribute = ''; //活動型態：(空字串)：全部、P：實體、D：線上同步、L：雲端自學、C：混成(實體+線上同步)
var sortTypeCode = 2; //排序方式代碼：1 舉辦日期新的在上, 2 舉辦日期舊的在上, 3 時數多的在上, 4 時數少的在上, 5 舉辦地點, 6 課程名稱
var includeTopDate = 'Y'; //排序是否包含置頂在上的排最上面 Y/ N
var selectAllOrg = 'Y';//是否查詢全部單位


