const jobRoles = [
    {
        title: "Software Engineer",
        location: "Head Office",
        description: "We are seeking a talented Software Engineer to join our dynamic development team. You will be responsible for designing, developing, and maintaining software applications that meet business needs. This role requires strong problem-solving skills and the ability to work in a fast-paced environment.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years of experience in software development",
            "Proficiency in Java, Python, or JavaScript",
            "Experience with database systems and cloud platforms",
            "Strong analytical and debugging skills"
        ]
    },
    {
        title: "Marketing Manager",
        location: "Head Office",
        description: "Join our marketing team as a Marketing Manager where you'll lead strategic campaigns and drive brand awareness. You will collaborate with cross-functional teams to develop innovative marketing strategies that align with business objectives and enhance customer engagement.",
        qualifications: [
            "Bachelor's degree in Marketing, Business, or related field",
            "5+ years of marketing experience with leadership roles",
            "Proven track record in digital marketing and campaign management",
            "Strong understanding of market research and analytics",
            "Excellent communication and project management skills"
        ]
    },
    {
        title: "HR Specialist",
        location: "Head Office",
        description: "We're looking for an HR Specialist to manage recruitment, employee relations, and HR operations. You will play a key role in building a positive workplace culture, supporting employee development, and ensuring compliance with labor regulations.",
        qualifications: [
            "Bachelor's degree in Human Resources or related field",
            "3+ years of HR experience in recruitment and employee relations",
            "Knowledge of labor laws and HR best practices",
            "Strong interpersonal and conflict resolution skills",
            "Experience with HRIS systems and payroll management"
        ]
    },
    {
        title: "Financial Analyst",
        location: "Head Office",
        description: "As a Financial Analyst, you will provide critical insights through data analysis, financial modeling, and reporting. You'll support strategic decision-making by analyzing financial performance, identifying trends, and making recommendations to improve profitability.",
        qualifications: [
            "Bachelor's degree in Finance, Accounting, or Economics",
            "2+ years of financial analysis experience",
            "Proficiency in Excel, SQL, and financial modeling",
            "Strong analytical and quantitative skills",
            "CFA or similar certification is a plus"
        ]
    },
    {
        title: "Product Designer",
        location: "Head Office",
        description: "We're seeking a creative Product Designer to craft intuitive and engaging user experiences. You will work closely with product managers and engineers to design innovative solutions that delight users and meet business goals through user-centered design principles.",
        qualifications: [
            "Bachelor's degree in Design, HCI, or related field",
            "4+ years of product design experience",
            "Proficiency in Figma, Sketch, or Adobe Creative Suite",
            "Strong portfolio demonstrating UX/UI design skills",
            "Experience with user research and usability testing"
        ]
    },
    {
        title: "Sales Executive",
        location: "Head Office",
        description: "Join our sales team as a Sales Executive where you'll drive revenue growth by building strong client relationships and closing deals. You will identify new business opportunities, manage the sales pipeline, and consistently exceed sales targets in a competitive market.",
        qualifications: [
            "Bachelor's degree in Business or related field",
            "3+ years of B2B sales experience",
            "Proven track record of meeting or exceeding sales quotas",
            "Excellent negotiation and presentation skills",
            "Experience with CRM systems like Salesforce"
        ]
    }
];

let currentRoleIndex = 0;

function selectRole(index) {
    currentRoleIndex = index;
    const items = document.querySelectorAll('.role-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    updateRoleDetails(index);
}

function updateRoleDetails(index) {
    const role = jobRoles[index];
    const detailsContainer = document.getElementById('roleDetails');
    
    let qualificationsHTML = '';
    role.qualifications.forEach(qual => {
        qualificationsHTML += `<li>${qual}</li>`;
    });

    detailsContainer.innerHTML = `
        <h2>Role</h2>
        <h1>${role.title}</h1>
        <p class="description">${role.description}</p>
        <h3>Qualification</h3>
        <ul>
            ${qualificationsHTML}
        </ul>
        <button class="apply-btn" onclick="applyForJob()">Apply</button>
    `;
}

function applyForJob() {
    const role = jobRoles[currentRoleIndex];
    const email = 'pcl@gmail.com';
    const subject = encodeURIComponent(`Application for ${role.title} Position`);
    const body = encodeURIComponent(
`Dear Hiring Manager,

I am writing to express my interest in the ${role.title} position at ${role.location}.

Role: ${role.title}
Location: ${role.location}

Brief Overview:
${role.description}

I believe my skills and experience align well with the requirements for this position. I have attached my resume for your review and would welcome the opportunity to discuss how I can contribute to your team.

Thank you for considering my application.

Best regards`
    );
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Initialize with first role
updateRoleDetails(0);