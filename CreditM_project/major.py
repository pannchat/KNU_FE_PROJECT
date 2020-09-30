import requests 
from bs4 import BeautifulSoup
import re
import html5lib

html = requests.get('http://www.kangwon.ac.kr/www/contents.do?key=1092&').text

# print(html)
soup = BeautifulSoup(html,'html5lib')

test = soup('div',{'class':'organization department'})
test=test[1].find_all('li')
# test.find('a').text
test=test[0].find('a')
test = test.attrs['href']
print(test)