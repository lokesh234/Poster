const data = d3.csv('Data.csv');
const Research = d3.csv('ResearchLabels.csv');


var Fwrap = document.createElement("div");
Fwrap.setAttribute("class", "divsvg");
var Fsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgNS = Fsvg.namespaceURI;

function CreateSvg() {
    document.body.appendChild(Fwrap);
    Fwrap.appendChild(Fsvg);
    Fsvg.setAttribute("height", "100%");
    Fsvg.setAttribute("width", "100%");
}

function ResearchBoxes() {
    var Rect1 = document.createElementNS(svgNS,"rect");
    var Rect2 = document.createElementNS(svgNS,"rect");
    var Rect3 = document.createElementNS(svgNS,"rect");
    Rect1.setAttribute("width", "18150");
    Rect1.setAttribute("height", "3425");
    Rect1.setAttribute("fill", "none");
    Rect1.setAttribute("rx", "325");
    Rect1.setAttribute("stroke-width", "50");
    Rect1.setAttribute("stroke", "#ba4e59");
    Rect1.setAttribute("x", "150");
    Rect1.setAttribute("y", "50");
    Rect2.setAttribute("width", "18150");
    Rect2.setAttribute("height", "3000");
    Rect2.setAttribute("fill", "none");
    Rect2.setAttribute("rx", "325");
    Rect2.setAttribute("stroke-width", "50");
    Rect2.setAttribute("stroke", "#332aac");
    Rect2.setAttribute("x", "150");
    Rect2.setAttribute("y", "3525");
    Rect3.setAttribute("width", "18150");
    Rect3.setAttribute("height", "7200");
    Rect3.setAttribute("fill", "none");
    Rect3.setAttribute("rx", "325");
    Rect3.setAttribute("stroke-width", "50");
    Rect3.setAttribute("stroke", "#acac2a");
    Rect3.setAttribute("x", "150");
    Rect3.setAttribute("y", "6575");
    var Line1 = document.createElementNS(svgNS, "line");
    Line1.setAttribute("x1", "18035");
    Line1.setAttribute("transform", "translate(265 6550)");
    Line1.setAttribute("fill", "none");
    Line1.setAttribute("stroke-width", "5");
    Line1.setAttribute("stroke", "#000");
    Fsvg.appendChild(Line1);
    var Line2 = document.createElementNS(svgNS, "line");
    Line2.setAttribute("x1", "18035");
    Line2.setAttribute("transform", "translate(265 6500)");
    Line2.setAttribute("fill", "none");
    Line2.setAttribute("stroke-width", "5");
    Line2.setAttribute("stroke", "#000");
    Fsvg.appendChild(Line2);
    Fsvg.appendChild(Rect1);
    Fsvg.appendChild(Rect2);
    Fsvg.appendChild(Rect3);
}

CreateSvg();
ResearchBoxes();

function CreateLinesYellowY() {
    for (i = 0; i < 13; i++) {
        var Line = document.createElementNS(svgNS, "line");
        Line.setAttribute("x1", "18035");
        Line.setAttribute("transform", "translate(265 " + (13800 - (i*600)) + ")");
        Line.setAttribute("fill", "none");
        Line.setAttribute("stroke-width", "5");
        Line.setAttribute("stroke", "#000");
        Fsvg.appendChild(Line);
    }
}

function CreateLinesBlueY() {
    for (i = 0; i < 6; i++) {
        var LineB = document.createElementNS(svgNS, "line");
        LineB.setAttribute("x1", "18035");
        LineB.setAttribute("transform", "translate(265 " + (6525 - (i*600)) + ")");
        LineB.setAttribute("fill", "none");
        LineB.setAttribute("stroke-width", "5");
        LineB.setAttribute("stroke", "#000");
        Fsvg.appendChild(LineB);
    }
}

function CreateLinesRedY() {
    for (i = 0; i < 7; i++) {
        var LineR = document.createElementNS(svgNS, "line");
        LineR.setAttribute("x1", "18035");
        LineR.setAttribute("transform", "translate(265 " + (3525 - (i*600)) + ")");
        LineR.setAttribute("fill", "none");
        LineR.setAttribute("stroke-width", "5");
        LineR.setAttribute("stroke", "#000");
        Fsvg.appendChild(LineR);
    }
}


Research.then(function (result) {
    for (i = 0; i < result.length; i++){
        var Text = document.createElementNS(svgNS,"text");
        var TextNode = document.createTextNode(result[i].SUBLABEL);
        Text.appendChild(TextNode);
        Text.setAttribute("font-size", "55px");
        Text.setAttribute("x", "1550");
        Text.setAttribute("y", ((275 + i*600).toString()));
        Fsvg.appendChild(Text)
    }
});

data.then(function (data) {
    for (i = 0; i < data.length; i++){
        CreateFacultyBoxes(data[i].NAME, data[i].DEPT, "imgs/FacultyImages/" + data[i].IMAGE, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem", data[i].X, data[i].Y);
        console.log(data[i].X);
    }
});

function CreateLinesX() {
    for (i = 0; i < 12; i++) {
        var LineX = document.createElementNS(svgNS, "line");
        LineX.setAttribute("y2", "14400");
        LineX.setAttribute("transform", "translate(" + (2700 + (i*1300)) + ")" );
        LineX.setAttribute("fill", "none");
        LineX.setAttribute("stroke-width", "5");
        LineX.setAttribute("stroke", "#000");
        Fsvg.appendChild(LineX);
    }
}

CreateLinesX();
CreateLinesBlueY();
CreateLinesYellowY();
CreateLinesRedY();

function CreateFacultyBoxes(Name, Department, Img, Line1, Line2, x, y) {
    var Frect = document.createElementNS(svgNS,"rect");
    var FImg = document.createElementNS(svgNS,"image");
    var FNameF = document.createElementNS(svgNS,"text");
    var FDepartment = document.createElementNS(svgNS,"text");
    var FLine1 = document.createElementNS(svgNS,"text");
    var FLine2 = document.createElementNS(svgNS,"text");
    var FirstNametxt = document.createTextNode(Name);
    var Departmenttxt = document.createTextNode(Department);
    var line1txt = document.createTextNode(Line1);
    var line2txt = document.createTextNode(Line2);
    Frect.setAttribute("height", "150");
    Frect.setAttribute("width", "500");
    Frect.setAttribute("fill", "#ffffff");
    Frect.setAttribute("stroke-width", "2");
    Frect.setAttribute("stroke", "#AC2A37");
    Frect.setAttribute("x", x);
    Frect.setAttribute("y", y);
    Frect.setAttribute("rx", 15);
    FNameF.setAttribute("x", (parseInt(x)+150).toString());
    FNameF.setAttribute("y", (parseInt(y)+50).toString());
    FNameF.setAttribute("font-size", "24px");
    FNameF.appendChild(FirstNametxt);
    FDepartment.setAttribute("x", (parseInt(x)+150).toString());
    FDepartment.setAttribute("y", (parseInt(y)+75).toString());
    FDepartment.setAttribute("font-size", "12px");
    FDepartment.appendChild(Departmenttxt);
    FLine1.setAttribute("x", (parseInt(x)+150).toString());
    FLine1.setAttribute("y", (parseInt(y)+95).toString());
    FLine1.setAttribute("font-size", "12px");
    FLine1.appendChild(line1txt);
    FLine2.setAttribute("x", (parseInt(x)+150).toString());
    FLine2.setAttribute("y", (parseInt(y)+115).toString());
    FLine2.setAttribute("font-size", "12px");
    FLine2.appendChild(line2txt);
    FImg.setAttribute("href", Img);
    FImg.setAttribute("x", (parseInt(x)+25).toString());
    FImg.setAttribute("y", (parseInt(y)+25).toString());
    FImg.setAttribute("height", "100");
    FImg.setAttribute("width", "100");
    Fsvg.appendChild(Frect);
    Fsvg.appendChild(FNameF);
    Fsvg.appendChild(FDepartment);
    Fsvg.appendChild(FImg);
    Fsvg.appendChild(FLine1);
    Fsvg.appendChild(FLine2);
}

function CreateDeptNames() {
    const Biomedical = document.createTextNode("Biomedical");
    const Chemical = document.createTextNode("Chemical");
    const Physics = document.createTextNode("Physics");
    const SSPS = document.createTextNode("Social Science & Policy Studies");
    const CS = document.createTextNode("Computer Science");
    const FBS = document.createTextNode("Foisie Business School");
    const ME = document.createTextNode("Mechanical Engineering");
    const CEE = document.createTextNode("Civil & Environmental Engineering");
    const RBE = document.createTextNode("Robotics Engineering");
    const ECE = document.createTextNode("Electrical & Computer Engineering");
    const MA = document.createTextNode("Mathematics");
    const FPE = document.createTextNode("Fire Protection Engineering");
    const BiomedicalP = document.createElementNS(svgNS, "text");
    const ChemicalP = document.createElementNS(svgNS, "text");
    const PhysicsP = document.createElementNS(svgNS, "text");
    const SSPSP = document.createElementNS(svgNS, "text");
    const CSP = document.createElementNS(svgNS, "text");
    const FBSP = document.createElementNS(svgNS, "text");
    const MEP = document.createElementNS(svgNS, "text");
    const CEEP = document.createElementNS(svgNS, "text");
    const RBEP = document.createElementNS(svgNS, "text");
    const ECEP = document.createElementNS(svgNS, "text");
    const MAP = document.createElementNS(svgNS, "text");
    const FPEP = document.createElementNS(svgNS, "text");
    BiomedicalP.appendChild(Biomedical);
    ChemicalP.appendChild(Chemical);
    PhysicsP.appendChild(Physics);
    SSPSP.appendChild(SSPS);
    CSP.appendChild(CS);
    FBSP.appendChild(FBS);
    MEP.appendChild(ME);
    CEEP.appendChild(CEE);
    RBEP.appendChild(RBE);
    ECEP.appendChild(ECE);
    MAP.appendChild(MA);
    FPEP.appendChild(FPE);
    BiomedicalP.setAttribute("font-size", "64px");
    ChemicalP.setAttribute("font-size", "64px");
    PhysicsP.setAttribute("font-size", "64px");
    SSPSP.setAttribute("font-size", "64px");
    CSP.setAttribute("font-size", "64px");
    FBSP.setAttribute("font-size", "64px");
    MEP.setAttribute("font-size", "64px");
    CEEP.setAttribute("font-size", "64px");
    RBEP.setAttribute("font-size", "64px");
    ECEP.setAttribute("font-size", "64px");
    MAP.setAttribute("font-size", "64px");
    FPEP.setAttribute("font-size", "64px");
    BiomedicalP.setAttribute("transform", "translate(3200 14109)");
    ChemicalP.setAttribute("transform", "translate(4550 14109)");
    PhysicsP.setAttribute("transform", "translate(5850 14109)");
    SSPSP.setAttribute("transform", "translate(6850 14109)");
    CSP.setAttribute("transform", "translate(8350 14109)");
    FBSP.setAttribute("transform", "translate(9550 14109)");
    MEP.setAttribute("transform", "translate(10850 14109)");
    CEEP.setAttribute("transform", "translate(12000 14109)");
    RBEP.setAttribute("transform", "translate(13500 14109)");
    ECEP.setAttribute("transform", "translate(14650 14109)");
    MAP.setAttribute("transform", "translate(16150 14109)");
    FPEP.setAttribute("transform", "translate(17350 14109)");
    Fsvg.appendChild(BiomedicalP);
    Fsvg.appendChild(ChemicalP);
    Fsvg.appendChild(PhysicsP);
    Fsvg.appendChild(SSPSP);
    Fsvg.appendChild(CSP);
    Fsvg.appendChild(FBSP);
    Fsvg.appendChild(MEP);
    Fsvg.appendChild(CEEP);
    Fsvg.appendChild(RBEP);
    Fsvg.appendChild(ECEP);
    Fsvg.appendChild(MAP);
    Fsvg.appendChild(FPEP);
}

function CreateMainResearch() {
    const Materials = document.createTextNode("Materials &");
    const Manufacturing = document.createTextNode("Manufacturing");
    const HealthBT = document.createTextNode("Health & ");
    const Biotechnology = document.createTextNode("Biotechnology")
    const SmartWorld = document.createTextNode("Smart & ");
    const ConnectWorld = document.createTextNode("Connected World");
    const MaterialsP = document.createElementNS(svgNS, "text");
    const ManufacturingP = document.createElementNS(svgNS, "text");
    const HealthBTP = document.createElementNS(svgNS, "text");
    const SmartWorldP = document.createElementNS(svgNS, "text");
    const ConnectedWorldP = document.createElementNS(svgNS, "text");
    const BiotechnologyP  = document.createElementNS(svgNS, "text");
    BiotechnologyP.appendChild(Biotechnology);
    MaterialsP.appendChild(Materials);
    HealthBTP.appendChild(HealthBT);
    SmartWorldP.appendChild(SmartWorld);
    ManufacturingP.appendChild(Manufacturing);
    ConnectedWorldP.appendChild(ConnectWorld);
    MaterialsP.setAttribute("font-size", "168px");
    HealthBTP.setAttribute("font-size", "168px");
    SmartWorldP.setAttribute("font-size", "168px");
    ManufacturingP.setAttribute("font-size", "168px");
    ConnectedWorldP.setAttribute("font-size", "168px");
    BiotechnologyP.setAttribute("font-size", "168px");
    MaterialsP.setAttribute("transform", "translate(200 2000)");
    ManufacturingP.setAttribute("transform", "translate(200 2180)");
    ConnectedWorldP.setAttribute("transform", "translate(200 10180)");
    HealthBTP.setAttribute("transform", "translate(200 5000)");
    BiotechnologyP.setAttribute("transform", "translate(200 5200)");
    SmartWorldP.setAttribute("transform", "translate(200 10000)");
    Fsvg.appendChild(BiotechnologyP)
    Fsvg.appendChild(ConnectedWorldP);
    Fsvg.appendChild(MaterialsP);
    Fsvg.appendChild(HealthBTP);
    Fsvg.appendChild(SmartWorldP);
    Fsvg.appendChild(ManufacturingP);
}

CreateDeptNames();

CreateMainResearch();