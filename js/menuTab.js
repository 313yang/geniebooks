// Weekly meun tab js
const btns = document.querySelectorAll(".weeklyBtn");
const tabContent = document.querySelectorAll(".js-weekly");

const CLICK_BTN = "changeBtn";
const SHOWING_CL = "weekly-showing";

const handleTab = (btn) => {
  const btnTarget = btn.currentTarget; //클릭된 버튼 찾기
  const target = btnTarget.dataset.tab; //클린된 버튼을 통해 dataset value 가져오기
  btns.forEach((btn) => {
    btn.classList.remove(CLICK_BTN);
  });

  tabContent.forEach((tab) => {
    tab.classList.remove(SHOWING_CL);
  });

  document.querySelector("#" + target).classList.add(SHOWING_CL);
  //id + current taget btn's value of id
  btnTarget.classList.add(CLICK_BTN);
};

function init() {
  btns.forEach((btn) => {
    btn.addEventListener("click", handleTab);
  });
}
init();

/*
// Weekly fillter js
const showTab = (val) => {
    const trend = document.getElementById("trend");
    const healing = document.getElementById("healing");
    const life = document.getElementById("life");
    const culture = document.getElementById("culture");
    const novel = document.getElementById("novel");
    if(val == trend){
        trend.classList.add('weekly-showing');
        healing.classList.remove('weekly-showing');
        life.classList.remove('weekly-showing');
        culture.classList.remove('weekly-showing');
        novel.classList.remove('weekly-showing');
    }else if(val = healing){
        trend.classList.remove('weekly-showing');
        healing.classList.add("weekly-showing");
        life.classList.remove('weekly-showing');
        culture.classList.remove('weekly-showing');
        novel.classList.remove('weekly-showing');

    }else if(val = life){
        trend.classList.remove('weekly-showing');
        healing.classList.remove("weekly-showing");
        life.classList.add('weekly-showing');
        culture.classList.remove('weekly-showing');
        novel.classList.remove('weekly-showing');

    }else if(val = culture){
        trend.classList.remove('weekly-showing');
        healing.classList.remove("weekly-showing");
        life.classList.remove('weekly-showing');
        culture.classList.add('weekly-showing');
        novel.classList.remove('weekly-showing');

    }else if(val = novel){
        trend.classList.remove('weekly-showing');
        healing.classList.remove("weekly-showing");
        life.classList.remove('weekly-showing');
        culture.classList.remove('weekly-showing');
        novel.classList.add('weekly-showing');

    }
    const target = document.getElementById(val);
    target.classList.add('weekly-showing')
}*/
