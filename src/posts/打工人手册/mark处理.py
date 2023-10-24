import os
import re


def replace_title_with_filename(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        # 使用正则表达式查找标题
        match = re.search(r'# (.+)', content)
        if match:
            title = match.group(1)
            # 替换标题为文件名
            new_content = re.sub(
                r'# (.+)', f'# {os.path.splitext(os.path.basename(file_path))[0]}', content)
            # 将替换后的内容写回文件
            with open(file_path, 'w', encoding='utf-8') as new_file:
                new_file.write(new_content)


# 获取当前文件的路径
current_file = os.path.abspath(__file__)

# 获取当前文件所在的目录
current_directory = os.path.dirname(current_file)

# 设置当前工作目录
os.chdir(current_directory)

# 打印当前工作目录
print("当前工作目录:", os.getcwd())

# 获取当前目录下所有Markdown文件
markdown_files = [file for file in os.listdir('.') if file.endswith('.md')]

# 遍历所有Markdown文件并替换标题
for file in markdown_files:
    replace_title_with_filename(file)
