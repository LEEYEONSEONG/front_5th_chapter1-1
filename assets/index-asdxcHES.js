(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(e){if(e.ep)return;e.ep=!0;const l=r(e);fetch(e.href,l)}})();const d=()=>`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
`,c=()=>`
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" data-link class="text-blue-600">홈</a></li>
          <li><a href="/profile" data-link class="text-gray-600">프로필</a></li>
          <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
        </ul>
      </nav>
`,u=()=>`
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`,m=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${d()}
      ${c()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?" disabled></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded" disabled>게시</button>
        </div>
        ${f()}
      </main>
      ${u()}
    </div>
  </div>
`,f=()=>`
      <div class="space-y-4">
         ${[{name:"홍길동",time:"5분 전",text:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",time:"15분 전",text:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",time:"30분 전",text:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",time:"1시간 전",text:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",time:"2시간 전",text:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}].map(({name:t,time:r,text:o})=>` 
           <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">${t}</p>
                <p class="text-sm text-gray-500">${r}</p>
              </div>
            </div>
            <p>${o}</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>`).join("")}
      </div>
  `,b=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
    </div>
  </main>
`,p=()=>{const{username:s,email:t,bio:r}=JSON.parse(localStorage.getItem("user")||"{}");return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${d()}
      ${c()}
      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
          <form id="profile-form">
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
              <input type="text" id="username" name="username" value="${s}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
              <input type="email" id="email" name="email" value="${t}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-6">
              <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
              <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${r}</textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
          </form>
        </div>
      </main>
      ${u()}
    </div>
  </div>`},g=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <a href="/" data-link class="bg-blue-600 text-white px-4 py-2 rounded font-bold">홈으로 돌아가기</a>
    </div>
  </main>
`,x={"/":m,"/login":b,"/profile":p};function i(){const s=window.location.pathname,t=JSON.parse(localStorage.getItem("user")||"null");if(s==="/profile"&&!t)return n("/login");if(s==="/login"&&t)return n("/");const r=x[s]||g;document.getElementById("root").innerHTML=r(),v()}function n(s){window.history.pushState({},"",s),i()}function v(){document.querySelectorAll("[data-link]").forEach(o=>{o.addEventListener("click",e=>{e.preventDefault(),n(e.target.getAttribute("href"))})});const s=document.getElementById("login-form");s&&s.addEventListener("submit",o=>{o.preventDefault();const e=document.getElementById("username").value.trim();if(!e)return alert("이름을 입력해주세요");const l={username:e,email:"",bio:""};localStorage.setItem("user",JSON.stringify(l)),n("/")});const t=document.getElementById("profile-form");t&&t.addEventListener("submit",o=>{o.preventDefault();const e={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};localStorage.setItem("user",JSON.stringify(e)),n("/profile")});const r=document.getElementById("logout");r&&r.addEventListener("click",o=>{o.preventDefault(),localStorage.removeItem("user"),n("/login")})}window.addEventListener("popstate",i);window.addEventListener("DOMContentLoaded",i);
