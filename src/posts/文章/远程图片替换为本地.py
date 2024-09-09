import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import os
import requests
import re


# 获取当前文件的路径
current_file = os.path.abspath(__file__)

# 获取当前文件所在的目录
current_directory = os.path.dirname(current_file)

# 设置当前工作目录
os.chdir(current_directory)

# 创建 img 文件夹（如果不存在）
if not os.path.exists('img'):
    os.makedirs('img')

# 遍历当前目录下的所有 Markdown 文件
for file_name in os.listdir('.'):
    if file_name.endswith('.md'):
        with open(file_name, 'r', encoding='utf-8') as file:
            # 读取 Markdown 文件内容
            content = file.read()

        # 使用正则表达式匹配图片链接
        pattern = r'\!\[.*?\]\((http.*?)\)'
        matches = re.findall(pattern, content)

        # 下载图片并保存到本地 img 文件夹下
        for img_url in matches:
            # 解析图片 URL
            parsed_url = urlparse(img_url)
            img_file_name = os.path.basename(parsed_url.path)
            img_file_path = os.path.join('img', img_file_name)

            # 下载图片
            response = requests.get(img_url)
            if response.status_code == 200:
                with open(img_file_path, 'wb') as img_file:
                    img_file.write(response.content)
                    print(f'Saved image: {img_file_path}')
            else:
                print(f'Failed to download image: {img_url}')

            # 替换 Markdown 文件中的图片链接为本地路径
            content = content.replace(img_url, f'img/{img_file_name}')

        # 保存修改后的 Markdown 文件
        with open(file_name, 'w', encoding='utf-8') as file:
            file.write(content)
            print(f'Saved modified Markdown file: {file_name}')
