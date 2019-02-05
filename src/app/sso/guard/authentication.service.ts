import { User } from 'src/app/models/user';

export class AuthenticationService {

    public currentUser: User

    login(login: string, mdp: string): boolean {

        let user = new User()
        user.load()

        if ( user.username.toLowerCase() != login.toLowerCase() || user.password != mdp ) {
            return false
        }
        
        this.currentUser = user
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        return true
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null
    }

}