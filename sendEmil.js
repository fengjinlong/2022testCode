"use strict";
const nodemailer = require("nodemailer");

// 使用async..await 创建执行函数
async function main() {
  // 如果你没有一个真实邮箱的话可以使用该方法创建一个测试邮箱
  // let testAccount = await nodemailer.createTestAccount();

  // 创建Nodemailer传输器 SMTP 或者 其他 运输机制
  let transporter = nodemailer.createTransport({
    host: "smtp.163.com", // 第三方邮箱的主机地址
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "18618166564@163.com", // 发送方邮箱的账号
      pass: "STXJDTCDHFYDHGQA", // 邮箱授权密码
    },
  });

  // 定义transport对象并发送邮件
  let info = await transporter.sendMail({
    from: '"Dooring 👻" <18618166564@163.com>', // 发送方邮箱的账号
    to: "17363165056@163.com", // 邮箱接受者的账号
    subject: "quick_@_@", // Subject line
    text: "404 ?", // 文本内容
    html: "<h1>404 🌶  🏃🏃🏃🏃🏃</h1>", // html 内容, 如果设置了html内容, 将忽略text内容
  });
}

main().catch(console.error);
