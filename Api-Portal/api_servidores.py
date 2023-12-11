import requests

def obter_servidores(tipo, ano, mes, limit=2, offset=0):
    requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)

    if tipo == 'ativos':
        url = "http://transparencia.al.gov.br/pessoal/json-servidores/"
    elif tipo == 'inativos':
        url = "http://transparencia.al.gov.br/pessoal/json-servidores-inativos/"
    else:
        raise ValueError("Tipo de servidor inválido. Use 'ativos' ou 'inativos'.")

    params = {
        "ano": ano,
        "mes": mes,
        "limit": limit,
        "offset": offset
    }

    headers = {
        "X-Requested-With": "XMLHttpRequest"
    }

    try:
        response = requests.get(url, params=params, headers=headers, verify=False)

        requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)

        if response.status_code == 200:
            data = response.json()

            total_servidores = data.get("total", 0)
            titulo = data.get("titulo", "")
            detalhe_total = data.get("detalhe", {}).get("total__sum", "")
            rows = data.get("rows", [])

            servidores = []

            for servidor in rows:
                cpf = servidor.get("cpf", "")
                nome = servidor.get("nome", "")
                orgao = servidor.get("codigo_orgao", "")
                salario = servidor.get("total", "")

                servidores.append({
                    "cpf": cpf,
                    "nome": nome,
                    "orgao": orgao,
                    "salario": salario
                })

                print(f"CPF: {cpf}, Nome: {nome}, Órgão: {orgao}, Salário: {salario}")

            return servidores

        else:
            print(f"A requisição falhou com o código {response.status_code}")
            print(response.text)

    except Exception as e:
        print(f"Erro durante a requisição: {e}")


ativos = obter_servidores('ativos', 2015, 9, limit=2, offset=0)
inativos = obter_servidores('inativos', 2015, 9, limit=2, offset=0)


