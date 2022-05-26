import React from 'react';
const Blog = () => {
    return (
        <div className='mx-16 md:mx-48'>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src='https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/166554638_1191235521334843_6946793449723901526_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sxSKWs1JF94AX--rRlw&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT8zWAODFCoZ-VhwNHQ7q9HwgrIWFxQW8Zo5spwwAKi-Jw&oe=62B5BA34' alt='' />
                    <div >
                        <h1 >Sourav Arefin.</h1>
                        <h1 >Posted On 20th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style text-red-700 text-center text-2xl px-5"> What are the different ways to manage a state in a React application??</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.</p>



                </div>

            </div>

            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src='https://cerebralpalsynewstoday.com/wp-content/uploads/2017/06/shutterstock_52856165-921x480@2x.jpg' alt='' />
                    <div >
                        <h1 >Doctor SIngh.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-2xl text-red-700">How does prototypical inheritance work?
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        There is an unnoticed [[Prototype]] property in every object in addition to its methods and attributes. JavaScript's Prototypal Inheritance capability may be used to provide extra methods and properties to objects. Inheritance is a process through which an object may take on the traits and behaviors of another object. The [[Prototype]] of an object may typically be obtained and modified using the Object.getPrototypeOf and Object.setPrototypeOf methods. The _proto_ method is now often used in modern languages to set it.
                    </p>

                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src='https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/275282669_133135179258273_7494846335747922317_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-jOmX-yWqA8AX_enDG8&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT_WbM_Ic0wx5pSZhm0L5o8L-s1dMzjP3tll-u6DWBvqXQ&oe=6294CCD8' alt='' />
                    <div >
                        <h1 >MD Moniruzzaman.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-xl md:2xl text-red-700 px-5">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>

                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">Using setState allows you to move a state from one component to another without having to change the original. SetState is required for integrating an item into the current state (). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup. To make changes to the object's current state, we use the setState() method. You may be sure that the component's current state has been maintained by requesting a re-render. If a synchronous call is performed to change an object's state, it may not be updated on the console at the right time.</p>


                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src='https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/271447490_3090037937876325_8846754626767702644_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4dJEgKPNWdYAX_qkdKI&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT9HAbfFZVuO77O_PoU-1lYPusngtkX3Q0BZLaQV_Q9ujg&oe=62949B62' alt='' />
                    <div >
                        <h1 >Tobibur Rohman.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-2xl text-red-700 px-5">How will you improve the performance of a React Application??</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting (). React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. As many chunk files as you'd want
                    </p>

                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src='https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/166273260_3850960435018827_7621995659053407621_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BWNIdJjkxfcAX80QwA2&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT9rwrb3NJT0s7Wn7SN6U-okzWGFiP5C-XN-p7o0hQ5RaA&oe=62B49D21' alt='' />
                    <div >
                        <h1 >অর্থহীন পারভেজ.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-xl md:2xl text-red-700 px-5">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one..
                    </p>

                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src='https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/280395725_5089119057861942_2920297880430198310_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L8dEVzGuZ1IAX-dkufs&tn=j8_ZM5gn97JBkDh4&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT9Nav76WfRgvqq3l4C_HDXTfbH24c4wpPUWI3uF_uTC2w&oe=62945965' alt='' />
                    <div >
                        <h1 > Ashraful Islam.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-2xl text-red-700">What is a unit test? Why should write unit tests??</h1>
                    <p className="sp-style p-5 md:p-10 text-md md:text-xl">
                        Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code. After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all of the needed features are available. These unit tests are then grouped together in a test suite for easy access. Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example, is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha. Serial test execution in this framework simplifies asynchronous testing.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Blog;