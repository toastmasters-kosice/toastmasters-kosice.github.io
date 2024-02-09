---
templateKey: 'about-page'
path: /kalendar
title: Kalendár
---

<style>
  .calendar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (Responsive to width) */
  }
  .calendar-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>

<div class="calendar-container">
  <iframe class="calendar-iframe" src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=Europe%2FPrague&src=dG9hc3RtYXN0ZXJzLmtvc2ljZUBnbWFpbC5jb20&color=%23009688" frameborder="0" scrolling="no"></iframe>
</div>