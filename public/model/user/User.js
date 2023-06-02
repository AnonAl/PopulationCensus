export class User {
    constructor (name, email, password, repPassword) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._repPassword = repPassword;
    }

    get getRepPassword () {
        return this._repPassword;
    }

    get getPassword () {
        return this._password;
    }

    get getEmail () {
        return this._email;
    }

    get getName () {
        return this._name;
    }
}
