import { createUser, retrieveUserList, retrieveUser, updateUser, deleteUser } from "../services/appService";

const routes = (app) => {
    app.route('/user')
        .post(createUser)
        .get(retrieveUserList);
    app.route('/user/:userId')
        .get(retrieveUser)
        .put(updateUser)
        .delete(deleteUser)
}
export default routes;