import Data from './data.json';

const getInfo = () => {
    return Data.info;
}

const getExperiances = () => {
    return Data.experiances;
}

const getEducations = () => {
    return Data.educations;
}

const getSkills = () => {
    return Data.skills;
}

export default { getInfo, getExperiances, getEducations, getSkills };
