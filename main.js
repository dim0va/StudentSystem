var myDatabase = [{
        name: 'James',
        email: 'james@abv.bg',
        age: 26,
        phone: '0875496585',
        communicationWay: 'Phone',
        englishLevel: 'B2',
        startDate: '01.04.2020',
        skills: 'Excel',
        presentation: 'want to learn',
        homeStudy: 'Yes'
    },
    {
        name: 'Lara',
        email: 'lara@abv.bg',
        age: 21,
        phone: '08755556585',
        communicationWay: 'Email',
        englishLevel: 'C2',
        startDate: '15.04.2020',
        skills: 'C#',
        presentation: 'want to learn',
        homeStudy: 'No'
    },
    {
        name: 'Monica',
        email: 'monica@abv.bg',
        age: 23,
        phone: '08786696585',
        communicationWay: 'Phone',
        englishLevel: 'C1',
        startDate: '02.04.2020',
        skills: 'Java',
        presentation: 'want to learn',
        homeStudy: 'Yes'
    },

];

(function Avatars(db) {

    var init = function() {
        generateList();
        enterUser();
    }

    var generateList = function() {
        var parent = document.querySelector('#parent_avatars');
        var template = '';

        for (var i = 0; i < db.length; i++) {


            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + i + '">X</div>';
            template += '<div class="card-update" data-card="' + i + '">✎</div>';
            template += '<div class="card-block">';
            template += '<h3 class="card-title">' + db[i].name + '</h3>';
            template += '<p class="card-text">';
            template += '<strong>Email</strong>:<span>' + db[i].email + '</span>';
            template += '</p>';
            template += '<p class="card-text">';
            template += '<strong>Age</strong>:<span>' + db[i].age + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>Phone</strong>:<span>' + db[i].phone + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>Way of communication</strong>:<span>' + db[i].communicationWay + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>English level</strong>:<span>' + db[i].englishLevel + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>Start date</strong>:<span>' + db[i].startDate + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>Skills</strong>:<span>' + db[i].skills + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>Presentation</strong>:<span>' + db[i].presentation + '</span>';
            template += '</p>';

            template += '<p class="card-text">';
            template += '<strong>Home study</strong>:<span>' + db[i].homeStudy + '</span>';
            template += '</p>';

            template += '</div>';
            template += '</div>';
            template += '</div>';


        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteCard();
        updateCard();

    }

    var enterUser = function() {

        var checkValue;



        function grabUser() {

            console.log('inside');
            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;
            var phone = document.querySelector('#user_phone').value;


            var emailRadiobtn = document.getElementById('email-radio-btn');
            var phoneRadiobtn = document.getElementById('phone-radio-btn');
            var valueRadio;

            if (emailRadiobtn.checked == true) {
                valueRadio = emailRadiobtn.value;
            } else {
                if (phoneRadiobtn.checked == true) {
                    valueRadio = phoneRadiobtn.value;
                }
            }

            var checkBtn = document.getElementById('checkbox');
            var checkValue
            if (checkBtn.checked == true) {
                checkValue = checkBtn.value;
            } else {
                checkValue = 'No';
            }


            var e = document.getElementById("level");
            var level = e.options[e.selectedIndex].text;

            var englishLevel = level;
            var startDate = document.querySelector('#start_date').value;
            var communicationWay = valueRadio;
            var skills = document.querySelector('#user_skills').value;
            var presentation = document.querySelector('#user_presentation').value;
            var homeStudy = checkValue;

            var elements = [name, email, age, phone, communicationWay, englishLevel, startDate, skills, presentation,
                homeStudy
            ];

            if (validateUser(elements)) {

                document.querySelector('#myForm').reset();
                db.push({
                    name: name,
                    email: email,
                    age: age,
                    phone: phone,
                    communicationWay: communicationWay,
                    englishLevel: englishLevel,
                    startDate: startDate,
                    skills: skills,
                    presentation: presentation,
                    homeStudy: homeStudy
                })
                generateList();

            } else {

                document.querySelector('#error').style.display = "block";
                setTimeout(function() {
                    document.querySelector('#error').style.display = "none";
                }, 2000)

            }



        }

        document.querySelector('#myForm').addEventListener("submit", function(event) {
            event.preventDefault();
            console.log('before');
            grabUser();
        })

    }

    var validateUser = function(elements) {

        for (var i = 0; i < 7; i++) {
            if (elements[i] == "")
                return false;
        }
        return true;
    }

    var deleteCard = function() {

        var buttons = document.querySelectorAll('.card-delete');

        function deleteThis(element) {
            var cardIndex = parseInt(element.getAttribute('data-card'));
            db.splice(cardIndex, 1);
            generateList();
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                deleteThis(this);
            })
        }

    }

    var updateCard = function() {

        var buttons = document.querySelectorAll('.card-delete');

        function updateThis(element) {
            var cardIndex = parseInt(element.getAttribute('data-card'));



            generateList();
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                updateThis(this);
            })
        }
    }


    init();
}(myDatabase))