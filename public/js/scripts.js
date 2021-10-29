/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// setTimeout(()=>{
//     document.body.style.backgroundColor ="orange";
//     setTimeout(()=>{
//         document.body.style.backgroundColor ="green";
//         setTimeout(()=>{
//             document.body.style.backgroundColor ="red";
//         },2000)//nested callback function
//     },4000)
// },1000)


// getfunction('orange',2000, ()=>{
//     setTimeout(()=>{
//                     document.body.style.backgroundColor ="red";
//                 },1000)//nested callback function
//                 getfunction('yellow',3000,()=>{
//                     console.log('callback is wrok properly')
//                 })
// });

// const getfunction = function (color, timer, callback){
//     setTimeout(()=>{
//                     document.body.style.backgroundColor =color;
//                     callback();
//                 },timer)//nested callback function
          
// } ;

// getfunction('blue',1000,()=>{
//     getfunction('red',1000,()=>{
//         getfunction('orenge',1000,()=>{
//             getfunction('lightgreen',1000,()=>{
//                 console.log('is working properly')
//             })
//         })
//     })
// });

// how time asnyc function 

// const fakeReqCall =(url,success,failure)=>{
//    const delay = Math.floor(Math.random() * 4500) +500;
//  setTimeout(()=>{
//     if(delay < 4000){
//         failure('conncetion Timeout :(')
//       }else{
//           success(`Here is your fake data from ${url}`);
//       }
//  },4000)
   
// }
// fakeReqCall('googls.com ',(response)=>{
//     console.log('it Work !!!');
//     console.log(response)
//     fakeReqCall('book.com ',(response)=>{
//         console.log('it Work again  !!!');//hell promise
//         console.log(response)
//     },(err)=>{
//         console.log('Error2 :(',err)
//     })

// },(err)=>{
//     console.log('Error :(',err)
    
// });

const fakeRuequsetPromise = (url)=>{
    return new Promise((resolve, rejcet)=>{
        const delay = Math.floor(Math.random() * 4500) +500;
        setTimeout(()=>{
           if(delay < 2000){
              rejcet('conncetion Timeout :(')
             }else{
                 resolve(`Here is your fake data from ${url}`);
            }
     },delay)
    })  

}
 
// fakeRuequsetPromise('yep.com/api/coffee').
// then((data)=>{
//     console.log('its work !!');
//     console.log('this is your Data :',data)
//     fakeRuequsetPromise('yep.com/api/coffee2').then((data)=>{
//         console.log('this is your secon data ',data)
//     }).catch((err)=>console.log('this second error',err))
// }).catch((err)=>{
//     console.log('error its not !!',err);
// })

// fakeRuequsetPromise('yep.com/api/coffee').then(()=>{
//     console.log('its work !!');
//     return fakeRuequsetPromise('yep.com/api/coffee/page2')
// }).then(()=>{
//     console.log('its work 2 !!');
//     return fakeRuequsetPromise('yep.com/api/coffee/page3')
// }).then(()=>{
//     console.log('its work !! 3');
// }).catch((err)=>{
//     console.log('Not found :( ',err);
// })