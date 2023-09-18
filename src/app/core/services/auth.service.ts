import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs'; 
import { environment } from '../../../environments/environment';
import { User } from '../models/models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable({ providedIn: 'root' }) 
export class AuthService { 
    
    url_api:String = environment.API_URL;
    user!: User; 
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
        this.currentUser = this.currentUserSubject.asObservable();
     }
     
    /**
     * current user
     */
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, first_name: string, password: string) {        
        // return getFirebaseBackend()!.registerUser(email, password).then((response: any) => {
        //     const user = response;
        //     return user;
        // });

        // Register Api
        return this.http.post(this.url_api + 'signup', {
            email,
            first_name,
            password,
          }, httpOptions);
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    // login(usuario: string, password: string) {  
    login(body: any):Observable<Object>
    {  
        // return this.http.post(this.url_api + 'auth/sign-in', {
        //     usuario,
        //     password
        //   }, httpOptions);
        this.currentUserSubject.next(body);
        return this.currentUser;
    }

    veryfycarToken() {  
        return this.http.post(this.url_api + 'auth/sign-in-with-token', {});
    }
 
    /**
     * Logout the user
     */
    logout() {
        // logout the user 
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null!);
        return this.currentUser;
    }
 

}

