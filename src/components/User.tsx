import { IUser } from "../types/interface.types";

const User = (props: IUser) => {

  return (
    <div key={props.id}>
        <h2>Name: { props.name }</h2>
        <h5>Name: { props.username }</h5>
        <h5>Name: { props.email }</h5>
        <h5>Name: { props.phone }</h5>
        <h5>Name: { props.website }</h5>
        <h5>Name: { props.company.name }</h5>
        <br />
    </div>
  );

}

export default User;
