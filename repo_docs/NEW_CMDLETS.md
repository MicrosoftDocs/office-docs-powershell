# Generate Your Own Markdown
**SECTION IN PROGRESS**

1. Open PowerShell as Administrator.
1. Import the module you want to document.
    - Skype for Business Online: https://technet.microsoft.com/en-us/library/dn362795(v=ocs.15).aspx
    - Microsoft Teams: https://blogs.technet.microsoft.com/skypehybridguy/2017/11/07/microsoft-teams-powershell-support/
    Hint: Might need to use Upgrade-Module and also Uninstall-Module depending on version and if you already have a version installed.
1. Use PlatyPS to generate Markdown.
    - Skype for Business Online: `New-MarkdownHelp -module tmp_byivwzpq.e1k -OutputFolder .\docs`.
1. Find the new cmdlet and you will see the stubbed markdown.
1. Add the correct Applicable tags to the top metadata and also the parameters for the cmdlet. 
    See others for details. 
    This is important since when the XML is generated to go back into the product the applicable is what is used for which content goes into which product.
    
    You will need to add the title and also applicable metadata for the cmdlet and also for each parameter.

    **Example metadata for each parameter:** Notice the Applicable tag is added with appropriate 'whitelisted' product name.

    ```
    external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
    Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
    online version:
    applicable: Microsoft StaffHub
    title: Get-StaffHubUsersForTenant
    schema: 2.0.0
    ```

    **Example metadata for each parameter:** Notice the Applicable tag is added with appropriate 'whitelisted' product name.

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


1. Add the cmdlet to Table of Contents (TOC) file. TOC file is the name of the module. 
    For example, for all Teams cmdlets the TOC file is teams.md.
    You can fill in a description or remove the template text line.
    However, if you leave the template text line make sure it is exactly in the right format so that it will not render as a template text.
1. Submit a Pull Request into the repo in appropriate place with adding the new cmdlet. aka.ms/office-powershell



If you want to merge multiple versions into a single version then use the PlatyPS merge command.

Note: If this is a brand new product you need to add metadata at the global level in order for it to show up in reporting.

References:
* https://docs.microsoft.com/en-us/powershell/module/powershellget/install-module?view=powershell-6
* https://docs.microsoft.com/en-us/powershell/module/powershellget/update-module?view=powershell-6
* https://github.com/PowerShell/platyPS