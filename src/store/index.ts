import { configureStore } from '@reduxjs/toolkit';
import applicationsReducer from "@/store/feature/PendingApplication/applicationsSlice";
import forwardHistoryReducer from '@/store/feature/ApplicationStatus/ApplicationStatusSlice';
import selectedApplicationReducer from "@/store/feature/PendingApplication/selectedApplicationSlice";
import supportiveDocsReducer from "@/store/feature/PendingApplication/supportiveDocsSlice";
import occupierReducer from "@/store/feature/PendingApplication/viewOccupierDetailsSlice";
import irregularityReducer from "@/store/feature/PendingApplication/otherObservationSlice";
import supportiveApprovalReducer from "@/store/feature/PendingApplication/verifyDocumentSlice";
import extraLoadReducer from "@/store/feature/PendingApplication/loadExtraSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import authReducer from "./feature/auth/authSlice";


const authPersistConfig = {
  key: "auth",
  storage,
};


const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Create the Redux store
export const store = configureStore({
  reducer: {
     auth: persistedAuthReducer, 
    applications: applicationsReducer,
     forwardHistory: forwardHistoryReducer,
     selectedApplication: selectedApplicationReducer,
      supportiveDocs: supportiveDocsReducer,
      occupier: occupierReducer,
       irregularities: irregularityReducer,
        supportiveApproval: supportiveApprovalReducer,
        extraLoad: extraLoadReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;