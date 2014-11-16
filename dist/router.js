"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
var R = require("react-nexus");

var router = new R.Router({
  "/about": function () {
    return ({
      title: "About",
      description: "About React Nexus Starterkit",
      canonical: "/about" });
  } })["default"](function () {
  return ({
    title: "Home",
    description: "Homepage of React Nexus Starterkit",
    canonical: "/" });
});

module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImc6L3JlYWN0LW5leHVzL3JlYWN0LW5leHVzLXN0YXJ0ZXJraXQvc3JjL3JvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUVqQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUIsVUFBUSxFQUFFO1dBQU0sQ0FBQztBQUNmLFdBQUssRUFBRSxPQUFPO0FBQ2QsaUJBQVcsRUFBRSw4QkFBOEI7QUFDM0MsZUFBUyxFQUFFLFFBQVEsRUFDcEIsQ0FBQztHQUFBLEVBQ0gsQ0FBQyxXQUFRLENBQUM7U0FBTSxDQUFDO0FBQ2hCLFNBQUssRUFBRSxNQUFNO0FBQ2IsZUFBVyxFQUFFLG9DQUFvQztBQUNqRCxhQUFTLEVBQUUsR0FBRyxFQUNmLENBQUM7Q0FBQSxDQUFDLENBQUM7O0FBRUosTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnNnRvNS9wb2x5ZmlsbCcpO1xuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5jb25zdCBSID0gcmVxdWlyZSgncmVhY3QtbmV4dXMnKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFIuUm91dGVyKHtcbiAgJy9hYm91dCc6ICgpID0+ICh7XG4gICAgdGl0bGU6ICdBYm91dCcsXG4gICAgZGVzY3JpcHRpb246ICdBYm91dCBSZWFjdCBOZXh1cyBTdGFydGVya2l0JyxcbiAgICBjYW5vbmljYWw6ICcvYWJvdXQnLFxuICB9KSxcbn0pLmRlZmF1bHQoKCkgPT4gKHtcbiAgdGl0bGU6ICdIb21lJyxcbiAgZGVzY3JpcHRpb246ICdIb21lcGFnZSBvZiBSZWFjdCBOZXh1cyBTdGFydGVya2l0JyxcbiAgY2Fub25pY2FsOiAnLycsXG59KSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9