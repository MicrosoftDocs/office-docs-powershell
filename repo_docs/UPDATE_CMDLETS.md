#Update existing cmdlet topics
Manuallt adding new parameters to a cmdlet reference topic is doable, but there are several obstacles to overcome:

- **Add the paramter and Type value to the SYNTAX block(s)**: Easy to do if there's only one, but what if there are multiple SYNTAX blocks (also known as parameter sets)? Does the new parameter go in one, some, or all of them? And what about the parameter Type value (String? `$true | $ false`? A finite list of values?)

- **Create a new section for each parameter**: It's easy to create the section and write the descrition, but again, what about the parameter Type value? And which parameter sets does it belong to?

The reality is: you almost always need the open-source [platyPS](https://github.com/PowerShell/platyPS) tool to automatically answer the unknowns about new parameters. To use platyPS, you have two choices:

  - **Use New-MarkdownHelp to dump the latest verion of the cmdlet to a file**: After you create a new local copy of the cmdlet topics that contains the new parameters, you copy the relevant information from your local copy to the topic on GitHub. ***Currently, this is the best and least confusing method***. 

  - **Use Update-MarkdownHelp to update an existing copy of the topic**: Currently this method doesn't work. Without a lot of boring technical details, this method currently requires too much copying of *unrelated* content *from the original version of the topic* back into the updated version of the topic. ***Eventually, this will be the preferred method, but for now, don't bother***.

Removing parameters from topics is a manual excercise, but we'll explain the process fully.

## Use platyPS to add new cmdlets to existing topics
Regardless of whether you use `New-MarkdownHelp` or `Update-MarkdownHelp`, the first several steps of the process are identical.

### Step 1: Install platyPS
The steps are the same as [Create new cmdlet topics](NEW_CMDLETS.md#step-1-install-platyps).

### Step 2: Connect to the PowerShell environment that has the cmdlet
You probably know how to do this already, but the available workloads and connection methods are also described in [Create new cmdlet topics](NEW_CMDLETS.md#step-2-connect-to-the-powershell-environment-that-has-the-cmdlet).

### Step 3: Load platyPS in the PowerShell environment
After you've connected in PowerShell to the server or service \(either in a regular Windows PowerShell window or from a specific PowerShell console shortcut\), run the following command to make the platyPS cmdlets available in your session:

```
Import-Module platyPS
```

### Step 4: Verify your your PSSession variable name
This step is the same as in [Create new cmdlet topics](NEW_CMDLETS.md#step-5-verify-your-your-pssession-variable-name).

To recap: this step is required in Exchange, Skype for Business Online and other products that use remote PowerShell in their connection instructions (one or more **xxx-xxxSession** commands are present), and the value is most likely `$Session`.

If you're using SharePoint, SharePoint Online or another product that doesn't use remote PowerShell, you can skip this step.

**At this point, the instructions diverge based on whether you're using New-MarkdownHelp or Update-MarkdownHelp. As described earlier, the only viable method is Step 5a; don't use Step 5b**

### Step 5a: Use New-MarkdownHelp to dump the latest verion of the cmdlet to a file
These instructions are the same \(up to a point\) as in [Create new cmdlet topics](NEW_CMDLETS.md):

1. The basic syntax is:

    ```
    New-MarkdownHelp -Command <Cmdlet> -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
    ``` 

    or 
    
    ```
    $x = "<Cmdlet1>","<Cmdlet2>",..."<CmdletN>"
    New-MarkdownHelp -Command $x -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
    ``` 

    This example create a topic file for the updated cmdlet named Get-CoolFeature in the Exchange Online PowerShell session where the session variable is `$Session` in the folder "C:\My Docs\ExO".

    ```
    New-MarkdownHelp -Command "Get-CoolFeature" -OutputFolder "C:\My Docs\ExO" -Session $Session
    ```

    This example creates topic files for the updated cmdlets Get-CoolFeature, New-CoolFeature, Remove-CoolFeature, and Set-CoolFeature from the Exchange Online session where the session variable is `$Session` in the folder C:\My Docs\ExO. 

    The first command stores the cmdlet names in a variable. The second command uses that variable to identify the cmdlets and write the output files.

    ```
    $NewCmdlets = "Get-CoolFeature","New-CoolFeature","Remove-CoolFeature","Set-CoolFeature"
    ```

    ```
    New-MarkdownHelp -Command $NewCmdlets -OutputFolder "C:\My Docs\ExO" -Session $Session
    ```

    The resulting topics are plain text UTF-8 files that are formatted using [markdown](https://guides.github.com/features/mastering-markdown/). Office writers use [Visual Studio Code](https://code.visualstudio.com/) to edit topic files, but you can use Notepad or your favorite text editor.

### Step 5b: Use Update-MarkdownHelp to create a new local copy of the topic
> [!Important]
> As described earlier, this method doesn't work yet. Don't use this method.

Without making a fork and a local clone of the [https://aka.ms/office-powershell](https://aka.ms/office-powershell) repo, it's a bit of a pain to get a local copy of the existing cmdlet topics that you want to update, but it can be done:

1. Go to the cmdlet topics location in the appropriate GiHub repository:

    - Exchange: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange)

       For Exchage, you also need to go one level deepter into an appropriate subfolder.

    - Office Web Apps: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps)

    - SharePoint Online: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-online](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-online)

    - SharePoint PNP: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-pnp](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-pnp)

    - SharePoint Server: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-server](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-server)

    - Skype: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype)

    - StaffHub: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub)

    - Teams: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams)

    - Whiteboard: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard)

2. Click on the cmdlet topic so the contents are visible on the page.

3. Click the **Raw** button.

4. Click anywhere on the page and press CTRL + A to select all content on the page, and CTRL + C copy all content.

5. Open Notepad or your favorite text editor and paste the content into a new, blank file.

6. Use **Save as** to save the file:
 
    - With **UTF-8** encoding (the default is likely ANSI)

    - With the same cmdlet name as the file on GitHub (including the .md extension).

    - In a location that's easy for you to find.

7. Repeat the previous steps for as many cmdlets as you need.

8. Run the `Update-MarkdownHelp` platyPS cmdlet. The basic syntax is:

   ```
   Update-MarkdownHelp -Path <PathToDownloadedTopicFiles> -LogPath <PathToLogInformation> [-Session <PSSessionVariableName>]
   ```

### Step 6: Document the new parameters
**At this point, the instructions converge, regardless of the Step 5 method**

1. Find the new parameter(s) in the SYNTAX block and the parameter sections later in the topic.

2. Add a parameter description. We highly enourage you to plagerize existing content and formatting from other cmdlet topics. Many parameters are common across a wide variety of cmdlets. 
 
3. Create/fill out the parameter metadata like other existing parameters in the topic.

    Here's an example of the parameter metadata that's present in every parameter section:

        ```
        Type: String
        Parameter Sets: (All)
        Aliases:
        Applicable: Microsoft StaffHub
        Required: False
        Position: 1
        Default value: None
        Accept pipeline input: False
        Accept wildcard characters: False
    ```

    Most of the atrributes and values are generated automatically by platyPS. The ones that require manual intervention are:

    - **Applicable**: You need to add this attribute and value yourself. Notice the capital 'A'. See other topics for available values (same available values as the **applicable** attribute at the top of the topic). Don't invent new values here. The value **must** come from the list of predefined values.

    - **Default value** and **Accept wildcard characters**: These attributes are present, but the values are never truthfully populated by platyPS (they're always None and False, respectively). You can correct the values if you think it's important. Otherwise, leave them as is.



### Step 7: Copy your changes into the existing topic on GitHub
At this point, the steps are basically identical to [Short URL: aka.ms/office-powershell](../README.md):

1. Go to the cmdlet topics location in the appropriate GiHub repository:

    - Exchange: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange)

       For Exchage, you also need to go one level deepter into an appropriate subfolder.

    - Office Web Apps: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps)

    - SharePoint Online: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-online](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-online)

    - SharePoint PNP: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-pnp](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-pnp)

    - SharePoint Server: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-server](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/sharepoint/sharepoint-ps/sharepoint-server)

    - Skype: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype)

    - StaffHub: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub)

    - Teams: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams)

    - Whiteboard: [https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard](https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard)

2. Click **Edit**

3. Copy/paste your updates into the existing topic (click the **Preview** tab to see what they'll look like).

    **IMPORTANT**: The layout of headings and subheadings must follow a very specific schema that is required for PowerShell Get-Help.
    Any deviation will throw errors in the Pull Request. The schema can be found here: https://github.com/PowerShell/platyPS/blob/master/platyPS.schema.md 
 
4. Once you're satisified with your work, go to the **Propose file change** area at the bottom of the topic. Enter a title title and other description informaton and then click **Propose file change**.
![Image of Propose file change on Github](images/propose_file_change.png)

7. On the next screen, click **Create pull request**.