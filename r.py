import git
repo = git.Repo('.')

# 添加所有修改的文件到暂存区
repo.git.add('--all')

# 提交更改
repo.git.commit('-m', 'Automatic commit')

# 推送到远程仓库的master分支
origin = repo.remote(name='origin')
origin.push('master')