// app/dashboard/@sidebar/[section]/page.tsx
interface SidebarSectionProps {
  params: {
    section: string;
  };
}

export default function SidebarSection({ params }: SidebarSectionProps) {
  return (
    <div>
      <h2>Sidebar: {params.section}</h2>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </div>
  );
}