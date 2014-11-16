"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
/* jshint ignore:start */
// Escape double-quotes
var X = function (x) {
  return x.replace(/\"/g, "\\\"");
};
var DEV = (process.env.NODE_ENV === "development");

module.exports = function (_ref) {
  var title = _ref.title;
  var description = _ref.description;
  var canonical = _ref.canonical;
  var lang = _ref.lang;
  var rootHtml = _ref.rootHtml;
  var serializedFlux = _ref.serializedFlux;
  var serializedHeaders = _ref.serializedHeaders;
  return "<!doctype html" + (lang ? " lang=\"" + X(lang) + "\"" : "") + ">\n  <html>\n    <head>\n      <meta charset=\"utf-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      " + (description ? "<meta name=\"description\" content=\"" + X(description) + "\">" : "") + "\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <title>" + (title || "") + "</title>\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"/p" + (DEV ? "" : ".min") + ".css\">\n      <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>\n      <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>\n      <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>\n    </head>\n    <body>\n      <div id=\"__ReactNexusRoot\">\n        " + rootHtml + "\n      </div>\n      <script type=\"text/javascript\">\n        (function(w, d, i, f, h, g) {\n          w.__ReactNexus = { serializedFlux: f, serializedHeaders: h, guid: g, rootElement: d.getElementById(i) };\n        }(window, document, '__ReactNexusRoot', '" + serializedFlux + "', '" + serializedHeaders + "', '" + guid + "'))\n      </script>\n      <script type=\"text/javascript\" src=\"/p" + (DEV ? "" : ".min") + ".js\">\n    </body>\n  </html>\n  ";
};
/* jshint ignore:end */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImc6L3JlYWN0LW5leHVzL3JlYWN0LW5leHVzLXN0YXJ0ZXJraXQvc3JjL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7O0FBR3BDLElBQU0sQ0FBQyxHQUFHLFVBQUMsQ0FBQztTQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQUssQ0FBQztDQUFBLENBQUM7QUFDekMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQzs7QUFFbkQsTUFBTSxDQUFDLE9BQU8sR0FBRztNQUFHLEtBQUssUUFBTCxLQUFLO01BQUUsV0FBVyxRQUFYLFdBQVc7TUFBRSxTQUFTLFFBQVQsU0FBUztNQUFFLElBQUksUUFBSixJQUFJO01BQUUsUUFBUSxRQUFSLFFBQVE7TUFBRSxjQUFjLFFBQWQsY0FBYztNQUFFLGlCQUFpQixRQUFqQixpQkFBaUI7NEJBQ2pGLENBQUEsSUFBSSxnQkFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQU0sRUFBRSxDQUFBLHdJQUszQyxDQUFBLFdBQVcsNkNBQXdDLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBTyxFQUFFLENBQUEsd0dBR25FLEtBQUssSUFBSSxFQUFFLDZFQUM2QixDQUFBLEdBQUcsR0FBRyxFQUFFLEdBQUUsTUFBTSxDQUFBLHVaQU83RCxRQUFRLDZRQU1pQyxjQUFjLFlBQU8saUJBQWlCLFlBQU8sSUFBSSw2RUFFdEQsQ0FBQSxHQUFHLEdBQUcsRUFBRSxHQUFFLE1BQU0sQ0FBQTtDQUczRCxDQUFDIiwiZmlsZSI6InRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnNnRvNS9wb2x5ZmlsbCcpO1xuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4vLyBFc2NhcGUgZG91YmxlLXF1b3Rlc1xuY29uc3QgWCA9ICh4KSA9PiB4LnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xubGV0IERFViA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYW5vbmljYWwsIGxhbmcsIHJvb3RIdG1sLCBzZXJpYWxpemVkRmx1eCwgc2VyaWFsaXplZEhlYWRlcnMgfSkgPT5cbiAgYDwhZG9jdHlwZSBodG1sJHtsYW5nID8gYCBsYW5nPVwiJHtYKGxhbmcpfVwiYCA6ICcnfT5cbiAgPGh0bWw+XG4gICAgPGhlYWQ+XG4gICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPlxuICAgICAgJHtkZXNjcmlwdGlvbiA/IGA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiJHtYKGRlc2NyaXB0aW9uKX1cIj5gIDogJyd9XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cbiAgICAgIDx0aXRsZT4ke3RpdGxlIHx8IFwiXCJ9PC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3Ake0RFViA/ICcnOiAnLm1pbid9LmNzc1wiPlxuICAgICAgPGxpbmsgaHJlZj0naHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cbiAgICAgIDxsaW5rIGhyZWY9J2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucytDb25kZW5zZWQ6MzAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cbiAgICAgIDxsaW5rIGhyZWY9J2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucycgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgPGRpdiBpZD1cIl9fUmVhY3ROZXh1c1Jvb3RcIj5cbiAgICAgICAgJHtyb290SHRtbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XG4gICAgICAgIChmdW5jdGlvbih3LCBkLCBpLCBmLCBoLCBnKSB7XG4gICAgICAgICAgdy5fX1JlYWN0TmV4dXMgPSB7IHNlcmlhbGl6ZWRGbHV4OiBmLCBzZXJpYWxpemVkSGVhZGVyczogaCwgZ3VpZDogZywgcm9vdEVsZW1lbnQ6IGQuZ2V0RWxlbWVudEJ5SWQoaSkgfTtcbiAgICAgICAgfSh3aW5kb3csIGRvY3VtZW50LCAnX19SZWFjdE5leHVzUm9vdCcsICcke3NlcmlhbGl6ZWRGbHV4fScsICcke3NlcmlhbGl6ZWRIZWFkZXJzfScsICcke2d1aWR9JykpXG4gICAgICA8L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9wJHtERVYgPyAnJzogJy5taW4nfS5qc1wiPlxuICAgIDwvYm9keT5cbiAgPC9odG1sPlxuICBgO1xuLyoganNoaW50IGlnbm9yZTplbmQgKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==