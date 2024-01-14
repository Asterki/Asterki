import LangPack from "../types/lang";

const template: typeof LangPack = {
    index: {
        pageTitle: "",

        introduction: "",

        about: "",
        skills: "",
        blog: "",
        contact: "",
        projects: "",
    },

    about: {
        pageTitle: "",

        about: {
            title: "",

            verse1: ``,
            verse2: ``,
            verse3: ``,
            verse4: ``,
            verse5: ``,
            verse6: ``,
        },

        training: {
            title: "",
        },

        back: "",
    },

    skills: {
        pageTitle: "",

        title: "",

        languages: "",
        libs: "",
        databases: "",
        tools: "",

        back: "",
    },

    projects: {
        pageTitle: "",
        title: "",
        back: "",
    },

    contact: {
        pageTitle: "",

        talkToMe: {
            title: "",
            email: "",
            instagram: "",
            discord: "",
            twitter: "",
        },

        hireMe: {
            title: "",
            fiverr: "",
        },

        seeMyProjects: {
            title: "",
            github: "",
            thisSite: "",
        },

        back: "",
    },
}

export default template