#!/usr/bin/env node
"use strict";
const { spawn } = require("child_process");
const { wrjpgcom } = require(".");

const input = process.argv.slice(2);

spawn(wrjpgcom, input, { stdio: "inherit" }).on("exit", process.exit);
