import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    loginUtilisateur!:string;
    passwordUtilisateur!:string;
    roles!:Role[];
}
