// Let's try out some ES2020 features.

const someObj = {
    person: {
        name: 'John',
        job: 'programmer',
        age: 32
    }
};

const job = someObj.person?.job;

const hobbies = someObj.person?.hobbies;

console.log({ job, hobbies });

const promisesPromises = [Promise.resolve(1), Promise.reject(null), Promise.resolve('Munchies'), Promise.reject('Sunlight')];

Promise.allSettled(promisesPromises).then(results => console.log({ results }));

const loremIpsum = 'Lorem Ipsum';

const regexp = /[a-n]/g;

const loremIpsumMatches = loremIpsum.matchAll(regexp);

console.log({ loremIpsumMatches: [...loremIpsumMatches] });