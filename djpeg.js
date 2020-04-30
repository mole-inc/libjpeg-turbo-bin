#!/usr/bin/env node
"use strict";
const { spawn } = require("child_process");
const { djpeg } = require(".");

const input = process.argv.slice(2);

spawn(djpeg, input, { stdio: "inherit" }).on("exit", process.exit);
