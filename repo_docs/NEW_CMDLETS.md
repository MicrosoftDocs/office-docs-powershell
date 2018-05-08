# Generate Your Own Markdown
**SECTION IN PROGRESS**

1. Open PowerShell as Administrator.
2. Import the module you want to document.
- Skype for Business Online: https://technet.microsoft.com/en-us/library/dn362795(v=ocs.15).aspx
- Microsoft Teams: https://blogs.technet.microsoft.com/skypehybridguy/2017/11/07/microsoft-teams-powershell-support/
   Hint: Might need to use Upgrade-Module and also Uninstall-Module depending on version and if you already have a version installed.
3. Use PlatyPS to generate Markdown.
- Skype for Business Online: `New-MarkdownHelp -module tmp_byivwzpq.e1k -OutputFolder .\docs`.
4. Find the new cmdlet and you will see the stubbed markdown.
5. Add correct metadata, see other similar cmdlets for examples.
6. Add the correct Applicable tags to the top metadata and also the parameters for the cmdlet. See others for details. 
    This is important since when the XML is generated to go back into the product the applicable is what is used for which content goes into which product.
7. Add the cmdlet to TOC. TOC file is the name of the module. 
    For example, for all Skype cmdlets the TOC file is skype.md.
8. Submit a Pull Request into the repo in appropriate place with adding the new cmdlet. aka.ms/office-powershell



If you want to merge multiple versions into a single version then use the PlatyPS merge command.

Make sure to update the TOC file. Exact format required so that the template text doesn't show up.

Add metadata to the file so it shows in the correct reports. See these scripts to do it or you can do it manually too.


References:
https://docs.microsoft.com/en-us/powershell/module/powershellget/install-module?view=powershell-6
https://docs.microsoft.com/en-us/powershell/module/powershellget/update-module?view=powershell-6
https://github.com/PowerShell/platyPS