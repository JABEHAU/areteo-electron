

export default function CrearPlantilla() {
    return (
        <div>
            <h1>Crear plantilla</h1>
            <GenerateAndSaveTPLDesktop />
            <GenerateAndDownloadTPLBrowser />
        </div>

    )
}


function GenerateAndSaveTPLDesktop() {
    const generateFile = async () => {
    }

    return (
        <button onClick={generateFile}>
            Generar y guardar archivo .tpl desktop
        </button>
    );
}




function GenerateAndDownloadTPLBrowser() {
    const generateFile = () => {
        const data = {
            // Aquí coloca la estructura JSON que deseas guardar
            nombre: "Instrumento 1",
            descripcion: "Descripción del instrumento",
            preguntas: [
                { pregunta: "¿Pregunta 1?", respuesta: "Sí" },
                { pregunta: "¿Pregunta 2?", respuesta: "No" },
            ]
        };

        // Convertir el JSON a un string
        const jsonString = JSON.stringify(data, null, 2);

        // Crear un blob con el contenido del archivo
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Crear un enlace temporal para descargar el archivo
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'instrumento2.tpl';
        document.body.appendChild(link);
        link.click();

        // Limpiar el enlace temporal
        document.body.removeChild(link);
    };

    return (
        <button onClick={generateFile}>
            Generar y descargar archivo .tpl browser
        </button>
    );
}


