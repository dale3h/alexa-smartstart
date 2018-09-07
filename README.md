# Alexa + SmartStart
Control your Viper SmartStart enabled car with Alexa (Amazon Echo)

## Instructions

### VERY IMPORTANT: ***DO NOT*** PUBLISH THIS SKILL OR SUBMIT IT FOR CERTIFICATION. THIS IS A PRIVATE SKILL AND WILL WORK WITHOUT PUBLISHING/CERTIFYING.

1. If you do not already have one, create an [**Amazon Developer**](https://developer.amazon.com/) account.
1. Go to the [**Amazon Developer Portal**](https://developer.amazon.com/edw/home.html#/).
1. Click **Create skill >**
    * **Skill Name:** `Viper Smart Start`
    * **Language:** `English (U.S.)`(you need to select the appropriate region here. e.g. if you live in the U.K., select `English (U.K.)`)
    * **Model:** `Custom` (should already be selected)
    * Click **Create skill >**
![image](https://user-images.githubusercontent.com/12087169/44659722-280e0080-a9d3-11e8-879e-e5e1f0b8ef16.png)
1. On the accordion menu on the left, click **Invocation**
    * Enter `viper` as the invocation name
    ![image](https://user-images.githubusercontent.com/12087169/44663067-71634d80-a9dd-11e8-8243-e79cbde3f4b7.png)
1. Now click **JSON Editor**, and paste in the contents of viperModelSchema.json in the file directory
```
{
    "interactionModel": {
        "languageModel": {
            "invocationName": "viper",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "StartIntent",
                    "slots": [],
                    "samples": [
                        "start my car",
                        "turn on the vehicle",
                        "start the vehicle",
                        "turn on the car",
                        "start the car"
                    ]
                },
                {
                    "name": "StopIntent",
                    "slots": [],
                    "samples": [
                        "stop my car",
                        "shutdown my car",
                        "turn off my car",
                        "shutdown the vehicle",
                        "turn off the vehicle",
                        "stop the vehicle",
                        "shutdown the car",
                        "turn off the car",
                        "stop the car"
                    ]
                },
                {
                    "name": "UnlockIntent",
                    "slots": [],
                    "samples": [
                        "disarm my car",
                        "unlock my car",
                        "disarm the vehicle",
                        "unlock the vehicle",
                        "disarm the car",
                        "unlock the car"
                    ]
                },
                {
                    "name": "LockIntent",
                    "slots": [],
                    "samples": [
                        "arm the vehicle",
                        "lock the vehicle",
                        "arm my car",
                        "arm the car",
                        "lock my car",
                        "lock the car"
                    ]
                },
                {
                    "name": "SpeedIntent",
                    "slots": [],
                    "samples": [
                        "what was the top speed",
                        "what was teh fastest speed",
                        "top speed",
                        "fastest speed",
                        "how fast"
                    ]
                },
                {
                    "name": "LocateIntent",
                    "slots": [],
                    "samples": [
                        "find the vehicle",
                        "locate the vehicle",
                        "where is the vehicle",
                        "find the car",
                        "locate the car",
                        "where is the car",
                        "find",
                        "locate",
                        "where"
                    ]
                }
            ],
            "types": []
        }
    }
}
```
![image](https://user-images.githubusercontent.com/12087169/44663729-55f94200-a9df-11e8-8ba8-7f848dc39d4e.png)
1. Click **Save Model**
1. At the top left, click **< Your Skills**
1. Under your new skill, click **View Skill ID**, copy down the ID that shows in the modal
![image](https://user-images.githubusercontent.com/12087169/44659864-b08ca100-a9d3-11e8-8007-4d2229e184fb.png)
1. Go to [https://alexa-skills-server.herokuapp.com/smartstart](https://alexa-skills-server.herokuapp.com/smartstart) and enter your Directed/Viper/Clifford/Python SmartStart username and password, as well as the skill ID that you copied from the previous step.
    * **Make sure to enter this information correctly as you will have to wait 60 seconds before you can try again. This is a security measure to prevent brute-force attacks on the encryption keys.**
    * After you've made sure that you have entered the correct information, click **Submit**.
1. Back in your skill page, go back into your skill, and click **Endpoint**
    * **Service Endpoint Type:** `HTTPS`
    * Copy and paste the **Skill URL** from the **Viper SmartStart Alexa Skill Setup** page into the text field under **Default Region**.
    * Select SSL Certificate Type > `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`
    * Copy and paste the **Skill URL** from the **Viper SmartStart Alexa Skill Setup** page into the text field under **North America**.
    * Select SSL Certificate Type > `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`
    ![image](https://user-images.githubusercontent.com/12087169/44663924-cdc76c80-a9df-11e8-89a8-05ca655f05cb.png)
    * Click **Save Endpoints**
1. On the accordion menu ont he left, click **Custom** at the top
    * You should have green checkmarks for **Invocation Name**, **Intents, Samples, and Slots**, and **Endpoint**
    * Click **Build Model**
    * You will receive a popup message telling you to wait for the model to build
    * Once the build completes, all sections will be green
    ![image](https://user-images.githubusercontent.com/12087169/44664122-5d6d1b00-a9e0-11e8-83a8-dbe078790637.png)
1. Go to your Alexa App, click the hamburger menu in the top left, click **Skills**
    * Click **Your Skills** in the top right
    * Verify that **Viper SmartStart** shows up
    ![screenshot_20180827-112830](https://user-images.githubusercontent.com/12087169/44669241-5dbfe300-a9ed-11e8-8fdf-6cb06104da12.png)
1. And you're done! You can test this out by making sure your car is in the ready state to start, then say to Alexa: *Alexa, tell viper to start my car*. Alexa should respond by saying: *Ladies and Gentleman, start your engines!*

## Optional Step - Adding an icon to your Alexa Skill
1. Go to the **Distribution** tab in your Alexa Dev console
1. Scroll down until you see entries for the **Small Skill Icon** and **Large Skill Icon**
    * I added an image file to the project directory called `viper.png`, so download that image, then drag and drop it over both those sections in your dev console
    ![image](https://user-images.githubusercontent.com/12087169/44668009-58ad6480-a9ea-11e8-8307-d36752ac3867.png)
    * Click **Save and continue**
1. That's it! Do not do anything else in the distribution settings. You should be able to go right into your Alexa Skills on your phone and see the new icon!

## Donations

If you find yourself enjoying this skill, please consider making a small donation of $7 to help cover the server costs.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QMN7ED7745TQJ">
  <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="147" height="47" alt="Donate with PayPal" border="0">
</a>

## Sample Phrases

* *Alexa, tell Viper to unlock the car*
* *Alexa, lock the truck with Viper*
* *Alexa, tell Viper to start the car*
* *Alexa, ask Viper what was the top speed today?*
* *Alexa, ask Viper to find the Jeep*

## Bugs and Issues

Please report any bugs or issues to the [Issues](https://github.com/dale3h/alexa-smartstart/issues) page.
