import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import MeuHeader from "../../components/MeuHeader";

const Page2: React.FC = () => {
  const [titulo, setTitulo] = useState(".....");
  const [tempo, setTempo] = useState(0);

  const [erro, setErro] = useState(false);

  // Executa uma açao em um determinado intervalo de tempo
  // de forma continua
  /*setInterval(() => {
    setTempo(tempo + 1);
  }, 1 * 1000);*/

  useEffect(() => {
    console.log("Rodou o effect");
    
    if (tempo > 20) {
        setTitulo("Maior que 20");
        setErro(true);
    } else {
        setTitulo("Menor que 20");
    }
  }, [tempo, titulo]);

  useEffect(() => {
    // load da pagina
    // busca em uma api a lista de cientes
    // e popula meu array local
  }, []);

  return (
    <>
      <MeuHeader titulo={titulo} />

      <input type="text" value={tempo}
        onChange={(e) => setTempo(Number(e.target.value))} />

        <Button onClick={() => setTempo(tempo + 1)}>Altera estado</Button>

    </>
  );
};

export default Page2;
