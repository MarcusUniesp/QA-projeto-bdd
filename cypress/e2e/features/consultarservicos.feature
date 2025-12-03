#language: pt

Funcionalidade: Buscar serviços no Portal Gov.br

    Eu, como cidadão brasileiro,
    Quero usar a busca para encontrar serviços rapidamente.

    Contexto: Estar na página inicial do Portal Gov.br
        Dado que estou na página inicial do Portal Gov.br em "/pt-br"

    Cenário: Buscar por "id jovem"
        Quando digito "id jovem" no campo de busca
        E pressiono Enter
        Então devo ser redirecionado para a página de resultados da busca
        E clico na aba "Sites"

    Cenário: Buscar por "enem"
        Quando digito "enem" no campo de busca
        E pressiono Enter
        Então devo ser redirecionado para a página de resultados da busca
        E clico na aba "Sites"

    Esquema do Cenário: Buscar por termos comuns e acessar a aba "Sites"
        Quando digito "<termo>" no campo de busca
        E pressiono Enter
        Então devo ser redirecionado para a página de resultados da busca
        E clico na aba "Sites"

        Exemplos:
            | termo       |
            | id jovem    |
            | enem        |
            | cpf         |
            | celular     |
            | contrata    |