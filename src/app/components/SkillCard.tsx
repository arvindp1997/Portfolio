interface SkillCardProps {
    title: string;
    skills: string[];
    bgClass: string;
  }
export default function SkillCard({ title, skills, bgClass }: SkillCardProps) {
  return (
    <div
      className={`bg-gradient-to-r ${bgClass} rounded-lg p-5 shadow-lg min-h-[100px]`}
    >
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white text-gray-700 px-3 py-1  text-sm font-medium shadow-sm rounded-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
