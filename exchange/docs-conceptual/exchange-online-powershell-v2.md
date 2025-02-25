---
title: About the Exchange Online PowerShell V3 module
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 02/25/2025
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
keywords: Exchange Online PowerShell V2 module, Exchange Online PowerShell V3 module, EXO V2 module, EXO V3 module
description: "Admins can learn about the installation, maintenance, and design of the Exchange Online PowerShell V3 module that they use to connect to all Exchange-related PowerShell environments in Microsoft 365."
---

# About the Exchange Online PowerShell module

The Exchange Online PowerShell module uses modern authentication and works with or without multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell.

For connection instructions using the module, see the following articles:

- [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md)
- [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md)
- [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md)
- [App-only authentication for unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell](app-only-auth-powershell-v2.md)
- [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md)
- [Use C# to connect to Exchange Online PowerShell](connect-to-exo-powershell-c-sharp.md)

The rest of this article explains how the module works, how to install and maintain the module, and the optimized Exchange Online cmdlets that are available in the module.

> [!TIP]
> Version 3.0.0 and later (2022) is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module). Version 2.0.5 and earlier (2021) was known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module).

## REST API connections in the EXO V3 module

Exchange Online PowerShell and Security & Compliance PowerShell now use REST API connections for all cmdlets:

- **Exchange Online PowerShell**: EXO V3 module v3.0.0 or later.
- **Security & Compliance PowerShell**: EXO V3 module v3.2.0 or later.

REST API connections require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](#powershellget-for-rest-api-connections-in-windows).

Cmdlets in REST API connections have the following advantages over their historical counterparts:

- **More secure**: Built-in support for modern authentication and no dependence on the remote PowerShell session. PowerShell on your client computer doesn't need [Basic authentication in WinRM](#turn-on-basic-authentication-in-winrm).
- **More reliable**: Transient failures use built-in retries, so failures or delays are minimized. For example:
  - Failures due to network delays.
  - Delays due to large queries that take a long time to complete.
- **Better performance**: REST API connections avoid setting up a PowerShell runspace.

The benefits of cmdlets in REST API connections are described in the following table:

|&nbsp;|Remote PowerShell cmdlets|Get-EXO\* cmdlets|REST API cmdlets|
|---|---|---|---|
|**Security**|Least secure|Highly secure|Highly secure|
|**Performance**|Low performance|High performance|Medium performance|
|**Reliability**|Least reliable|Highly reliable|Highly reliable|
|**Functionality**|All parameters and output properties available|Limited parameters and output properties available|All parameters and output properties available|

REST API cmdlets have the same cmdlet names and work just like their remote PowerShell equivalents, so you don't need to update cmdlet names or parameters in older scripts.

> [!TIP]
> The [Invoke-Command](/powershell/module/microsoft.powershell.core/invoke-command) cmdlet doesn't work in REST API connections. For alternatives, see [Workarounds for Invoke-Command scenarios in REST API connections](invoke-command-workarounds-rest-api.md).

Basic authentication (remote PowerShell) connections are deprecated in Exchange Online PowerShell and Security & Compliance PowerShell. For more information, see [here](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-in-exchange-online-re-enabling/ba-p/3779692) and [here](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-rps-protocol-in-security-and/ba-p/3815432).

A few cmdlets in Exchange Online PowerShell have been updated with the experimental _UseCustomRouting_ switch in REST API connections. This switch routes the command directly to the required Mailbox server, and might improve overall performance. Use the _UseCustomRouting_ switch experimentally.

- When you use the _UseCustomRouting_ switch, you can use only the following values for identity of the mailbox:
  - User principal name (UPN)
  - Email address
  - Mailbox GUID

- The _UseCustomRouting_ switch is available only on the following Exchange Online PowerShell cmdlets in REST API connections:
  - **Get-Clutter**
  - **Get-FocusedInbox**
  - **Get-InboxRule**
  - **Get-MailboxAutoReplyConfiguration**
  - **Get-MailboxCalendarFolder**
  - **Get-MailboxFolderPermission**
  - **Get-MailboxFolderStatistics**
  - **Get-MailboxMessageConfiguration**
  - **Get-MailboxPermission**
  - **Get-MailboxRegionalConfiguration**
  - **Get-MailboxStatistics**
  - **Get-MobileDeviceStatistics**
  - **Get-UserPhoto**
  - **Remove-CalendarEvents**
  - **Set-Clutter**
  - **Set-FocusedInbox**
  - **Set-MailboxRegionalConfiguration**
  - **Set-UserPhoto**

- Use the [Get-ConnectionInformation](/powershell/module/exchange/get-connectioninformation) cmdlet to get information about REST API connections to Exchange Online PowerShell and Security & Compliance PowerShell. This cmdlet is required because the [Get-PSSession](/powershell/module/microsoft.powershell.core/get-pssession) cmdlet in Windows PowerShell doesn't return information for REST API connections.

  Scenarios where you can use **Get-ConnectionInformation** are described in the following table:

  |Scenario|Expected output|
  |---|---|
  |Run after **Connect-ExchangeOnline** or **Connect-IPPSSession** commands for REST API connections.|Returns one connection information object.|
  |Run after multiple **Connect-ExchangeOnline** or **Connect-IPPSSession** commands for REST API connections.|Returns a collection of connection information objects.|

- Use the _SkipLoadingFormatData_ switch on the **Connect-ExchangeOnline** cmdlet to avoid loading format data and to run **Connect-ExchangeOnline** commands faster.

- Cmdlets backed by the REST API have a 15-minute timeout, which can affect bulk operations. For example, the following **Update-DistributionGroupMember** command to update 10,000 members of a distribution group might time out:

  ```powershell
  $Members = @("member1","member2",...,"member10000")

  Update-DistributionGroupMember -Identity DG01 -Members $Members
  ```

  Instead, use the **Update-DistributionGroupMember** command to update fewer members, and then add the remaining members individually using an **Add-DistributionGroupMember** command. For example:

  ```powershell
  Update-DistributionGroupMember -Identity DG01 -Members $Members[0..4999]

  $Remaining = $Members[-5000..-1]

  foreach ($Member in $Remaining)

  {
     Add-DistributionGroupMember -Identity DG01 -Member $Member
  }
  ```

For more information about what's new in the EXO V3 module, see the [Release notes](#release-notes) section later in this article.

## Report bugs and issues for Preview versions of the Exchange Online PowerShell module

> [!TIP]
> For General Availability (GA) versions of the module, don't use the following email address to report issues. Messages about GA versions of the module won't be answered. Instead, open a support ticket.

For **Preview versions of the module**, use `exocmdletpreview[at]service[dot]microsoft[dot]com` to report any issues that you might encounter. Be sure to include the log files in your email message. To generate the log files, replace \<Path\> with an output folder, and then run the following command:

```powershell
Connect-ExchangeOnline -EnableErrorReporting -LogDirectoryPath <Path> -LogLevel All
```

## Cmdlets in the Exchange Online PowerShell module

The EXO module contains nine exclusive **Get-EXO\*** cmdlets that are optimized for speed in bulk data retrieval scenarios (thousands and thousands of objects) in Exchange Online PowerShell. The improved cmdlets in the module are listed in the following table:

|EXO module cmdlet|Older related cmdlet|
|---|---|
|[Get-EXOMailbox](/powershell/module/exchange/get-exomailbox)|[Get-Mailbox](/powershell/module/exchange/get-mailbox)|
|[Get-EXORecipient](/powershell/module/exchange/get-exorecipient)|[Get-Recipient](/powershell/module/exchange/get-recipient)|
|[Get-EXOCasMailbox](/powershell/module/exchange/get-exocasmailbox)|[Get-CASMailbox](/powershell/module/exchange/get-casmailbox)|
|[Get-EXOMailboxPermission](/powershell/module/exchange/get-exomailboxPermission)|[Get-MailboxPermission](/powershell/module/exchange/get-mailboxpermission)|
|[Get-EXORecipientPermission](/powershell/module/exchange/get-exorecipientpermission)|[Get-RecipientPermission](/powershell/module/exchange/get-recipientpermission)|
|[Get-EXOMailboxStatistics](/powershell/module/exchange/get-exomailboxstatistics)|[Get-MailboxStatistics](/powershell/module/exchange/get-mailboxstatistics)|
|[Get-EXOMailboxFolderStatistics](/powershell/module/exchange/get-exomailboxfolderstatistics)|[Get-MailboxFolderStatistics](/powershell/module/exchange/get-mailboxfolderstatistics)|
|[Get-EXOMailboxFolderPermission](/powershell/module/exchange/get-exomailboxfolderpermission)|[Get-MailboxFolderPermission](/powershell/module/exchange/get-mailboxfolderpermission)|
|[Get-EXOMobileDeviceStatistics](/powershell/module/exchange/get-exomobiledevicestatistics)|[Get-MobileDeviceStatistics](/powershell/module/exchange/get-mobiledevicestatistics)|

> [!TIP]
> If you open multiple connections to Exchange Online PowerShell in the same window, the **Get-EXO\*** cmdlets are always associated with the last (most recent) Exchange Online PowerShell connection. Run the following command to find the REST API session where the **Get-EXO\*** cmdlets are run: `Get-ConnectionInformation | Where-Object {$_.ConnectionUsedForInbuiltCmdlets -eq $true}`.

The connection-related cmdlets in the module are listed in the following table:

|EXO module cmdlet|Older related cmdlet|Comments|
|---|---|---|
|[Connect-ExchangeOnline](/powershell/module/exchange/connect-exchangeonline)|**Connect-EXOPSSession** in V1 of the module <br/> or <br/> [New-PSSession](/powershell/module/microsoft.powershell.core/new-pssession)||
|[Connect-IPPSSession](/powershell/module/exchange/connect-ippssession)|**Connect-IPPSSession** in V1 of the module||
|[Disconnect-ExchangeOnline](/powershell/module/exchange/disconnect-exchangeonline)|[Remove-PSSession](/powershell/module/microsoft.powershell.core/remove-pssession)||
|[Get-ConnectionInformation](/powershell/module/exchange/get-connectioninformation)|[Get-PSSession](/powershell/module/microsoft.powershell.core/get-pssession)|Available in v3.0.0 or later.|

> [!TIP]
> Frequent use of the **Connect-ExchangeOnline** and **Disconnect-ExchangeOnline** cmdlets in a single PowerShell session or script might lead to a memory leak. The best way to avoid this issue is to use the _CommandName_ parameter on the **Connect-ExchangeOnline** cmdlet to limit the cmdlets that are used in the session.

Miscellaneous Exchange Online cmdlets that happen to be in the module are listed in the following table:

|Cmdlet|Comments|
|---|---|
|[Get-DefaultTenantBriefingConfig](/powershell/module/exchange/get-defaulttenantbriefingconfig)|Available in v3.2.0 or later.|
|[Set-DefaultTenantBriefingConfig](/powershell/module/exchange/set-defaulttenantbriefingconfig)|Available in v3.2.0 or later.|
|[Get-DefaultTenantMyAnalyticsFeatureConfig](/powershell/module/exchange/get-defaulttenantmyanalyticsfeatureconfig)|Available in v3.2.0 or later.|
|[Set-DefaultTenantMyAnalyticsFeatureConfig](/powershell/module/exchange/set-defaulttenantmyanalyticsfeatureconfig)|Available in v3.2.0 or later.|
|[Get-MyAnalyticsFeatureConfig](/powershell/module/exchange/get-myanalyticsfeatureconfig)|Available in v2.0.4 or later.|
|[Set-MyAnalyticsFeatureConfig](/powershell/module/exchange/set-myanalyticsfeatureconfig)|Available in v2.0.4 or later.|
|[Get-UserBriefingConfig](/powershell/module/exchange/get-userbriefingconfig)|Replaced by [Get-MyAnalyticsFeatureConfig](/powershell/module/exchange/get-myanalyticsfeatureconfig).|
|[Set-UserBriefingConfig](/powershell/module/exchange/set-userbriefingconfig)|Replaced by [Set-MyAnalyticsFeatureConfig](/powershell/module/exchange/set-myanalyticsfeatureconfig).|
|[Get-VivaInsightsSettings](/powershell/module/exchange/get-vivainsightssettings)|Available in v2.0.5 or later.|
|[Set-VivaInsightsSettings](/powershell/module/exchange/set-vivainsightssettings)|Available in v2.0.5 or later.|
|[Get-VivaModuleFeature](/powershell/module/exchange/get-vivamodulefeature)|Available in v3.2.0 or later.|
|[Get-VivaModuleFeatureEnablement](/powershell/module/exchange/get-vivamodulefeatureenablement)|Available in v3.2.0 or later.|
|[Add-VivaModuleFeaturePolicy](/powershell/module/exchange/add-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Get-VivaModuleFeaturePolicy](/powershell/module/exchange/get-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Remove-VivaModuleFeaturePolicy](/powershell/module/exchange/remove-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Update-VivaModuleFeaturePolicy](/powershell/module/exchange/update-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Add-VivaOrgInsightsDelegatedRole](/powershell/module/exchange/add-vivaorginsightsdelegatedrole)|Available in v3.7.0-Preview1 or later.|
|[Get-VivaOrgInsightsDelegatedRole](/powershell/module/exchange/get-vivaorginsightsdelegatedrole)|Available in v3.7.0-Preview1 or later.|
|[Remove-VivaOrgInsightsDelegatedRole](/powershell/module/exchange/remove-vivaorginsightsdelegatedrole)|Available in v3.7.0-Preview1 or later.|

## Install and maintain the Exchange Online PowerShell module

You download the module from the PowerShell gallery at <https://www.powershellgallery.com/packages/ExchangeOnlineManagement/>.

The procedures in this section explain how to install, update, and uninstall the module.

### Supported operating systems for the Exchange Online PowerShell module

The latest versions of the module are officially supported in PowerShell 7 on Windows, Linux, and Apple macOS.

Specifically, version **2.0.4 or later** is supported in **PowerShell 7.0.3 or later**.

For more information about PowerShell 7, see [Announcing PowerShell 7.0](https://devblogs.microsoft.com/powershell/announcing-PowerShell-7-0/).

#### Apple macOS

The module is supported in the following versions of macOS:

- macOS 11 Big Sur or later
- macOS 10.15 Catalina
- macOS 10.14 Mojave

For instructions on installing PowerShell 7 on macOS, see [Installing PowerShell on macOS](/powershell/scripting/install/installing-powershell-core-on-macos).

As described in the installation article, you need to install OpenSSL, which is required for WSMan.

After you install PowerShell 7 and OpenSSL, do the following steps:

1. Run PowerShell as superuser: `sudo pwsh`
2. In the PowerShell superuser session, run the following commands:

   ```powershell
   Install-Module -Name PSWSMan

   Install-WSMan
   ```

   If prompted, accept PSGallery as the source for the cmdlets.

Now you can do the [regular PowerShell prerequisites](#prerequisites-for-the-exchange-online-powershell-module) and [install the Exchange Online PowerShell module](#install-the-exchange-online-powershell-module).

#### Linux

The module is officially supported in the following distributions of Linux:

- Ubuntu 24.04 LTS
- Ubuntu 20.04 LTS
- Ubuntu 18.04 LTS

For instructions on installing PowerShell 7 on Linux, see [Installing PowerShell on Linux](/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7.1&preserve-view=true).

After you install PowerShell 7, do the following steps:

1. Run PowerShell as superuser: `sudo pwsh`
2. In the PowerShell superuser session, run the following commands:

   ```powershell
   Install-Module -Name PSWSMan

   Install-WSMan
   ```

   If prompted, accept PSGallery as the source for the cmdlets.

Now you can do the [regular PowerShell prerequisites](#prerequisites-for-the-exchange-online-powershell-module) and [install the Exchange Online PowerShell module](#install-the-exchange-online-powershell-module).

> [!NOTE]
> If you connect to Exchange Online PowerShell from a network that's behind a proxy server, the EXO V2 module (version v2.0.5 or earlier) doesn't work in Linux. You need to use the EXO V3 module (v3.0.0 or later) in Linux to connect from a network that's behind a proxy server.

#### Windows

All versions of the module are supported in Windows PowerShell 5.1.

PowerShell 7 on Windows requires version 2.0.4 or later.

Version 2.0.5 or later of the module requires the Microsoft .NET Framework 4.7.2 or later to connect. Otherwise, you get a `System.Runtime.InteropServices.OSPlatform` error. This requirement shouldn't be an issue in current versions of Windows. For more information about versions of Windows that support the .NET Framework 4.7.2, see [this article](/dotnet/framework/migration-guide/versions-and-dependencies#net-framework-472).

Windows PowerShell requirements and module support **in older versions of Windows** are described in the following list:

- Windows 8.1¹
- Windows Server 2012 or Windows Server 2012 R2¹
- Windows 7 Service Pack 1 (SP1)² ³ ⁴
- Windows Server 2008 R2 SP1² ³ ⁴

- ¹ PowerShell 7 on this version of Windows requires the [Windows 10 Universal C Runtime (CRT)](https://www.microsoft.com/download/details.aspx?id=50410).
- ² Support for this version of Windows has ended, and is now supported only in Azure virtual machines.
- ³ This version of Windows supports only v2.0.3 or earlier versions of the module.
- ⁴ Windows PowerShell 5.1 on this version of Windows requires the .NET Framework 4.5 or later and the Windows Management Framework 5.1. For more information, see [Windows Management Framework 5.1](https://aka.ms/wmf5download).

### Prerequisites for the Exchange Online PowerShell module

#### Set the PowerShell execution policy to RemoteSigned

> [!TIP]
> The settings in this section apply to all versions of PowerShell on all operating systems.

PowerShell needs to be configured to run scripts, and by default, it isn't. You get the following error when you try to connect:

> Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated PowerShell window (a PowerShell window you open by selecting **Run as administrator**):

```powershell
Set-ExecutionPolicy RemoteSigned
```

For more information about execution policies, see [About Execution Policies](/powershell/module/microsoft.powershell.core/about/about_execution_policies).

#### Turn on Basic authentication in WinRM

> [!IMPORTANT]
> REST API connections don't require Basic authentication in WinRM as described in this section. As described [earlier in this article](#rest-api-connections-in-the-exo-v3-module), Basic authentication (remote PowerShell) access to Exchange Online PowerShell and Security & Compliance PowerShell are deprecated. The information in this section is maintained for historical purposes.

For remote PowerShell connections that don't use the REST API (which are now impossible), WinRM needs to allow Basic authentication. **We don't send the username and password combination**. The Basic authentication **header** is required to send the session's OAuth token, because the client-side implementation of WinRM doesn't support OAuth.

To verify that Basic authentication is enabled for WinRM, run the following command in a **Command Prompt** or **Windows PowerShell**:

> [!NOTE]
> The following commands require that WinRM is enabled. To enable WinRM, run the following command: `winrm quickconfig`.

```DOS
winrm get winrm/config/client/auth
```

If you don't see the value `Basic = true`, you need to run **one** of the following commands to enable Basic authentication for WinRM:

- **In a Command Prompt**:

  ```DOS
  winrm set winrm/config/client/auth @{Basic="true"}
  ```

- **In Windows PowerShell**:

  ```powershell
  winrm set winrm/config/client/auth '@{Basic="true"}'
  ```

- **In Windows PowerShell to modify the registry**:

  ```PowerShell
  Set-ItemProperty -Path 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WinRM\Client' -Name 'AllowBasic' -Type DWord -Value '1'
  ```

If Basic authentication for WinRM is disabled, you get one of the following errors when you try to connect using a Basic authentication (remote PowerShell) connection:

> The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.
>
> Create Powershell Session is failed using OAuth.

### PowerShellGet for REST API connections in Windows

[REST API connections](#rest-api-connections-in-the-exo-v3-module) in Windows require the PowerShellGet module, and by dependency, the PackageManagement module. Consideration for these modules is more for PowerShell 5.1 than PowerShell 7, but all versions of PowerShell benefit from having the latest versions of the modules installed. For installation and update instructions, see [Installing PowerShellGet on Windows](/powershell/scripting/gallery/installing-psget).

> [!TIP]
> Beta versions of the PackageManagement or PowerShellGet modules might cause connection issues. If you have connection issues, verify that you don't have Beta versions of the modules installed by running the following command: `Get-InstalledModule PackageManagement -AllVersions; Get-InstalledModule PowerShellGet -AllVersions`.

If you don't have PowerShellGet installed when you try to create a REST API connection, you get the following error when you try to connect:

> Cannot find a cmdlet Update-Manifest

### Install the Exchange Online PowerShell module

To install the module for the first time, complete the following steps:

1. Install or update the PowerShellGet module as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget).

2. Close and re-open the Windows PowerShell window.

3. Now you can use the **Install-Module** cmdlet to install the module from the PowerShell Gallery. Typically, you want the latest public version of the module, but you can also install a Preview version if any are available.

   - To install **the latest public version** of the module, run **one** of the following commands:

     - In an elevated PowerShell window (all users):

       ```powershell
       Install-Module -Name ExchangeOnlineManagement
       ```

     - Only for the current user account:

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
       ```

   - To see **the available Preview versions** of the module, run the following command:

     ```powershell
     Find-Module ExchangeOnlineManagement -AllVersions -AllowPrerelease
     ```

   - To install **the latest available Preview version** of the module, run **one** of the following commands:

     - In an elevated PowerShell window (all users):

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -AllowPrerelease
       ```

     - Only for the current user account:

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser -AllowPrerelease
       ```

   - To install **a specific Preview version** of the module, replace \<PreviewVersion\> with the necessary value, and run **one** of the following commands:

     - In an elevated PowerShell window (all users):

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease
       ```

     - Only for the current user account:

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease -Scope CurrentUser
       ```

   When you're finished, enter **Y** to accept the license agreement.

For detailed syntax and parameter information, see [Install-Module](/powershell/module/powershellget/install-module).

### Update the Exchange Online PowerShell module

If the module is already installed on your computer, you can use the procedures in this section to update the module.

1. To see the version of the module that's currently installed and where it's installed, run the following command:

   ```powershell
   Get-InstalledModule ExchangeOnlineManagement | Format-List Name,Version,InstalledLocation
   ```

   If the module is installed in C:\Program Files\WindowsPowerShell\Modules\, it's installed for all users. If the module is installed in your Documents folder, it's installed only for the current user account.

2. You can use the **Update-Module** cmdlet to update the module from the PowerShell Gallery. Typically, you want the latest public version of the module, but you can also upgrade to a Preview version if any are available.

   - To upgrade to **the latest public version** of the module, run **one** of the following commands based on how you originally installed the module (all users vs. only for the current user account):

     - In an elevated PowerShell window (all users):

       ```powershell
       Update-Module -Name ExchangeOnlineManagement
       ```

     - Only for the current user account:

       ```powershell
       Update-Module -Name ExchangeOnlineManagement -Scope CurrentUser
       ```

   - To upgrade to **a Preview version** of the module, you can upgrade to the latest available Preview version, or you can use the _RequiredVersion_ parameter to upgrade to a specific Preview version.

     - To see **the available Preview versions** of the module, run the following command:

       ```powershell
       Find-Module ExchangeOnlineManagement -AllVersions -AllowPrerelease
       ```

     - To upgrade to **the latest available Preview version** of the module, run **one** of the following commands:

       - In an elevated PowerShell window (all users):

         ```powershell
         Update-Module -Name ExchangeOnlineManagement -AllowPrerelease
         ```

       - Only for the current user account:

         ```powershell
         Update-Module -Name ExchangeOnlineManagement -Scope CurrentUser -AllowPrerelease
         ```

     - To upgrade to **a specific Preview version** of the module, replace \<PreviewVersion\> with the necessary value, and run **one** of the following commands:

       - In an elevated PowerShell window (all users):

         ```powershell
         Update-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease
         ```

       - Only for the current user account:

         ```powershell
         Update-Module -Name ExchangeOnlineManagement -Scope CurrentUser -RequiredVersion <PreviewVersion> -AllowPrerelease
         ```

   When you're finished, enter **Y** to accept the license agreement.

3. To confirm that the update was successful, run the following commands to check the version information of the module that's installed:

   ```powershell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

For detailed syntax and parameter information, see [Update-Module](/powershell/module/powershellget/update-module).

### Troubleshoot installing the Exchange Online PowerShell module

- You receive one of the following errors:

  > The specified module 'ExchangeOnlineManagement' with PowerShellGetFormatVersion '\<version\>' isn't supported by the current version of PowerShellGet. Get the latest version of the PowerShellGet module to install this module, 'ExchangeOnlineManagement'.

  > WARNING: Unable to download from URI 'https://go.microsoft.com/fwlink/?LinkID=627338&clcid=0x409' to ''.

  > WARNING: Unable to download the list of available providers. Check your internet connection.

  Update your installation of the PowerShellGet module to the latest version as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget). Be sure to close and re-open the PowerShell window before you attempt to update the ExchangeOnlineManagement module again.

- You receive the following error:

  > No match was found for the specified search criteria and module name 'ExchangeOnlineManagement'. Try running `Get-PSRepository` to see all available registered module repositories.

  The default repository for PowerShell modules isn't set to PSGallery. To fix this error, run the following command:

  ```powershell
  Register-PSRepository -Default
  ```

- As of April 2020, the PowerShell Gallery only supports connections using TLS 1.2 or later. For more information, see [PowerShell Gallery TLS Support](https://devblogs.microsoft.com/powershell/powershell-gallery-tls-support/).

  To check your current settings in the Microsoft .NET Framework, run the following command in Windows PowerShell:

  ```powershell
  [Net.ServicePointManager]::SecurityProtocol
  ```

  As described in the PowerShell Gallery TLS Support article, to _temporarily_ change the security protocol to TLS 1.2 to install the PowerShellGet or ExchangeOnlineManagement modules, run the following command in Windows PowerShell _before_ you install the module:

  ```powershell
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  ```

  To _permanently_ enable strong cryptography in the Microsoft .NET Framework version 4.x or later, run one of the following commands based on your Windows architecture:

  - x64:

    ```powershell
    Set-ItemProperty -Path 'HKLM:\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319' -Name 'SchUseStrongCrypto' -Type DWord -Value '1'
    ```

  - x86:

    ```powershell
    Set-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\.NETFramework\v4.0.30319' -Name 'SchUseStrongCrypto' -Type DWord -Value '1'
    ```

  For more information, see [SchUseStrongCrypto](/dotnet/framework/network-programming/tls#schusestrongcrypto).

### Uninstall the Exchange Online PowerShell module

To see the version of the module that's currently installed and where it's installed, run the following command:

   ```powershell
   Get-InstalledModule ExchangeOnlineManagement | Format-List Name,Version,InstalledLocation
   ```

   If the module is installed in C:\Program Files\WindowsPowerShell\Modules\, it was installed for all users. If the module is installed in your Documents folder, it was installed only for the current user account.

To uninstall the module, run the following command in one of the following environments based on how you originally installed the module (all users vs. only for the current user account):

- In an elevated PowerShell window (all users).
- In a normal PowerShell window (only for the current user account).

  ```powershell
  Uninstall-Module -Name ExchangeOnlineManagement
  ```

For detailed syntax and parameter information, see [Uninstall-Module](/powershell/module/powershellget/uninstall-module).

## Properties and property sets in the Exchange Online PowerShell module

Traditional Exchange Online cmdlets return all possible object properties, including many blank or uninteresting properties. This behavior causes degraded performance (more server computation and added network load). You rarely (if ever) need the full complement of properties in the cmdlet output.

The **Get-EXO\*** cmdlets in the module have categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we categorized specific related properties into _property sets_. These property sets are buckets of two or more related properties on the cmdlet.

The biggest and most used **Get-EXO\*** cmdlets use property sets:

- [Get-EXOCasMailbox](/powershell/module/exchange/get-exocasmailbox)
- [Get-EXOMailbox](/powershell/module/exchange/get-exomailbox)
- [Get-EXOMailboxStatistics](/powershell/module/exchange/get-exomailboxstatistics)
- [Get-EXORecipient](/powershell/module/exchange/get-exorecipient)

In those cmdlets, property sets are controlled by the following parameters:

- _PropertySets_: This parameter accepts one or more available property set names separated by commas. The available property sets are described in [Property sets in Exchange Online PowerShell module cmdlets](cmdlet-property-sets.md).
- _Properties_: This parameter accepts one or more property names separated by commas.

You can use the _PropertySets_ and _Properties_ parameters together in the same command.

We also included a Minimum property set that includes a bare minimum set of required properties for the cmdlet output (for example, identity properties). The properties in the Minimum property sets are also described in [Property sets in Exchange Online PowerShell module cmdlets](cmdlet-property-sets.md).

- If you don't use the _PropertySets_ or _Properties_ parameters, you automatically get the properties in the Minimum property set.
- If you use the _PropertySets_ or _Properties_ parameters, you get the specified properties **and** the properties in the Minimum property set.

Either way, the cmdlet output contains far fewer properties, and the results are returned much faster.

For example, after you [connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md), the following example returns only the properties in the Minimum property set for the first 10 mailboxes.

```powershell
Get-EXOMailbox -ResultSize 10
```

In contrast, the output of the same **Get-Mailbox** command would return at least 230 properties for each of the first 10 mailboxes.

> [!NOTE]
> Although the _PropertySets_ parameter accepts the value All, we highly discourage using this value to retrieve all properties, because it slows down the command and reduces reliability. Always use the _PropertySets_ and _Properties_ parameters to retrieve the minimum number of properties that are required for your scenario.

For more information about filtering in the module, see [Filters in the Exchange Online PowerShell module](filters-v2.md).

## Release notes

Unless otherwise noted, the current release of the Exchange Online PowerShell module contains all features of previous releases.

### Current release

#### Version 3.7.1

- Added a new property named `ExoExchangeSecurityDescriptor` to the output of **Get-EXOMailbox** that's similar to the `ExchangeSecurityDescriptor` property in the output of **Get-Mailbox**.
- Added new cmdlets to support the Viva Org Insights Delegation feature:
  - **Add-VivaOrgInsightsDelegatedRole**
  - **Get-VivaOrgInsightsDelegatedRole**
  - **Remove-VivaOrgInsightsDelegatedRole**

### Previous releases

#### Version 3.7.0

- Integrated Web Account Manager (WAM) in authentication flows to enhance security.
- Command line help for Exchange Online PowerShell cmdlets is no longer loaded by default. You need to use the _LoadCmdletHelp_ parameter in the **Connect-ExchangeOnline** command so help for Exchange Online PowerShell cmdlets is available to the **Get-Help** cmdlet.
- Fixed connection issues with app only authentication in Security & Compliance PowerShell.

#### Version 3.6.0

- **Get-VivaModuleFeature** now returns information about the kinds of identities that the feature supports creating policies for (for example, users, groups, or the entire tenant).
- Cmdlets for Viva feature access management now handle continuous access evaluation (CAE) claim challenges.
- Added fix for compatibility issue with the Microsoft.Graph module.

#### Version 3.5.1

- Bug fixes in **Get-EXOMailboxPermission** and **Get-EXOMailbox**.
- The module has been upgraded to run on .NET 8, replacing the previous version based on .NET 6.
- Enhancements in **Add-VivaModuleFeaturePolicy**.

#### Version 3.5.0

- New **Get-VivaFeatureCategory** cmdlet.
- Added support for policy operations at the category level in Viva Feature Access Management (VFAM).
- New IsFeatureEnabledByDefault property in the output of **Get-VivaModuleFeaturePolicy**. The value of this property shows the default enablement state for users in the tenant when no tenant or user/group policies were created.

#### Version 3.4.0

- Bug fixes in **Connect-ExchangeOnline**, **Get-EXORecipientPermission**, and **Get-EXOMailboxFolderPermission**.
- The _SigningCertificate_ parameter in **Connect-ExchangeOnline** now supports [Constrained Language Mode (CLM)](/powershell/module/microsoft.powershell.core/about/about_language_modes#constrainedlanguage-mode).

#### Version 3.3.0

- _SkipLoadingCmdletHelp_ parameter on **Connect-ExchangeOnline** to support skip loading cmdlet help files.
- Global variable `EXO_LastExecutionStatus` is available to check the status of the last cmdlet that was run.
- Bug fixes in **Connect-ExchangeOnline** and **Connect-IPPSSession**.
- _IsUserControlEnabled_ parameter on **Add-VivaModuleFeaturePolicy** and **Update-VivaModuleFeaturePolicy** to support the enablement of user controls by policy for features that are onboarded to Viva feature access management.

#### Version 3.2.0

- New cmdlets:
  - **Get-DefaultTenantBriefingConfig** and **Set-DefaultTenantBriefingConfig**.
  - **Get-DefaultTenantMyAnalyticsFeatureConfig** and **Set-DefaultTenantMyAnalyticsFeatureConfig**.
  - **Get-VivaModuleFeature**, **Get-VivaModuleFeatureEnablement**, **Add-VivaModuleFeaturePolicy**, **Get-VivaModuleFeaturePolicy**, **Remove-VivaModuleFeaturePolicy**, and **Update-VivaModuleFeaturePolicy**.
- REST API connection support for Security & Compliance PowerShell.
- _ConnectionId_ parameter on **Get-ConnectionInformation** and **Disconnect-ExchangeOnline**:
  - Get connection information for specific REST API connections.
  - Selective disconnect for REST API connections.
- _SigningCertificate_ parameter on **Connect-ExchangeOnline** allows you to sign the format files (\*.Format.ps1xml) or script module files (.psm1) in the temporary module that **Connect-ExchangeOnline** creates with a client certificate to use in all PowerShell execution policies.
- Bug fixes in **Connect-ExchangeOnline**.

#### Version 3.1.0

- _AccessToken_ parameter available in **Connect-ExchangeOnline**.
- Bug fixes in **Connect-ExchangeOnline** and **Get-ConnectionInformation**.
- Bug fix in **Connect-IPPSSession** for connecting to Security & Compliance PowerShell using _CertificateThumbprint_.

#### Version 3.0.0 (Preview versions known as v2.0.6-PreviewX)

- Features already described in the [REST API connections in the EXO V3 module](#rest-api-connections-in-the-exo-v3-module) section:
  - [Certificate based authentication](app-only-auth-powershell-v2.md) for Security & Compliance PowerShell (version 2.0.6-Preview5 or later).
  - The [Get-ConnectionInformation](/powershell/module/exchange/get-connectioninformation) cmdlet for REST-based connections (version 2.0.6-Preview7 or later).
  - The _SkipLoadingFormatData_ switch on the **Connect-ExchangeOnline** cmdlet for REST-based connections (version 2.0.6-Preview8 or later).
- The _DelegatedOrganization_ parameter works in the **Connect-IPPSSession** cmdlet as long as you also use the _AzureADAuthorizationEndpointUri_ parameter in the command.
- Certain cmdlets that used to prompt for confirmation in specific scenarios no longer do so. By default, the cmdlet runs to completion.
- The format of the error returned from failed cmdlet execution is slightly modified. The exception now contains more data (for example, the exception type), and the `FullyQualifiedErrorId` doesn't contain the `FailureCategory`. The format of the error is subject to further modification.

#### Version 2.0.5

- New **Get-OwnerlessGroupPolicy** and **Set-OwnerlessGroupPolicy** cmdlets to manage ownerless Microsoft 365 groups.

  > [!NOTE]
  > Although the _cmdlets_ are available in the module, the _feature_ is only available to members of a Private Preview.

- New **Get-VivaInsightsSettings** and **Set-VivaInsightsSettings** cmdlets to control user access to Headspace features in Viva Insights.

#### Version 2.0.4

- PowerShell 7 is officially supported in Windows, Linux, and Apple macOS as described in the [Prerequisites for the Exchange Online PowerShell module](#prerequisites-for-the-exchange-online-powershell-module) section in this article.

- The module in PowerShell 7 supports browser-based single sign-on (SSO) and other sign in methods. For more information, see [PowerShell 7 exclusive connection methods](connect-to-exchange-online-powershell.md#powershell-7-exclusive-connection-methods).

- The **Get-UserAnalyticsConfig** and **Set-UserAnalyticsConfig** cmdlets were replaced by the **Get-MyAnalyticsConfig** and **Set-MyAnalyticsConfig**. Additionally, you can configure access at feature level. For more information, see [Configure MyAnalytics](/workplace-analytics/myanalytics/setup/configure-myanalytics).

- Real-time policy and security enforcement in all user based authentication. Continuous Access Evaluation (CAE) is enabled in the module. Read more about CAE [here](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/moving-towards-real-time-policy-and-security-enforcement/ba-p/1276933).

- The _LastUserActionTime_ and _LastInteractionTime_ properties are now available in the output of the **Get-EXOMailboxStatistics** cmdlet.

- The interactive sign-in process now uses a more secure method to fetch access tokens using safe reply URLs.

#### Version 2.0.3

- General availability of certificate based authentication (CBA), which enables using modern authentication in unattended scripting or background automation scenarios. The available certificate storage locations are:
  - Remote in the Azure Key Value (the _Certificate_) parameter. This option enhances security by fetching the certificate only at runtime.
  - Local in the CurrentUser or LocalMachine certificate store (the _CertificateThumbprint_ parameter).
  - Local in an exported certificate file (the _CertificateFilePath_ and _CertificatePassword_ parameters).
  For more information, see the parameter descriptions in [Connect-ExchangeOnline](/powershell/module/exchange/connect-exchangeonline) and [App-only authentication for unattended scripts in the Exchange Online PowerShell module](app-only-auth-powershell-v2.md).
- Connect to Exchange Online PowerShell and Security & Compliance PowerShell simultaneously in a single PowerShell window.
- The new _CommandName_ parameter allows you to specify and restrict the Exchange Online PowerShell cmdlets that are imported in a session. This option reduces the memory footprint for high usage PowerShell applications.
- **Get-EXOMailboxFolderPermission** now supports ExternalDirectoryObjectID in the _Identity_ parameter.
- Optimized latency of the first V2 cmdlet call. Lab results show the first call latency has been reduced from 8 seconds to approximately 1 second. Actual results depend on the cmdlet result size and the tenant environment.

#### Version 1.0.1

- General Availability (GA) version of the EXO V2 module. It's stable and ready for use in production environments.
- **Get-EXOMobileDeviceStatistics** cmdlet now supports the _Identity_ parameter.
- Improved reliability of session auto-reconnect in certain cases where a script was running for ~50 minutes and threw a "Cmdlet not found" error due to a bug in auto-reconnect logic.
- Fixed data-type issues of two commonly used "User" and "MailboxFolderUser" attributes for easy migration of scripts.
- Enhanced support for filters as it now supports four more operators: EndsWith, Contains, Not and NotLike support. Check [Filters in the Exchange Online PowerShell module](filters-v2.md) for attributes that aren't supported in filters.

#### Version 0.4578.0

- Added support for configuring the Briefing Email for your organization at the user level with **Set-UserBriefingConfig** and **Get-UserBriefingConfig** cmdlets.
- Support for session cleanup using **Disconnect-ExchangeOnline** cmdlet. This cmdlet is the V2 equivalent of `Get-PSSession | Remove-PSSession`. In addition to cleaning up session object and local files, it also removes the access token from cache, which is used for authenticating against V2 cmdlets.
- You can now use `FolderId` as an identity parameter in **Get-EXOMailboxFolderPermission**. You can get the `FolderId` value using **Get-MailboxFolder**. For example:
  `Get-MailboxFolderPermission -Identity <UPN>:<Folder-Path>`
  `Get-MailboxFolderPermission -Identity <UPN>:\<Folder-Id>`
- Improved reliability of **Get-EXOMailboxStatistics** as certain request routing errors that led to failures have been resolved.
- Optimized memory usage when a session is created by re-using any existing module with a new session instead of creating a new one every time a session is imported.

#### Version 0.4368.1

- Added support for Security & Compliance PowerShell cmdlets using the **Connect-IPPSSession** cmdlet.
- Hiding the announcement banner is available using the _ShowBanner_ switch (`-ShowBanner:$false`).
- Terminate cmdlet execution on client exception.
- Remote PowerShell contained various complex data types that were intentionally not supported in EXO cmdlets to improve performance. Differences in non-complex data types between remote PowerShell cmdlets and V2 cmdlets have been resolved to allow seamless migration of management scripts.

#### Version 0.3582.0

- Support for prefix during session creation:
  - You can create only one session at a time that contains prefixed cmdlets.
  - EXO V2 cmdlets aren't prefixed because they already have the prefix EXO, so don't use `EXO` as a prefix.
- Use EXO V2 cmdlets even if WinRM Basic Auth is disabled on client machine. Remote PowerShell connections require WinRM Basic Auth, and remote PowerShell cmdlets aren't available if Basic Auth is disabled in WinRM.
- Identity parameter for V2 cmdlets now supports Name and Alias. Using Alias or Name slows down the performance of V2 cmdlets, so we don't recommend using them.
- Fixed issue where the data type of attributes returned by V2 cmdlet was different from remote PowerShell cmdlets. We still have few attributes with differing data types, and we plan to handle them in coming months.
- Fixed bug: Frequent sessions reconnect issue when Connect-ExchangeOnline was invoked with Credentials or UserPrincipalName

#### Version 0.3555.1

- Fixed a bug where piped cmdlets were failing with the following error due to an authentication issue:
  > Cannot invoke the pipeline because the runspace isn't in the Opened state. Current state of the runspace is 'Closed'.

#### Version 0.3527.4

- Updated Get-Help content.
- Fixed an issue in **Get-Help** where the _Online_ parameter was redirecting to a nonexistent page with error code 400.

#### Version 0.3527.3

- Added support for managing Exchange for a different tenant using delegation flow.
- Works in tandem with other PowerShell modules in a single PowerShell window.
- Added support for positional parameters.
- Date Time field now supports client locale.
- Bug fix: PSCredential empty when passed during Connect-ExchangeOnline.
- Bug fix: Client module error when filter contained $null.
- Sessions created internal to EXO V2 Module now have names (naming pattern: ExchangeOnlineInternalSession_%SomeNumber%).
- Bug fix: Remote PowerShell cmdlets intermittently failing due to time the difference between token expiry and the Session going idle.
- Major security update.
- Bug fixes and enhancements.
