"use strict";
const path = require("path");
const BinWrapper = require("@mole-inc/bin-wrapper");
const pkg = require("../package.json");

const url = `https://raw.githubusercontent.com/mole-inc/libjpeg-turbo-bin/v${pkg.version}/vendor/`;

module.exports.jpegtran = new BinWrapper()
  .src(`${url}linux/x86/jpegtran`, "linux", "x86")
  .src(`${url}linux/x64/jpegtran`, "linux", "x64")
  .src(`${url}win/x86/jpegtran.exe`, "win32", "x86")
  .src(`${url}win/x64/jpegtran.exe`, "win32", "x64")
  .src(`${url}win/x86/jpeg62.dll`, "win32", "x86")
  .src(`${url}win/x64/jpeg62.dll`, "win32", "x64")
  .dest(path.join(__dirname, "../vendor"))
  .use(process.platform === "win32" ? "jpegtran.exe" : "jpegtran")
  .version(">=2.0.0 && <3.0.0");

module.exports.cjpeg = new BinWrapper()
  .src(`${url}linux/x86/cjpeg`, "linux", "x86")
  .src(`${url}linux/x64/cjpeg`, "linux", "x64")
  .src(`${url}win/x86/cjpeg.exe`, "win32", "x86")
  .src(`${url}win/x64/cjpeg.exe`, "win32", "x64")
  .src(`${url}win/x86/jpeg62.dll`, "win32", "x86")
  .src(`${url}win/x64/jpeg62.dll`, "win32", "x64")
  .dest(path.join(__dirname, "../vendor"))
  .use(process.platform === "win32" ? "cjpeg.exe" : "cjpeg")
  .version(">=2.0.0 && <3.0.0");

module.exports.djpeg = new BinWrapper()
  .src(`${url}linux/x86/djpeg`, "linux", "x86")
  .src(`${url}linux/x64/djpeg`, "linux", "x64")
  .src(`${url}win/x86/djpeg.exe`, "win32", "x86")
  .src(`${url}win/x64/djpeg.exe`, "win32", "x64")
  .src(`${url}win/x86/jpeg62.dll`, "win32", "x86")
  .src(`${url}win/x64/jpeg62.dll`, "win32", "x64")
  .dest(path.join(__dirname, "../vendor"))
  .use(process.platform === "win32" ? "djpeg.exe" : "djpeg")
  .version(">=2.0.0 && <3.0.0");

module.exports.rdjpgcom = new BinWrapper()
  .src(`${url}linux/x86/rdjpgcom`, "linux", "x86")
  .src(`${url}linux/x64/rdjpgcom`, "linux", "x64")
  .src(`${url}win/x86/rdjpgcom.exe`, "win32", "x86")
  .src(`${url}win/x64/rdjpgcom.exe`, "win32", "x64")
  .dest(path.join(__dirname, "../vendor"))
  .use(process.platform === "win32" ? "rdjpgcom.exe" : "rdjpgcom");

module.exports.wrjpgcom = new BinWrapper()
  .src(`${url}linux/x86/wrjpgcom`, "linux", "x86")
  .src(`${url}linux/x64/wrjpgcom`, "linux", "x64")
  .src(`${url}win/x86/wrjpgcom.exe`, "win32", "x86")
  .src(`${url}win/x64/wrjpgcom.exe`, "win32", "x64")
  .dest(path.join(__dirname, "../vendor"))
  .use(process.platform === "win32" ? "wrjpgcom.exe" : "wrjpgcom");
