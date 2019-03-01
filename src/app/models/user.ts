export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;

    load(): void {
        this.id = 1
        this.username = 'MaxTess'
        this.password = '123456'
        this.firstName = 'Maxime'
        this.lastName = 'Tessier'
    }
}