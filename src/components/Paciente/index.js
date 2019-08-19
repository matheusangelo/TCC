import { URL_PACIENTES } from '../../include/base';

export default async function requisicaoPacientes(method, id) {

    let url = URL_PACIENTES;

    if (id) {
        url = url + "/" + id;
    }

    try {
        let busca = await fetch(url, { method: method, mode: 'cors' });
        let retorno = await busca.json();

        if (method == "GET") {
            return retorno[0];
        }

    } catch (e) {
        console.log(e)
    }
}