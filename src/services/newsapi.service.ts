// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from '../models/newsapi-global.model';

@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private source: string = 'gruenderszene';
    private apiKey: string = '218fc8f64cdd4efd8dfa00eee873d528';
    
    constructor(private http: Http) {

	}

    public getArticles(): Promise<any> {
		const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}