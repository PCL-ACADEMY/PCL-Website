const jobRoles = [
    // TRIUMPHUS
    {
        title: "Driver",
        location: "Sucat, Parañaque",
        qualifications: [
            "At least High School graduate or equivalent.",
            "Valid Professional Driver’s License (Restriction codes as required).",
            "With at least 1–2 years of delivery or commercial driving experience.",
            "Familiar with local routes and road networks.",
            "Knowledge of basic vehicle troubleshooting and preventive maintenance.",
            "Physically fit and able to assist in loading and unloading when needed.",
            "Good communication skills and customer-service oriented.",
            "Willing to work flexible hours, including overtime if required.",
            "No record of major traffic violations (preferred)."

        ]
    },
    {
        title: "Helper",
        location: "Sucat, Parañaque",
        qualifications: [
            "At least High School graduate or vocational course completion.",
            "Physically fit and able to lift heavy items.",
            "With basic knowledge of safety practices and proper handling of goods.",
            "Can work well with a team and follow instructions.",
            "Honest, reliable, and hardworking.",
            "With experience as a delivery helper or warehouse assistant is an advantage but not required."
        ]
    },

    // CANLUBANG
    {
        title: "Inbound/Outbound Checker",
        location: "Canlubang, Laguna",
        qualifications: [
            "Senior High or vocational graduate; college level a plus",
            "1+ year experience in warehouse operations (receiving/dispatch)",
            "Knowledge of basic inventory procedures, documentation (DR, RR), and FIFO",
            "Able to inspect packaging/integrity, verify quantities, and reconcile variances",
            "Comfortable using handheld scanners/RF and basic computer systems",
            "Physically fit; able to stand for long periods and lift moderate weights",
            "Willing to work shifting and weekends/holidays as required"
        ]
    },

    // CAVITE
    { 
        title: "Forklift Operator",
        location: "General Trias, Cavite",
        qualifications: [
            "High school graduate; 1–2 years forklift experience (counterbalance or reach truck)",
            "Valid NC II (Forklift Operations) or company-recognized certification",
            "Knowledge of basic equipment checks, safety procedures, and load handling",
            "Physically fit; comfortable with cold/warm warehouse environments",
            "Willing to work shifts and overtime"
        ]
    },
    {
        title: "Inventory Control Assistant",
        location: "General Trias, Cavite",
        qualifications: [
            "Graduate of Business, Accounting, Supply Chain, or related field",
            "1–2 years experience in inventory control or warehouse administration",
            "Proficient in SAP/ERP, cycle counting, stock reconciliation, and variance analysis",
            "Intermediate Excel (pivot tables, lookups); strong attention to detail",
            "Knowledge of FIFO/FEFO, aging, and stock accuracy best practices",
            "Willing to work shifts and support audits"
        ]
    },
    {
        title: "Supervisor",
        location: "General Trias, Cavite",
        qualifications: [
            "Graduate of Industrial Engineering, Supply Chain, Business, or related field",
            "3–5 years warehouse/production experience with 1–2 years supervisory role",
            "Solid knowledge of inventory control, KPI management, 5S/Lean, and SOPs",
            "Proficient in SAP/ERP and MS Excel (dashboards, pivots)",
            "Strong leadership, people management, and problem-solving skills",
            "Willing to work shifting schedule and coordinate cross-functional teams"
        ]
    },

    // DANAO
    {
        title: "Encoder / SAP",
        location: "Danao, Cebu",
        qualifications: [
            "Graduate of any business, supply chain, or IT-related course (or 2 years college/vocational with strong experience)",
            "1–2 years experience in data encoding, warehouse/commissary operations, or logistics",
            "Basic to intermediate SAP (MM/WM) knowledge (posting GR/GI, BIN transfers, cycle counts)",
            "Strong accuracy, attention to detail, and fast typing (35+ WPM preferred)",
            "Proficient in MS Excel (VLOOKUP/INDEX-MATCH, pivot tables an advantage)",
            "Willing to work shifting schedules and in a fast-paced environment"
        ]
    },
    {
        title: "Forklift Operator",
        location: "Danao, Cebu",
        qualifications: [
            "High school graduate; 1–2 years forklift experience (counterbalance or reach truck)",
            "Valid NC II (Forklift Operations) or company-recognized certification",
            "Knowledge of basic equipment checks, safety procedures, and load handling",
            "Physically fit; comfortable with cold/warm warehouse environments",
            "Willing to work shifts and overtime",
            "Experience with narrow aisles/reach trucks is a plus"
        ]
    },
    {
        title: "Inventory Control Assistant",
        location: "Danao, Cebu",
        qualifications: [
            "Graduate of Business, Accounting, Supply Chain, or related field",
            "1–2 years experience in inventory control or warehouse administration",
            "Proficient in SAP/ERP, cycle counting, stock reconciliation, and variance analysis",
            "Intermediate Excel (pivot tables, lookups); strong attention to detail",
            "Knowledge of FIFO/FEFO, aging, and stock accuracy best practices",
            "Willing to work shifts and support audits",
            "Comfortable coordinating cycle counts across departments"
        ]
    },
    {
        title: "Inventory Control Assistant",
        location: "Danao, Cebu",
        qualifications: [
            "Graduate of Business, Accounting, Supply Chain, or related field",
            "1–2 years experience in inventory control or warehouse administration",
            "Proficient in SAP/ERP, cycle counting, stock reconciliation, and variance analysis",
            "Intermediate Excel (pivot tables, lookups); strong attention to detail",
            "Knowledge of FIFO/FEFO, aging, and stock accuracy best practices",
            "Willing to work shifts and support audits",
            "Comfortable coordinating cycle counts across departments"
        ]
    },
    {
        title: "Team Lead",
        location: "Danao, Cebu",
        qualifications: [
            "Graduate of Supply Chain/Industrial Engineering/Business or equivalent",
            "2–3 years warehouse/production experience with lead responsibilities",
            "Skilled in task allocation, line balancing, daily huddles, and shift handovers",
            "Proficient in SAP/ERP and Excel; able to track KPI targets",
            "Strong communication, coaching, and conflict resolution skills",
            "Willing to work shifts and handle fast-paced operations"
        ]
    },

    // META
    {
        title: "Bakery Harvester",
        location: "Canlubang, Laguna",
        qualifications: [
            "High school graduate; 1 year bakery/food manufacturing experience preferred",
            "Familiar with food safety (basic GMP, HACCP awareness) and proper product handling",
            "Able to work in warm environments, use PPE, and follow SOPs",
            "Physically fit; can lift/carry trays/racks, stand for long periods",
            "Willing to work shifting and overtime when needed"
        ]
    },
    {
        title: "Encoder / SAP",
        location: "Canlubang, Laguna",
        qualifications: [
            "Graduate of any business, supply chain, or IT-related course (or 2 years college/vocational with strong experience)",
            "1–2 years experience in data encoding, warehouse/commissary operations, or logistics",
            "Basic to intermediate SAP (MM/WM) knowledge (posting GR/GI, BIN transfers, cycle counts)",
            "Strong accuracy, attention to detail, and fast typing (35+ WPM preferred)",
            "Proficient in MS Excel (VLOOKUP/INDEX-MATCH, pivot tables an advantage)",
            "Willing to work shifting schedules and in a fast-paced environment"
        ]
    },
    {
        title: "Housekeeping",
        location: "Canlubang, Laguna",
        qualifications: [
            "High school graduate; experience in industrial cleaning preferred",
            "Knowledge of 5S, sanitation standards, and safe chemical handling",
            "Physically fit; can perform repetitive tasks and follow cleaning schedules",
            "Responsible, punctual, and detail-oriented",
            "Willing to work shifts and overtime when needed"
        ]
    },
    {
        title: "Inbound/Outbound Checker",
        location: "Canlubang, Laguna",
        qualifications: [
            "Senior High or vocational graduate; college level a plus",
            "1+ year experience in warehouse operations (receiving/dispatch)",
            "Knowledge of basic inventory procedures, documentation (DR, RR), and FIFO",
            "Able to inspect packaging/integrity, verify quantities, and reconcile variances",
            "Comfortable using handheld scanners/RF and basic computer systems",
            "Physically fit; able to stand for long periods and lift moderate weights",
            "Willing to work shifting and weekends/holidays as required"
        ]
    }
];

let currentRoleIndex = 0;

function renderRoles() {
    const roleList = document.querySelector('.role');
    if (!roleList) return;
    roleList.innerHTML = '';
    jobRoles.forEach((role, idx) => {
        const div = document.createElement('div');
        div.className = 'role-item' + (idx === currentRoleIndex ? ' active' : '');
        div.setAttribute('data-index', idx);
        div.innerHTML = `<h3>${role.title}</h3><p>${role.location}</p>`;
        div.addEventListener('click', function() {
            selectRole(idx);
        });
        roleList.appendChild(div);
    });
}

function renderRoleDetails(index) {
    const role = jobRoles[index];
    const detailsContainer = document.getElementById('roleDetails');
    if (!detailsContainer) return;
    let qualificationsHTML = '';
    role.qualifications.forEach(qual => {
        qualificationsHTML += `<li>${qual}</li>`;
    });
    detailsContainer.innerHTML = `
        <h1>${role.title}</h1>
        <h2 style="padding-bottom: 8px;">Qualification</h2>
        <ul style="display: flex; flex-direction: column; gap: 4px;">
            ${qualificationsHTML}
        </ul>
        <button class="apply-btn" id="applyBtn">APPLY NOW</button>
    `;
    const applyBtn = document.getElementById('applyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyForJob);
    }
}

function selectRole(index) {
    currentRoleIndex = index;
    renderRoles();
    renderRoleDetails(index);
}

function applyForJob() {
    const role = jobRoles[currentRoleIndex];
    const email = 'hrrecruitment@pcl.com.ph';
    const subject = `Application for ${role.title} Position`;
    const body = `Dear Hiring Manager,%0D%0A%0D%0AI am writing to express my interest in the ${role.title} position at ${role.location}.%0D%0A%0D%0ARole: ${role.title}%0D%0ALocation: ${role.location}%0D%0A%0D%0AI believe my skills and experience align well with the requirements for this position. I have attached my resume for your review and would welcome the opportunity to discuss how I can contribute to your team.%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ABest regards`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

document.addEventListener('DOMContentLoaded', function() {
    renderRoles();
    renderRoleDetails(currentRoleIndex);
});