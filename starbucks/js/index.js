$(document).ready(function(){
    $('.nav > li>a').on('mouseover', function(){
        $('.subnav_wrap_bg').stop().slideDown();
    });
      $('.nav > li>a').on('mouseleave', function(){
        $('.subnav_wrap_bg').stop().slideUp();
    });
//    $('.subnav_wrap_bg').on('mouseleave', function(){
//        $('.subnav_wrap_bg').stop().slideUp();
//    });
    
    
});

//$(function () {
//            $("#gnb > ul > li").hover(
//                function () {
//                    $(".subnav_wrap_bg").addClass("active1");
//                },
////                function () {
////                    $(".subnav_wrap_bg").addClass("active1");
////                },
//                function () {
//                    $(".subnav_wrap_bg").removeClass("active1"); //hover - 제이쿼리 속성을 한번에 두개를 같이 줄 수 있음.
//                }
//            );
//            $(".subnav_wrap_bg > ul > li:first-child > a").focusin(function () {
//                $(".subnav_wrap_bg").addClass("active1");
//            }); //웹 접근성을 위해 focusin이라는 효과를 준다. focusin이라는 액션은 탭 키와 같은 효과를 가진다.
//            $(".subnav_wrap_bg li:last-child li:last-child a").focusout(function () {
//                $(".subnav_wrap_bg").removeClass("active1");
//            }); //gnb가 계속 펼쳐있다가 마지막 li라스트 차일드에서 나가면 포커스 아웃이됨    
//            $("#gnb > ul > li > a").focusin(function () {
//                $(this).parent().addClass("active1");
//            }); //연두색 바를 만들기 위한 작업.
//            $("#gnb li li:last-child a").focusout(function () {
//                $("#gnb > ul > li").removeClass("active1");
//            });
//        });

