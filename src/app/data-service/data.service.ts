import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { merge, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) { }

  addData(I: number, X: number, Y: number, eventName: string) {


      // I: {name: 'Piotr', width: 20, height: 30}
      // II: {name: 'Maciej', width: 30, height: 30}
      // III: {name: 'Mikołaj', width: 20, height: 30}
      // IV: {name: 'Kacper', width: 40, height: 40}
      // V: {name: 'Jan', width: 50, height: 20}

      this.db.collection("data2").doc(I.toString()).set({localisationId: I, X: X, Y: Y, eventName: eventName})
  }

  fetchData(indexObject) {
    //let dataRefWidth = this.db.collection("data", ref => ref.where('width', '>', 5).where('width', '<', 20));
    //let dataRefHeight = this.db.collection("data", ref => ref.where('height', '>', 5).where('height', '<', 10));
    console.log(indexObject);

    let dataRefSrodek = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_srodek));
    let dataRefPrawy = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_prawy));
    let dataRefLewy = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_lewy));
    let dataRefGorny = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_gorny));
    let dataRefDolny = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_dolny));
    let dataRefPrawyGorny = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_prawy_gorny));
    let dataRefPrawyDolny = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_prawy_dolny));
    let dataRefLewyGorny = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_lewy_gorny));
    let dataRefLewyDolny = this.db.collection("data2", ref => ref.where('localisationId', '==', indexObject.I_lewy_dolny));


    return merge(dataRefSrodek.valueChanges(),
                dataRefPrawy.valueChanges(),
                dataRefLewy.valueChanges(),
                dataRefGorny.valueChanges(),
                dataRefDolny.valueChanges(),
                dataRefPrawyGorny.valueChanges(),
                dataRefPrawyDolny.valueChanges(),
                dataRefLewyGorny.valueChanges(),
                dataRefLewyDolny.valueChanges())
    // return of();
  }
}
