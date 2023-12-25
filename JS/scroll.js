/**
 * 
 */
// 1) 기본 이벤트 제거
// passive 옵션의 기본값 false preventDefault()를 이용해서 이벤트 
//자체를 막을 수 있음.
// true인 경우 스크롤이벤트를 막지 않겠다는 뜻이므로 preventDefalt()사용할 수 없음.

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});


// 2) 참조 요소 미리 탐색 및 선언
var $html = $("html");

var page = 1;
// viewport에 표시되는 페이지 번호
var lastPage = $(".content").length;
// 마지막 페이지 번호
$html.animate({scrollTop:0},10);
// 문자(페이지)가 로드되면 첫 페이지 시작


//3) 휠을 굴리면 다음 페이지, 이전 페이지
$(window).on("wheel",function(e){   //이벤트 핸들러 마우스 휠 굴리면 발생하는 이벤트

    if($html.is(":animated"))return;

    if(e.originalEvent.deltaY > 0){
        //e(jquery 반환).originalEvent.deltaY(마우스를 어느방향으로 얼만큼 굴렸는지 -> 양수이면 아래쪽, 음수이면 위쪽으로 굴린 것.)
        if(page==lastPage)return;
        // 마지막 페이지인 경우에는 이벤트핸들러 종료

        page++;
        // 스크롤 아래로 했으면 페이지 +1
    }else if(e.originalEvent.deltaY < 0){
        //e(jquery 반환).originalEvent.deltaY(마우스를 어느방향으로 얼만큼 굴렸는지 -> 양수이면 아래쪽, 음수이면 위쪽으로 굴린 것.)
        if(page ==1)return;
        // 첫 번째 페이지인 경우에도 이벤트 핸들러 종료

        page--;
        // 스크롤 위로 했으면 페이지 -1
    }  
    var posTop = (page-1)*$(window).height(); 

    $html.animate({scrollTop:posTop});
    // 계산한 위치로 이동
});