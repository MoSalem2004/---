let boxes = document.querySelectorAll(".container .box");
let numbers = document.querySelectorAll(".container .box .header");
// Counter
boxes.forEach((e1 , index1) => {
    numbers.forEach((e2 , index2) => {
        if(index1 === index2) {
            console.log(index1)
            e2.innerHTML = index1 + 1
        }
    }) 
})
// Answer
let Arr_Qu = ["كيف يتم التأكد من البينات المدخلة من قبل كل شخص","كيف يتم التواصل في حالة العثور علي الشخص المناسب","كم أرباح الموقع في حالة تم عقدالقرآن","هل يوجد أرقام لأولياء أمور الفتيات","ما العمل في حال ما إذا كان هناك غش وتدليس في البينات المدخلة","إذا أردت تعديل أي بينات خاصة بي في الموقع هل علي إنشاء حساب جديد"]
let Arr_Ans = ["يتم من خلال أكواد خاصة بذلك مع التأكد من البطاقة الشخصة وصحتها والخلو من أي سوابق", "سوف يتم إرسال رسالة لك للتواصل"," سوف يتم إرسالها في حالة إذا كانت المواصفات مطابقة ", "يتم من خلال أكواد خاصة بذلك مع التأكد من البطاقة الشخصة وصحتها والخلو من أي سوابق" , "يتم من خلال أكواد خاصة بذلك مع التأكد من البطاقة الشخصة وصحتها والخلو من أي سوابق", "يمكنك الدخول علي صفحتك وتعديل بيناتك أو حذفها"]
let All_Qu = document.querySelectorAll(".container .box .The-Question span");
let But_Ans = document.querySelectorAll(".container .box .Title-answer");
But_Ans.forEach((button , index_Btn)=> {
    button.addEventListener("click" , ()=> {
        All_Qu.forEach((question , index_Qu )=> {
            if (index_Btn === index_Qu) {
               // Creat Popup
               let Popup = document.createElement("div");
               Popup.className = "The_Answer";
               let close = document.createElement("span");
               let close_Text = document.createTextNode("X");
               close.appendChild(close_Text);
               close.onclick = function () {
                   Popup.remove()
               }
               let Title_Qu = document.createElement("div");
               let Title_Qu_Text = document.createTextNode("  السؤال :");
               Title_Qu.appendChild(Title_Qu_Text)
               let Qu = document.createElement("div");
               let Qu_Text = document.createTextNode(`${Arr_Qu[index_Qu]}؟`)
               Qu.appendChild(Qu_Text);
               let Title_Ans = document.createElement("div");
               let Title_Ans_Text = document.createTextNode("  الإجابة :");
               Title_Ans.appendChild(Title_Ans_Text)
               let Ans = document.createElement("div");
               let Ans_Text = document.createTextNode(`${Arr_Ans[index_Btn]} .`)
               Ans.appendChild(Ans_Text);
               Popup.appendChild(close)
               Popup.appendChild(Title_Qu)
               Popup.appendChild(Qu)
               Popup.appendChild(Title_Ans)
               Popup.appendChild(Ans)
               document.body.appendChild(Popup)
            }
        })
    })
}) 