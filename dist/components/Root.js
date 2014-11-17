"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
var R = require("react-nexus");
var React = R.React;
var styles = require("../styles");

var Root = React.createClass({
  displayName: "Root",
  mixins: [R.Root.Mixin],

  render: function () {
    return React.createElement("div", {
      className: "Root"
    }, "Hello React Nexus.");
  },

  statics: {
    styles: {
      "html, body": {
        color: styles.colors.Text,
        fontFamily: styles.fonts.Roboto },

      "a, a:hover, a:visited, a:active": {
        textDecoration: "none" },

      a: {
        color: styles.colors.Link },

      "a:hover": {
        color: styles.colors.LinkHover },

      "a:active": {
        color: styles.colors.LinkActive } } } });

module.exports = Root;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVwQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOztBQUM3QixRQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFFdEIsUUFBTSxFQUFBLFlBQUc7QUFDUCxXQUFPO0FBQUssZUFBUyxFQUFDLE1BQU07NEJBRXRCLENBQUM7R0FDUjs7QUFFRCxTQUFPLEVBQUU7QUFDUCxVQUFNLEVBQUU7QUFDTixrQkFBWSxFQUFFO0FBQ1osYUFBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtBQUN6QixrQkFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNoQzs7QUFFRCx1Q0FBaUMsRUFBRTtBQUNqQyxzQkFBYyxFQUFFLE1BQU0sRUFDdkI7O0FBRUQsT0FBRyxFQUFFO0FBQ0gsYUFBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUMxQjs7QUFFRDtBQUNFLHdDQUNEOztBQUVELGdCQUFVLEVBQUU7QUFDVixhQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQ2hDLEVBQ0YsRUFDRixFQUNGLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL1Jvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCc2dG81L3BvbHlmaWxsJyk7XG5jb25zdCBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbmNvbnN0IFIgPSByZXF1aXJlKCdyZWFjdC1uZXh1cycpO1xyXG5jb25zdCBSZWFjdCA9IFIuUmVhY3Q7XHJcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4uL3N0eWxlcycpO1xyXG5cclxuY29uc3QgUm9vdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBtaXhpbnM6IFtSLlJvb3QuTWl4aW5dLFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J1Jvb3QnPlxyXG4gICAgICBIZWxsbyBSZWFjdCBOZXh1cy5cclxuICAgIDwvZGl2PjtcclxuICB9LFxyXG5cclxuICBzdGF0aWNzOiB7XHJcbiAgICBzdHlsZXM6IHtcclxuICAgICAgJ2h0bWwsIGJvZHknOiB7XHJcbiAgICAgICAgY29sb3I6IHN0eWxlcy5jb2xvcnMuVGV4dCxcclxuICAgICAgICBmb250RmFtaWx5OiBzdHlsZXMuZm9udHMuUm9ib3RvLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ2EsIGE6aG92ZXIsIGE6dmlzaXRlZCwgYTphY3RpdmUnOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgICdhJzoge1xyXG4gICAgICAgIGNvbG9yOiBzdHlsZXMuY29sb3JzLkxpbmssXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAnYTpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogc3R5bGVzLmNvbG9ycy5MaW5rSG92ZXIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAnYTphY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6IHN0eWxlcy5jb2xvcnMuTGlua0FjdGl2ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJvb3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==