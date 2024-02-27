import { UserDetail } from '@/dto/UserDetail';
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
  const registerSubmit = async (data: any) => {
    var authModel: AuthModel = {
      email: data.email,
      name: data.name,
      mobile: data.mobile,
      password: data.password,
      register: true,
    };

    var json = JSON.stringify(authModel);
    return await httpClient.post('/auth/ValidateMember', json);
  };

  const memberDetail = async (memberKey: string) => {
    var authModel = {
      memberKey: memberKey,
    };
    return await httpClient.post('/auth/ValidateMember', authModel);
  };

  const login = async (data: any) => {
    var parameters = {
      email: data.email,
      password: data.password,
    };
    return await httpClient.post('/auth/ValidateMember', parameters);
  };

  const ValidateMember = async (data: any) => {
    return await httpClient
      .post('/auth/ValidateMember', data)
      .then((res) => {
        if (res.data.data) {
          return res.data as UserDetail;
        } else {
          return null;
        }
      })
      .catch((error) => {
        return null;
      });
  };

  return {
    login,
    registerSubmit,
    memberDetail,
    ValidateMember,
  };
};

export default AuthAction;
