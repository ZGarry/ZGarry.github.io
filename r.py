import git
# 移动到当前目录
import os

# 获取当前文件的绝对路径
current_file = os.path.abspath(__file__)

# 获取当前文件所在的目录路径
current_directory = os.path.dirname(current_file)

# 将当前工作目录更改为当前文件所在的目录
os.chdir(current_directory)


repo = git.Repo('.')

# 添加所有修改的文件到暂存区
repo.git.add('--all')

# 提交更改
repo.git.commit('-m', 'Automatic commit')

# 推送到远程仓库的master分支
origin = repo.remote(name='origin')
origin.push('master')