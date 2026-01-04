import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-6b22766f.js";const s={},d=a(`<h1 id="坐标转换" tabindex="-1"><a class="header-anchor" href="#坐标转换" aria-hidden="true">#</a> 坐标转换</h1><h2 id="坐标转换详解" tabindex="-1"><a class="header-anchor" href="#坐标转换详解" aria-hidden="true">#</a> 坐标转换详解</h2><h3 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h3><p>坐标转换是指将点或物体的位置从一种坐标系表示转换为另一种坐标系表示的过程。在计算机图形学、地理信息系统、机器人学等领域，坐标转换是基础且重要的操作。</p><h3 id="_2-坐标系" tabindex="-1"><a class="header-anchor" href="#_2-坐标系" aria-hidden="true">#</a> 2. 坐标系</h3><h4 id="_2-1-坐标系定义" tabindex="-1"><a class="header-anchor" href="#_2-1-坐标系定义" aria-hidden="true">#</a> 2.1 坐标系定义</h4><p>坐标系是用来确定点或物体在空间中位置的参考系统，通常由坐标原点和坐标轴组成。</p><h4 id="_2-2-常见坐标系" tabindex="-1"><a class="header-anchor" href="#_2-2-常见坐标系" aria-hidden="true">#</a> 2.2 常见坐标系</h4><ul><li><strong>笛卡尔坐标系 (Cartesian Coordinate System):</strong> 使用相互垂直的坐标轴 (x, y, z) 表示点的位置。</li><li><strong>极坐标系 (Polar Coordinate System):</strong> 使用距离原点的距离 (r) 和与参考轴的夹角 (θ) 表示点的位置。</li><li><strong>球坐标系 (Spherical Coordinate System):</strong> 使用距离原点的距离 (r)、与参考轴的夹角 (θ) 和与参考平面的夹角 (φ) 表示点的位置。</li><li><strong>地理坐标系 (Geographic Coordinate System):</strong> 使用经度 (longitude) 和纬度 (latitude) 表示地球表面点的位置。</li></ul><h3 id="_3-坐标转换类型" tabindex="-1"><a class="header-anchor" href="#_3-坐标转换类型" aria-hidden="true">#</a> 3. 坐标转换类型</h3><h4 id="_3-1-二维坐标转换" tabindex="-1"><a class="header-anchor" href="#_3-1-二维坐标转换" aria-hidden="true">#</a> 3.1 二维坐标转换</h4><ul><li><strong>平移 (Translation):</strong> 将点沿着指定方向移动一定距离。</li><li><strong>旋转 (Rotation):</strong> 将点绕指定点旋转一定角度。</li><li><strong>缩放 (Scaling):</strong> 将点相对于指定点进行放大或缩小。</li><li><strong>镜像 (Reflection):</strong> 将点相对于指定轴进行对称变换。</li></ul><h4 id="_3-2-三维坐标转换" tabindex="-1"><a class="header-anchor" href="#_3-2-三维坐标转换" aria-hidden="true">#</a> 3.2 三维坐标转换</h4><ul><li><strong>平移 (Translation):</strong> 将点沿着指定方向移动一定距离。</li><li><strong>旋转 (Rotation):</strong> 将点绕指定轴旋转一定角度。</li><li><strong>缩放 (Scaling):</strong> 将点相对于指定点进行放大或缩小。</li><li><strong>镜像 (Reflection):</strong> 将点相对于指定平面进行对称变换。</li></ul><h3 id="_4-坐标转换矩阵" tabindex="-1"><a class="header-anchor" href="#_4-坐标转换矩阵" aria-hidden="true">#</a> 4. 坐标转换矩阵</h3><p>坐标转换可以使用矩阵运算来表示，方便计算机进行处理。</p><h4 id="_4-1-二维坐标转换矩阵" tabindex="-1"><a class="header-anchor" href="#_4-1-二维坐标转换矩阵" aria-hidden="true">#</a> 4.1 二维坐标转换矩阵</h4><ul><li><strong>平移矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| 1  0  tx |
| 0  1  ty |
| 0  0  1  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>旋转矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| cosθ  -sinθ  0 |
| sinθ   cosθ  0 |
|  0      0    1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>缩放矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| sx  0   0 |
| 0   sy  0 |
| 0   0   1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>镜像矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| -1  0   0 |  (相对于 y 轴)
|  0  1   0 |
|  0  0   1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|  1  0   0 |  (相对于 x 轴)
|  0 -1   0 |
|  0  0   1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-三维坐标转换矩阵" tabindex="-1"><a class="header-anchor" href="#_4-2-三维坐标转换矩阵" aria-hidden="true">#</a> 4.2 三维坐标转换矩阵</h4><ul><li><strong>平移矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| 1  0  0  tx |
| 0  1  0  ty |
| 0  0  1  tz |
| 0  0  0  1  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>绕 x 轴旋转矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| 1     0      0     0 |
| 0   cosθ  -sinθ   0 |
| 0   sinθ   cosθ   0 |
| 0     0      0     1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>绕 y 轴旋转矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| cosθ   0   sinθ   0 |
|   0    1     0    0 |
| -sinθ  0   cosθ   0 |
|   0    0     0    1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>绕 z 轴旋转矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| cosθ  -sinθ   0    0 |
| sinθ   cosθ   0    0 |
|   0      0    1    0 |
|   0      0    0    1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>缩放矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| sx  0   0   0 |
| 0   sy  0   0 |
| 0   0   sz  0 |
| 0   0   0   1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>镜像矩阵:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| -1  0   0   0 |  (相对于 yz 平面)
|  0  1   0   0 |
|  0  0   1   0 |
|  0  0   0   1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|  1  0   0   0 |  (相对于 xz 平面)
|  0 -1   0   0 |
|  0  0   1   0 |
|  0  0   0   1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|  1  0   0   0 |  (相对于 xy 平面)
|  0  1   0   0 |
|  0  0  -1   0 |
|  0  0   </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),l=[d];function r(t,c){return i(),n("div",null,l)}const o=e(s,[["render",r],["__file","坐标转换.html.vue"]]);export{o as default};
