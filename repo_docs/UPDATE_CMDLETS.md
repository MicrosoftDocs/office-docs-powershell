# Update existing cmdlet topics

Manually adding new parameters to a cmdlet reference topic is doable, but there are several obstacles to overcome:

- **Add the parameter and Type value to the SYNTAX block(s)**: Easy to do if there's only one, but what if there are multiple SYNTAX blocks (also known as parameter sets)? Does the new parameter go in one, some, or all of them? And what about the parameter Type value (String? `$true | $ false`? A finite list of values?)

- **Create a new section for each parameter**: It's easy to create the section and write the description, but again, what about the parameter Type value? And which parameter sets does it belong to?

The reality is: you almost always need the open-source [platyPS](https://github.com/PowerShell/platyPS) tool to automatically answer the unknowns about new parameters.

Currently, the best method with platyPS is to simply create a new version of the topic using the **New-MarkdownHelp** cmdlet, and copy whatever you need out of it. Theoretically, platyPS has an **Update-MarkdownHelp** cmdlet that automatically updates an existing local copy of the topic for you, which you can then upload in its entirety to the GitHub website to replace the existing topic. This approach currently has some issues in our environment:

- It's difficult to get a local copy of an existing cmdlet topic from the GitHub website (unless you're interested in forking the repo and having a local cloned copy on your computer). You have to copy/paste everything from the Raw view of the topic on the web site, and the local copy text file you manually create needs to be UTF-8 formatted (instead of the Notepad default of ANSI).

- The updated topic will have missing or incorrect _unrelated_ parameter and other topic metadata information that you'll need to change by copy/pasting those values _back from_ the existing topic on GitHub into your local topic before you can even think about uploading the updated topic to GitHub (more than double the work required).

In short, it's simply easier and faster to generate a new local copy of the cmdlet topic, and copy/paste only what you need into the existing topic on GitHub.

Removing parameters from topics is a manual exercise, but we'll explain the process fully.

## Use platyPS to add new cmdlets to existing topics

### Step 1: Install platyPS

The steps are the same as [Create new cmdlet topics](NEW_CMDLETS.md#step-1-install-platyps).

### Step 2: Connect to the PowerShell environment that has the cmdlet

You probably know how to do this already, but the available workloads and connection methods are also described in [Create new cmdlet topics](NEW_CMDLETS.md#step-2-connect-to-the-powershell-environment-that-has-the-cmdlet).

> [!NOTE]
> In v3.0.0 or later of the EXO V3 module, you need to connect to Exchange Online in remote PowerShell mode using the _UseRPSSession_ switch in the **Connect-ExchangeOnline** command. If you omit the _UseRPSSession_ switch and connect in REST API mode, the **Type** value of most parameters will be the incorrect and unhelpful `Object` or `Object[]` values. For more information about the EXO V3 module, see [Updates for version 3.0.0 (the EXO V3 module)](/powershell/exchange/exchange-online-powershell-v2#updates-for-version-300-the-exo-v3-module).

### Step 3: Load platyPS in the PowerShell environment

After you've connected in PowerShell to the server or service (either in a regular Windows PowerShell window or from a specific PowerShell console shortcut), run the following command to make the platyPS cmdlets available in your session:

```powershell
Import-Module platyPS
```

### Step 4: Store your PSSession in a variable

This step is the same as in [Create new cmdlet topics](NEW_CMDLETS.md#step-5-store-your-pssession-in-a-variable).

To recap: this step is required in Exchange and other products that use remote PowerShell.

> [!NOTE]
> As described earlier, you need to connect to Exchange Online in remote PowerShell mode using the _UseRPSSession_ switch in the **Connect-ExchangeOnline** command. Although the [Get-ConnectionInformation](/powershell/module/exchange/get-connectioninformation) cmdlet is a reasonable replacement for Get-PSSession in REST API mode, the output doesn't work with the _Session_ parameter in **New-MarkdownHelp**. For more information about the EXO V3 module, see [Updates for version 3.0.0 (the EXO V3 module)](/powershell/exchange/exchange-online-powershell-v2#updates-for-version-300-the-exo-v3-module).

If you're using Microsoft Teams or another product that doesn't use remote PowerShell, you can skip this step.

### Step 5: Use New-MarkdownHelp to dump the latest version of the cmdlet to a file

These instructions are the same (up to a point) as in [Create new cmdlet topics](NEW_CMDLETS.md):

The basic syntax is:

```powershell
New-MarkdownHelp -Command <Cmdlet> -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
```

or

```powershell
$x = "<Cmdlet1>","<Cmdlet2>",..."<CmdletN>"
New-MarkdownHelp -Command $x -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
```

This example create a topic file for the updated cmdlet named **Get-CoolFeature** in the Exchange Online PowerShell session where the session variable is `$Session` in the folder "C:\My Docs\ExO".

```powershell
New-MarkdownHelp -Command "Get-CoolFeature" -OutputFolder "C:\My Docs\ExO" -Session $Session
```

This example creates topic files for the updated cmdlets **Get-CoolFeature**, **New-CoolFeature**, **Remove-CoolFeature**, and **Set-CoolFeature** from the Exchange Online session where the session variable is `$Session` in the folder C:\My Docs\ExO.

The first command stores the cmdlet names in a variable. The second command uses that variable to identify the cmdlets and write the output files.

```powershell
$Delta = "Get-CoolFeature","New-CoolFeature","Remove-CoolFeature","Set-CoolFeature"
```

```powershell
New-MarkdownHelp -Command $Delta -OutputFolder "C:\My Docs\ExO" -Session $Session
```

### Step 6: Document the new parameters

The resulting topics are plain text UTF-8 files that are formatted using [markdown](https://guides.github.com/features/mastering-markdown/). Office writers use [Visual Studio Code](https://code.visualstudio.com/) to edit topic files, but you can use Notepad or your favorite text editor.

1. Find the new parameter(s) in the SYNTAX block and the parameter sections.

2. Add a parameter description. We highly encourage you to plagiarize existing content and formatting from other cmdlet topics. Many parameters are common across a wide variety of cmdlets.

3. Create/fill out the parameter metadata like other existing parameters in the topic.

   Here's an example of the parameter metadata that's present in every parameter section:

   ```yaml
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

   Most of the attributes and values are generated automatically by platyPS. The ones that require manual intervention are:

   - **Applicable**: You need to add this attribute and value yourself. Notice the capital 'A'. See other topics for available values (same available values as the **applicable** attribute at the top of the topic). Don't invent new values here. The value **must** come from the list of predefined values.

   - **Default value** and **Accept wildcard characters**: These attributes are present, but the values are never truthfully populated by platyPS **or any other PowerShell utility** (they're always None and False, respectively). You can correct the values if you think it's important. Otherwise, leave them as is.

### Step 7: Copy your changes into the existing topic on GitHub

At this point, the steps are basically identical to [Short URL: aka.ms/office-powershell](../README.md):

1. Go to the cmdlet topics location in the appropriate GiHub repository:

   - Exchange: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange>
   - Office Web Apps: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps>
   - Skype: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype>
   - StaffHub: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub>
   - Teams: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams>
   - Whiteboard: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard>

2. Find the topic and click **Edit**

3. Copy/paste your updates (and only your updates) from your new, local copy of the topic into the existing topic (click the **Preview** tab to see what they'll look like).

   > [!IMPORTANT]
   > The layout of headings and subheadings must follow a very specific schema that is required for PowerShell Get-Help. Any deviation will throw errors in the Pull Request. The schema can be found here: <https://github.com/PowerShell/platyPS/blob/master/platyPS.schema.md>.

4. After you're done modifying files, go to the **Propose file change** section at the bottom of the page:

   - A brief title is required. By default, the title is the name of the file, but you can change it.
   - Optionally, you can enter more details in the **Add an optional extended description** box.

   When you're ready, click the green **Propose file change** button.

   ![Propose file change section.](../images/propose-file-change.png)

5. On the **Comparing changes** page that appears, click the green **Create pull request** button.

   ![Comparing changes page.](../images/comparing-changes-page.png)

6. On the **Open a pull request** page that appears, click the green **Create pull request** button.

   ![Open a pull request page.](../images/open-a-pull-request-page.png)

> [!NOTE]
>
> Your permissions in the repo determine what you see. People with no special privileges will see the **Propose file change** section and subsequent confirmation pages as described. People with permissions to create and approve their own pull requests will see a similar **Commit changes** section with extra options for creating a new branch and fewer confirmation pages.
>
> The point is: click any green buttons that are presented to you until there are no more.

## Remove existing parameters from existing topics

Removing parameters is a search and destroy mission in the existing topics on GitHub, using the basic [Editing Instructions](../README.md).

The most important thing to remember: a parameter isn't gone until it's truly not available to customers. If a parameter is still available, but it's going away "in the future", it doesn't work correctly anymore, or isn't supposed to be available, it needs to remain in the topic until the product code is actually changed to remove the parameter. Until then, you can use this type of language for the parameter description:

- This parameter is reserved for internal Microsoft use.

- This parameter has been deprecated and is no longer used.

Hear me now, believe me later: Removing available parameters from a cmdlet reference topic can create as many issues as their removal is supposed to solve.

After you've confirmed that the parameter in question is really gone, find and remove all references to the parameter in the topic:

- The SYNTAX block(s)
- Examples
- The individual parameter sections where each parameter is described. Be sure to delete the whole section including the \`\`\`yaml part at the end (don't leave trailing \`\`\`, which is easy to do).
