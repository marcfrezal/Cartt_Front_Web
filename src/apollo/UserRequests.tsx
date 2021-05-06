import { FetchPolicy, gql } from "apollo-boost";
import { Client } from ".";
import { IAuth, IUser, IUserUpdate, IUserCreate } from "../CadeoModels";

 const MLogin = gql`
	mutation login($authentication: UserLoginSchema!) {
		login(authentication: $authentication) {
			_id
			email
		}
	} 
`;


 interface MLoginArgs
{
	authentication:	IAuth;
}

 interface MLoginData
{
	login:	IUser;
}

const QBasicMe = gql`
	query me {
		me {
			lastname
			email
			firstname
			role
		}
	}
`;

interface MeData {
	me: IUser;
}

const MLogout = gql`
	mutation logout {
		logout
	}
`

interface MLogoutData {
	logout: boolean;
}

 const QUsers = gql`
	query users {
		users {
			_id
			lastname
			firstname
			email
			role
			hospitalCenter {
				name
			}
			status
		}
	}
`;

 interface UsersData {
	users:	Array<IUser>;
}

 const MUpdateUser = gql`
	mutation updateUser($updateUser: UserUpdateSchema!) {
		updateUser(user: $updateUser) {
			_id
			firstname
			lastname
		}
	}
`
 interface MUpdateUserArgs {
	updateUser: IUserUpdate;
}
 interface MUpdateUserData {
	updateUser: IUser;
}


 const MCreateUser = gql`
	mutation createUser($createUser: UserCreateSchema!) {
		createUser(user: $createUser) {
			_id
			email
		}
	} 
`
 interface MCreateUserArgs {
	createUser: IUserCreate;
}
 interface MCreateUserData {
	createUser: IUser;
}
const MDeleteUser = gql`
	mutation deleteUser($idUser: String!) {
		deleteUser(idUser: $idUser)
	}
`
interface MDeleteUserArgs {
	idUser:	string
}
interface MDeleteUserData {
	deleteUser: boolean;
}



 const QUser = gql`
	query user ($idUser: String!) {
		user(idUser: $idUser) {
			_id
			lastname
			firstname
			email
			role
			hospitalCenter {
				_id
			}
		}
	}
`

 interface UserArgs {
	idUser:	string;
}
 interface UserData {
	user: IUser;
}

 const QTokenForgetPasswordIsAvailable = gql`
	query passwordIsResetable($token: String!) {
		passwordIsResetable(token: $token)
  	}
`

 interface TokenForgetPasswordIsAvailableArgs {
	token:	string;
}
 interface TokenForgetPasswordIsAvailableData {
	passwordIsResetable: boolean;
}

 const MResetPassword = gql`
	mutation resetPassword($token: String!, $password: String!) {
		resetPassword(password: $password, token: $token)
	}
`
 interface ResetPasswordArgs {
	token:	string;
	password:	string;
}
 interface ResetPasswordData {
	resetPassword: boolean;
}

 const MForgottenPassword = gql`
	mutation forgottenPassword($email: String!){
		forgottenPasword(email: $email)
	}
`

 interface ForgottenPasswordArgs {
	email: String;
}
 interface ForgottenPasswordData {
	forgottenPassword: boolean
}



 interface SendConfirmationMailArgs {
	idUser: number;
}

export class UserRequests {

	/**
	 * Request mutation addToNewsletter
	 * @param mail User mail
	 */
	public static async addToNewsletter(mail: string): Promise<string> {
		return (await Client.mutate<{
			addToNewsletter: string
		}, {
			mail: string
		}>({
			mutation: gql`
			mutation addToNewsletter($mail: String!) {
				addToNewsletter(mail: $mail)
			}
			`,
			variables: {
				mail
			},
		})).data!.addToNewsletter
	}

	public static async createUser(createUser: IUserCreate): Promise<IUser> {
		return (await Client.mutate<MCreateUserData, MCreateUserArgs>({
			mutation: MCreateUser,
			variables: {
				createUser
			},
		})).data!.createUser
	}

	public static async deleteUser(idUser: string): Promise<boolean> {
		return (await Client.mutate<MDeleteUserData, MDeleteUserArgs>({
			mutation: MDeleteUser,
			variables: {
				idUser
			},
		})).data!.deleteUser
	}

	public static async login(authentication: IAuth): Promise<IUser> {
		return (await Client.mutate<MLoginData, MLoginArgs>({
			mutation: MLogin,
			variables: {
				authentication
			},
		})).data!.login
	}

	public static async logout(): Promise<boolean> {
		const l = (await Client.mutate<MLogoutData>({
			mutation: MLogout,
		})).data!.logout
		await Client.resetStore()
		return l
	}

	public static async forgottenPassword(mail: string): Promise<boolean> {
		return (await Client.mutate<ForgottenPasswordData, ForgottenPasswordArgs>({
			mutation: MForgottenPassword,
			variables: {
				email: mail
			},
		})).data!.forgottenPassword
	}

	public static async resetPassword(token: string, password: string): Promise<boolean> {
		return (await Client.mutate<ResetPasswordData, ResetPasswordArgs>({
			mutation: MResetPassword,
			variables: {
				token,
				password
			},
		})).data!.resetPassword
	}

	/**
	 * Ask server to send confirmation mail
	 * @param input Variable
	 */
	public static async sendConfirmationMail(input: SendConfirmationMailArgs) {
		return await Client.mutate<any, SendConfirmationMailArgs>({
			mutation: gql`
				mutation askSendConfirmationMail($idUser: Float!){
					askSendConfirmationMail(idUser: $idUser)
				}
			`,
			variables: input,
		})
	}

	/**
	 * Get my basic information
	 */
	public static async meBasic(fetchPolicy?: FetchPolicy): Promise<IUser> {
		return (await Client.query<MeData>({
			query: QBasicMe,
			fetchPolicy
		})).data.me
	}

	/**
	 * Get all users
	 */
	public static async users(fetchPolicy?: FetchPolicy): Promise<Array<IUser>> {
		return (await Client.query<UsersData>({
			query: QUsers,
			fetchPolicy
		})).data.users
	}

	public static async user(idUser: string, fetchPolicy?: FetchPolicy): Promise<IUser> {
		return (await Client.query<UserData, UserArgs>({
			query: QUser,
			variables: {
				idUser
			},
			fetchPolicy
		})).data.user
	}

	public static async updateUser(updateUser: IUserUpdate): Promise<IUser> {
		return (await Client.mutate<MUpdateUserData, MUpdateUserArgs>({
			mutation: MUpdateUser,
			variables: {
				updateUser
			},
		})).data!.updateUser
	}

}