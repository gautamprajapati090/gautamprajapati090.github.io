import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  USER_SIGN_IN,
  USER_SIGN_IN_FAILED,
  USER_SIGN_OUT,
  CLEAR_LOGIN_ERROR,
  UPDATE_USER_PROFILE,
  SEND_RESET_EMAIL,
  SEND_RESET_EMAIL_SUCCESS,
  SEND_RESET_EMAIL_FAILED,
  USER_DELETED,
  REQUEST_OTP,
  REQUEST_OTP_SUCCESS,
  REQUEST_OTP_FAILED
} from "../store/types";

import store from '../store/store';

export const fetchProfile = () => (dispatch) => (firebase) => {
  const {
    auth,
    singleUserRef
  } = firebase;
  singleUserRef(auth.currentUser.uid).once('value', snapshot => {
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: snapshot.val()
    });
  });
}

export const requestPhoneOtpDevice = (phoneNumber, appVerifier) => (dispatch) => async (firebase) => {
  const {
    phoneProvider
  } = firebase;
  dispatch({
    type: REQUEST_OTP,
    payload: null
  });
  try {
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      appVerifier
    );
    dispatch({
      type: REQUEST_OTP_SUCCESS,
      payload: verificationId
    });
  }
  catch (error) {
    dispatch({
      type: REQUEST_OTP_FAILED,
      payload: error
    });
  };
}

export const mobileSignIn = (verficationId, code) => (dispatch) => (firebase) => {
  const {
    auth,
    mobileAuthCredential,
  } = firebase;

  dispatch({
    type: USER_SIGN_IN,
    payload: null
  });
  auth.signInWithCredential(mobileAuthCredential(verficationId, code))
    .then((user) => {
      //OnAuthStateChange takes care of Navigation
    }).catch(error => {
      dispatch({
        type: USER_SIGN_IN_FAILED,
        payload: error
      });
    });
};

export const signIn = (email, password) => (dispatch) => (firebase) => {

  const {
    auth
  } = firebase;

  dispatch({
    type: USER_SIGN_IN,
    payload: null
  });
  auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      //OnAuthStateChange takes care of Navigation
    })
    .catch(error => {
      dispatch({
        type: USER_SIGN_IN_FAILED,
        payload: error
      });
    });
};

export const signOut = () => (dispatch) => (firebase) => {

  const {
    auth,
  } = firebase;

  auth
    .signOut()
    .then(() => {
      dispatch({
        type: USER_SIGN_OUT,
        payload: null
      });
    })
    .catch(error => {

    });
};

export const deleteUser = (uid) => (dispatch) => (firebase) => {
  const {
    singleUserRef,
    auth
  } = firebase;

  singleUserRef(uid).remove().then(() => {
    if (auth.currentUser.uid == uid) {
      auth.signOut();
      dispatch({
        type: USER_DELETED,
        payload: null
      });
    }
  });
};

export const updateProfile = (userAuthData, updateData) => (dispatch) => (firebase) => {

  const {
    singleUserRef,
    driverDocsRef
  } = firebase;

  let profile = userAuthData.profile;

  if (updateData.licenseImage) {
    let timestamp = new Date().toISOString();
    driverDocsRef(timestamp).put(updateData.licenseImage);
    updateData.licenseImage = driverDocsRef(timestamp).getDownloadURL();
  }

  profile = { ...profile, ...updateData }
  dispatch({
    type: UPDATE_USER_PROFILE,
    payload: profile
  });
  singleUserRef(userAuthData.uid).update(updateData);
};

export const updateProfileImage = (userAuthData, imageBlob) => (dispatch) => (firebase) => {

  const {
    singleUserRef,
    profileImageRef,
  } = firebase;

  profileImageRef(userAuthData.uid).put(imageBlob).then(() => {
    imageBlob.close()
    return profileImageRef(userAuthData.uid).getDownloadURL()
  }).then((url) => {
    let profile = userAuthData.profile;
    profile.profile_image = url;
    singleUserRef(userAuthData.uid).update({
      profile_image: url
    });
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: profile
    });
  })
};

export const updatePushToken = (userAuthData, token, platform) => (dispatch) => (firebase) => {

  const {
    singleUserRef,
  } = firebase;

  let profile = userAuthData.profile;
  profile.pushToken = token;
  profile.userPlatform = platform;
  dispatch({
    type: UPDATE_USER_PROFILE,
    payload: profile
  });
  singleUserRef(userAuthData.uid).update({
    pushToken: token,
    userPlatform: platform
  });
};

export const clearLoginError = () => (dispatch) => (firebase) => {
  dispatch({
    type: CLEAR_LOGIN_ERROR,
    payload: null
  });
};

export const sendResetMail = (email) => (dispatch) => (firebase) => {

  const {
    auth,
  } = firebase;

  dispatch({
    type: SEND_RESET_EMAIL,
    payload: email
  });
  auth.sendPasswordResetEmail(email).then(function () {
    dispatch({
      type: SEND_RESET_EMAIL_SUCCESS,
      payload: {
        code: store.getState().languagedata.defaultLanguage.success,
        message: store.getState().languagedata.defaultLanguage.reset_pass_msg
      }
    });
  }).catch(function (error) {
    dispatch({
      type: SEND_RESET_EMAIL_FAILED,
      payload: error
    });
  });
};
