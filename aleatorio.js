const nomes = ["Ivy", "Rafaela", "Claudia", "Vitinho", "Kiko", "Poento", "Jamaica"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)