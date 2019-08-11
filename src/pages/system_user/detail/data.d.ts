export interface User {
  userNo: string;
  userName?: string;
  password?: string;
  status?: string | number;
  createDate?: string | number;
  updateDate?: string | number;
}

export interface UserLoginLog {
  userNo: string;
  userName: string;
  loginTime?: string | number;
}

export interface UserDataType {
  user: User;
  userLoginLog: UserLoginLog[];
}
