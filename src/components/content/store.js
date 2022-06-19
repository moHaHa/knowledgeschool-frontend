import axios from "@/axios";
import { get } from "lodash";

export default {
    namespaced: true,
    state: () => ({
        records: [],
        fetchAPILoader: false,
        APIInfo: {
            endPoint: null,
            recordsJSONPath: null,
        },
        schema: [],
        pageStatus: "loading",
        // pageState: {
        //   loading: true
        //   emptyForm: true,
        //   emptyForm_changed: true,
        //   existedRecord: true,
        //   existedRecord_changed: true,
        //   list: true
        // }
        recordIdTargetedForDeletion: null,
        recordIdTargetedForUpdate: null,
        recordsLoader: false,
        singleRecordInfo: {
            existedRecordId: null,
            existedRecordJSONPath: null,
        },
        existedRecord: null,
        singleRecordsLoader: false,
        deleteRecordsLoader: false,
        storeRecordsLoader: false,
        updateRecordsLoader: false,
        schemaLoader: false,
        bodyTargerToStore: null,
        bodyTargerToUpdate: null,

        // formBody: null
    }),
    getters: {
        schema(state) {
            return state.schema;
        },
        recordIdTargetedForDeletion(state) {
            return state.recordIdTargetedForDeletion;
        },
        pageStatus(state) {
            return state.pageStatus;
        },
        existedRecord(state) {
            return state.existedRecord;
        },
        singleRecordInfo(state) {
            return state.singleRecordInfo;
        },
        records(state) {
            return state.records;
        },
        APIInfo(state) {
            return state.APIInfo;
        },
        recordsLoader(state) {
            return state.recordsLoader;
        },
        singleRecordsLoader(state) {
            return state.singleRecordsLoader;
        },
        deleteRecordsLoader(state) {
            return state.deleteRecordsLoader;
        },
        storeRecordsLoader(state) {
            return state.storeRecordsLoader;
        },
        updateRecordsLoader(state) {
            return state.updateRecordsLoader;
        },
        schemaLoader(state) {
            return state.schemaLoader;
        },
    },
    mutations: {
        // schema
        setSchema(state, schema) {
            state.schema = schema;
        },
        // delete
        recordIdTargetedForDeletion(state, id) {
            state.recordIdTargetedForDeletion = id;
        },
        // update
        setRecordIdTargetedForUpdate(state, id) {
            state.recordIdTargetedForUpdate = id;
        },

        // page status
        setPageStatus(state, status) {
            state.pageStatus = status;
        },

        //single record
        setSingleRecordInfo_existedRecordJSONPath(
            state,
            existedRecordJSONPath
        ) {
            state.singleRecordInfo.existedRecordJSONPath =
                existedRecordJSONPath;
        },
        setSingleRecordInfo_existedRecordId(state, id) {
            state.singleRecordInfo.existedRecordId = id;
        },

        setExistedRecord(state, existedRecord) {
            state.existedRecord = existedRecord;
        },
        changeSingleRecordsLoader(state, status) {
            state.singleRecordsLoader = status;
        },

        changeDeleteRecordsLoader(state, status) {
            state.deleteRecordsLoader = status;
        },
        changeStoreRecordsLoader(state, status) {
            state.storeRecordsLoader = status;
        },
        changeUpdateRecordsLoader(state, status) {
            state.updateRecordsLoader = status;
        },
        changeSchemaLoader(state, status) {
            state.schemaLoader = status;
        },

        //records
        setAPIInfo_endPoint(state, endPoint) {
            state.APIInfo.endPoint = endPoint;
        },
        setAPIInfo_recordsJSONPath(state, recordsJSONPath) {
            state.APIInfo.recordsJSONPath = recordsJSONPath;
        },
        setRecords(state, records) {
            state.records = records;
        },

        // records loader
        changeRecordsLoader(state, status) {
            state.recordsLoader = status;
        },
        setBodyTargerToStore(state, form) {
            state.bodyTargerToStore = form;
        },
        setBodyTargerToUpdate(state, form) {
            state.bodyTargerToUpdate = form;
        },
    },
    actions: {
        async pageStatusToList({ commit, dispatch }) {
            commit("setPageStatus", "list");
            await dispatch("fetchAPIRecords");
        },
        pageStatusToEmptyForm({ commit }) {
            commit("setPageStatus", "emptyForm");
        },
        async pageStatusToExistedFrom({ commit, dispatch }) {
            commit("setPageStatus", "existedForm");
            await dispatch("FetchAPISingleRecord");
        },
        async FetchAPISingleRecord({ commit, state }) {
            let response = new Object();
            commit("changeSingleRecordsLoader", true);
            let methodType = "get";
            let newEndPoint = `${state.APIInfo.endPoint}/${state.singleRecordInfo.existedRecordId}`;
            try {
                switch (methodType) {
                    case "post":
                        response = await axios.post(newEndPoint, {});
                        break;
                    default:
                        response = await axios.get(newEndPoint);
                        break;
                }
                commit(
                    "setExistedRecord",
                    get(response, state.singleRecordInfo.existedRecordJSONPath)
                );
                commit("changeSingleRecordsLoader", false);
            } catch (error) {
                console.error(error);
                commit("changeSingleRecordsLoader", false);
            }
        },
        async fetchAPIRecords({ state, commit }) {
            let response = new Object();
            commit("changeRecordsLoader", true);
            let methodType = "get";
            try {
                switch (methodType) {
                    case "post":
                        response = await axios.post(state.APIInfo.endPoint, {});
                        break;
                    default:
                        response = await axios.get(state.APIInfo.endPoint);
                        break;
                }
                commit(
                    "setRecords",
                    get(response, state.APIInfo.recordsJSONPath)
                );
                commit("changeRecordsLoader", false);
            } catch (error) {
                console.error(error);
                commit("changeRecordsLoader", false);
            }
        },
        async deleteRecord({ state, commit }) {
            let newEndPoint = `${state.APIInfo.endPoint}/${state.recordIdTargetedForDeletion}`;
            let response = new Object();
            commit("changeDeleteRecordsLoader", true);
            try {
                response = await axios.delete(newEndPoint);
                commit("changeDeleteRecordsLoader", false);
                console.log(response);
            } catch (error) {
                commit("changeDeleteRecordsLoader", false);
                console.error(error);
                console.log(error);
            }
        },
        async storeRecord({ state, commit }) {
            let response = new Object();
            commit("changeStoreRecordsLoader", true);
            try {
                response = await axios.post(
                    state.APIInfo.endPoint,
                    state.bodyTargerToStore
                );
                commit("changeStoreRecordsLoader", false);
                console.log(response);
            } catch (error) {
                commit("changeStoreRecordsLoader", false);
                console.error(error);
                console.log(error);
            }
        },
        async updateRecord({ state, commit }) {
            let response = new Object();
            console.log(response);
            let newEndPoint = `${state.APIInfo.endPoint}/${state.recordIdTargetedForUpdate}`;
            commit("changeUpdateRecordsLoader", true);
            try {
                response = await axios.put(
                    newEndPoint,
                    state.bodyTargerToUpdate
                );
                commit("changeUpdateRecordsLoader", false);
            } catch (error) {
                commit("changeUpdateRecordsLoader", false);
                console.error(error);
                console.log(error);
            }
        },
        getSchema({ commit }, schema) {
            commit("setSchema", schema);
            //   let body = {
            //     filters: [{ field: 'slug', operator: '=', value: state.APIInfo.endPoint }]
            //   }
            //   let newEndPoint = '/data-type/search'
            //   let response = new Object()
            //   commit('changeSchemaLoader', true)
            //   try {
            //     response = await axios.post(newEndPoint, body)
            //     commit('setSchema', response.data.data[0].data_row)
            //     commit('changeSchemaLoader', false)
            //   } catch (error) {
            //     commit('changeSchemaLoader', false)
            //     console.error(error)
            //     console.log(error)
            //     console.log(response)
            //   }
        },
    },
};
