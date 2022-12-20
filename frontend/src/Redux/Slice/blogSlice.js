import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'auth',
    initialState: {
        init: {
            isFetching: false,
            success: false,
            error: false,
            blogCurrent: [],
            msg: "",
            check: "",
        }
    },

    reducers: {
        addStart: state => {
            state.init.isFetching = true;
            state.init.success = false;
            state.init.error = false;
        },
        addSuccess: (state, action) => {
            state.init.isFetching = false;
            state.init.success = true;
            state.init.error = false;
            state.init.msg = action.payload;
        },
        addFailed: (state, action) => {
            state.init.success = false;
            state.init.error = true;
            state.init.msg = action.payload;
        },

        getBlogStart: state => {
            state.init.isFetching = true;
            state.init.success = false;
            state.init.error = false;
        },
        getBlogSuccess: (state, action) => {
            state.init.isFetching = false;
            state.init.success = true;
            state.init.error = false;
            state.init.blogCurrent = action.payload;
        },
        getBlogFail: (state, action) => {
            state.init.success = false;
            state.init.error = true;
            state.init.msg = action.payload;
        },
        checkStorage: (state, action) => {
            state.init.check = action.payload;
        },
    }
});
export const {
    addStart,
    addSuccess,
    addFailed,
    getBlogSuccess,
    getBlogFail,
    getBlogStart,
    checkStorage
} = blogSlice.actions;

export default blogSlice.reducer;
