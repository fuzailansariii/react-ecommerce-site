import React from "react";

const OurTeam = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Mohd Fuzail Ansari",
      role: "Full Stack Developer",
      description:
        "Passionate about creating efficient and scalable web applications. Experienced in both frontend and backend technologies.",
    },
    {
      name: "John Doe",
      role: "UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia lectus in tellus lacinia, ac congue purus consequat. Nunc ut placerat mi. Phasellus egestas ut elit eu mattis.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-2">{role}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default OurTeam;
