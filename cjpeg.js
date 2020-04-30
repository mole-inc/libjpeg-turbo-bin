#!/usr/bin/env node
"use strict";
const { spawn } = require("child_process");
const { cjpeg } = require(".");

const input = process.argv.slice(2);

spawn(cjpeg, input, { stdio: "inherit" }).on("exit", process.exit);
