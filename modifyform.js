

var userpw = 1234;
var stdId = 201513406;
var stdName = "엄찬영";
//사용자 정보 (임시 데이터)


//페이지 onload시 실행할 함수
function init() {
    document.getElementsByName("studentId")[0].value = "";
    document.getElementsByName("studentId")[0].placeholder = stdId;
    //읽기 전용으로 학번을 표시.

    document.getElementsByName("studentName")[0].value = stdName;
    //사용자이름 표시.

    document.getElementById("submitBtn").disabled = "disabled";
    document.getElementById("submitBtn").style.backgroundColor = '#9e9e9e'
    //수정하기 버튼 비활성화
}

//수정버튼 활성화 조건 체크
$(function () {
    $("input").keyup(function () {
        var pwd = $("#pwField").val();              //기존비밀번호 필드에 입력한 값
        var modifypwd = $("#modifyPwField").val();  //수정비밀번호 필드에 입력한 값
        var name = $("#nameField").val();           //이름 필드에 입력한 값

        //기존비밀번호 필드에 입력한 값과 기존기밀번호가 같으면 수정버튼 활성화
        if (pwd != "" || userpw != "") {
            if (pwd == userpw) {
                $("#submitBtn").removeAttr("disabled");
                $("#pwCheckLable").html("비밀번호가 일치합니다.");
                $("#pwCheckLable").css('color', 'green');
                $("#submitBtn").css('backgroundColor', 'black');
            } else {
                $("#submitBtn").attr("disabled", "disabled");
                $("#pwCheckLable").html("비밀번호가 일치하지 않습니다.");
                $("#pwCheckLable").css('color', 'red');
            }
        }
        
        //수정비밀번호 필드가 공백이면 수정버튼 비활성화
        if (modifypwd == "") {
            $("#submitBtn").attr("disabled", "disabled");
            $("#submitBtn").css('backgroundColor', '#9e9e9e');
        }
        
        //이름이 공백이면 수정버튼 비활성화
        if (name == "") {
            $("#submitBtn").attr("disabled", "disabled");
            $("#submitBtn").css('backgroundColor', '#9e9e9e');
        }
    });
});
