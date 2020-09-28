
//불러올 정보들, 일단 임의로 배열에 넣어놓고
var gradeArr = [1, 2, 3, 4, 5, 6];
var collegeArr = ["IT대학"];
var deptArr = ["전기전자공학과", "전자공학과", "컴퓨터공학과"];
var fieldArr = ["기초교양", "균형교양", "특화교양", "대학별교양", "전공필수", "전공선택"];
var creditArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];



//(목록 불러와서)선택 박스에 추가
function gradeAdd() {
    for (i = 0; i < gradeArr.length; i++) {
        document.write("<option value=" + gradeArr[i] + ">" + gradeArr[i] + "</option>");
    }
}

function collegeAdd() {
    for (i = 0; i < collegeArr.length; i++) {
        document.write("<option value=" + collegeArr[i] + ">" + collegeArr[i] + "</option>");
    }
}

function deptAdd() {
    for (i = 0; i < deptArr.length; i++) {
        document.write("<option value=" + deptArr[i] + ">" + deptArr[i] + "</option>");
    }
}

function fieldAdd() {
    for (i = 0; i < fieldArr.length; i++) {
        document.write("<option value=" + fieldArr[i] + ">" + fieldArr[i] + "</option>");
    }
}

function creditAdd() {
    for (i = 0; i < creditArr.length; i++) {
        document.write("<option value=" + creditArr[i] + ">" + creditArr[i] + "</option>");
    }
}


//필터 설정후 검색버튼 눌렀을때 동작
function startSearch() {
    var searchForm = document.filterForm;
    var userGrade = searchForm.Grade.value; 
    var userCollege = searchForm.College.value; 
    var userDept = searchForm.Dept.value; 
    var userField = searchForm.Field.value;
    var userCreadit = searchForm.Credit.value; 

    //selectBox에서 선택한 정보를 파라미터로 넘김
    ajaxTest(userGrade, userCollege, userDept, userField, userCreadit);
}

//수업 출력
function ajaxTest(grade, college, dept, field, credit) 
{
    var obj = {
        "grade": grade,
        "college": college,
        "dept": dept,
        "field": field,
        "credit": credit
    }
    var information = JSON.stringify(obj);
    //JSON 생성

    $.ajax({
        type: "GET",
        url: "",                    //넘겨줄 백엔드 파일
        dataType: "",
        error: function () {
            alert('실패');
        },
        
        success: function ()
        {
            var parent = document.getElementById("content");    //content 필드를 부모로 지정하고, 수업 목록(div)을 자식요소로 붙여줄거임
            removeChild(parent);                                //content 목록 초기화
            
            
            for(i=0; i<20; i++)
            {
                var item = document.createElement("div");
                item.setAttribute("id", "classinfo" + i);       //id는 각자 상이하게 (0~n)
                item.setAttribute("class", "classInfoDesign");  //div의 css부분
                
                item.innerHTML = information;
                parent.append(item);
            }
        }
        
    });
}

//content 내부의 자식요소들 전부 제거
function removeChild(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}
