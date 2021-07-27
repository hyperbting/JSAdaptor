import {getItems} from './xrspace_apiadaptor.js';

function succ(resp)
{
	console.log( "sample_user:" + resp );
}

function fail()
{
	console.log( "sample_user failed");
}

//correct: {"items":[...]}
let resp = getItems("normal", 100, succ, fail);

//empty: {}
let resp2 = getItems("empty", 0, succ, fail);

//non-exist: 404 from http status 
let resp3 = getItems("notexist", 100, succ, fail);