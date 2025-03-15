const allBtns = document.getElementById("learn-all-btn");
const loadingText = document.createElement("p");
loadingText.innerHTML = `
<span class="loading loading-spinner text-primary"></span>
`;

const url = "https://openapi.programming-hero.com/api/levels/all";
allBtns.appendChild(loadingText);
fetch(url)
  .then((res) => res.json())
  .then((data) => printAllData(data.data));

const printAllData = (btns) => {
  // {id: 101, level_no: 1, lessonName: 'Basic Vocabulary'}
  for (const item of btns) {
    const { id, lessonName, level_no } = item;
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="showLevel(${level_no})"
     class="border border-violet-700 p-1 rounded font-semibold px-2 text-violet-700 
                hover:bg-violet-700 hover:text-white transition-all hover:cursor-pointer 
                "> <i class="fa-solid fa-book-open p-1"></i> ${lessonName} </button>
    `;

    allBtns.appendChild(div);
    loadingText.remove();
    // console.log(item.lessonName);
  }
};

const showLevel = (id) => {
  document.getElementById("not-selected-section").classList.add("hidden");
  // document.getElementById("no-word-found-section").classList.add("hidden");

  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCard(data.data));

  // {id: 5, level: 1, word: 'Eager', meaning: 'আগ্রহী', pronunciation: 'ইগার'}
};
// /5

const showCard = (data) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  if (data.length > 0) {
    for (const divItem of data) {
      const { id, level, word, meaning, pronunciation } = divItem;
      const div = document.createElement("div");
      div.innerHTML = `
      
         <div class=" bg-white rounded-xl  p-10 text-center flex flex-col gap-4 text-xl">
         <h2>${id}</h2>
                          <h2 class="font-bold">${word}</h2>
                          <p class="font-medium">${pronunciation}</p>
                          <p class="font-semibold">${meaning}</p>
                          <div class="flex items-center justify-between">
                              <button onclick="showModalForDaisy('${id}')">
                                  <i class="fa-solid fa-circle-info bg-gray-200 p-2 rounded-md cursor-pointer"></i>
                              </button>
                              <button onclick="pronounceWord('${word}')"> <i
                                      class="fa-solid fa-volume-high bg-gray-200 p-2 rounded-md cursor-pointer"></i>
                              </button>
                          </div>
                      </div> `;
      lessonContainer.appendChild(div);
      // console.log(divItem.word);
    }
  } else {
    const div = document.createElement("div");
    div.innerHTML = `<div class=" bg-gray-200 rounded-md flex flex-col items-center justify-center p-20 mx-auto ">
                    <img class="" src="./assets/alert-error.png" alt="">
                    <p class="text-sm">এই লেসনে কোন Vocabulary যুক্ত করা হয়নি </p>
                    <p class="text-[2rem] font-semibold">নেক্সট lesson এ যান </p>
                </div>
`;
    lessonContainer.appendChild(div);
  }
};
