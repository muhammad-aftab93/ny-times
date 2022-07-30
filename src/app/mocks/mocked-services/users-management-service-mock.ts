import {User} from "../../models/user";
import {Observable, of} from "rxjs";

export class UsersManagementServiceMock {
  loginUser(user: User): Observable<any>{
    return of('sample token');
  }

  registerUser(user: User): Observable<any>{
    return of('sample token');
  }
}
