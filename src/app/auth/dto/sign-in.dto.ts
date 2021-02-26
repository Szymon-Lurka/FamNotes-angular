import {GroupDto} from "./group.dto";

export class SignInDto {
  error?: string;
  status: boolean;
  user: {
    id: string,
    login: string;
    pwdHash: string;
    currentTokenId: string;
    group: GroupDto;
  }
}
