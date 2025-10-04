---
ms.date: 10/03/2025
---

# Update existing cmdlet articles

Manually adding new parameters to a cmdlet reference article is doable, but there are several obstacles to overcome:

- **Add the parameter and Type value to the SYNTAX block(s)**: Easy to do if there's only one, but what if there are multiple SYNTAX blocks (also known as parameter sets)? Does the new parameter go in one, some, or all of them? And what about the parameter Type value (String? `$true | $ false`? A finite list of values?)

- **Create a new section for each parameter**: It's easy to create the section and write the description, but again, what about the parameter Type value? And which parameter sets does it belong to?

The reality is: you almost always need the open-source [platyPS](https://github.com/PowerShell/platyPS) tool to automatically answer the unknowns about new parameters.

Currently, the best method with platyPS is to create a new version of the article using the **New-MarkdownCommandHelp** cmdlet, and copy whatever you need out of it. Theoretically, platyPS has an **Update-MarkdownCommandHelp** cmdlet that automatically updates an existing local copy of the article for you, which you can then upload in its entirety to the GitHub website to replace the existing article. This approach currently has some issues in our environment:

- It's difficult to get a local copy of an existing cmdlet article from the GitHub website (unless you're interested in forking the repo and having a local cloned copy on your computer).
  - You need to copy/paste everything from the Raw view of the article on the web site.
  - You need to manually create a local text file that's UTF-8 formatted (instead of the Notepad default of ANSI).
- The updated article has missing or incorrect _unrelated_ parameter and cmdlet metadata information that you copy/paste _from_ the existing article on GitHub back into your local article.

In short, it's easier and faster to generate a new local copy of the cmdlet article, and copy/paste only what you need into the existing article on GitHub.

Removing parameters from articles is a manual exercise, but this article explains the process fully.

## Use platyPS to add new cmdlets to existing articles

### Step 1: Install platyPS

The steps are the same as in [Create new cmdlet articles](NEW_CMDLETS.md#step-1-install-platyps-on-current-versions-of-windows).

### Step 2: Connect to the PowerShell environment that has the cmdlet

You probably know how to connect, but the available workloads and connection methods are also described in [Create new cmdlet articles](NEW_CMDLETS.md#step-2-connect-to-the-powershell-environment-that-has-the-cmdlet).

> [!NOTE]
> Remote PowerShell connections are deprecated in Exchange Online PowerShell and Security & Compliance PowerShell in favor of REST API connections. For more information, see the following articles:
>
> - [REST API connections in the EXO V3 module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#rest-api-connections-in-the-exo-v3-module).
> - [Deprecation of Remote PowerShell in Exchange Online](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-in-exchange-online-re-enabling/ba-p/3779692).
> - [Deprecation of Remote PowerShell (RPS) Protocol in Security & Compliance PowerShell](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-rps-protocol-in-security-and/ba-p/3815432).
>
> REST API connections in the Exchange Online PowerShell V3 module incorrectly identify many parameter **Type** values as `Object` or `Object[]`. The true parameter type values are visible in product code.

### Step 3: Load platyPS in the PowerShell environment

After you connect in PowerShell to the server or service (either in a regular Windows PowerShell window or from a specific PowerShell console shortcut), run the following command to make the platyPS cmdlets available in your session:

```powershell
Import-Module Microsoft.PowerShell.PlatyPS
```

<a name='step-4-use-new-markdownhelp-to-dump-the-latest-version-of-the-cmdlet-to-a-file'></a>

### Step 4: Use New-MarkdownCommandHelp to dump the latest version of the cmdlet to a file

These instructions are basically the same as in [Create new cmdlet articles](NEW_CMDLETS.md):

The basic syntax is:

```powershell
New-MarkdownCommandHelp -Command (Get-Command -Name <Cmdlet>) -OutputFolder "<Path">
```

Or

```powershell
$x = Get-Command "<Cmdlet1>","<Cmdlet2>",..."<CmdletN>"

New-MarkdownCommandHelp -CommandInfo $x -OutputFolder "<Path">
```

This example creates an article file for the updated cmdlet named **Get-CoolFeature** in the Exchange Online PowerShell session in the folder "C:\My Docs\ExO".

```powershell
New-MarkdownCommandHelp -Command (Get-Command "Get-CoolFeature") -OutputFolder "C:\My Docs\ExO"
```

This example creates article files for the updated cmdlets **Get-CoolFeature**, **New-CoolFeature**, **Remove-CoolFeature**, and **Set-CoolFeature** from the Exchange Online session in the folder C:\My Docs\ExO.

The first command stores the cmdlet names in a variable. The second command uses that variable to identify the cmdlets and write the output files.

```powershell
$Delta = "Get-CoolFeature","New-CoolFeature","Remove-CoolFeature","Set-CoolFeature"

New-MarkdownCommandHelp -CommandInfo $Delta -OutputFolder "C:\My Docs\ExO"
```

### Step 5: Document the new parameters

The resulting articles are plain text UTF-8 files that are formatted using [markdown](https://guides.github.com/features/mastering-markdown/). Office writers use [Visual Studio Code](https://code.visualstudio.com/) to edit article files, but you can use Notepad or your favorite text editor.

1. Find the new parameters in the SYNTAX block and the parameter sections.

2. Add a parameter description. We highly encourage you to plagiarize existing content and formatting from other cmdlet articles. Many parameters are common across a wide variety of cmdlets.

3. Create/fill out the parameter metadata like other existing parameters in the article. For a complete description, see [Parameter metadata](NEW_CMDLETS.md#parameter-metadata).

### Step 6: Copy your changes into the existing article on GitHub

1. Go to the cmdlet articles location in the appropriate GitHub repository:

   - Exchange: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/main/exchange/exchange-ps/ExchangePowerShell/>
   - Office Web Apps: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/main/officewebapps/officewebapps-ps/officewebapps/>
   - Skype: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/main/skype/skype-ps/SkypeForBusiness/>
   - Teams: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams>
   - Whiteboard: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/main/teams/teams-ps/MicrosoftTeams/>

2. Find the existing article and select **Edit this file**.

3. Copy/paste your updates (and only your updates) from your new, local copy of the article into the existing article (select the **Preview** tab to see what they look like).

   > [!IMPORTANT]
   > The layout of headings and subheadings follow a specific schema required for **Get-Help** in PowerShell. As little as one text character in the wrong place can throw errors in the Pull Request. Look at currently publish cmdlet reference articles for formatting and text examples.

4. At this point, the steps are identical to [Learn how to contribute](../README.md), but you're starting at Step 4.

## Remove existing parameters from existing articles

Removing parameters is a search and destroy mission in the existing articles on GitHub using the basic [Editing instructions](../README.md).

The most important thing to remember: a parameter isn't gone until it's truly not available to customers. If a parameter is still available, it needs to remain in the article until the parameter is removed from customer view in product code.

The following reasons aren't sufficient to remove an available parameter from a cmdlet reference article:

- The parameter is going away "at some point in the future."
- The parameter doesn't work correctly.
- The parameter isn't supposed to be available. Possible exceptions to this rule are:
  - The parameter name itself gives something away.
  - The parameter is available only to an extremely limited number of Preview customers.

Don't delete parameters in this state. Instead, use the following language for the description:

- This parameter is reserved for internal Microsoft use.
- This parameter is deprecated and no longer used.

Removing an available parameter from a cmdlet reference article can create as many issues as the removal is supposed to solve.

After you confirm the parameter in question is really gone, find and remove all references to the parameter in the article:

- SYNTAX blocks.
- Examples.
- The individual parameter sections where each parameter is described. Be sure to delete the whole section including the \`\`\`yaml part at the end (don't leave trailing \`\`\`, which is easy to do).
