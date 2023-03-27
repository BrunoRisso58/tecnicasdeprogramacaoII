package domain;

import java.util.Map;

public class Tesoura extends Algoritmo{

    @Override
    public Map<String, String> executar(Tipo pTipo) {
        switch (pTipo) {
            case PAPEL -> valor = "Ganhou! Tesoura corta o papel!";
            case TESOURA -> valor = "Empate. Tesoura empata com tesoura!";
            case PEDRA -> valor = "Perdeu! Pedra esmaga a tesoura!";
            case LAGARTO -> valor = "Ganhou! Tesoura decapita o lagarto!";
            case SPOCK -> valor = "Perdeu! Spock quebra a tesoura!";
            default -> valor = "Empatou! Opção inválida!";
        }

        resultado.put(KEY, valor);
        return resultado;
    }

}