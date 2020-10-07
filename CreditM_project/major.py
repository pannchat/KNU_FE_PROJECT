import requests 
from bs4 import BeautifulSoup
import re
import html5lib

def informSelector(college):
    return {college.find('a').attrs['href'],college.find('a').get_text()}

html = requests.get('http://www.kangwon.ac.kr/www/contents.do?key=1092&').text

# print(html)
soup = BeautifulSoup(html,'html5lib')

test = soup('div',{'class':'organization department'})
test=test[1].find_all('li',{'class','depth1'}) # 대학 division의 li를 모두 추출
# 단과대학 정보 추출
n=0
# jsondict = {'college':[{"name":"","link":"","dept":[{"name":"","link":"","major":[{"name":"","link":""}]}]}]}
# {
#         "college": [
#             {"name":"IT대학",
#             "link":"it.kangwon.ac.kr",
#             "dept":[] 
#             {
#                 "name":"Computer",
#                 "link":"cs.kangwon.ac.kr",
#                 "major":[{"name":"CS", "link":"kangwon.ac.kr"},{"name":"CE", 
#                 "link":"kangwon.ac.kr"}]
#             },
#             {
#                 "name":"전기전자",
#                 "link":"el.kangwon.ac.kr",
#                 "major":[{"name":"전기전자","link":"el.kangwon.ac.kr"}]
#             }

#             }}
#         ]
# }
for n in range(14):
    college = test[n].find('div',{'class':'title'})
    print(college.find('a').get_text(), college.find('a').attrs['href'])

    ###########

    major = test[n].find('ul',{'class':'depth2_list'})
    major2 = test[n].find('ul',{'class':'depth2_list'})
    for m in major2.children:
        if str(m).find('li') != -1 :
            if str(m).find('<ul>') != -1:
                p = re.compile('<li>\s{0,}(.+?)\s{0,}<ul>')
                tmp = p.findall(str(m))
                tmp = re.sub('<[^>]*>|/\r\n|\r|\n/| |\n','',str(tmp[0]))
                print(tmp)
                for lis in m.find_all('a'):
                    print(lis.get_text(),lis.attrs['href'])

            else:
                try:
                    getText = m.find('a').get_text()
                    getHref = m.find('a').attrs['href']   
                    print(getText,getHref)
                except AttributeError:
                    plainText = m.get_text()
                    print(plainText, "링크 없음")
            # print("여기부터", m, " 여기까지 ")

    p = re.compile('<li>\s{0,}(.+?)\s{0,}<ul>')
    tmp = p.findall(str(major))

    ### 학부명 추출 

# print(major)
# # tmp = re.sub('<[^>]*>|/\r\n|\r|\n/| |\n','',tmp)
# print(tmp)
# sibal = major.find_all('ul')
# sibalTrash = re.sub('<ul>(.+?)</ul>','', str(major))
# print(sibalTrash,"시발------")
# for li,tmps in zip(sibal,tmp):
#     print(tmps)
#     for lis in li.find_all('a'):
#         print(lis.get_text(),lis.attrs['href'])
# print(sibal)

# tmp = major.find_all('li')
# for z in tmp:
#     print(z, end="----------\n\n\n")
# p = re.compile('<li>\s{0,}(.+?)\s{0,}<ul>')
# tmp = p.match(str(tmp)).group()
# tmp = re.sub('<[^>]*>|/\r\n|\r|\n/| |\n','',tmp)
# print(tmp)
# # print(m)
# for li in major.find_all('a'):
#     print(li.get_text(),li.attrs['href'])
# print(major.find_all('a'))
# print(major.find_all('a'))
# print(informSelector(college))
# print(test[0].find('div',{'class':'title'}))
# print(test[0].find('a').get_text())
# # print(test[1].find('a').attrs['href'])
# print(test[1].find('div',{'class':'title'}))

# print(test[1])
# for li in test[0:3]:
#     print(li)
# print(test)