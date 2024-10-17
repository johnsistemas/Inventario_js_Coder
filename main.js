const app = document.getElementById('app');

const data = {
    sede: "",
    dependencia: "",
    equipo: {
        serial: "",
        inventario: "",
        marca: "",
        modelo: "",
        procesador: "",
        modeloProcesador: "",
        generacion: "",
        memoriaRam: "",
        tipoRam: "",
        capacidadRam: "",
        board: "",
        pulgadas: "",
        discoDuro: "",
        tipoDisco: "",
        capacidadDisco: "",
        sistemaOperativo: "",
        versionSO: "",
        claveSO: "",
        ofimatica: "",
        versionOfimatica: "",
        claveOfimatica: "",
        comentarios: ""
    }
};

const renderCard1 = () => {
    app.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">AT INVENTARIOS</h5>
                <div class="form-group">
                    <label for="sede">Sede</label>
                    <select class="form-control" id="sede" onchange="data.sede = this.value;">
                        <option value="">Seleccione..</option>
                        <option value="COLEGIO CAMPESTRE NORTE">Colegio Campestre Norte</option>
                        <option value="COLEGIO CAMPESTRE UBATE">Colegio Campestre Ubaté</option>
                        <option value="COLEGIO CAMPESTRE ZIPAQUIRA">Colegio Campestre Zipaquira</option>
                        <option value="COLEGIO CAMPESTRE SOGAMOSO">Colegio Campestre Sogamoso</option>
                        <option value="JV REMODELACIONES">JV Remodelaciones</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="dependencia">Dependencia</label>
                    <select class="form-control" id="dependencia" onchange="data.dependencia = this.value;">
                        <option value="">Seleccione...</option>
                        <option value="Rectoria">Rectoria</option>
                        <option value="Secretaria">Secretaria</option>
                        <option value="Economato">Economato</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="renderCard2()">Ingresar inventario</button>
            </div>
        </div>
    `;
};
const nextCard1 = () => {
    const sede = document.getElementById("sede").value;
    const dependencia = document.getElementById("dependencia").value;

    let hasError = false;

    if (!sede) {
        document.getElementById("sede-error").style.display = "block";
        hasError = true;
    } else {
        document.getElementById("sede-error").style.display = "none";
    }

    if (!dependencia) {
        document.getElementById("dependencia-error").style.display = "block";
        hasError = true;
    } else {
        document.getElementById("dependencia-error").style.display = "none";
    }

    if (!hasError) {
        renderCard2(); // Si no hay errores, ir a la siguiente tarjeta
    }
};

const renderCard2 = () => {
    app.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Inventario - ${data.sede} / ${data.dependencia}</h5>
                <div class="row mb-3">
                    <div class="col">
                        <label for="serial">Serial de equipo</label>
                        <input type="text" class="form-control" id="serial" onchange="data.equipo.serial = this.value">
                    </div>
                    <div class="col">
                        <label for="inventario">Inventario de equipo</label>
                        <input type="text" class="form-control" id="inventario" onchange="data.equipo.inventario = this.value">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <div class="col">
                        <label for="marca">Marca</label>
                        <select class="form-control" id="marca" onchange="data.equipo.marca = this.value; renderModelOptions();">
                            <option value="">Seleccione...</option>
                            <option value="hp">HP</option>
                            <option value="lenovo">Lenovo</option>
                            <option value="asus">Asus</option>
                            <option value="acer">Acer</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="modelo">Modelo</label>
                        <select class="form-control" id="modelo" onchange="data.equipo.modelo = this.value;">
                            <option value="">Seleccione...</option>
                        </select>
                    </div>
                </div>
                
                <div class="row mb-3">
                    <div class="col">
                        <label for="procesador">Procesador</label>
                        <select class="form-control" id="procesador" onchange="data.equipo.procesador = this.value; renderProcessorModelOptions();">
                            <option value="">Seleccione...</option>
                            <option value="intel">Intel</option>
                            <option value="amd">AMD</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="modeloProcesador">Modelo del Procesador</label>
                        <select class="form-control" id="modeloProcesador" onchange="data.equipo.modeloProcesador = this.value;">
                            <option value="">Seleccione...</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="generacion">Generación del Procesador</label>
                        <select class="form-control" id="generacion" onchange="data.equipo.generacion = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="2th">2th</option>
                            <option value="3th">3th</option>
                            <option value="4th">4th</option>
                            <option value="5th">5th</option>
                            <option value="6th">6th</option>
                            <option value="7th">7th</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col">
                        <label for="memoriaRam">Memoria RAM</label>
                        <select class="form-control" id="memoriaRam" onchange="data.equipo.memoriaRam = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="crucial">Crucial</option>
                            <option value="kingston">Kingston</option>
                            <option value="corsair">Corsair</option>
                            <option value="generica">Genérica</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="tipoRam">Tipo de RAM</label>
                        <select class="form-control" id="tipoRam" onchange="data.equipo.tipoRam = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="ddr3">DDR3</option>
                            <option value="ddr4">DDR4</option>
                            <option value="ddr5">DDR5</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="capacidadRam">Capacidad RAM</label>
                        <select class="form-control" id="capacidadRam" onchange="data.equipo.capacidadRam = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="2gb">2 GB</option>
                            <option value="4gb">4 GB</option>
                            <option value="6gb">6 GB</option>
                            <option value="8gb">8 GB</option>
                            <option value="16gb">16 GB</option>
                            <option value="32gb">32 GB</option>
                            <option value="64gb">64 GB</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col">
                        <label for="discoDuro">Disco Duro</label>
                        <select class="form-control" id="discoDuro" onchange="data.equipo.discoDuro = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="segate">Segate</option>
                            <option value="toshiba">Toshiba</option>
                            <option value="wester digital">Wester Digital</option>
                            <option value="samsung">Samsung</option>
                            <option value="crucial">Crucial</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="tipoDisco">Tipo de Disco</label>
                        <select class="form-control" id="tipoDisco" onchange="data.equipo.tipoDisco = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="hdd">HDD</option>
                            <option value="ssd">SDD</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="capacidadDisco">Capacidad</label>
                        <select class="form-control" id="capacidadDisco" onchange="data.equipo.capacidadDisco = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="128gb">128 GB</option>
                            <option value="256gb">256 GB</option>
                            <option value="512gb">512 GB</option>
                            <option value="1tb">1 TB</option>
                            <option value="2tb">2 TB</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col">
                        <label for="board">Board</label>
                        <select class="form-control" id="board" onchange="data.equipo.board = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="gigabyte">Gigabyte</option>
                            <option value="hp">HP</option>
                            <option value="asrock">AsRock</option>
                            <option value="asus">Asus</option>
                            <option value="msi">MSI</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="pulgadas">Pulgadas</label>
                        <select class="form-control" id="pulgadas" onchange="data.equipo.pulgadas = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="12">12 Pulgadas</option>
                            <option value="13">13 Pulgadas</option>
                            <option value="14">14 Pulgadas</option>
                            <option value="15">15 Pulgadas</option>
                            <option value="19">19 Pulgadas</option>
                            <option value="20">20 Pulgadas</option>
                            <option value="22">22 Pulgadas</option>
                            <option value="24">24 Pulgadas</option>
                            <option value="27">27 Pulgadas</option>
                        </select>
                    </div>
                </div>
                
                <button class="btn btn-primary" onclick="renderCard3()">Software</button>
                <button class="btn btn-secondary" onclick="renderCard1()">Inicio</button>
            </div>
        </div>
    `;
};

const renderModelOptions = () => {
    const modeloSelect = document.getElementById('modelo');
    const marca = document.getElementById('marca').value;
    modeloSelect.innerHTML = "";

    // Aquí podrías agregar lógica para poblar los modelos según la marca
    if (marca === "hp") {
        modeloSelect.innerHTML = `
            <option value="hp_model1">Modelo HP 1</option>
            <option value="hp_model2">Modelo HP 2</option>
        `;
    } else if (marca === "lenovo") {
        modeloSelect.innerHTML = `
            <option value="lenovo_model1">Modelo Lenovo 1</option>
            <option value="lenovo_model2">Modelo Lenovo 2</option>
        `;
    } else if (marca === "asus") {
        modeloSelect.innerHTML = `
            <option value="asus_model1">Modelo Asus 1</option>
            <option value="asus_model2">Modelo Asus 2</option>
        `;
    } else if (marca === "acer") {
        modeloSelect.innerHTML = `
            <option value="acer_model1">Modelo Acer 1</option>
            <option value="acer_model2">Modelo Acer 2</option>
        `;
    }
};

const renderProcessorModelOptions = () => {
    const modeloSelect = document.getElementById('modeloProcesador');
    const procesador = document.getElementById('procesador').value;
    modeloSelect.innerHTML = "";

    if (procesador === "intel") {
        modeloSelect.innerHTML = `
            <option value="core_i3">Core I3</option>
            <option value="core_i5">Core I5</option>
            <option value="core_i7">Core I7</option>
            <option value="core_i9">Core I9</option>
        `;
    } else if (procesador === "amd") {
        modeloSelect.innerHTML = `
            <option value="ryzen_3">Ryzen 3</option>
            <option value="ryzen_5">Ryzen 5</option>
            <option value="ryzen_7">Ryzen 7</option>
            <option value="ryzen_9">Ryzen 9</option>
        `;
    }
};

const renderCard3 = () => {
    app.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Software - ${data.sede} / ${data.dependencia}</h5>
                <div class="row mb-3">
                    <div class="col">
                        <label for="sistemaOperativo">Sistema Operativo</label>
                        <select class="form-control" id="sistemaOperativo" onchange="data.equipo.sistemaOperativo = this.value; renderVersionOptions();">
                            <option value="">Seleccione...</option>
                            <option value="windows">Windows</option>
                            <option value="macOS">macOS</option>
                            <option value="linux">Linux</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="versionSO">Versión</label>
                        <select class="form-control" id="versionSO" onchange="data.equipo.versionSO = this.value;">
                            <option value="">Seleccione...</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="claveSO">Clave</label>
                        <input type="text" class="form-control" id="claveSO" onchange="data.equipo.claveSO = this.value">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="ofimatica">Ofimática</label>
                        <select class="form-control" id="ofimatica" onchange="data.equipo.ofimatica = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="microsoft">Microsoft</option>
                            <option value="libre_office">Libre Office</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="versionOfimatica">Versión</label>
                        <select class="form-control" id="versionOfimatica" onchange="data.equipo.versionOfimatica = this.value;">
                            <option value="">Seleccione...</option>
                            <option value="office_2010">Office 2010</option>
                            <option value="office_2013">Office 2013</option>
                            <option value="office_2016">Office 2016</option>
                            <option value="office_2019">Office 2019</option>
                            <option value="office_2021">Office 2021</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="claveOfimatica">Clave</label>
                        <input type="text" class="form-control" id="claveOfimatica" onchange="data.equipo.claveOfimatica = this.value">
                    </div>
                </div>
                <button class="btn btn-primary" onclick="renderCard4()">Resumen</button>
                <button class="btn btn-secondary" onclick="renderCard2()">Atrás</button>
            </div>
        </div>
    `;
};

const renderVersionOptions = () => {
    const versionSelect = document.getElementById('versionSO');
    const sistemaOperativo = document.getElementById('sistemaOperativo').value;
    versionSelect.innerHTML = "";

    if (sistemaOperativo === "windows") {
        versionSelect.innerHTML = `
            <option value="">Seleccione...</option>
            <option value="windows_10">Windows 10</option>
            <option value="windows_11">Windows 11</option>
        `;
    } else if (sistemaOperativo === "macOS") {
        versionSelect.innerHTML = `
            <option value="">Seleccione...</option>
            <option value="sequoia">Sequoia</option>
            <option value="catalina">Catalina</option>
            <option value="mojave">Mojave</option>
            <option value="sierra">Sierra</option>
            <option value="lion">Lion</option>
        `;
    } else if (sistemaOperativo === "linux") {
        versionSelect.innerHTML = `
            <option value="">Seleccione...</option>
            <option value="fedora">Fedora</option>
            <option value="ubuntu">Ubuntu</option>
        `;
    } else {
        versionSelect.innerHTML = `<option value="">Seleccione...</option>`;
    }
};

const renderCard4 = () => {
    app.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Hoja de vida - ${data.sede} / ${data.dependencia}</h5>
                <div class="mb-3">
                    <label>Comentarios</label>
                    <textarea class="form-control" onchange="data.equipo.comentarios = this.value"></textarea>
                </div>
                <div>
                    <h6>Datos del Equipo</h6>
                    ${Object.entries(data.equipo).map(([key, value]) => `
                        <p><strong>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> ${value}</p>
                        <hr>
                    `).join('')}
                </div>
                <button class="btn btn-primary" onclick="generatePDF()">Generar PDF</button>
                <button class="btn btn-secondary" onclick="renderCard1()">Inicio</button>
                <button class="btn btn-secondary" onclick="renderCard2()">Modificar</button>
                <button class="btn btn-danger" onclick="deleteData()">Eliminar</button>
            </div>
        </div>
    `;
};


const generatePDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(13);

    let y = 10; // posición inicial en Y
    doc.text(`Hoja de vida - ${data.sede} / ${data.dependencia}`, 10, y);
    y += 10;
    //datos que van en el resumen
    const fields = [
        { label: "Serial", value: data.equipo.serial },
        { label: "Inventario", value: data.equipo.inventario },
        { label: "Marca", value: data.equipo.marca },
        { label: "Modelo", value: data.equipo.modelo },
        { label: "Procesador", value: data.equipo.procesador },
        { label: "Modelo Procesador", value: data.equipo.modeloProcesador },
        { label: "Generación", value: data.equipo.generacion },
        { label: "Memoria RAM", value: data.equipo.memoriaRam },
        { label: "Tipo RAM", value: data.equipo.tipoRam },
        { label: "Capacidad RAM", value: data.equipo.capacidadRam },
        { label: "Board", value: data.equipo.board },
        { label: "Pulgadas", value: data.equipo.pulgadas },
        { label: "Disco Duro", value: data.equipo.discoDuro },
        { label: "Tipo Disco", value: data.equipo.tipoDisco },
        { label: "Capacidad Disco", value: data.equipo.capacidadDisco },
        { label: "Sistema Operativo", value: data.equipo.sistemaOperativo },
        { label: "Versión SO", value: data.equipo.versionSO },
        { label: "Clave SO", value: data.equipo.claveSO },
        { label: "Ofimática", value: data.equipo.ofimatica },
        { label: "Versión Ofimática", value: data.equipo.versionOfimatica },
        { label: "Clave Ofimática", value: data.equipo.claveOfimatica },
        { label: "Comentarios", value: data.equipo.comentarios }
    ];

    fields.forEach(field => {
        doc.text(`${field.label}: ${field.value}`, 10, y);
        y += 8; // espacio entre líneas
        doc.line(10, y, 200, y); // línea delimitadora
        y += 4; // espacio después de la línea
    });

    doc.save('resumen.pdf');
};


const deleteData = () => {
    // Reiniciar los datos
    data.equipo = {
        serial: "",
        inventario: "",
        marca: "",
        modelo: "",
        procesador: "",
        modeloProcesador: "",
        generacion: "",
        memoriaRam: "",
        tipoRam: "",
        capacidadRam: "",
        board: "",
        pulgadas: "",
        discoDuro: "",
        tipoDisco: "",
        capacidadDisco: "",
        sistemaOperativo: "",
        versionSO: "",
        claveSO: "",
        ofimatica: "",
        versionOfimatica: "",
        claveOfimatica: "",
        comentarios: ""
    };
    alert("Datos eliminados.");
    renderCard1();
};

// Inicializar la app
renderCard1();