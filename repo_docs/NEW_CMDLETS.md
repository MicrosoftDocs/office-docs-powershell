# Create new cmdlet topics

Cmdlet reference topics follow a very strict schema that's difficult to duplicate manually (remember, the topics on the web are also used for `Get-Help` from the command line). Instead, you use the open-source [platyPS](https://github.com/PowerShell/platyPS) tool to export the cmdlet and all of its properties to a markdown (.md) file from your PowerShell connection to the server or service.

## Step 1: Install platyPS

**If you're running Windows 10 or Windows Server 2016 or later, you already have Windows PowerShell 5.1 installed, so installing platyPS is easy.**

Run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

```powershell
Install-Module -Name platyPS -Scope CurrentUser
```

If you're running an older version of Windows, you need to install Windows PowerShell 5.1 as described below before you can install platyPS.

**Notes**:

- You need platyPS v0.14.0 or later, released on or about April 3 2019. If you have an earlier version of platyPS installed, close all open Windows PowerShell windows where the platyPS module is currently loaded (or run the command `Remove-Module platyPS`) and then run `Update-Module platyPS` from an elevated Windows PowerShell window.

  For services that use remote PowerShell (Exchange), be aware of the following issues observed in different platyPS versions:

  - v0.14.0: Works fine.
  - v0.14.1 and v0.14.2: Work fine, but produce bogus/nuisance errors using New-MarkdownHelp that can slow down operation. See this [platyPS GitHub issue](https://github.com/PowerShell/platyPS/issues/509) for details. This issue will likely be fixed in v2.0.0-Preview3.

  If all of the cmdlets are baked into the module itself, you likely won't have these issues (no dependence on remote PowerShell), so it doesn't matter which version you use.

- Older versions of Windows don't automatically include Windows PowerShell 5.1. For the following versions of Windows, you need to download and install the Windows Management Framework (WMF) 5.1 from <https://aka.ms/wmf5download>:
  
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows Server 2008 R2 SP1<sup>\*</sup>
  - Windows 8.1
  - Windows 7 Service SP1<sup>\*</sup>

  <sup>\*</sup> Also requires the Microsoft .NET Framework 4.5 or later. For more information, see [Windows Management Framework 5.1](https://aka.ms/wmf5download).

  If you need to install platyPS on really old versions of Windows (for example, a server running a product that lacks support for WMF 5.1 or its requirements), see the [Install platyPS on older versions of Windows](#install-platyps-on-older-versions-of-windows) section at the end of this topic.

## Step 2: Connect to the PowerShell environment that has the cmdlet

You probably know how to do this already, but the available workloads and connection methods are:

- Microsoft Teams: [Install Microsoft Teams PowerShell](https://docs.microsoft.com/MicrosoftTeams/teams-powershell-install)

  > [!TIP]
  > Use `Upgrade-Module` and also `Uninstall-Module` depending on the module version you have installed.

- Exchange:
  - Exchange Online: [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell)
  - Security & Compliance Center: [Connect to Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-scc-powershell)
  - Exchange Online Protection: [Connect to Exchange Online Protection PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-protection-powershell)
  - Exchange Server: [Connect to Exchange servers using remote PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-servers-using-remote-powershell)

**Notes**:

- You might need to connect to the service in an elevated Windows PowerShell prompt (Teams and Exchange environments don't require this). The connection instructions topic should contain this and other connection requirements.

- In Exchange environments, the cmdlets available to you are controlled by role-based access control (RBAC). Most cmdlets and parameters are available to administrators by default, but some aren't (for example, the "Mailbox Search" and "Mailbox Import Export" roles).

## Step 3: Load platyPS in the PowerShell environment

After you've connected in PowerShell to the server or service (either in a regular Windows PowerShell window or from a specific PowerShell console shortcut), you likely don't need to do anything to make the platyPS cmdlets available to you in your session. However, it you're having issues, run the following command to manually load the platyPS module:

```powershell
Import-Module platyPS
```

### Step 4: Find your module name

> [!NOTE]
> This step is required only if you're interested in creating cmdlet reference topics for **all** available cmdlets in your product (the _Module_ parameter in `New-MarkdownHelp`). If you're going to manually specify the cmdlet names (the _Command_ parameter in `New-MarkdownHelp`), you can skip this step.

platyPS needs the name of the loaded PowerShell module or snap-in that contains the cmdlets you want to update. To find the name, run the following command:

```powershell
Get-Module | Format-Table -Auto
```

The command returns all of the currently loaded modules or snap-ins, and the output will resemble this:

```powershell
ModuleType Version    Name                                ExportedCommands
---------- -------    ----                                ----------------
Manifest   3.1.0.0    Microsoft.PowerShell.Management     {Add-Computer, Add-Content, Checkpoint-Computer, Clear-Con...
Manifest   3.0.0.0    Microsoft.PowerShell.Security       {ConvertFrom-SecureString, ConvertTo-SecureString, Get-Acl...
Manifest   3.1.0.0    Microsoft.PowerShell.Utility        {Add-Member, Add-Type, Clear-Variable, Compare-Object...}
Binary     1.0.0.1    PackageManagement                   {Find-Package, Find-PackageProvider, Get-Package, Get-Pack...
Script     2.2.5      PowerShellGet                       {Find-Command, Find-DscResource, Find-Module, Find-RoleCap...
Script     2.0.0      PSReadline                          {Get-PSReadlineKeyHandler, Get-PSReadlineOption, Remove-PS...
Script     1.0        tmp_byivwzpq.e1k                    {Add-AvailabilityAddressSpace, Add-DistributionGroupMember...
```

or this:

```powershell
ModuleType Version     Name                                   ExportedCommands
---------- -------     ----                                   ----------------
Manifest   3.1.0.0    Microsoft.PowerShell.Management     {Add-Computer, Add-Content, Checkpoint-Computer, Clear-Content...}
Manifest   3.1.0.0    Microsoft.PowerShell.Utility        {Add-Member, Add-Type, Clear-Variable, Compare-Object...}
Script     4.2.0      MicrosoftTeams                      {Add-TeamChannelUser, Add-TeamUser, Connect-MicrosoftTeams, Disconnect-Microso...
Script     1.4.7      PackageManagement                   {Find-Package, Find-PackageProvider, Get-Package, Get-PackageProvider...}
Script     2.2.5      PowerShellGet                       {Find-Command, Find-DscResource, Find-Module, Find-RoleCapability...}
Script     2.0.0      PSReadline                          {Get-PSReadLineKeyHandler, Get-PSReadLineOption, Remove-PSReadLineKeyHandler, ...
```

For services that use remote PowerShell (Exchange), the module name is a temporary value that changes every time you connect. In this output, the module name is `tmp_byivwzpq.e1k`, but yours will be different.

For Microsoft Teams, the module name is always `MicrosoftTeams`.

Either way, take note of your module name. You'll need it in the next steps.

### Step 5: Verify your PSSession variable name

> [!NOTE]
> This step is required in Exchange or other products that use remote PowerShell. **If you're using a product where all of the cmdlets are baked into the module itself, you can skip this step**.

Check the details of your connection instructions, but your session information is stored in a variable. For example, in the Exchange connection instructions, the variable is `$Session`. You'll use this variable name in later steps.

**If you connected via a custom script or your remote PowerShell session variable isn't apparent, do the following steps**:

1. Run the following command to find your session:

   ```powershell
   Get-PSSession | Format-Table -Auto
   ```

   The output will resemble this:

   ```powershell
   Id Name                           ComputerName          ComputerType  State  ConfigurationName  Availability
   -- ----                           ------------          ------------  -----  -----------------  ------------
   1 ExchangeOnlineInternalSession_1 outlook.office365.com RemoteMachine Opened Microsoft.Exchange    Available
   ```

   > [!NOTE]
   > If you see multiple sessions, either start over in a new PowerShell window or confirm the session you want to use. The first connection is 1, the second is 2, and so on.

2. Use the following syntax to store the session in a variable:

    ```powershell
    $<VariableName> = Get-PSSession <SessionID>
    ```
  
    For example, using the sample output in the previous step:

    ```powershell
    $Session = Get-PSSession 1
    ```

    The variable name you choose doesn't matter, but you'll use it in later steps.

### Step 6: Run platyPS to generate topic files

You have two choices:

- **Dump _all_ cmdlets in the module/snap-in to files**: This is simple but could take a while, and you'll end up with dozens or possibly hundreds of cmdlets files you don't need. The basic syntax is:

  ```powershell
  New-MarkdownHelp -Module <ModuleName> -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
  ```

- **Dump specific cmdlets to files**: This is a bit harder to set up, but the output is much quicker, and there are no extra topic files created. The basic syntax is:
  
  ```powershell
  New-MarkdownHelp -Command <Cmdlet> -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
  ```

  or

  ```powershell
  $x = "<Cmdlet1>","<Cmdlet2>",..."<CmdletN>"
  New-MarkdownHelp -Command $x -OutputFolder "<Path"> [-Session <PSSessionVariableName>]
  ```

**Notes**:

- \<ModuleName\> is the value you found in [Step 4](#step-4-find-your-module-name) (for example, `tmp_byivwzpq.e1k` or `MicrosoftTeams`).

- \<PSSessionVariableName\> is the remote PowerShell session variable from [Step 5](#step-5-verify-your-your-pssession-variable-name) (for example, `$Session`) _and is required only if the connection uses remote PowerShell_.

  > [!IMPORTANT]
  > Failure to use the _Session_ parameter in remote PowerShell environments that need it leads to weird results in the topic files. For example:
  >
  > - Multiple syntax blocks/parameter sets aren't recognized and are collapsed into one big block
  > - The Type value is Object for all parameters.
  > - The Required value is False for all parameters.
  > - And more.

- If the \<Path\> location doesn't exist, it's created for you.

#### Dump all cmdlets in the module/snap-in to files

This example creates topic files for all available cmdlets in the Microsoft Teams module `MicrosoftTeams` in the folder C:\My Docs\Teams.

```powershell
New-MarkdownHelp -Module MicrosoftTeams -OutputFolder "C:\My Docs\Teams"
```

#### Dump specific cmdlets to files

This example creates a topic file for the cmdlet named **Get-CoolFeature** in the Exchange Online PowerShell session where the session variable is `$Session` in the folder "C:\My Docs\ExO".

```powershell
New-MarkdownHelp -Command "Get-CoolFeature" -OutputFolder "C:\My Docs\ExO" -Session $Session
```

This example creates topic files for the **Get-CoolFeature**, **New-CoolFeature**, **Remove-CoolFeature**, and **Set-CoolFeature** cmdlets from the Exchange Online session where the session variable is `$Session` in the folder C:\My Docs\ExO.

The first command stores the cmdlet names in a variable. The second command uses that variable to identify the cmdlets and write the output files.

```powershell
$NewCmdlets = "Get-CoolFeature","New-CoolFeature","Remove-CoolFeature","Set-CoolFeature"
```

```powershell
New-MarkdownHelp -Command $NewCmdlets -OutputFolder "C:\My Docs\ExO" -Session $Session
```

### Step 7: Document the new cmdlet

Now that you have topic files for the new cmdlets, you can actually document them. The topics are plain text UTF-8 files that are formatted using [markdown](https://guides.github.com/features/mastering-markdown/). Office writers use [Visual Studio Code](https://code.visualstudio.com/) to edit topic files, but you can use Notepad or your favorite text editor.

These are the basic topic elements that require your attention, regardless of the product or service:

- **The SYNOPSIS section**: Be brief. Use the DESCRIPTION section for less critical information.
- **The DESCRIPTION section**: More details (for example, permissions required to run the cmdlet)
- **One or more code examples in the EXAMPLES section**: The code block (only one code block) goes first, then the description text.
- **A description for every parameter in each parameter section**

We highly encourage you to plagiarize existing content and formatting from other cmdlet topics in the product or service. Many parameters are common across a wide variety of cmdlets.

#### Metadata in the new cmdlet

Less obvious but still important information that's often manually required in every topic is **cmdlet metadata** at the top of the topic and **parameter metadata** in every parameter section.

##### Cmdlet metadata

Every cmdlet reference topic needs (at a minimum) the following properties in the metadata field at the top of the reference article:

```text
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: https://docs.microsoft.com/powershell/module/skype/add-cssladelegates
applicable: Skype for Business Server 2015
title: Add-CsSlaDelegates
author:
ms.author:
ms.reviewer:
manager:
schema: 2.0.0
```

- **external help file**: Defines which MAML/XML file the cmdlet help topic goes in for `Get-Help` at the command line. This value very product-specific, and the location is specified somewhere in product code. Some products (Skype) use only one XML file that's well-known and the same for all cmdlets; others (Exchange) use multiple XML files. See other topics for available values. Don't guess; a wrong value here will affect the availability of the help topic at the command line.

- **Module Name**: Not used in Exchange topics (remove it). For other products, this is the module name of the product.

- **online version**: This is the URL of the topic. This URL value is what makes the `Get-Help <Cmdlet> -Online` command work, so it's very important.

- **applicable**: You need to add this attribute and value yourself. Notice that it starts with a lowercase 'a'. See other topics for available values. Don't invent new values here. The value **must** come from the list of predefined values.

- **title**: You need to add this attribute and value yourself. This is simply the name of the cmdlet.

- **schema**: This value is always 2.0.0 in all products.

- **author**: The GitHub alias of the person that owns this topic. Usually the PM or sometimes a dev that owns the cmdlet.

- **ms.author**: The Microsoft alias of the same author.

- **ms.reviewer**: The Microsoft alias of someone that can approve any technical changes (if different than the author).

- **manager**: The Microsoft alias of a manager for the team that owns the cmdlet. This is useful if the person that owns the cmdlet leaves the company. The manager will be reached to in order to find the new author.

##### Parameter metadata

Here's an example of the parameter metadata that's present in every parameter section:

```text
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

### Step 8: Add the new cmdlet topic files to the repository

When you're done editing the topics, upload them to GitHub. Note that you need to fork, upload your files to your fork, then submit a Pull Request.

1. Go to the correct location in the appropriate GitHub repository:

   - Exchange: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/exchange/exchange-ps/exchange>
   - Office Web Apps: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/officewebapps/officewebapps-ps/officewebapps>
   - Skype: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/skype/skype-ps/skype>
   - StaffHub: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/staffhub/staffhub-ps/staffhub>
   - Teams: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/teams/teams-ps/teams>
   - Whiteboard: <https://github.com/MicrosoftDocs/office-docs-powershell/tree/master/whiteboard/whiteboard-ps/whiteboard>

2. Click **Upload files**

   ![Upload file.](../images/upload_files.png)

3. After you're done adding files, go to the **Propose file change** section at the bottom of the page:

   - A brief title is required. By default, the title is the name of the file, but you can change it.
   - Optionally, you can enter more details in the **Add an optional extended description** box.

   When you're ready, click the green **Propose file change** button.

   ![Propose file change section.](../images/propose-file-change.png)

4. On the **Comparing changes** page that appears, click the green **Create pull request** button.

   ![Comparing changes page.](../images/comparing-changes-page.png)

5. On the **Open a pull request** page that appears, click the green **Create pull request** button.

   ![Open a pull request page.](../images/open-a-pull-request-page.png)

> [!NOTE]
>
> Your permissions in the repo determine what you see. People with no special privileges will see the **Propose file change** section and subsequent confirmation pages as described. People with permissions to create and approve their own pull requests will see a similar **Commit changes** section with extra options for creating a new branch and fewer confirmation pages.
>
> The point is: click any green buttons that are presented to you until there are no more.

### Step 9: Add the new cmdlets to the TOC file

Add the cmdlet to Table of Contents (TOC) file in the GitHub repo. TOC file is the name of the module. For example:

- Exchange <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/exchange/exchange-ps/exchange/exchange.md>

  > [!NOTE]
  > Exchange also uses pseudo folders to organize cmdlets. You need to add any new cmdlets in the proper location in the file: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/exchange/mapping/serviceMapping.json>.

- Office Web Apps: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/officewebapps/officewebapps-ps/officewebapps/officewebapps.md>

- Skype: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/skype.md>

- StaffHub: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/staffhub/staffhub-ps/staffhub/staffhub.md>

- Teams: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/teams/teams-ps/teams/teams.md>

- Whiteboard: <https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/whiteboard/whiteboard-ps/whiteboard/whiteboard.md>

In the TOC file, you can fill in a description or remove the template text line. However, if you leave the template text line make sure it's in _exactly_ the right format so it won't render as a template text.

After you're done editing the TOC files:

1. Go to the **Propose file change** section at the bottom of the page:

   - A brief title is required. By default, the title is the name of the file, but you can change it.
   - Optionally, you can enter more details in the **Add an optional extended description** box.

   When you're ready, click the green **Propose file change** button.

   ![Propose file change section.](../images/propose-file-change.png)

2. On the **Comparing changes** page that appears, click the green **Create pull request** button.

   ![Comparing changes page.](../images/comparing-changes-page.png)

3. On the **Open a pull request** page that appears, click the green **Create pull request** button.

   ![Open a pull request page.](../images/open-a-pull-request-page.png)

> [!NOTE]
>
> Your permissions in the repo determine what you see. People with no special privileges will see the **Propose file change** section and subsequent confirmation pages as described. People with permissions to create and approve their own pull requests will see a similar **Commit changes** section with extra options for creating a new branch and fewer confirmation pages.
>
> The point is: click any green buttons that are presented to you until there are no more.

## Appendix

### Reference

- <https://docs.microsoft.com/powershell/module/powershellget/install-module>

- <https://docs.microsoft.com/powershell/module/powershellget/update-module>

- <https://github.com/PowerShell/platyPS>

- <https://docs.microsoft.com/powershell/module/microsoft.powershell.core/get-module>

### Install platyPS on older versions of Windows (WMF 3.0 or 4.0)

> [!NOTE]
> These procedures aren't required on Windows 10 or later, Windows Server 2016 or later, or other versions of Windows where WMF 5.1 is already installed.

To install platyPS on very old Windows clients or servers that are using PowerShell 3.0 or 4.0 and don't have access to the **Install-Module** cmdlet, do the steps in this section.

1. Download and install PowerShellGet. The steps are described in [Installing PowerShellGet](https://docs.microsoft.com/powershell/scripting/gallery/installing-psget) and are summarized here as follows:

   a. **PowerShell 3.0 only**: Run the following command in an elevated Windows PowerShell window:

      ```powershell
      [Environment]::SetEnvironmentVariable(
        'PSModulePath',
        ((([Environment]::GetEnvironmentVariable('PSModulePath', 'Machine') -split ';') + "$env:ProgramFiles\WindowsPowerShell\Modules") -join ';'), 'Machine'
      )
      ```

   b. On another computer running PowerShell 5.1 or later where PowerShellGet is installed and working, open an elevated Windows PowerShell window and run the following command:

      ```powershell
      Save-Module PowerShellGet -Path "<ExistingPath>"
      ```

      Where \<ExistingPath\> is **an existing** folder/path that's easy to find (for example, `C:\Temp\PSG`).

   c. The command will create two new folders in the target path:

      - `PackageManagement\<VersionFolder>\<FilesAndFolders>`
      - `PowerShellGet\<VersionFolder>\<FilesAndFolders>`

      You need to move the \<FilesAndFolders\> out from under the \<VersionFolder\> and delete the now empty \<VersionFolder\> so the contents of the folders look like this:

      - `PackageManagement\<FilesAndFolders>`
      - `PowerShellGet\<FilesAndFolders>`

2. Delete the following folders from your computer or move them to a remote location for safekeeping:

   - `C:\Program Files\WindowsPowerShell\Modules\PackageManagement`
   - `C:\Program Files\WindowsPowerShell\Modules\PowerShellGet`

3. Copy the `PackageManagement` and `PowerShellGet` folders that you downloaded and fixed in Step 1 to `C:\Program Files\WindowsPowerShell\Modules`.

   You should now have the following folders again:

   - `C:\Program Files\WindowsPowerShell\Modules\PackageManagement`
   - `C:\Program Files\WindowsPowerShell\Modules\PowerShellGet`

4. From an elevated Windows PowerShell window, run the following command:

   ```powershell
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
   ```

5. Now you can finally install platyPS by running the usual command:

   ```powershell
   Install-Module -Name platyPS -Scope CurrentUser
   ```
