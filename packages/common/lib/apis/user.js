// connects to user related endpoint in backend
import client from './client';

// Publicly available routes
export const checkFields = async({ email, phone }) => (
  client.post('public/user/exists', {
    email,
    phone,
  }));

export const register = async ({
  firstname,
  email,
  gamertag,
  lastname,
  password,
  referralCode,
}) => (
  client.post('public/user/register', {
    phone,
    firstname,
    lastname,
    email,
    gamertag,
    password,
    referralCode,
  }));

export const verify = async ({ userId, verificationCode }) => (
  client.post('public/user/verify', {
    userId,
    verificationCode,
  }));

export const resendCode = async ({ phoneNumber }) => (
  client.post('public/user/resendCode', {
    phoneNumber,
  }));

export const login = async ({ username, password }) => (
  client.post('public/user/login', {
    password,
    username,
  }));

export const announcements = async () => (
  client.get('public/user/announcements'));

// Secured Routes

export const getAccount = async () => (
  client.get('user/account'));

export const editAccount = async ({ firstname, gamertag, lastname }) => (
  client.put('user/account',
    firstname,
    gamertag,
    lastname,
  ));

export const addCreditCard = async ({ firstname, lastname, tokenizedCard }) => 
  client.post('user/payment-method/card', {
    firstname,
    lastname,
    tokenizedCard,
});

export const getPaymentMethods = async () => (
  client.get('user/customer/payment-methods'));

export const getCharges = async () => (
  client.get('user/customer/charges'));
  
export const getReferralCode = async () => (
  client.get('user/referral-code'));
