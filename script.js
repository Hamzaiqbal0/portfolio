var experiences = [
    {
        role: "QC/QA Officer",
        company: "Avery Dennison",
        description: "Ensured the quality of goods before dispatch and conducted regular process audits."
    },
    {
        role: "Sales Engineer",
        company: "Water Treatment Solutions",
        description: "Specialized in boiler chemicals and water treatment applications."
    },
    {
        role: "Quality & Hygiene Officer",
        company: "Food & Beverage Company",
        description: "Maintained standards in food production for quality and hygiene."
    }
];
var experienceList = document.getElementById("experience-list");
experiences.forEach(function (exp) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>".concat(exp.role, "</strong> at ").concat(exp.company, " - ").concat(exp.description);
    experienceList === null || experienceList === void 0 ? void 0 : experienceList.appendChild(listItem);
});
