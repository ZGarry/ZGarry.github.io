import os
import glob
import re

# 获取当前文件的路径
current_file = os.path.abspath(__file__)

# 获取当前文件所在的目录
current_directory = os.path.dirname(current_file)

# 设置当前工作目录
os.chdir(current_directory)

# 获取当前目录下的所有Markdown文件
markdown_files = glob.glob("*.md")

# 获取img目录下的所有图片文件
image_files = glob.glob("img/*.png") + glob.glob("img/*.jpg") + glob.glob("img/*.jpeg")

# 创建一个集合来存储被使用的图片文件名
used_images = set()

# 遍历Markdown文件
for markdown_file in markdown_files:
    # 读取Markdown文件内容
    with open(markdown_file, "r", encoding="utf-8") as file:
        content = file.read()

    # 查找Markdown文件中的图片链接
    image_links = re.findall(r"!\[\]\(img/(.*?)\)", content)

    # 将图片文件名添加到集合中
    used_images.update(os.path.basename(link) for link in image_links)


# 删除未被使用的图片
for image_file in image_files:
    if os.path.basename(image_file) not in used_images:
        os.remove(image_file)
        print(f"Deleted unused image: {image_file}")
