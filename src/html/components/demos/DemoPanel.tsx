interface DemoPanelProps {
  title: string
  children: React.ReactNode
}

export function DemoPanel({ title, children }: DemoPanelProps) {
  return (
    <div className="demo-panel">
      <div className="demo-panel-header">
        <span className="demo-dot demo-dot-red" />
        <span className="demo-dot demo-dot-yellow" />
        <span className="demo-dot demo-dot-green" />
        <span className="demo-panel-title">{title}</span>
      </div>
      <div className="demo-panel-body">{children}</div>
    </div>
  )
}
