# Alexa + SmartStart
Control your Viper SmartStart enabled car with Alexa (Amazon Echo)

## Instructions

### VERY IMPORTANT: ***DO NOT*** PUBLISH THIS SKILL OR SUBMIT IT FOR CERTIFICATION. THIS IS A PRIVATE SKILL AND WILL WORK WITHOUT PUBLISHING/CERTIFYING.

1. If you do not already have one, create an [**Amazon Developer**](https://developer.amazon.com/) account.
1. Go to the [**Amazon Developer Portal**](https://developer.amazon.com/edw/home.html#/).
1. Click **Create skill >**
    * **Skill Name:** `Viper Smart Start`
    * **Language:** `English (U.S.)`
    * **Model:** `Custom` (should already be selected)
    * Click **Create skill >**
![image](https://user-images.githubusercontent.com/12087169/44659722-280e0080-a9d3-11e8-879e-e5e1f0b8ef16.png)
1. On the accordion menu on the left, click **Invocation**
    * Enter `viper` as the invocation name
    ![image](https://user-images.githubusercontent.com/12087169/44663067-71634d80-a9dd-11e8-8243-e79cbde3f4b7.png)
1. Now click **JSON Editor**, and paste in the contents of 
1. At the top left, click **< Your Skills**
1. Under your new skill, click **View Skill ID**, copy down the ID that shows in the modal
![image](https://user-images.githubusercontent.com/12087169/44659864-b08ca100-a9d3-11e8-8007-4d2229e184fb.png)
1. Go to [https://alexa-skills-server.herokuapp.com/smartstart](https://alexa-skills-server.herokuapp.com/smartstart) and enter your Directed/Viper/Clifford/Python SmartStart username and password, as well as the skill ID that you copied from the previous step.
    * **Make sure to enter this information correctly as you will have to wait 60 seconds before you can try again. This is a security measure to prevent brute-force attacks on the encryption keys.**
    * After you've made sure that you have entered the correct information, click **Submit**.
1. Back in your skill page, go back into your skill, and click **Intents**
    * For each intent listed in the **Intent Schema**:
    * Click **+ Add Intent**
    * Enter the same name as is described in 
    
and **Sample Utterances** to the new skill on the **Amazon Developer Portal**.
  1. On the **Amazon Developer Portal** page, click **Next**.
1. You should now be on the **Configuration** page of the skill.
  * **Service Endpoint Type:** `HTTPS`
  * **Geographical Region:** `North America`
  * Copy and paste the **Skill URL** from the **Viper SmartStart Alexa Skill Setup** page into the text field under **North America**.
  * **Account Linking:** `No`
1. Click **Next**.
  * **Certificate for NA Endpoint:** `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`
1. Click **Next** and you are finished.

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
