import{a as i}from"./assets/vendor-917720ee.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();//!======== Вариант №1 =============================================================
//!======== Вариант №2 ====добавл fetch()  ==============================================
//!======== Вариант №3 ==== меняем fetch() на Axios ==============================================
document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("category-list");i.get("https://books-backend.p.goit.global/books/category-list").then(o=>{o.data.forEach(function(r){const e=document.createElement("li");e.textContent=r.list_name,s.appendChild(e)})}).catch(o=>{console.error("Error fetching data;",o)})});
//# sourceMappingURL=commonHelpers.js.map
