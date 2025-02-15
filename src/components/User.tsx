import { UserCompanyProps, UserEmailProps, UserIdProps, UserNameProps, UserProps } from '../types/components.types';

const User = (props: UserProps) => {
  return (
    <div>
      { props.children }
    </div>
  )
}

export default User;

const UserId = (props: UserIdProps) => {
    return <h6>{ props.children }</h6>
}

const UserName = (props: UserNameProps) => {
    return <h1>{ props.children }</h1>
}

const UserEmail = (props: UserEmailProps) => {
    return <h5>{ props.children }</h5>
}
const UserCompany = (props: UserCompanyProps) => {
    return <h5>{ props.children }</h5>
}

User.Id = UserId;
User.Email = UserEmail;
User.Name = UserName;
User.Company = UserCompany;