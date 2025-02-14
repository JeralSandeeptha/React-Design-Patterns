import { IUser } from "../types/interface.types";

const User = (props: IUser) => {

  return (
    <div key={props.id}>
        <h2>Name: { props.name }</h2>
        <h5>Username: { props.username }</h5>
        <h5>Email: { props.email }</h5>
        <h5>Phone: { props.phone }</h5>
        <h5>NaWebsiteme: { props.website }</h5>
        <h5>Works At: { props.company.name }</h5>
        <br />
    </div>
  );

}

export default User;
