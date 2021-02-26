export class JoinGroupResDto {
  isSuccess: boolean;
  message: string;
  group: {
    id: string;
    name: string;
    description: string;
    tag: string;
  }
}
