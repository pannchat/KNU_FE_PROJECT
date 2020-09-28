from django.shortcuts import render
import requests 
from bs4 import BeautifulSoup
import re
# Create your views here.
def index(request):
    url = 'http://www.kangwon.ac.kr/www/selectTnSchafsSchdulListUS.do?sc1=%ED%95%99%EC%82%AC%EC%9D%BC%EC%A0%95&key=156&'
    response = requests.get(url).text 
    bs = BeautifulSoup(response, 'html.parser')
    tag = bs.find('tbody', attrs={'class': 'text_left'})
    p = re.findall('fn_appendCalCon.*;',str(tag))
    # for i in p:
    #     print(i)
    matching = [s for s in p if "202010" in s] 
    calArr=[]
    calDic={}
    calDes=[]
    for i in matching:
        li = re.findall('.[\d]+.[\d]+.[\d]+\(.\).*\'',i)
        # print(li)
        for lis in li:
            lis = lis.replace("'","").split(', ')
            # lis
            calArr.append(lis)
            # calArr.append(lis)
            # calDes.append(lis2)

        print(calArr)
        # print(calDes)
            # for t in lis:
                # print(t.replace("'",""))
        


    # print(matching)
    return render(request, 'index.html',{'calArr':calArr})
def myaccount(request):
    return render(request, 'modifyform.html')

def mycredit(request):
    return render(request, 'mycredit.html')

def login(request):
    return render(request, 'login.html')

def intro(request):
    return render(request, 'intro.html')

def signin(request):
    return render(request, 'signin.html')