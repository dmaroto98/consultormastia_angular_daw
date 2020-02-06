import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class UserService{
    constructor(private http: HttpClient){

    }

    fetchUsers(): Observable<Object>{
        return this.http.get('http://localhost:3000/usuarios');
    }

    fetchUsersMongo(): Observable<Object>{
        return this.http.get('http://localhost:3000/usuariosmongo');
    }

    fetchMails(): Observable<Object>{
        return this.http.get('http://localhost:3000/mailsmongo');
    }

    fetchAct(): Observable<Object>{
        return this.http.get('http://localhost:3000/actividades');
    }
}
