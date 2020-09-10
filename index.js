//비밀번호 일치 체크
        $(function() {
            $("#alert-success").hide();
            $("#alert-danger").hide();
            $("input").keyup(function() {
                var pwd1 = $("#joinpwd").val();
                var pwd2 = $("#checkjoinpwd").val();

                if (pwd1 != "" || pwd2 != "") {
                    if (pwd1 == pwd2) {
                        $("#alert-success").show();
                        $("#alert-danger").hide();
                        $("#joinbtn").removeAttr("disabled");
                    } else {
                        $("#alert-success").hide();
                        $("#alert-danger").show();
                        $("#joinbtn").attr("disabled", "disabled");
                    }
                }
            });
        });

        //중복 확인 새창을 연다.
        function openIdChk() {
            window.name="chk";
            window.open("https://fiddle.jshell.net/Eom_chan_young/xa5q97em/show/", '_blank', 'width=500px,height=500px,toolbars=no,scrollbars=no');
            return false;
        }

        //중복체크 후 아이디 지우고 다시 입력하는 경우 대비
        function inputIdChk() {
            document.getElementById("idHidden").value = "Uncheck";
        }

        
        function test() {
            var id = document.getElementById("joinid").value;
            var chk = document.getElementById("idHidden").value;
            var name = document.getElementById("joinname").value;
            var no = document.getElementById("joinstdno").value;
            var dept = document.getElementById("joindept").value;
            var role = document.getElementById("joinrole").value;

            if (id == "" || name == "" || no == "" || dept == "" || role == "") {
                alert("항목을 모두 입력하세요.");
                return false;
            } else if (chk == "Uncheck") {
                alert("아이디 중복 체크를 하세요.");
                return false;
            } else {
                return true;
            }
        }



        