const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// Load Input validation 
const validateLoginInput = require('../../validation/login')

// Load User model 
const User = require('../../models/User')


