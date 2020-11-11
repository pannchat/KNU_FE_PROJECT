
//불러올 정보들, 일단 임의로 배열에 넣어놓음
var semesterArr = ["1학기","2학기","여름","겨울"];
var majorArr = ["컴정","컴과"];
var gradeArr = [1, 2, 3, 4, 5, 6];
var collegeArr = ["IT대학"];
var deptArr = ["전기전자공학과", "전자공학과", "컴퓨터공학과"];
var fieldArr = ["기초교양", "균형교양", "특화교양", "대학별교양", "전공필수", "전공선택"];
var creditArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];



//(목록 불러와서)선택 박스에 추가
function semesterAdd() {
    for (i = 0; i < semesterArr.length; i++) {
        document.write("<option value=" + semesterArr[i] + ">" + semesterArr[i] + "</option>");
    }
}


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

function majorAdd() {
    for (i = 0; i < majorArr.length; i++) {
        document.write("<option value=" + majorArr[i] + ">" + majorArr[i] + "</option>");
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
    var userSemester = searchForm.Semester.value;
    var userMajor = searchForm.Major.value;

    //selectBox에서 선택한 정보를 파라미터로 넘김
    ajaxTest(userGrade, userCollege, userDept, userField, userCreadit, userSemester, userMajor);
}

//수업 출력
function ajaxTest(grade, college, dept, field, credit ,semester, major) 
{
    var obj = {
        "grade": grade,
        "college": college,
        "dept": dept,
        "field": field,
        "credit": credit,
        "semester" : semester,
        "major" : major
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
            var parent = document.getElementById("content");    //content 필드를 부모로 지정하고, 수업 목록(div)을 자식요소로 붙여줌
            removeChild(parent);                                //content 목록 초기화
            
            
            for(i=0; i<20; i++)
            {   
                var item = document.createElement("div");
                var takeBtn = document.createElement("button");
                
                item.setAttribute("id", "classinfo" + i);           //id는 각자 상이하게 (0~n)
                item.setAttribute("class", "classInfoDesign");      //div의 css부분
                
                takeBtn.setAttribute("type","button");
                takeBtn.setAttribute("id","takeBtn"+i);
                takeBtn.textContent = "담기";
                //takeBtn.setAttribute("onclick","")
                
                item.innerHTML = information;
                
                parent.append(item);
                item.append(takeBtn);
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
