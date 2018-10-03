#SharePoint Server Cmdlets

For a listing of the SharePoint Server cmdlets, see [SharePoint Server cmdlets](../../sharepoint-ps/sharepoint-server/sharepoint-server.md)

## Accessing PowerShell for SharePoint Server ##

After you install SharePoint Server, applicable PowerShell cmdlets are available in the SharePoint 2016 Management Shell. You can manage most aspects of SharePoint Server in the SharePoint Management Shell. You can create new site collections, web applications, user accounts, service applications, proxies, and more. Commands that you type in the SharePoint Management Shell return SharePoint objects that are based on the Microsoft .NET Framework. You can apply these objects as input to subsequent commands or store the objects in local variables for later use.

With the SharePoint Management Shell, you do not have to register the snap-in that contains the cmdlets. Registration of the Microsoft.SharePoint.PowerShell.dll module for SharePoint Server cmdlets is automatic, as a result of the **Add-PSSnapin Microsoft.SharePoint.PowerShell** line in the SharePoint.ps1 file that is located in %CommonProgramFiles%\Microsoft Shared\Web Server Extensions\<version>\Config\PowerShell\Registration, where version "15" equals SharePoint Server 2013, and version "16" equals SharePoint Server 2016. To use the PowerShell console, you must register this snap-in manually.

Whether you use the SharePoint Management Shell or the PowerShell console, you can also load additional snap-ins. For more information, see [Customizing Profiles](https://technet.microsoft.com/en-us/library/2008.10.windowspowershell.aspx).

**NOTE:** The SharePoint Management Shell and the PowerShell console also differ in the use of the **ReuseThread** option, which defines how the threading model is used. The SharePoint Management Shell's use is defined by this line, {Host.Runspace.ThreadOptions = "ReuseThread"}, which is in the SharePoint.ps1 file. For more information, see [PS Thread Options](https://docs.microsoft.com/en-us/dotnet/api/system.management.automation.runspaces.psthreadoptions?redirectedfrom=MSDN&view=powershellsdk-1.1.0).

## Permissions ##

Before you can use the Add-SPShellAdmin cmdlet to grant permissions for users to run SharePoint Server cmdlets, verify that you meet all of the following minimum requirements:

* You must have membership in the **securityadmin** fixed server role on the SQL Server instance.
* You must have membership in the **securityadmin** fixed server role on the SQL Server instance.
* You must be a member of the Administrators group on the server on which you are running the PowerShell cmdlet.

**NOTE:** If these permissions are not satisfied, contact your Setup administrator or SQL Server administrator to request these permissions.

For additional information about PowerShell permissions, see [Add-SPShellAdmin](../../../sharepoint-ps/sharepoint-server/Add-SPShellAdmin.md).

If you do not have membership in the **SharePoint_Shell_Access** role or **WSS_Admin_WPG** local group, use the **Add-SPShellAdmin** cmdlet to add the **WSS_Admin_WPG** group in all front-end web servers in the SharePoint farm and the **SharePoint_Shell_Access** role. If the SQL Server database does not have a **SharePoint_Shell_Access** role, the role is automatically created when you run the **Add-SPShellAdmin** cmdlet. After you run the **Add-SPShellAdmin** cmdlet, users can run SharePoint PowerShell cmdlets in a multiple-server farm environment.

**NOTE:** When you install SharePoint Server, the user account from which you run the installation is granted the appropriate permissions to run PowerShell cmdlets. If any users have not been added to run a PowerShell cmdlet, you can use the **Add-SPShellAdmin** cmdlet to add them. 

To see a list of all of the **SPShellAdmin** cmdlets, from a PowerShell command prompt, type _Get-Command -Noun SPShellAdmin_.

## Scripts and execution policies ##

Although you can use Microsoft PowerShell to perform a single administrative task, you can also use a script to automate a series of tasks. A script is a text file that contains one or more Microsoft PowerShell commands. Microsoft PowerShell scripts have a .ps1 file name extension. 

To run scripts, the minimum required execution policy for SharePoint Server is **RemoteSigned**, although the default policy for PowerShell is Restricted. If the policy is left as Restricted, the SharePoint Management Shell will change the policy for PowerShell to RemoteSigned. This means that you must select **Run as administrator** to start the SharePoint Management Shell with elevated administrative permission. This change will apply to all PowerShell sessions. For more information, see [ExecutionPolicy Enumeration](https://docs.microsoft.com/en-us/dotnet/api/microsoft.powershell.executionpolicy?redirectedfrom=MSDN&view=powershellsdk-1.1.0).

For additional information about scripts and execution policies, see [about_scripts](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts?view=powershell-5.1&viewFallbackFrom=powershell-Microsoft.PowerShell.Core) and  [about_execution_policies](https://technet.microsoft.com/library/dd347641.aspx).
