'use strict';

const CODES = {
    PROGRAM_ERROR:0,
    NOT_FOUND:1,
    INSERT_OK:2,
    NOT_INSERTED:3,
    ALREADY_IN_USE:4,
    REMOVE_OK:5,
    NOT_REMOVED:6,
    UPDATE_OK:7,
    NOT_UPDATED:8,
    KEYS_DO_NOT_MATCH:9
};

const TYPE ={
    INFO:'info',
    ERROR:'error',
}

const MESSAGE = {
    PROGRAM_ERROR: () => ({
        message: 'Sorry! Error in the program',
        code: CODES.PROGRAM_ERROR,
        type:TYPE.ERROR
    }),
    NOT_FOUND: (key,value) =>({
        message:`No resource found with ${key} ${value}`,
        code: CODES.NOT_FOUND,
        type:TYPE.INFO
    }),
    INSERT_OK:(key,value)=>({
        message:`Resource with ${key} ${value} inserted ok`,
        code: CODES.INSERT_OK,
        type:TYPE.INFO
    }),
    NOT_INSERTED:()=>({
        message:`Resource not inserted`,
        code: CODES.NOT_INSERTED,
        type:TYPE.ERROR
    }),
    ALREADY_IN_USE:(key,value)=>({
        message:`Resource with ${key} ${value} is already in use`,
        code: CODES.ALREADY_IN_USE,
        type:TYPE.ERROR
    }),
    REMOVE_OK:(key,value)=>({
        message:`Resource with ${key} ${value} removed`,
        code: CODES.REMOVE_OK,
        type:TYPE.INFO
    }),
    UPDATE_OK:(key,value)=>({
        message:`Resource with ${key} ${value} updated`,
        code: CODES.UPDATE_OK,
        type:TYPE.INFO
    }),
    NOT_UPDATED:()=>({
        message:`Resource not updated`,
        code: CODES.NOT_UPDATED,
        type:TYPE.ERROR
    }),
    KEYS_DO_NOT_MATCH:()=>({
        message:`Keys do not match`,
        code: CODES.KEYS_DO_NOT_MATCH,
        type:TYPE.ERROR
    })
};