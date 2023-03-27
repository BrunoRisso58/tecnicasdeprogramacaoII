package domain;

import java.util.Map;

public class Spock extends Algoritmo{

    @Override
    public Map<String, String> executar(Tipo pTipo) {
        switch (pTipo) {
            case PAPEL -> valor = "Perdeu! Papel refuta o Spock!";
            case TESOURA -> valor = "Ganhou! Spock quebra a tesoura!";
            case PEDRA -> valor = "Ganhou! Spock vaporiza a pedra!";
            case LAGARTO -> valor = "Perdeu. Lagarto envenena o Spock!";
            case SPOCK -> valor = "Empate. Spock empata com Spock!";
            default -> valor = "Empatou! Opção inválida!";
        }

        resultado.put(KEY, valor);
        return resultado;
    }

}