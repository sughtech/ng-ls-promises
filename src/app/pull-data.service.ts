import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PullDataService {
  constructor() {}

  getDataArray() {
    let promise = fetch(
      'https://5f72e49e6833480016a9c1c9.mockapi.io/mypromise/ls-api'
    );

    return promise
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        console.log(
          'Connection was not successful: ' + response.status.toString()
        );
      })
      .then((value) => {
        localStorage.sources = JSON.stringify(value);
        console.log(value);
        return value;
      });
  }

  accessData(){
    let arrayHandler = (arrayData) => {
      return Promise.resolve(arrayData);
    };

    if (localStorage.sources !== 'undefined' && !!localStorage.sources) {
      return arrayHandler(JSON.parse(localStorage.sources));
    } else {
      return this.getDataArray().then(arrayHandler);
    }
  }

  start() {
    if (localStorage.sources !== 'undefined') {
      return this.accessData();
    } else {
      return Promise.resolve('Nothing to display!');
    }
  }
}
