(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=n(e);fetch(e.href,l)}})();const c=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
`,u=()=>{const t=JSON.parse(localStorage.getItem("user")||"null"),o="/front_5th_chapter1-1/",n=f(),s=e=>n===e||n===o+e.slice(1)?"text-blue-600 font-bold":"text-gray-600";return`
    <nav class="bg-white shadow-md p-2 sticky top-14" role="navigation">
      <ul class="flex justify-around">
        <li><a href="/" data-link class="${s("/")}">홈</a></li>
        ${t?`
          <li><a href="/profile" data-link class="${s("/profile")}">프로필</a></li>
          <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
        `:`
          <li><a href="/login" data-link class="${s("/login")}">로그인</a></li>
        `}
      </ul>
    </nav>
  `},m=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,b=()=>`
    <div class="space-y-4">
      ${[{name:"홍길동",time:"5분 전",text:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",time:"15분 전",text:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",time:"30분 전",text:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",time:"1시간 전",text:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",time:"2시간 전",text:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}].map(({name:o,time:n,text:s})=>`
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">${o}</p>
              <p class="text-sm text-gray-500">${n}</p>
            </div>
          </div>
          <p>${s}</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>`).join("")}
    </div>
  `,p=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${c()}
      ${u()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?" disabled></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded" disabled>게시</button>
        </div>
        ${b()}
      </main>
      ${m()}
    </div>
  </div>
`,g=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,h=()=>{const{username:t="",email:o="",bio:n=""}=JSON.parse(localStorage.getItem("user")||"{}");return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${c()}
        ${u()}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
            <form id="profile-form">
              <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                <input type="text" id="username" name="username" value="${t}" class="w-full p-2 border rounded" />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                <input type="email" id="email" name="email" value="${o}" class="w-full p-2 border rounded" />
              </div>
              <div class="mb-6">
                <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${n}</textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
            </form>
          </div>
        </main>
        ${m()}
      </div>
    </div>
  `},v=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <a href="/" data-link class="bg-blue-600 text-white px-4 py-2 rounded font-bold">홈으로 돌아가기</a>
    </div>
  </main>
`,x={"/":p,"/login":g,"/profile":h},f=()=>window.location.hash.startsWith("#/")?window.location.hash.slice(1):window.location.pathname,d=t=>{window.location.hash.startsWith("#/")?window.location.hash=t:(window.history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate")))},w=t=>{window.addEventListener("popstate",t),window.addEventListener("hashchange",t)};function i(){const t=f(),o=JSON.parse(localStorage.getItem("user")||"null");if(t==="/profile"&&!o)return d("/login");if(t==="/login"&&o)return d("/");const n=x[t]||v;document.getElementById("root").innerHTML=n(),y()}function r(t){window.history.pushState({},"","/front_5th_chapter1-1/"+t.slice(1)),i()}function y(){document.querySelectorAll("[data-link]").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault(),r(e.target.getAttribute("href"))})});const t=document.getElementById("login-form");t&&t.addEventListener("submit",s=>{s.preventDefault();const e=document.getElementById("username").value.trim();if(!e)return alert("이름을 입력해주세요");const l={username:e,email:"",bio:""};localStorage.setItem("user",JSON.stringify(l)),r("/")});const o=document.getElementById("profile-form");o&&o.addEventListener("submit",s=>{s.preventDefault();const e={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};localStorage.setItem("user",JSON.stringify(e)),r("/profile")});const n=document.getElementById("logout");n&&n.addEventListener("click",s=>{s.preventDefault(),localStorage.removeItem("user"),r("/login")})}w(i);window.addEventListener("DOMContentLoaded",i);
