## Overview ##

Microsoft PowerShell is a command-line shell and scripting language that provides an administrator full access to applicable application programming interfaces (APIs). Administrators can interact directly with SharePoint Server to manipulate web applications, site collections, sites, lists and much more. In addition, an administrator can script cmdlets (pronounced "command-lets").

By default,  Powershell is located at the following path:  <%SystemRoot%>\System32\WindowsPowerShell\v1.0\PowerShell.exe.

PowerShell can be used by authorized admins to perform a wide variety of tasks in SharePoint on-premises and SharePoint Online. Microsoft provides the cmdlets used for these 2 systems and the Patterns and Practices (PnP) group has created an additional set of modules that provide many additional capabilities.

For a list of SharePoint Server on-premises cmdlets, see [SharePoint Server cmdlets](sharepoint-server\sharepoint-server-cmdlets.md)

For a list of SharePoint Online cmdlets, see [SharePoint Online cmdlets](sharepoint-online\sharepoint-online-cmdlets.md)

For a list of the SharePoint PnP cmdlets, see [SharePoint PnP cmdlets](sharepoint-pnp\sharepoint-pnp-cmdlets.md)

#### SharePoint Online ####

Verify that you have the following administrative permissions:

* You must be assigned the global administrator role on the SharePoint Online site on which you are running the PowerShell cmdlet. 
  For more information, see [Default administrative roles and user groups](https://support.office.com/en-us/article/Default-SharePoint-Groups-13BB2B6B-DD8C-447E-B71B-0E4BB9EFE1D3?ui=en-US&rs=en-US&ad=US).

**IMPORTANT:** You can use a specific group of PowerShell with SharePoint Online. For more information, see [Office 365 PowerShell for SharePoint Online](https://technet.microsoft.com/en-us/library/fp161362(v=office.16).aspx).

## Learning PowerShell ##

There are several PowerShell learning resources for SharePoint IT professionals.

#### TechNet Scripting Center ####

The TechNet Scripting Center includes many resources to help you learn the basics about PowerShell. It also contains script repositories with samples of scripts that are typically used with various Microsoft products. The following table shows the main learning resources.

|**Page**|**Description**|
|------------------|------------------|
|[Windows PowerShell Documentation on TechNet ](https://docs.microsoft.com/en-us/powershell/scripting/powershell-scripting?view=powershell-5.1)|This section of the TechNet Library contains web copies of the core PowerShell Get-Help topics. The section also has web copies of the PowerShell Getting Started document, the PowerShell.exe help, and a PowerShell primer.|
|[Scripting With Windows PowerShell ](https://technet.microsoft.com/en-us/scriptcenter/dd742419.aspx)| The home page for PowerShell scripting learning resources.|
|[Windows PowerShell Owner's Manual ](https://technet.microsoft.com/en-us/library/ee221100.aspx)|Web-based guide for getting started with PowerShell.|
|[Windows PowerShell Quick Reference ](https://www.microsoft.com/en-us/download/details.aspx?id=30002)|Downloadable copy of the Quick Reference document that is installed with PowerShell.|

As you read these resources, consider that the following concepts and cmdlets are useful ones to learn before you use PowerShell for SharePoint Server:

* [Get-Command](https://go.microsoft.com/fwlink/p/?LinkId=171069)
* [Get-Member](https://go.microsoft.com/fwlink/p/?LinkId=171070)
* [Get-Help](https://go.microsoft.com/fwlink/p/?LinkId=171068)
* [Aliasing](https://go.microsoft.com/fwlink/p/?LinkId=113207)
* [Piping and the Pipeline in Windows PowerShell ](https://technet.microsoft.com/en-us/library/ee176927.aspx)
* [Cmdlet Parameter Sets ](https://msdn.microsoft.com/library/dd878348(VS.85).aspx)
* [Foreach-Object ](https://technet.microsoft.com/en-us/library/ee176828.aspx)
* [Where-Object](https://technet.microsoft.com/en-us/library/ee177028.aspx)

