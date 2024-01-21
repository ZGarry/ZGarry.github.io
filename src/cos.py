# -*- coding=utf-8
from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client
from qcloud_cos import CosServiceError
from qcloud_cos import CosClientError

import sys
import logging


def percentage(consumed_bytes, total_bytes):
    """进度条回调函数，计算当前上传的百分比

    :param consumed_bytes: 已经上传/下载的数据量
    :param total_bytes: 总数据量
    """
    if total_bytes:
        rate = int(100 * (float(consumed_bytes) / float(total_bytes)))
        print('\r{0}% '.format(rate))
        sys.stdout.flush()


if __name__ == "__main__":

    # 腾讯云COSV5Python SDK, 目前可以支持Python2.6与Python2.7以及Python3.x

    # pip安装指南:pip install -U cos-python-sdk-v5

    # cos最新可用地域,参照https://www.qcloud.com/document/product/436/6224

    logging.basicConfig(level=logging.INFO, stream=sys.stdout)

    # 设置用户属性, 包括 secret_id, secret_key, region等。Appid 已在CosConfig中移除，请在参数 Bucket 中带上 Appid。Bucket 由 BucketName-Appid 组成
    secret_id = 'SecretId'     # 替换为用户的 SecretId，请登录访问管理控制台进行查看和管理，https://console.cloud.tencent.com/cam/capi
    secret_key = 'SecretKey'   # 替换为用户的 SecretKey，请登录访问管理控制台进行查看和管理，https://console.cloud.tencent.com/cam/capi
    region = 'ap-beijing'      # 替换为用户的 region，已创建桶归属的region可以在控制台查看，https://console.cloud.tencent.com/cos5/bucket
                               # COS支持的所有region列表参见https://www.qcloud.com/document/product/436/6224
    token = None               # 如果使用永久密钥不需要填入token，如果使用临时密钥需要填入，临时密钥生成和使用指引参见https://cloud.tencent.com/document/product/436/14048
    domain = None # domain可以不填，此时使用COS区域域名访问存储桶。domain也可以填写用户自定义域名，或者桶的全球加速域名
                  # 填写用户自定义域名，比如user-define.example.com，需要先开启桶的自定义域名，具体请参见https://cloud.tencent.com/document/product/436/36638
                  # 填写桶的全球加速域名，比如examplebucket-1250000000.cos.accelerate.tencentcos.cn，需要先开启桶的全球加速功能，请参见https://cloud.tencent.com/document/product/436/38864
    
    config = CosConfig(Region=region, SecretId=secret_id, SecretKey=secret_key, Token=token, Domain=domain)  # 获取配置对象
    client = CosS3Client(config)

    # 文件流 简单上传
    file_name = 'test.txt'
    with open('test.txt', 'rb') as fp:
        response = client.put_object(
            Bucket='test04-123456789',  # Bucket由bucketname-appid组成
            Body=fp,
            Key=file_name,
            StorageClass='STANDARD',
            ContentType='text/html; charset=utf-8'
        )
        print(response['ETag'])

    # 字节流 简单上传
    response = client.put_object(
        Bucket='test04-123456789',
        Body=b'abcdefg',
        Key=file_name
    )
    print(response['ETag'])

    # 本地路径 简单上传
    response = client.put_object_from_local_file(
        Bucket='test04-123456789',
        LocalFilePath='local.txt',
        Key=file_name,
    )
    print(response['ETag'])