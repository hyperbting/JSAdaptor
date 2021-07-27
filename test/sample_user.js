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
let resp = getItems("https://mocki.io/v1/699e1707-e60e-4028-88dd-bbdd831f2b09", succ, fail);

//empty: {}
let resp2 = getItems("https://mocki.io/v1/3b29cb85-eb52-4b27-9645-d964c869354c", succ, fail);

//non-exist: 404 for http status 
let resp3 = getItems("https://mocki.io/v1/notexist", succ, fail);