interface Experience {
    role: string;
    company: string;
    description: string;
}

const experiences: Experience[] = [
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
        description: "Maintained high standards in food production for quality and hygiene."
    }
];

const experienceList = document.getElementById("experience-list");

experiences.forEach(exp => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${exp.role}</strong> at ${exp.company} - ${exp.description}`;
    experienceList?.appendChild(listItem);
});