/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const first = getNode('.first');
const second = getNode('.second');

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', (e)=> {
  console.log("e.target : ", e.target);
  console.log("e.currentTarget : ", e.currentTarget);
  // console.log("this : ", this);
  console.log('%c visual', 'background:dodgerblue');
  css('.pop','display','block');
});

getNode('.pop').addEventListener('click', (e) => {
  css('.pop','display','none');
  addClass('.pop','is-active');
  console.log('힝구');
  e.stopPropagation();
})

/* news.addEventListener('click', function(){
  console.log('%c news', 'background:orange');
});

desc.addEventListener('click', function(e){
  e.stopPropagation();
  console.log('%c desc', 'background:red');
});
 */



/* 캡처링 ----------------------------------------------------------------- */