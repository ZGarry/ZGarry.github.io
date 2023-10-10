from selenium import webdriver
from selenium.webdriver.common.by import By


def getAllArticle():
    # 获取个人的所有链接
    browser = webdriver.Chrome()
    browser.get(
        'https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4')

    # 定义一个集合用来存储链接
    # 未登录，只能看到过去30篇笔记
    links_set = set()

    # 找到 id 为 "userPostedFeeds" 的元素
    user_posted_feeds = browser.find_element(By.ID, "userPostedFeeds")

    # 滚动到页面底部，并获取链接
    for i in range(10):
        # 找到所有以 "/explore" 开头的链接
        links = user_posted_feeds.find_elements(
            By.CSS_SELECTOR, "a[href^='/explore']")

        # 将链接添加到集合中
        for link in links:
            links_set.add(link.get_attribute("href"))

        # 执行滚动操作
        browser.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);")

        # 等待页面加载完成
        browser.implicitly_wait(10)

        # 如果已经滚动到了页面底部，退出循环
        if browser.execute_script("return window.pageYOffset + window.innerHeight >= document.body.scrollHeight;"):
            break

        # 重新获取 id 为 "userPostedFeeds" 的元素
        user_posted_feeds = browser.find_element(By.ID, "userPostedFeeds")

    # 输出去重后的链接
    for link in links_set:
        print(link)

    # 额外补充几篇文章
    links_set.add(
        "https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4/64e6e0bd0000000003020534")
    links_set.add(
        "https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4/64e62280000000000301de24")
    links_set.add(
        "https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4/64df35a0000000001201ce1c")
    links_set.add(
        "https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4/64d1cb75000000000b02ad20")
    links_set.add(
        "https://www.xiaohongshu.com/explore/64d084f7000000000c0361a7")
    links_set.add("https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4/64e81abd000000001201e66a")
    links_set.add("https://www.xiaohongshu.com/user/profile/60460e150000000001001ed4/64edd9ef000000001d017748")
    return links_set

def downForArticle(url):
    # 创建Chrome浏览器对象
    browser = webdriver.Chrome()
    # 加载指定的页面
    # 打开小红书页面
    browser.get(url)

    # 设置隐式等待时间为10秒(第一次时等待10s)
    browser.implicitly_wait(10)

    # 找到 class 为 "note-content" 的元素
    note_content = browser.find_elements(By.CSS_SELECTOR, '.note-content')[0]

    # 找到 class 为 "title" 和 "desc" 的子元素
    titles = note_content.find_elements(By.CSS_SELECTOR, ".title")
    descs = note_content.find_elements(By.CSS_SELECTOR, ".desc")

    import requests
    from PIL import Image
    from io import BytesIO

    # 找到 class 为 "note-content" 的元素
    pics = browser.find_elements(By.CSS_SELECTOR, '.swiper-wrapper')[0]

    text = pics.get_attribute("innerHTML")

    # 使用正则表达式提取内容
    import re
    result = re.findall(r'url\(&quot;(.*?)&quot;\)', text)

    # 输出提取的内容
    s = ""
    result=set(result)
    for url in result:
        # 发送 GET 请求获取图片数据
        response = requests.get(url)

        # 检查响应状态码
        if response.status_code == 200:
            # 创建 Image 对象
            image = Image.open(BytesIO(response.content))

            # 转换为 JPG 格式
            image = image.convert("RGB")

            # 获取文件名
            import uuid
            file_name = 'img/' + str(uuid.uuid4()) + ".jpg"

            s += f"![]({file_name})\n"
            # 保存图片到本地
            image.save(file_name)
            print("图片保存成功！")
        else:
            print("图片下载失败！")

    # 构造 Markdown 格式的字符串
    markdown = f"# {titles[0].text}\n\n {s} \n{descs[0].text}"
    # 将字符串写入同目录下的 Markdown 文件
    with open(f"{titles[0].text}.md", "w", encoding="utf-8") as f:
        f.write(markdown)

li = getAllArticle()
for i in list(li):
    downForArticle(i)

