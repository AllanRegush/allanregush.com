export type Project = {
    title: string,
    description: string,
    githuburl?: string,
    liveurl?: string,
    img: string
};

export const Projects: Project[] = [
    {
        title: "Zen",
        description: "Bare Bones OS Kernel Written in C++",
        githuburl: "https://github.com/AllanRegush/Zen",
        img: "/zen.png"
    },
    {
        title: "Falldale EE",
        description: "RPG Written in JavaScript - Worked in a team from Feb to May 2020",
        githuburl: "https://github.com/gamkedo-la/falldale-ee",
        liveurl: "https://hometeamgamedev.itch.io/falldale-ee",
        img: "https://img.itch.zone/aW1nLzMzODI4OTkuZ2lm/original/1OvP0T.gif"
    },
] as const;