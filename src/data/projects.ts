export type Project = {
    title: string,
    description: string,
    url: string,
    img: string
};

export const Projects: Project[] = [
    {
        title: "Zen",
        description: "Bare Bones OS Kernel Written in C++",
        url: "https://github.com/AllanRegush/Zen",
        img: "/zen.png"
    }
] as const;