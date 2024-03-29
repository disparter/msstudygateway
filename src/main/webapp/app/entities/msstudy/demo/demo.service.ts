import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDemo } from 'app/shared/model/msstudy/demo.model';

type EntityResponseType = HttpResponse<IDemo>;
type EntityArrayResponseType = HttpResponse<IDemo[]>;

@Injectable({ providedIn: 'root' })
export class DemoService {
  public resourceUrl = SERVER_API_URL + 'services/msstudy/api/demos';

  constructor(protected http: HttpClient) {}

  create(demo: IDemo): Observable<EntityResponseType> {
    return this.http.post<IDemo>(this.resourceUrl, demo, { observe: 'response' });
  }

  update(demo: IDemo): Observable<EntityResponseType> {
    return this.http.put<IDemo>(this.resourceUrl, demo, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDemo>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDemo[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
