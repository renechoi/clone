const main = document.querySelector("#main");
const qna = document.querySelector("#qna");  //main과 qna를 상수로서 const로 선언해서 만들어줌. queryselector는 css에 대응되는 것을 선택해줌. main 섹션인 것에 대해서 변수에 담기게 됨.

const result = document.querySelector("#result");

const endPoint=12; //endpoint로 12개 마지막 정의해주기 위함 


//const select =[];       //사용자가 선택을 할때마다 그것을 저장해둘 배열 생성    => addanswer 함수에서 처리 
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



function calResult(){   //사용자 선택에 따라 어떤 결과로 이어질지 정해주는 함수


    // 1차원적인 접근 밑 
    // var pointArray = [
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
    //     {name : 'mouth', value: 0, key : 0},
        
    // ]

    // for (let i =0; i < endPoint; i++){  //i가 1씩 늘어나면서 
    //     var target = qnaList[i].a[select[i]];       //target이라는 변수에 qnalist의 질문에 해당하는 것 중 사용자가 선택한 몇번째 답을 넣어주면 사용자의 답이 배열에 입력됨
    //         //다시 반복문을 돌아서 거기서 
    //     for (let j = 0; target.type.length; j++){            //j는 사용자들이 선택한 것에 대한 반복문이 돌아가고 
    //         for(let k =0; k<pointArray.length; k++){    //k는 위의 pointarray에 돌아가게 됨 
    //             if (target.type[j]=== pointArray[k].name)   //type의 값 = 동물 이름이 같으면 value를 1증가하게 된다. => 올라간 밸류에 따라서 가장 밸류가 높은 값을 띄워주게 됨
    //                 pointArray[k].value +=1;
    //         }
    //     }
    // }


    // var resultArray = pointArray.sort(function(a,b){        //value를 기준으로 정렬해서 a가 나오도록 
    //     if (a.value > b.value){
    //         return -1;
    //     }
    //     if (a.value <b.value){
    //         return 1;
    //     }
    //     return 0;
    // });

    // let resultword = resultArray[0].key;                // 가장 많이 선택한 것의 동물을 호출하게 된다 
    // return resultword;



    var result = select.indexOf(Math.max(...select));   //최대값만 가져오면 되게 됨 
    return result;


}


function addAnswer(answerText, qIdx, idx){
    
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');      // answer라는 변수에 버튼을 만듬 

    answer.classList.add('answerList');
    answer.classList.add('my-3');     //indext.html의 qbox에서 마진과 패딩 넣어준 것처럼 여기서 만든 것도 넣어줌
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');     //애니메이션 css에서 만든 것 넣어줌 



    a.appendChild(answer);  // answer라는 버튼이 a에 소속될 수 있도록 
    answer.innerHTML= answerText;//innerhtml을 활용해서 data.js에서 입력한 answer 값을 나오도록 출력 


    // addEventLister()라는 함수로 버튼이 작동할 수 있도록 기능을 심어준다 
    // 위에서만든 answer 변수 = 버튼 기능 => 기능 연결 
    answer.addEventListener("click", function(){                    // 버튼을 클릭했을 때 사라지고 다음 질문이 등장해야 하는 기능 
                                                                    // answer에 클래스 리스트에 answerlist라는 클래스 값을 넣어준다
                                                                    
        var children = document.querySelectorAll('.answerList');    // children이라는 변수에 앞에서 만든 answerlist를 선택하면 버튼 3개를 모두 선택하게 됨 

                                                                    // 여기서 이 클래스 개수에 대해서 i가 돌면서 변수의 요소마다 
        for (let i = 0; i <children.length; i++){




            children[i].disabled = true;                            // 요소마다 disable을 통해 버튼 비활성화 시키고 

            children[i].style.WebkitAnimation = "fadeOut 0.5s";          //버튼 사라질때 애니메이션 효과
            children[i].style.animation = "fadeOut 0.5s";

        }
        setTimeout( () => {

            // select[qIdx] = idx; // 셀렉트 배열에 몇번째 질문에서 몇번째를 선택했는지 담기게 된다
           
           
           // 사용자 선택의 질문을 받아서 select에서 설정한 숫자의 개수를 늘려준다 
            var target = qnaList[qIdx].a[idx].type;
            for(let i = 0; i < target.length; i++){
              select[target[i]] += 1;                   // 반복문이 다 돌고나면 사용자가 선택한 것 중 가장 큰것이 배열에 저장되게 됨
            }


            for(let i = 0; i <children.length; i++){
                children[i].style.display = 'none';                     // 요소마다 display가 안보이게 = 사라지게 // settimeout 함수 안에 넣은 것은 딜레이 줘서 더 자연스럽게
            }
            goNext(++qIdx);    // 반복문이 끝난 이후 qidx값이 1증가하면서 다시 호출해줌 
        }, 450)



    }, false );
}



function setResult(){
    let point = calResult();        //point라는 변수를 만들어서 결과 계산하는 함수 calresult를 호출
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;            // resultname = 인포리스트의 네임을 넣어줌
  
    var resultImg = document.createElement('img');          // img태그를 만들어주고 
    const imgDiv = document.querySelector('#resultImg');    


    var imgURL = 'img/image-' + point + '.png';             // 주소 와 alt 값 
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
  

    const resultDesc = document.querySelector('.resultDesc');       // 설명 부분 채워주기
    resultDesc.innerHTML = infoList[point].desc;
  
}


function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";       //qna 섹션이 꺼지고 result 섹션이 켜져야 함
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block"
      }, 450)})
      setResult();

    console.log(select);        // 제대로 선택 결과가 담겼는지 찍어봄 

}



  


function goNext(qIdx){


    //마지막 페이지 == 위의 endpoint에서 12로 설정 => 같으면 result 페이지로 연결하도록 

    if(qIdx === endPoint){  //인덱스가 마지막에 도달하면 
    goResult();
    return;
    }

    var q = document.querySelector('.qBox') //index.html의 클래스와 연결 
    q.innerHTML = qnaList[qIdx].q;             //data.js의 qnalist로 만들어진 함수와 연결 => 첫번째 요소의 q가 qbox 클래스 div에게 할당 되게됨 
                                            // 맨 첫번째면 [0]이지만 다음것들도 하려면 변수로 설정해주어야 함 

    // q는 문장으로 올리지만 대답 부분은 버튼으로 나와주어야 함 => 반복문으로 여러개 나오도록 
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);                    // 새로운 함수 만들어서 기능을 호출       // i까지 넘겨줌 => idx로 처리해서 사용자 선택을 처리
    }                                       //함수 호출시에 변수로 입력하는 것을 i로 생성되는 변수로 만들어줌 



    // 진행할때마다 상황 진전도에 따라 statusbar를 다르게 나타내기 위한 코딩
    var status   = document.querySelector('.statusBar');
    status.style.width=(100/endPoint) * (qIdx+1) + '%';



}                   



function begin(){       //html의 버튼과 같은 연동 = onclick으로 연결 = 버튼이 클릭이 되었을 때 이 함수가 실행이 되는데 
    
    main.style.WebkitAnimation = "fadeOut 1s";  // 애니메이션 css에서 만든 fade 효과와 연동
    main.style.animation = "fadeOut 1s";
    // 동시적으로 누르면 fade out + fade in이 같이 나와야 하는데 => 자바스크립트의 set timeout 이라는 function을 활용 
    // 애니메이션이 다 실행되고 나서 display를 설정해줌 
    setTimeout(  ()=>{
        
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";

        setTimeout( () => {
            main.style.display = "none";        // 메인은 보이지 않게 
            qna.style.display ="block";         // qna가 등장하도록 함 = 메인스타일이 완전히 꺼지고 나서 
        }, 450)
        
        let qIdx = 0;  // gonext 함수에서 qnalist 호출할 때 여러개를 돌려야 하니까 변수로 설정해서 
        goNext(qIdx);   //비긴 함수가 끝나는 시점에 gonext함수 호출

    }, 450   );



}

