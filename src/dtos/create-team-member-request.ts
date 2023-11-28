import { IsNotEmpty, Length } from 'class-validator';

// Utiliza os decorators de validação de requisição
export class CreateTeamMemberRequest {
  // Decorators que servem para validar cada dado da
  @IsNotEmpty({
    message: 'the member name should not be empty',
  })
  @Length(2, 200)
  name: string;

  @IsNotEmpty()
  function: string;
}
