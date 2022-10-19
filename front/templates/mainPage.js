for(let j = 7; j < 21; j++){
    document.getElementById("hours").innerHTML += `<p>${j}</p>`
}

for(let i = 7; i < 21; i++){
    document.getElementById("main-table").innerHTML += `<p style="line-height: 53px; text-align: center; color: rgba(0, 0, 0, 0.15)">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>`
}

// {# function1 : The function that shows the courses of clicked college #}
function function1(rawCollege){
    let url = "http://127.0.0.1:8000/api/course-list/";
    fetch(url).then((response) => response.json())
        .then(function(data){

            let courseList = document.getElementById("course-list")

            let college = rawCollege.innerHTML
            let item = "";
            if(college == 'فیزیک'){
                courseList.innerHTML = "";
                for(let i in data){
                    if(1 == data[i].college){
                        item = data[i].title;
                        // {#console.log(data[i].id)#}
                        courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
                    }
                }
            }else(console.log(college))
            // else if(college == "ریاضی"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(6 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "cs"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(8 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "عمران"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(5 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "فیزیک"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(1 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option value="${data[i].id}" class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college ==  "ce"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(7 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "مکانیک"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(4 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "میمشیمی"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(9 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "هوافضا"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(1 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }else if(college == "نفت"){
            //     courseList.innerHTML = "";
            //     for(let i in data){
            //         if(10 == data[i].college){
            //             item = data[i].title;
            //             courseList.innerHTML += `<option class="courseButton" onclick="function2(${ data[i].id })" onmouseover="function3(${data[i].id})" onmouseout="function4()">${ item }</option><br>`
            //         }
            //     }
            // }
        })
 }

// {# function2 : The function that put the clicked course on the main table #}
function function2(courseId){

    Promise.all([
        fetch("http://127.0.0.1:8000/api/course-list/").then(resp => resp.json()),
        fetch("http://127.0.0.1:8000/api/ws-list/").then(resp => resp.json()),
        fetch("http://127.0.0.1:8000/api/ed-list/").then(resp => resp.json()),
        fetch("http://127.0.0.1:8000/api/course-create/").then(resp => resp.json()),
    ]).then(function(data){
        let form = document.getElementById("save-program");
        let sumOfUnits = document.getElementById('units');
        let listOfCourses = data[0];
        let listOfWS = data[1];
        let listOfED = data[2];
        let create = data[4];
        let mainTable = document.getElementById("main-table")
        let wsId;
        let edId;
        for(let i in listOfCourses){
        if(courseId == listOfCourses[i].id){
            wsId = listOfCourses[i].ws;
            edId = listOfCourses[i].examDate;
            for(let j in listOfWS){
                if(wsId == listOfWS[j].id){
                    let day1 = listOfWS[j].day1;
                    let start = listOfWS[j].start;
                    let time = listOfWS[j].time;
                    let height = 63 * time
                    let right1 = 271 * day1
                    let top = (start - 7) * 63 + 67
                    let day2;
                    // {#sumOfUnits.innerHTML += listOfCourses[i].unit#}
                    if(listOfWS[j].day2 != null){
                        day2 = listOfWS[j].day2;
                        let right2 = 271 * day2
                        form.innerHTML += `<div class="${courseId}">
                                                <input type="hidden" name="${courseId}" value="${courseId}">
                                                <input type="hidden" name="${courseId}" value="${courseId}">
                                            </div>`
                        mainTable.innerHTML +=
                            `<div class="${courseId}">
                                <div class="course square" style="height: ${height}px; top: ${top}px;right: ${right1}px;" onmouseover="">
                                    <figure class="">
                                        <button class="x square" onclick="function7(${courseId}, ${listOfCourses[i].unit})" onmouseover="function5(${courseId})" onmouseout="function2(${courseId})" style="float: left">x</button>
                                        ${listOfCourses[i].code}<br>
                                        <strong>${listOfCourses[i].title}</strong><br>
                                        ${listOfCourses[i].professor}
                                    </figure>
                                </div>
                                <div class="course square" style="height: ${height}px;
                                    top: ${top}px;
                                    right: ${right2}px;" onmouseover="">
                                    <figure class="">
                                        <button class="x square" onclick="function7(${courseId}, ${listOfCourses[i].unit})" onmouseover="function5(${courseId})" onmouseout="function2(${courseId})" style="float: left">x</button>
                                        ${listOfCourses[i].code}<br>
                                        <strong>${listOfCourses[i].title}</strong><br>
                                        ${listOfCourses[i].professor}
                                    </figure>
                                </div>
                            </div>`
                    }else{
                        form.innerHTML += `<div class="${courseId}"><input type="hidden" name="${courseId}" value="${courseId}"></div>`
                        mainTable.innerHTML +=
                            `<div class="${courseId}">
                                <div class="course square" style="height: ${height}px;
                                    top: ${top}px;
                                    right: ${right1}px;" onmouseover="">
                                    <figure class="">
                                        <button class="x square" onclick="function7(${courseId}, ${listOfCourses[i].unit})" onmouseover="function5(${courseId})" onmouseout="function2(${courseId})" style="float: left">x</button>
                                        ${listOfCourses[i].code}<br>
                                        <strong>${listOfCourses[i].title}</strong><br>
                                        ${listOfCourses[i].professor}
                                    </figure>
                                </div>
                            </div>`
                    }
                }
            }
        }else if(courseId == 0){
            mainTable.innerHTML = ''
        }

    }
    })
}

// {# function3 : The function that when mouse pointer goes over the course name shows the course temporarily on the table | also the scriptions #}
function function3(courseId){
    Promise.all([fetch("http://127.0.0.1:8000/api/course-list/").then(resp => resp.json()),
        fetch("http://127.0.0.1:8000/api/ws-list/").then(resp => resp.json()),
        fetch("http://127.0.0.1:8000/api/ed-list/").then(resp => resp.json()),
    ]).then(function(data){
        let listOfCourses = data[0];
        let listOfWS = data[1];
        let listOfED = data[2];
        let temporaryTable = document.getElementById("temporary-table");
        let wsId;
        let edId;
        for(let i in listOfCourses){
        if(courseId == listOfCourses[i].id){
            wsId = listOfCourses[i].ws;
            edId = listOfCourses[i].examDate;
            for(let j in listOfWS){
                if(wsId == listOfWS[j].id){
                    let day1 = listOfWS[j].day1;
                    let start = listOfWS[j].start;
                    let time = listOfWS[j].time;
                    let height = 63 * time
                    let right1 = 271 * day1
                    let top = (start - 7) * 63 + 67
                    let day2;
                    if(listOfWS[j].day2 != null){
                        day2 = listOfWS[j].day2;
                        let right2 = 271 * day2
                        temporaryTable.innerHTML =
                            `<div>
                                <div class="course square temporary" style="height: ${height}px;
                                    top: ${top}px;
                                    right: ${right1}px;">
                                    <figure class="">
                                        ${listOfCourses[i].code}<br>
                                        <strong>${listOfCourses[i].title}</strong><br>
                                        ${listOfCourses[i].professor}
                                    </figure>
                                </div>
                                <div class="course square temporary" style="height: ${height}px;
                                    top: ${top}px;
                                    right: ${right2}px;">
                                    <figure class="">
                                        ${listOfCourses[i].code}<br>
                                        <strong>${listOfCourses[i].title}</strong><br>
                                        ${listOfCourses[i].professor}
                                    </figure>
                                </div>
                            </div>`
                    }else{
                        temporaryTable.innerHTML = `<div>
                                                        <div class="course square temporary" style="height: ${height}px;
                                                            top: ${top}px;
                                                            right: ${right1}px;">
                                                            <figure class="">
                                                                ${listOfCourses[i].code}<br>
                                                                <strong>${listOfCourses[i].title}</strong><br>
                                                                ${listOfCourses[i].professor}
                                                            </figure>
                                                        </div>
                                                    </div>`
                    }
                }
            }
            for(let k in listOfED){
                if(edId == listOfED[k].id){
                    document.getElementById("temporary-list").innerHTML  = `<select class="form-control inputstl" style="height: 230px" multiple>
                                                                                <option disabled>واحد:${listOfCourses[i].unit}</option>
                                                                                <option disabled>گروه:${listOfCourses[i].group}</option>
                                                                                <option disabled>ظرفیت:${listOfCourses[i].capacity}</option>
                                                                                <option disabled>پیشنیاز:${listOfCourses[i].requirement}</option>
                                                                                <option disabled>همنیاز:${listOfCourses[i].synthesis}</option>
                                                                                <option disabled>تاریخ امتحان:${listOfED[k].date}</option>
                                                                                <option disabled>ساعت شروع:${listOfED[k].start}</option>
                                                                                <option disabled>پینوشت:${listOfCourses[i].ps}</option>
                                                                           <ul>`;
                }
            }
        }else if(courseId == 0){
            temporaryTable.innerHTML = ''
        }

    }
    })
 }

// {# function4 : The function that when mouse pointer goes out of the course name get the course out of the table | also the scriptions #}
function function4(){
    document.getElementById("temporary-table").innerHTML = ''
    document.getElementById("temporary-list").innerHTML = ''
 }

 // {#function5 : The function for changing the color of the course on the table when mouse pointer goes over the x symbol #}
function function5(courseId){
    for(let i = 0; i < 1000; i++){
        let element = document.getElementsByClassName(`${courseId}`)[i]
        element.style.color = "#F26659"
    }
 }

// {# function7 : The function that delete the course from the main table after clicked the x symbol #}
function function7(courseId, unit){
    for(let i = 0; i < 1000; i++){
        document.getElementsByClassName(`${courseId}`)[i].innerHTML = "";
    }
}
