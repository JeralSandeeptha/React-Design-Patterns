import axios from "axios";
import { GetUsersProps } from "../../types/functions.types";

const getUsers = async (props: GetUsersProps) => {
    try {
        props.setIsLoading(true);
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data);
                props.setUsers(res.data);
                props.setIsLoading(false);
                props.setIsSuccess(true);
                setTimeout(() => {
                    props.setIsSuccess(false);
                }, 3000);
            })
            .catch((error) => {
                console.log(error);
                props.setIsError(true);
                props.setIsLoading(false);
                throw new Error('Users list can not fetch!');
                setTimeout(() => {
                    props.setIsError(false);
                }, 3000);
            });
    } catch (error) {
        console.log(error);
        throw new Error('Users list server is not responsing!');
        props.setIsLoading(false);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
        }, 3000);
    }
}

export default getUsers;