import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class StatusRepository {
    constructor(){

    }
    
async cepSearch(cep: string){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`,)
    .then((response) =>  {
        const {data={}} = response;
        return data;
    }).catch((error) => {
        throw error
    });     
    };

};
