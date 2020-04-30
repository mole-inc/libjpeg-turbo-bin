"use strict";
const path = require("path");
const test = require("ava");
const execa = require("execa");
const tempy = require("tempy");
const binCheck = require("bin-check");
const compareSize = require("compare-size");
const { jpegtran, cjpeg, djpeg } = require("..");

test("return path to jpegtran binary and verify that it is working", async (t) => {
  t.true(await binCheck(jpegtran, ["-version"]));
});

test("minify a JPG by jpegtran", async (t) => {
  const tmp = tempy.directory();
  const src = path.join(__dirname, "fixtures/test.jpg");
  const dest = path.join(tmp, "test.jpg");
  const args = ["-outfile", dest, src];

  await execa(jpegtran, args);
  const res = await compareSize(src, dest);

  t.true(res[dest] < res[src]);
});

test("return path to cjpeg binary and verify that it is working", async (t) => {
  t.true(await binCheck(cjpeg, ["-version"]));
});

test("return path to djpeg binary and verify that it is working", async (t) => {
  t.true(await binCheck(djpeg, ["-version"]));
});
