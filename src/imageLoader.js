// 学习怎么加载静态资源
import onePicUrl from "@assets/images/noe.jpg"

const img = document.createElement("img");

img.src = onePicUrl;

document.body.append(img);