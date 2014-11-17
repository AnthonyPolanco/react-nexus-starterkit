"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
var R = require("react-nexus");
var _ = R._;
var UplinkSimpleServer = require("nexus-uplink-simple-server");
var express = require("express");
var cors = require("cors");
var path = require("path");

var common = require("./common");
var App = require("./App");

// Render + static server
express().use(cors()).use(express["static"](path.join(__dirname, "..", "public"))).get("/favicon.ico", function (req, res) {
  return res.status(404).send(null);
}).use((new App()).prerender).listen(common.render.port);

(new UplinkSimpleServer({ guid: _.guid(),
  stores: [],
  rooms: [],
  actions: [],
  app: express().use(cors()) })).listen(common.uplink.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7QUFHN0IsT0FBTyxFQUFFLENBQ1IsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQ1gsR0FBRyxDQUFDLE9BQU8sVUFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ3pELEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztTQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztDQUFBLENBQUMsQ0FDN0QsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFNUIsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDdEMsUUFBTSxFQUFFLEVBQUU7QUFDVixPQUFLLEVBQUUsRUFBRTtBQUNULFNBQU8sRUFBRSxFQUFFO0FBQ1gsS0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUMzQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSID0gcmVxdWlyZSgncmVhY3QtbmV4dXMnKTtcbmNvbnN0IF8gPSBSLl87XG5jb25zdCBVcGxpbmtTaW1wbGVTZXJ2ZXIgPSByZXF1aXJlKCduZXh1cy11cGxpbmstc2ltcGxlLXNlcnZlcicpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbicpO1xuY29uc3QgQXBwID0gcmVxdWlyZSgnLi9BcHAnKTtcblxuLy8gUmVuZGVyICsgc3RhdGljIHNlcnZlclxuZXhwcmVzcygpXG4udXNlKGNvcnMoKSlcbi51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycpKSlcbi5nZXQoJy9mYXZpY29uLmljbycsIChyZXEsIHJlcykgPT4gcmVzLnN0YXR1cyg0MDQpLnNlbmQobnVsbCkpXG4udXNlKChuZXcgQXBwKCkpLnByZXJlbmRlcilcbi5saXN0ZW4oY29tbW9uLnJlbmRlci5wb3J0KTtcblxuKG5ldyBVcGxpbmtTaW1wbGVTZXJ2ZXIoeyBndWlkOiBfLmd1aWQoKSxcbiAgc3RvcmVzOiBbXSxcbiAgcm9vbXM6IFtdLFxuICBhY3Rpb25zOiBbXSxcbiAgYXBwOiBleHByZXNzKCkudXNlKGNvcnMoKSksXG59KSkubGlzdGVuKGNvbW1vbi51cGxpbmsucG9ydCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=