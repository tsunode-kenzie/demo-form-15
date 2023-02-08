import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [cover, setCover] = useState("");

  console.log('Teste')

  return (
    <main>
      <form>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <input type="text" onChange={(event) => setCover(event.target.value)} />
      </form>
    </main>
  );
};

export default Register;
