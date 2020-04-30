"use strict";
const fs = require("fs");
const path = require("path");
const binBuild = require("bin-build");
const log = require("logalot");
const which = require("which");
const binVersionCheck = require("bin-version-check");
const { promisify } = require("util");

const bin = require(".").jpegtran;

const install = async () => {
  try {
    await bin.run(["-version"]);
    log.success("libjpeg-turbo built successfully");
  } catch (error) {
    log.warn(error.message);
    log.warn("jpegtran pre-build test failed");
    log.info("compiling from source");

    try {
      await binBuild.url(
        "https://downloads.sourceforge.net/project/libjpeg-turbo/2.0.4/libjpeg-turbo-2.0.4.tar.gz",
        [
          `cmake -G"Unix Makefiles" -DCMAKE_INSTALL_PREFIX="${bin.dest()}" -DCMAKE_INSTALL_BINDIR="${bin.dest()}"`,
          "make",
          "make install",
        ]
      );
    } catch (err) {
      log.error(err.stack);
      throw err;
    }
  }
};

(async () => {
  try {
    let use = process.platform === "win32" ? "cjpeg.exe" : "cjpeg";
    let systemBin = await which(use).catch((error) => {
      throw error;
    });
    const version = ">=2.0.0 && <3.0.0";
    await binVersionCheck(systemBin, version, { args: ["-version"] }).catch(
      (error) => {
        log.warn(
          `The \`${systemBin}\` binary doesn't seem to work correctly or doesn't satisfy version \`${version}\``
        );
        throw error;
      }
    );
    const vendor = path.join(__dirname, "../vendor");
    await promisify(fs.mkdir)(vendor).catch((error) => {
      if (error.code === "EEXIST") {
        return;
      }

      log.warn(error.message);
      throw error;
    });
    let target = path.join(vendor, use);
    await promisify(fs.symlink)(systemBin, target).catch((error) => {
      if (error.code === "EEXIST") {
        return;
      }

      log.warn(error.message);
      throw error;
    });
    log.success(`create cjpeg symlink \`${target}\``);

    use = process.platform === "win32" ? "djpeg.exe" : "djpeg";
    systemBin = await which(use).catch((error) => {
      throw error;
    });
    target = path.join(vendor, use);
    await promisify(fs.symlink)(systemBin, target).catch((error) => {
      if (error.code === "EEXIST") {
        return;
      }

      log.warn(error.message);
      throw error;
    });
    log.success(`create djpeg symlink \`${target}\``);

    use = process.platform === "win32" ? "jpegtran.exe" : "jpegtran";
    systemBin = await which(use).catch((error) => {
      throw error;
    });
    target = path.join(vendor, use);
    await promisify(fs.symlink)(systemBin, target).catch((error) => {
      if (error.code === "EEXIST") {
        return;
      }

      log.warn(error.message);
      throw error;
    });
    log.success(`create jpegtran symlink \`${target}\``);

    use = process.platform === "win32" ? "rdjpgcom.exe" : "rdjpgcom";
    systemBin = await which(use).catch((error) => {
      throw error;
    });
    target = path.join(vendor, use);
    await promisify(fs.symlink)(systemBin, target).catch((error) => {
      if (error.code === "EEXIST") {
        return;
      }

      log.warn(error.message);
      throw error;
    });
    log.success(`create rdjpgcom symlink \`${target}\``);

    use = process.platform === "win32" ? "wrjpgcom.exe" : "wrjpgcom";
    systemBin = await which(use).catch((error) => {
      throw error;
    });
    target = path.join(vendor, use);
    await promisify(fs.symlink)(systemBin, target).catch((error) => {
      if (error.code === "EEXIST") {
        return;
      }

      log.warn(error.message);
      throw error;
    });
    log.success(`create wrjpgcom symlink \`${target}\``);
  } catch (_) {
    await install().catch(() => {
      process.exit(1);
    });
  }
})();
