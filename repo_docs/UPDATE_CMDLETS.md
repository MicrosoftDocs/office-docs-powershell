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
> Remote PowerShell connections are deprecated in Exchange Online PowerShell and Security & Compliance PowerShell in favor of REST API connections. For more information, see the following articles:
>
> - [REST API connections in the EXO V3 module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#rest-api-connections-in-the-exo-v3-module).
> - [Deprecation of Remote PowerShell in Exchange Online](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-in-exchange-online-re-enabling/ba-p/3779692).
> - [Deprecation of Remote PowerShell (RPS) Protocol in Security & Compliance PowerShell](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-rps-protocol-in-security-and/ba-p/3815432).
>
> REST API connections in the Exchange Online PowerShell V3 module incorrectly identify many parameter **Type** values as `Object` or `Object[]`. The true parameter type values are visible in product code.

### Step 3: Load platyPS in the PowerShell environment

After you've connected in PowerShell to the server or service (either in a regular Windows PowerShell window or from a specific PowerShell console shortcut), run the following command to make the platyPS cmdlets available in your session:

```powershell
Import-Module platyPS
```

### Step 4: Use New-MarkdownHelp to dump the latest version of the cmdlet to a file

These instructions are the same (up to a point) as in [Create new cmdlet topics](NEW_CMDLETS.md):

The basic syntax is:

```powershell
New-MarkdownHelp -Command <Cmdlet> -OutputFolder "<Path">
```

or

```powershell
$x = "<Cmdlet1>","<Cmdlet2>",..."<CmdletN>"

New-MarkdownHelp -Command $x -OutputFolder "<Path">
```

This example create a topic file for the updated cmdlet named **Get-CoolFeature** in the Exchange Online PowerShell session in the folder "C:\My Docs\ExO".

```powershell
New-MarkdownHelp -Command "Get-CoolFeature" -OutputFolder "C:\My Docs\ExO"
```

This example creates topic files for the updated cmdlets **Get-CoolFeature**, **New-CoolFeature**, **Remove-CoolFeature**, and **Set-CoolFeature** from the Exchange Online session in the folder C:\My Docs\ExO.

The first command stores the cmdlet names in a variable. The second command uses that variable to identify the cmdlets and write the output files.

```powershell
$Delta = "Get-CoolFeature","New-CoolFeature","Remove-CoolFeature","Set-CoolFeature"

New-MarkdownHelp -Command $Delta -OutputFolder "C:\My Docs\ExO"
```

### Step 5: Document the new parameters

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

   - **Type**: In any environment, the values `Object` or `Object[]` are wrong. As previously described, REST API connections in the Exchange Online PowerShell V3 module incorrectly identify many parameter **Type** values as `Object` or `Object[]`. Other values like `String`, `Boolean`, and `DateTime` are detected correctly. The true parameter type values are visible in product code. 

   - **Applicable**: You need to add this attribute and value yourself. Notice the capital 'A'. See other topics for available values (same available values as the **applicable** attribute at the top of the topic). Don't invent new values here. The value **must** come from the list of predefined values.

   - **Default value** and **Accept wildcard characters**: These attributes are present, but the values are never truthfully populated by platyPS **or any other PowerShell utility** (they're always None and False, respectively). You can correct the values if you think it's important. Otherwise, leave them as is.

### Step 6: Copy your changes into the existing topic on GitHub

1. Go to the cmdlet topics location in the appropriate GiHub repository:

   - Exchange: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange>
   - Office Web Apps: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps>
   - Skype: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype>
   - StaffHub: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub>
   - Teams: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams>
   - Whiteboard: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard>

2. Find the existing topic and click **Edit**.

3. Copy/paste your updates (and only your updates) from your new, local copy of the topic into the existing topic (click the **Preview** tab to see what they'll look like).

   > [!IMPORTANT]
   > The layout of headings and subheadings must follow a very specific schema that is required for PowerShell Get-Help. Any deviation will throw errors in the Pull Request. The schema can be found here: <https://github.com/PowerShell/platyPS/blob/master/platyPS.schema.md>.

4. At this point, the steps are identical to [Short URL: aka.ms/office-powershell](../README.md) (You're starting at Step 4).

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
