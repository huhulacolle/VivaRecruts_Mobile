import * as SQLite from "expo-sqlite";
import { ResultSet, SQLResultSet, WebSQLDatabase } from "expo-sqlite";

export var db = SQLite.openDatabase('test.db');

export function createTableInfoUser(): any {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS infoUser (id INTEGER PRIMARY KEY AUTOINCREMENT , mail TEXT,nom TEXT, prenom TEXT,phoneNumber INTEGER)', [],
                (transaction, result) => {
                    resolve(result);
                }), (transaction: any, error: any) => {
                reject(error)
            }
        }, (error) => {
            reject(error)
        })
    })
}

export async function getInfoUsers(): Promise<SQLResultSet> {
    return new Promise((resolve, reject) => {
        db.transaction((txn) => {
            txn.executeSql('SELECT mail, nom, prenom, phoneNumber from infoUser', [], (transaction, result) => {
                resolve(result)
            }), (transaction: any, error: any) => {
                reject(error)
            }
        })
    })
}

export function getInfoUsersByMail(mail: string) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT mail,nom, prenom, phoneNumber from infoUser where mail = ?1', [mail], (transaction, resultSet) => {
                resolve(resultSet);
            }), (transaction: any, error: any) => {
                reject(error);
            }
        })
    })
}

export function insertInfoUser(infosUser: { mail: string, nom: string, prenom: string, phoneNumber: number }) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO infoUser(mail, nom, prenom, phoneNumber) VALUES (?1,?2,?3,?4)', [infosUser.mail, infosUser.nom, infosUser.prenom, infosUser.phoneNumber],
                (transaction, resultSet) => {
                    resolve(resultSet);
                }), (transaction: any, error: any) => {
                reject(error);
            }
        })
    })
}

export function createTableInfo() {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS info(id INTEGER PRIMARY KEY AUTOINCREMENT,phoneNumber INTEGER, diploma TEXT)', [], (transaction, resultSet) => {
                resolve(resultSet);
            }), (transaction: any, error: any) => {
                reject(error);
            }
        })
    })
}


export function getUser(): any {
    return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT phoneNumber,diploma from user ', [], (transaction, resultSet) => {
            resolve(resultSet);
        }), (transaction:any, error:any) => {
            reject(error);
        }
    })
    })
}

export function insertInfo(info: { phoneNumber: number, diploma: string }) {
    return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql('INSERT INTO info(phoneNumber,diploma) VALUES(?1,?2)', [info.phoneNumber, info.diploma], (transaction, resultSet) => {
            resolve(resultSet);
        }), (transaction:any, error:any) => {
            reject(error);
        }
    })
    })
}