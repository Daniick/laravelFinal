function useFetch() {
  const handleSubmitPost = async (e) => {
    e.preventDefault();

    const formulario = e.target;
    const url = formulario.getAttribute("action");

    const formData = {};
    for (const input of formulario) {
      const element = input.tagName.toLowerCase();

      if (element === "input") {
        const name = input.name;
        const value = input.value;
        formData[name] = value;
      }
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const dataJson = await res.json();

    console.log(res);
    console.log(dataJson);

    if (res.ok) {
      // alert(dataJson.message);
      return dataJson;
    }

    if (res.status === 400) {
      alert(dataJson?.message ?? "Credenciales inválidas");
    } else if (res.status === 500) {
      alert(dataJson?.message ?? "Error interno.");
    }

    return null;
  };

  return { handleSubmitPost };
}

export default useFetch;
