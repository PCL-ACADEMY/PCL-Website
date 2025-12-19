const jobRoles = [
    {
        title: "Encoder / SAP",
        location: "Danao",
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
        title: "Inbound/Outbound Checker",
        location: "Canlubang",
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
    {
        title: "Forklift Operator",
        location: "Cavite",
        qualifications: [
            "High school graduate; 1–2 years forklift experience (counterbalance or reach truck)",
            "Valid NC II (Forklift Operations) or company-recognized certification",
            "Knowledge of basic equipment checks, safety procedures, and load handling",
            "Physically fit; comfortable with cold/warm warehouse environments",
            "Willing to work shifts and overtime"
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