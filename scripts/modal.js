const showModalForDaisy = (id) => {
    console.log(id);
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFetchedData(data.data));
};

const lessonContainer = document.getElementById("lesson-container");

const showFetchedData = (details) => {
//  console.log(details);

  for (const key in details) {
    // console.log(key);
    
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- Open the modal using ID.showModal() method -->
 <!----- <button class="btn" onclick="my_modal_5.showModal()">open modal</button>   ---> 
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
    
    `;
    lessonContainer.appendChild(div);
  }
};

// {word: 'Eager', meaning: 'আগ্রহী', pronunciation: 'ইগার', level: 1, sentence: 'The kids were eager to open their gifts.', …}
