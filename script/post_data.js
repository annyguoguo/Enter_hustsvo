// var options = {
//     method:'POST',
//     headers:{
//         'Accept':'application/json',
//         'Cpntent-Type':'application/json'
//     },
//     body: JSON.stringify({username:'guoguo',password:'abcd1234'}),
//     credentials:'include'
// };

// fetch('/Hustersvo_Enter.php',options).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Oops,error:',error));

document.getElementById('submit_zy').onclick = async () => {
    try {
        let body = {
            name: information_z[0],
            major: information_z[1],
            phone: information_z[2],
            email: information_z[3],
            interest: information_z[4],
            experience: "",
            chosen: ['产工', '品运'],
        };
        let response = await fetch("/Hustsvo_Enter.php", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json; charset=utf8'
            },
        });
        let responseJson = await response.json();
        console.log(responseJson)
        if (responseJson.stateCode == 200) {
            window.open('#') //跳轉报名成功
        } else {
            alert(responseJson.message);
        }
    } catch (error) {
        console.log(error)
    }
}