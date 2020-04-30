#!/usr/bin/env node
"use strict";
const { spawn } = require("child_process");
const { rdjpgcom } = require(".");

const input = process.argv.slice(2);

spawn(rdjpgcom, input, { stdio: "inherit" }).on("exit", process.exit);
