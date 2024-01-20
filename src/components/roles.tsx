"use client";

const roles = {
  Programmer: ["Self-taught", "Backend development"],
  "System admin": ["Ubuntu knowledge"],
};
export default function Roles() {
  return (
    <div className="flex flex-row">
      {Object.keys(roles).map((key) => {
        return (
          <h2
            key={key}
            className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-purple-400 ml-0 cursor-pointer transition-all"
            onMouseEnter={(e) =>
              ((e.target as HTMLParagraphElement).innerHTML = `${roles[
                key as keyof typeof roles
              ].join(
                `<span class="text-lg text-muted-foreground select-none"> | </span>`
              )}${
                Object.keys(roles).indexOf(key) ===
                Object.keys(roles).length - 1
                  ? ""
                  : `<span class="mr-1">,</span>`
              }`)
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLParagraphElement).innerHTML = `${key}${
                Object.keys(roles).indexOf(key) ===
                Object.keys(roles).length - 1
                  ? ""
                  : `<span class="mr-1">,</span>`
              }`)
            }
          >
            {key}
            {Object.keys(roles).indexOf(key) ===
            Object.keys(roles).length - 1 ? (
              ""
            ) : (
              <span className="mr-1">,</span>
            )}
          </h2>
        );
      })}
    </div>
  );
}
