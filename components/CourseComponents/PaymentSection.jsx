/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FaInfoCircle, FaEnvelope, FaPhoneSquareAlt, FaBookmark, FaIdCardAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import coverImg from '../../public/img/css_flexbox 1.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useAuth from '../../utilities/Hooks/useAuth';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2'
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const PaymentSection = ({ course }) => {
    const router = useRouter();
    const { user } = useAuth();
    const allUserData = useSelector((state) => state.users.usersList);
    const thisUser = allUserData.find(userData => userData.email === user.email);

    const payAndEnroll = async (user) => {
        try {
            const res = await axios.put(`http://localhost:3000/api/users/enroll/${thisUser._id}/${course.data._id}`, user.data);
            if (res.status === 201) {
                Swal.fire(
                    'Payment Complete',
                    'Thanks for the payment',
                    'success'
                )
                router.push(`/my-course/${user.email}`);
            }
        } catch (err) {
            console.log(err);
        }
    };


    // PAYPAL VALUES
    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };


    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (
            <>
                {(showSpinner && isPending) && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function () {
                            // Your code here after capture the order
                        });
                    }}
                />
            </>
        );
    }



    return (
        <div className='bg-white dark:bg-slate-800'>
            <div className="px-24 py-16">
                <div className="grid grid-rows-1 md:grid-cols-[300px_minmax(300px,_1fr)] lg:grid-cols-[350px_minmax(600px,_1fr)] gap-5">
                    <div>
                        <div className="bg-slate-200 dark:bg-slate-700 p-5 grid grid-rows-1 rounded-xl">
                            <div>
                                <Image
                                    src={coverImg}
                                    alt="Course Cover"
                                    className="w-full"
                                    height="165px"
                                    draggable="false"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-2xl text-slate-700 dark:text-slate-200">{course?.data?.title}</h4>
                                <p className="text-slate-400 text-[0.9em]">#html #css #beginners</p>
                                <p className="text-sm mt-2 px-2 text-stone-600 dark:text-stone-200">● 10 Quizzes ● 10 Articles <br /> ● 10 Problem Solving</p>
                            </div>
                            <div className='bg-slate-100 mt-3 px-5 py-2 rounded-md'>
                                <h4 className="text-2xl text-center sm:text-left font-bold text-rose-500 ">Pay: <span>$</span>{course?.data?.price}</h4>
                            </div>
                        </div>
                        <div className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-md rounded-md p-5 h-auto mt-5">
                            <div className="flex items-center">
                                <FaInfoCircle className="mr-2 text-lg" />
                                <h5 className="text-lg font-semibold">Account Info</h5>
                            </div>
                            <div className="border-[1px] border-stone-300 my-2"></div>
                            <table className="table-compact">
                                <tbody>
                                    <tr>
                                        <td className="flex items-center">
                                            <FaIdCardAlt /> &nbsp; Name
                                        </td>
                                        <td>:&nbsp;{thisUser?.displayName}</td>
                                    </tr>
                                    <tr>
                                        <td className="flex items-center">
                                            <FaBookmark /> &nbsp; Role
                                        </td>
                                        <td>:&nbsp; User</td>
                                    </tr>
                                    <tr>
                                        <td className="flex items-center">
                                            <FaPhoneSquareAlt /> &nbsp; Phone
                                        </td>
                                        <td>:&nbsp; +880 123456</td>
                                    </tr>
                                    <tr>
                                        <td className="flex items-center">
                                            <FaEnvelope /> &nbsp; Email
                                        </td>
                                        <td>{thisUser?.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg">
                        <div>
                            <div className="px-8 py-1 mt-5">
                                <h2 className="text-2xl font-medium">Payment Checkout</h2>
                            </div>
                            <hr className="mt-2 mb-3 mx-6" />
                        </div>
                        <div className="px-10 mb-8">
                            <form>
                                <select name="payment-option" className="block appearance-none w-full bg-slate-100 dark:bg-slate-600 py-3 px-4 pr-8 rounded-lg leading-tight outline-none mt-5 mb-2 text-lg  " required>
                                    <option>Pay with Paypal</option>
                                </select>
                                <div className="mt-4">
                                    <label className='pl-1 text-lg  pb-2'>Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="bg-slate-100 dark:bg-slate-600 w-full py-2 px-3 outline-none mb-2 text-lg rounded-lg   "
                                        required
                                    />
                                </div>
                                <div className="mt-2">
                                    <label className='pl-1 text-lg  pb-2'>Card Information</label>
                                    <input
                                        type="number"
                                        name="card-number"
                                        placeholder="1111 2222 3333 4444"
                                        className="bg-slate-100 dark:bg-slate-600 w-full py-2 px-3 outline-none mb-2 text-lg appearance-none rounded-lg  "
                                        required
                                    />
                                    <div className="flex justify-between mt-1.5">
                                        <input
                                            type="number"
                                            name="card-number"
                                            placeholder="MM/YY"
                                            className="bg-slate-100 dark:bg-slate-600 w-full py-2 px-3 appearance-none mr-2 outline-none mb-2 text-lg rounded-lg  "
                                            required
                                        />
                                        <input
                                            type="number"
                                            name="card-number"
                                            placeholder="CVC"
                                            className="bg-slate-100 dark:bg-slate-600 w-full py-2 px-3 ml-2  appearance-none outline-none mb-2 text-lg rounded-lg  "
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label className='pl-1 text-lg pb-2'>Card Holder Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Card Holder Name"
                                        className="bg-slate-100 dark:bg-slate-600 w-full py-2 px-3 outline-none mb-2 text-lg rounded-lg  "
                                        required
                                    />
                                </div>
                                <div className="mt-2">
                                    <label className='pl-1 text-lg pb-2'>Country</label>
                                    <div className="flex justify-between">
                                        <select name="payment-option" className="block appearance-none w-full bg-slate-100 dark:bg-slate-600 py-3 px-4 pr-8 rounded-lg leading-tight outline-none mb-2 text-lg mr-2  " required>
                                            <option>Select a Country</option>
                                            <option value="Afganistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bonaire">Bonaire</option>
                                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Canary Islands">Canary Islands</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Channel Islands">Channel Islands</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos Island">Cocos Island</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote DIvoire">Cote DIvoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaco">Curacao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Ter">French Southern Ter</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Great Britain">Great Britain</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="India">India</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea North">Korea North</option>
                                            <option value="Korea Sout">Korea South</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau">Macau</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Midway Islands">Midway Islands</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Nambia">Nambia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherland Antilles">Netherland Antilles</option>
                                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                            <option value="Nevis">Nevis</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau Island">Palau Island</option>
                                            <option value="Palestine">Palestine</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Phillipines">Philippines</option>
                                            <option value="Pitcairn Island">Pitcairn Island</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                                            <option value="Republic of Serbia">Republic of Serbia</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="St Barthelemy">St Barthelemy</option>
                                            <option value="St Eustatius">St Eustatius</option>
                                            <option value="St Helena">St Helena</option>
                                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                            <option value="St Lucia">St Lucia</option>
                                            <option value="St Maarten">St Maarten</option>
                                            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                            <option value="Saipan">Saipan</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="Samoa American">Samoa American</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Tahiti">Tahiti</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Erimates">United Arab Emirates</option>
                                            <option value="United States of America">United States of America</option>
                                            <option value="Uraguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City State">Vatican City State</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                            <option value="Wake Island">Wake Island</option>
                                            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zaire">Zaire</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                        <input
                                            type="number"
                                            name="postal-code"
                                            placeholder="Postal Code"
                                            className="bg-slate-100 dark:bg-slate-600 w-full py-2 px-3 outline-none mb-2 text-lg ml-2 rounded-lg  "
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" checked className="mr-2 my-3 checkbox" />
                                    <label>Save Payment Information</label>
                                </div>

                                <h3 className='text-slate-700 dark:text-slate-200 text-2xl py-7'>Pay total <span>$</span>{course?.data?.price} with </h3>

                                <button className=' w-full'>
                                    <PayPalScriptProvider
                                        className="z-10"
                                        options={{
                                            "client-id": "test",
                                            components: "buttons",
                                            currency: "USD",
                                            "disable-funding": "credit,card,p24,venmo"
                                        }}
                                    >
                                        <ButtonWrapper
                                            currency={currency}
                                            showSpinner={false}
                                        />
                                    </PayPalScriptProvider>
                                </button>
                                <div className='text-center py-5'>
                                    <button className='text-center mx-auto bg-slate-300 dark:bg-slate-500 py-1 px-4' type="submit" onClick={payAndEnroll}>Mark Payment as done (For test)</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSection;