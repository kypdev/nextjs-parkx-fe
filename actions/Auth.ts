

const AuthAction = () =>{

   

//     https://apis.parkx.com/auth/ValidateMember


// post body {
//     "mobile": "0856635599", //optional OTP
//     "email": "arkomm@outlook.com",
//     "lineId": null, //optional
//     "facebookId": null, //optional
//     "googleId": null, //optional
//     "openId": null, //optional 
//     "appleId": null, //optional
//     "microsoftId":null, //optional
//     "name": "new member", //optional
//     "password": "2222", //optional
//     "register": true
// }
    const registerSubmit = (data: any) => {
       console.log(data);
    }

    return {
        registerSubmit
    }
}

export default AuthAction;