import React from 'react'
import "./Form.scss"
import { Button } from '../../../Button/Button'

export const Form = () => {
    return (
        <div className='form-content'>
            <h2>Join Gem Hunters Today</h2>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-group">
                    <label>Current Crypto Portfolio Balance</label>
                    <select>
                        <option>Current Crypto Portfolio Balance</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000+</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea rows={3}></textarea>
                </div>


                {/* <button type="submit">Get Started</button> */}
            </form>
            <Button type={"submit"} text={"Get Started"} />
        </div>

    )
}
