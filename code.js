var script = document.createElement("script");
script.src="https://saturnlang.github.io/markuplanguage/cookies.js";
document.body.appendChild(script);
var header = document.getElementsByTagName("header")[0];
header.innerHTML = "<h1>" + header.innerText; + "</h1>";
var pagename = document.getElementsByTagName("pagename")[0];
pagename.innerHTML = "<title>" + pagename.innerText; + "</title>";
var scrip = document.getElementsByTagName("jscript")[0];
scrip.innerHTML ="<script>" + scrip.innerText + "</script>";
