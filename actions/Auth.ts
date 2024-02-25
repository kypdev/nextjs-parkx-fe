import { AuthModel } from '@/dto/authModel/AuthModel';
import { httpClient } from '@/lib/api';

const AuthAction = () => {
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
  const registerSubmit = async (data: any ) => {
    var authModel: AuthModel = {
      email: data.email,
      name: data.name,
      mobile: data.mobile,
      password: data.password,
      register: true,
    };

    var json = JSON.stringify(authModel);
   return await httpClient
      .post('/auth/ValidateMember', json)
  };

  const login = async (data: any) => {
    var authModel: AuthModel = {
      email: data.email,
      name: '',
      mobile: '',
      password: data.password,
      register: false,
    };

    await httpClient
      .post('/auth/ValidateMember', authModel)
      .then((res) => {
        console.log('res', res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
      });

    console.log(authModel);
  };

  return {
    login,
    registerSubmit,
  };
};

export default AuthAction;
