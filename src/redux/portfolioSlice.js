import {createSlice} from '@reduxjs/toolkit';

const initialProjects = [
    {
        id: '1',
        title: 'Creative Web Design',
        category: 'Web Design',
        image : "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Modern, responsive website design for an innovative tech startup focused on AI solutions.",
        client: 'TechVision AI',
        date: '2024-04-11',
        tags: ['UI/UX', 'Web Development', 'Branding'],
    },
    {
        id: '2',
        title: 'E-commerce Platform',
        category: 'Web Development',
        image : 'https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: "Comprehensive e-commerce platform with user-friendly interface and secure payment integration.",
        client: 'ShopSmart',
        date: '2024-10-15',
        tags: ['E-commerce', 'Web Development', 'Payment Integration'],
    },
    {
        id: '3',
        title: 'Mobile App Design',
        category: 'Mobile App',
        image:'https://plus.unsplash.com/premium_photo-1719839720591-d43eb07de1da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vYmlsZSUyMGFwcCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
        description: "Intuitive mobile app design for a fitness tracking application with real-time data analytics.",
        client: 'We Connect',
        date: '2025-02-20',
        tags: ['UI/UX', 'Mobile App', 'Data Analytics'],
    },
    {
        id: '4',
        title: 'Brand Identity',
        category: 'Branding',
        image: "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Complete brand identity package including logo design, color palette, and typography for a new startup.",
        client: 'Brandify',
        date: '2024-08-05',
        tags: ['Branding', 'Logo Design', 'Typography'],
    },
    {
        id: '5',
        title: 'Product Launch Campaign',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1556742504-16b083241fab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8TWFya2V0aW5nfGVufDB8fDB8fHww',
        description: 'Integrated marketing campaign for a new smart home product launch.',
        client: 'HomeConnect',
        date: '2025-01-10',
        tags: ['Marketing', 'Digital', 'Social Media'],
      },
    {
        id: '6',
        title: 'Social Media Strategy',
        category: 'Marketing',
        image: 'https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNvY2lhbCUyME1lZGlhJTIwU3RyYXRlZ3l8ZW58MHx8MHx8fDA%3D',
        description: 'Comprehensive social media strategy for a fashion brand, including content calendar and analytics.',
        client: 'Fashionista',
        date: '2024-11-20',
        tags: ['Marketing', 'Social Media', 'Analytics'],
      },
];

const initialState = {
    projects : initialProjects,
    filteredProjects : initialProjects,
    activeFilter: 'All',
};

const portfolioSlice = createSlice({
    name: 'portfolio', 
    initialState,
    reducers: {
        filterProjects: (state, action) => {
            const filter = action.payload;
            state.activeFilter = filter;
            if (filter === 'All'){
                state.filteredProjects = state.projects;
            } else{
                state.filteredProjects = state.projects.filter(
                    (project) => project.category === filter
                );
            }
        },
        addProject: (state, action) => {
            state.projects.push(action.payload);
            if (state.activeFilter === 'All' || action.payload.category === state.activeFilter){
                state.filteredProjects =state.projects.filter(
                    (project) => 
                        state.activeFilter === 'All' ||
                    project.category === state.activeFilter
                )
            }
        },
        deleteProject: (state, action) => {
            const id = action.payload;
            state.projects = state.projects.filter(project => project.id !== id);
            state.filteredProjects = state.filteredProjects.filter(project => project.id !== id);
        },
    },
})

export const {filterProjects, addProject, deleteProject} = portfolioSlice.actions;

export const selectProjects = (state) => state.portfolio.projects;
export const selectFilteredProjects = (state) => state.portfolio.filteredProjects;
export const selectActiveFilter = (state) => state.portfolio.activeFilter;

export default portfolioSlice.reducer;