---
title: About the Exchange Online PowerShell V2 module
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer: navgupta
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Admins can learn about the installation, maintenance, and design of the Exchange Online PowerShell V2 module that they use to connect to all Exchange-related PowerShell environments in Microsoft 365."
---

# About the Exchange Online PowerShell V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell.

For connection instructions using the EXO V2 module, see the following articles:

- [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md)
- [Connect to Security & Compliance Center PowerShell](connect-to-scc-powershell.md)
- [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md)

The rest of this article explains how the module works, how to install and maintain the module, and the optimized Exchange Online cmdlets that are available in the module.

## Report bugs and issues for the EXO V2 module

When you report an issue at `exocmdletpreview[at]service[dot]microsoft[dot]com`, be sure to include the log files in your email message. To generate the log files, replace \<Path to store log file\> with the output folder you want, and run the following command:

```powershell
Connect-ExchangeOnline -EnableErrorReporting -LogDirectoryPath <Path to store log file> -LogLevel All
```

> [!NOTE]
> The latest version of EXO V2 module and frequent use of the **Connect-ExchangeOnline** and **Disconnect-ExchangeOnline** cmdlets in a single PowerShell session or script might lead to a memory leak. The best way to avoid this issue is to use the _CommandName_ parameter on the **Connect-ExchangeOnline** cmdlet to limit the cmdlets that are used in the session.

## How the EXO V2 module works

The module contains a small set of exclusive Exchange Online PowerShell cmdlets that are optimized for bulk data retrieval scenarios (think: thousands and thousands of objects). When you first open the module, you'll only see these exclusive cmdlets. After you [connect to your Exchange Online organization](connect-to-exchange-online-powershell.md), you'll see all of the familiar cmdlets that are available in Exchange Online PowerShell.

The module use modern authentication for all cmdlets. You can't use Basic authentication in the EXO V2 module; however, you still need to enable the Basic authentication setting in WinRM as explained [later in this article](#prerequisites-for-the-exo-v2-module).

The Exchange Online cmdlets in the EXO V2 module are meant to replace their older, less efficient equivalents, but the equivalent cmdlets are still available (after you connect).

The improved Exchange Online PowerShell cmdlets that are only available in the EXO V2 module are listed in the following table:

|EXO V2 module cmdlet|Older related cmdlet|
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

The connection-related cmdlets that are available in the EXO V2 module are listed in the following table:

|EXO V2 module cmdlet|Older related cmdlet|
|---|---|
|[Connect-ExchangeOnline](/powershell/module/exchange/connect-exchangeonline)|[Connect-EXOPSSession](v1-module-mfa-connect-to-exo-powershell.md) <p> or <p> [New-PSSession](/powershell/module/microsoft.powershell.core/new-pssession)|
|[Connect-IPPSSession](/powershell/module/exchange/connect-ippssession)|[Connect-IPPSSession](v1-module-mfa-connect-to-scc-powershell.md)|
|[Disconnect-ExchangeOnline](/powershell/module/exchange/disconnect-exchangeonline)|[Remove-PSSession](/powershell/module/microsoft.powershell.core/remove-pssession)|

Miscellaneous Exchange Online cmdlets that happen to be in the EXO V2 module are listed in the following table:

|EXO V2 module cmdlet|Comments|
|---|---|
|[Get-MyAnalyticsFeatureConfig](/powershell/module/exchange/get-myanalyticsfeatureconfig)|Available in v2.0.4 or later.|
|[Set-MyAnalyticsFeatureConfig](/powershell/module/exchange/set-myanalyticsfeatureconfig)|Available in v2.0.4 or later.|
|[Get-UserBriefingConfig](/powershell/module/exchange/get-userbriefingconfig)|Replaced by [Get-MyAnalyticsFeatureConfig](/powershell/module/exchange/get-myanalyticsfeatureconfig).|
|[Set-UserBriefingConfig](/powershell/module/exchange/set-userbriefingconfig)|Replaced by [Set-MyAnalyticsFeatureConfig](/powershell/module/exchange/set-myanalyticsfeatureconfig).|
|[Get-VivaInsightsSettings](/powershell/module/exchange/get-vivainsightssettings)|Available in v2.0.5-Preview2 or later.|
|[Set-VivaInsightsSettings](/powershell/module/exchange/set-vivainsightssettings)|Available in v2.0.5-Preview2 or later.|

### Updates for version 2.0.6

Version 2.0.6-Preview3 of the EXO V2 module is now available. This Preview version improves upon the historical capabilities of the module with the following features:

- 250 additional remote PowerShell cmdlets that are backed by the REST API. These REST API cmdlets don't rely on the remote PowerShell session, so PowerShell on your client computer doesn't need [Basic authentication in WinRM](#prerequisites-for-the-exo-v2-module). These REST API cmdlets also work just like their old remote PowerShell equivalent cmdlets, so you don't need to update any of your scripts.
- The new _UseRPSSession_ switch in **Connect-ExchangeOnline** grants access to all existing remote PowerShell cmdlets. The _UseRPSSession_ switch requires [Basic authentication in WinRM](#prerequisites-for-the-exo-v2-module) on your client computer.
- A small number of existing mailbox remote PowerShell cmdlets have been updated with a new, experimental _UseCustomRoutingSwitch_ parameter. Using this switch routes the command directly to the required Mailbox server, and might improve overall performance.
  - When you use the _UseCustomRoutingSwitch_, you need to use the following values for identity of the mailbox:
    - User principal name (UPN)
    - Email address
    - Mailbox GUID
  - Initially, the _UseCustomRoutingSwitch_ is available on the following cmdlets: **Remove-CalendarEvents**, **Get-Clutter**, **Set-Clutter**, **Get-FocusedInbox**, **Set-FocusedInbox**, **Get-InboxRule**, **Get-MailboxAutoReplyConfiguration**, **Get-MailboxCalendarFolder**, **Get-MailboxFolderPermission**, **Get-MailboxFolderStatistics**, **Get-MailboxMessageConfiguration**, **Get-MailboxPermission**, **Get-MailboxRegionalConfiguration**, **Set-MailboxRegionalConfiguration**, **Get-MailboxStatistics**, **Get-MobileDeviceStatistics**, **Get-UserPhoto**, and **Set-UserPhoto**.

    Use this parameter experimentally and [report any issues](#report-bugs-and-issues-for-the-exo-v2-module) that you encounter.

## Install and maintain the EXO V2 module

You can download the EXO V2 module from the PowerShell gallery at <https://www.powershellgallery.com/packages/ExchangeOnlineManagement/>.

The procedures in this section explain how to install, update, and uninstall the EXO V2 module.

### Supported operating systems for the EXO V2 module

The latest version of the EXO V2 module is officially supported in PowerShell 7 on Windows, Linux, and Apple macOS.

Specifically, version **2.0.4 or later** of the EXO V2 module is supported in **PowerShell 7.0.3 or later**.

For more information about PowerShell 7, see [Announcing PowerShell 7.0](https://devblogs.microsoft.com/powershell/announcing-PowerShell-7-0/).

#### Apple macOS

The EXO V2 module is supported in the following versions of macOS:

- macOS 11 Big Sur or later
- macOS 10.15 Catalina
- macOS 10.14 Mojave

For instructions on installing PowerShell 7 on macOS, see [Installing PowerShell on macOS](/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7.1&preserve-view=true).

> [!NOTE]
> As described in the installation article, you need to install OpenSSL, which is required for WSMan.

After you install PowerShell 7 and OpenSSL, do the following steps:

1. Run PowerShell as superuser: `sudo pwsh`
2. In the PowerShell superuser session, run the following commands:

   ```powershell
   Install-Module -Name PSWSMan

   Install-WSMan
   ```

   If prompted, accept PSGallery as the source for the cmdlets.

Now you can do the [regular PowerShell prerequisites](#prerequisites-for-the-exo-v2-module) and [install the EXO V2 module](#install-the-exo-v2-module).

#### Linux

The EXO V2 module is officially supported in the following distributions of Linux:

- Ubuntu 18.04 LTS
- Ubuntu 20.04 LTS

If you have trouble using the EXO V2 module on other distributions of Linux, send email to the following address: `exocmdletpreview[at]service[dot]microsoft[dot]com`. The email address is purposefully obfuscated to avoid spam.

For instructions on installing PowerShell 7 on Linux, see [Installing PowerShell on Linux](/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7.1&preserve-view=true).

After you install PowerShell 7, do the following steps:

1. Run PowerShell as superuser: `sudo pwsh`
2. In the PowerShell superuser session, run the following commands:

   ```powershell
   Install-Module -Name PSWSMan

   Install-WSMan
   ```

   If prompted, accept PSGallery as the source for the cmdlets.

Now you can do the [regular PowerShell prerequisites](#prerequisites-for-the-exo-v2-module) and [install the EXO V2 module](#install-the-exo-v2-module).

#### Windows

All versions of the EXO V2 module are supported in Windows PowerShell 5.1. PowerShell 7 on Windows requires version 2.0.4 or later of the EXO V2 module.

The EXO V2 module is supported in the following versions of Windows:

- Windows 11
- Windows 10
- Windows 8.1<sup>4</sup>
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 or Windows Server 2012 R2<sup>4</sup>
- Windows 7 Service Pack 1 (SP1)<sup>1,</sup><sup>2,</sup><sup>3</sup>
- Windows Server 2008 R2 SP1<sup>1,</sup><sup>2,</sup><sup>3</sup>

<sup>1</sup> This version of Windows has reached its end of support, and is now supported only in Azure virtual machines.

<sup>2</sup> This version of Windows doesn't support version 2.0.4 or later of the EXO V2 module. Only version 2.0.3 or earlier is supported.

<sup>3</sup> Windows PowerShell 5.1 on this version of Windows requires the Microsoft .NET Framework 4.5 or later and the Windows Management Framework 5.1. For more information, see [Windows Management Framework 5.1](https://aka.ms/wmf5download).

<sup>4</sup> PowerShell 7 on this version of Windows requires the [Windows 10 Universal C Runtime (CRT)](https://www.microsoft.com/download/details.aspx?id=50410).

### Prerequisites for the EXO V2 module

> [!NOTE]
> The settings described in this section are required in all versions of PowerShell on all operating systems.

- PowerShell needs to be configured to run scripts, and by default, it isn't. You'll get the following error when you try to connect:

  > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

  To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated PowerShell window (a PowerShell window you open by selecting **Run as administrator**):

  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

  For more information about execution policies, see [About Execution Policies](/powershell/module/microsoft.powershell.core/about/about_execution_policies).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to send the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  > [!NOTE]
  > As described [earlier in this article](#updates-for-version-206), v2.0.6 of the EXO V2 module does not require Basic authentication in WinRM for many cmdlets.
  >
  > You must temporarily enable WinRM to run the following winrm commands. You can enable WinRM by running the command: `winrm quickconfig`.

  To verify that Basic authentication is enabled for WinRM, run the following command in a **Command Prompt** or **Windows PowerShell**:

  ```DOS
  winrm get winrm/config/client/auth
  ```

  If you don't see the value `Basic = true`, you need to run **one** of the following commands to enable Basic authentication for WinRM:

  - **In a Command Prompt**:

    ```DOS
    winrm set winrm/config/client/auth @{Basic="true"}
    ```

  - **In Windows PowerShell**:

      ```DOS
    winrm set winrm/config/client/auth '@{Basic="true"}'
    ```

  - **In Windows PowerShell to modify the registry**:
  
    ```PowerShell
    Set-ItemProperty -Path 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WinRM\Client' -Name 'AllowBasic' -Type DWord -Value '1'
    ```

  If Basic authentication for WinRM is disabled, you'll get one of the following errors when you try to connect:

  > The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.

  > Create Powershell Session is failed using OAuth.
  
> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).
  
### Install the EXO V2 module

To install the EXO V2 module for the first time, complete the following steps:

1. Install or update the PowerShellGet module as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget).

2. Close and re-open the Windows PowerShell window.

3. Now you can use the **Install-Module** cmdlet to install the EXO V2 module from the PowerShell Gallery. Typically, you'll want the latest public version of the module, but you can also install a Preview version if one is available.

   - To install **the latest public version** of the module, run **one** of the the following commands:

     - In an elevated PowerShell window (all users):

       ```powershell
       Install-Module -Name ExchangeOnlineManagement
       ```

     - Only for the current user account:

       ```powershell
       Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
       ```

   - To install **a Preview version** of the module, replace \<PreviewVersion\> with the necessary value, and run **one** of the following commands:

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

### Update the EXO V2 module

If the module is already installed on your computer, you can run the following commands to see the version that's currently installed and update it to the latest version from the PowerShell Gallery:

1. To see the version of the module that's currently installed, run the following commands:

   ```powershell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

2. You can use the **Update-Module** cmdlet to update the EXO V2 module from the PowerShell Gallery. Typically, you'll want the latest public version of the module, but you can also upgrade to a Preview version if one is available.

   - To upgrade to **the latest public version** of the module, run **one** of the following commands based on how you originally installed the module (in an elevated PowerShell window vs. `Scope CurrentUser`):

     - In an elevated PowerShell window (all users):

       ```powershell
       Update-Module -Name ExchangeOnlineManagement
       ```

     - Only for the current user account:

       ```powershell
       Update-Module -Name ExchangeOnlineManagement -Scope CurrentUser
       ```

   - To upgrade to **a Preview version** of the module, replace \<PreviewVersion\> with the necessary value, and run **one** of the following commands based on how you originally installed the module (in an elevated PowerShell window vs. `Scope CurrentUser`):

     - In an elevated PowerShell window (all users):

       ```powershell
       Update-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease
       ```

     - Only for the current user account:

       ```powershell
       Update-Module -Name ExchangeOnlineManagement -RequiredVersion <PreviewVersion> -AllowPrerelease -Scope CurrentUser
       ```

   When you're finished, enter **Y** to accept the license agreement.

3. To confirm that the update was successful, run the following commands to check the version information of the module that's installed:

   ```powershell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

For detailed syntax and parameter information, see [Update-Module](/powershell/module/powershellget/update-module).

### Troubleshoot installing the EXO V2 module

- You receive one of the following errors:

  > The specified module 'ExchangeOnlineManagement' with PowerShellGetFormatVersion '\<version\>' is not supported by the current version of PowerShellGet. Get the latest version of the PowerShellGet module to install this module, 'ExchangeOnlineManagement'.
  
  > WARNING: Unable to download from URI 'https://go.microsoft.com/fwlink/?LinkID=627338&clcid=0x409' to ''.

  > WARNING: Unable to download the list of available providers. Check your internet connection.

  Update your installation of the PowerShellGet module to the latest version as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget). Be sure to close and re-open the PowerShell window before you attempt to update the ExchangeOnlineManagement module again.

- As of April 2020, the PowerShell Gallery only supports connections using TLS 1.2 or later. For more information, see [PowerShell Gallery TLS Support](https://devblogs.microsoft.com/powershell/powershell-gallery-tls-support/).

  To check your current settings in the Microsoft .NET Framework, run the following command in Windows PowerShell:

  ```powershell
  [Net.ServicePointManager]::SecurityProtocol
  ```

  As described in the PowerShell Gallery TLS Support article, to *temporarily* change the security protocol to TLS 1.2 to install the PowerShellGet or ExchangeOnlineManagement modules, run the following command in Windows PowerShell *before* you install the module:

  ```powershell
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 
  ```

  To *permanently* enable strong cryptography in the Microsoft .NET Framework version 4.x or later, run one of the following commands based on your Windows architecture:

  - x64:

    ```powershell
    Set-ItemProperty -Path 'HKLM:\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319' -Name 'SchUseStrongCrypto' -Type DWord -Value '1'
    ```

  - x86

    ```powershell
    Set-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\.NETFramework\v4.0.30319' -Name 'SchUseStrongCrypto' -Type DWord -Value '1'
    ```

  For more information, see [SchUseStrongCrypto](/dotnet/framework/network-programming/tls#schusestrongcrypto).

  
- You receive the following error:

  > No match was found for the specified search criteria and module name 'ExchangeOnlineManagement'. Try running `Get-PSReporitory` to see all available registered module repositories.

  The default repository for PowerShell modules is not set to PSGallery. To fix this error, run the following command: 
  
  ```powershell
  Register-PSRepository -Default
  ```

### Uninstall the EXO V2 module

To uninstall the module, run **one** of the following commands based on how you originally installed the module (in an elevated PowerShell window vs. `Scope CurrentUser`):

- In an elevated PowerShell window (all users):

  ```powershell
  Uninstall-Module -Name ExchangeOnlineManagement
  ```

- Only for the current user account:

  ```powershell
  Uninstall-Module -Name ExchangeOnlineManagement
  ```

For detailed syntax and parameter information, see [Uninstall-Module](/powershell/module/powershellget/uninstall-module).

## Properties and property sets in the EXO V2 module

Traditional Exchange Online cmdlets return all possible object properties in their output, including many properties that are often blank or aren't interesting in many scenarios. This behavior causes degraded performance (more server computation and added network load). You rarely (if ever) need the full complement of properties in the cmdlet output.

The **Get-EXO\*** cmdlets in the module have categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we've categorized specific related properties into property sets. Simply put, these property sets are buckets of two or more related properties on the cmdlet.

In the biggest and most used **Get-EXO\*** cmdlets:

- [Get-EXOCasMailbox](/powershell/module/exchange/get-exocasmailbox)
- [Get-EXOMailbox](/powershell/module/exchange/get-exomailbox)
- [Get-EXOMailboxStatistics](/powershell/module/exchange/get-exomailboxstatistics)
- [Get-EXORecipient](/powershell/module/exchange/get-exorecipient)

Property sets are controlled by the following parameters:

- *PropertySets*: This parameter accepts one or more available property set names separated by commas. The available property sets are described in [Property sets in Exchange Online PowerShell V2 cmdlets](cmdlet-property-sets.md).
- *Properties*: This parameter accepts one or more property names separated by commas.

You can use the *PropertySets* and *Properties* parameters together in the same command.

We've also included a Minimum property set that includes a bare minimum set of required properties for the cmdlet output (for example, identity properties). The properties in the Minimum property sets are also described in [Property sets in Exchange Online PowerShell V2 cmdlets](cmdlet-property-sets.md).

- If you don't use the *PropertySets* or *Properties* parameters, you automatically get the properties in the Minimum property set.
- If you use the *PropertySets* or *Properties* parameters, you get the specified properties **and** the properties in the Minimum property set.

Either way, the cmdlet output will contain far fewer properties, and the time it takes to return those results will be much faster.

For example, after you [connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md), the following example returns only the properties in the Minimum property set for the first ten mailboxes.

```powershell
Get-EXOMailbox -ResultSize 10
```

In contrast, the output of the same **Get-Mailbox** command would return at least 230 properties for each of the first ten mailboxes.

> [!NOTE]
> Although the _PropertySets_ parameter accepts the value All, we highly discourage using this value to retrieve all properties, because it slows down the command and reduces reliability. Always use the _PropertySets_ and _Properties_ parameters to retrieve the minimum number of properties that are required for your scenario.

For more information about filtering in the EXO V2 module, see [Filters in the Exchange Online V2 module](filters-v2.md).

## Release notes

Unless otherwise noted, the current release of the EXO V2 module contains all features of previous releases.

### Current release: Version 2.0.5

- New **Get-OwnerlessGroupPolicy** and **Set-OwnerlessGroupPolicy** cmdlet to manage ownerless Microsoft 365 groups.

  > [!NOTE]
  > Although the _cmdlets_ are available in the module, the _feature_ is only available to members of a Private Preview.

- New **Get-VivaInsightsSettings** and **Set-VivaInsightsSettings** cmdlets to control user access to Headspace features in Viva Insights.

### Previous releases

#### Version 2.0.4

- PowerShell 7 is officially supported in Windows, Linux, and Apple macOS as described in the [Prerequisites for the EXO V2 module](#prerequisites-for-the-exo-v2-module) section in this article.

- The EXO V2 module in PowerShell 7 supports browser-based single sign-on (SSO) and other sign in methods. For more information, see [PowerShell 7 log in experiences](connect-to-exchange-online-powershell.md#powershell-7-log-in-experiences).

- The **Get-UserAnalyticsConfig** and **Set-UserAnalyticsConfig** cmdlets have been replaced by the **Get-MyAnalyticsConfig** and **Set-MyAnalyticsConfig**.Additionally, you can configure access at feature level. For more information, see [Configure MyAnalytics](/workplace-analytics/myanalytics/setup/configure-myanalytics).

- Real-time policy and security enforcement in all user based authentication. Continuous Access Evaluation (CAE) has been enabled in EXO V2 Module. Read more about CAE [here](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/moving-towards-real-time-policy-and-security-enforcement/ba-p/1276933).

- The _LastUserActionTime_ and _LastInteractionTime_ properties are now available in the output of the **Get-EXOMailboxStatistics** cmdlet.

- The interactive sign-in process now uses a more secure method to fetch access tokens using safe reply URLs.

#### Version 2.0.3

- General availability of certificate based authentication (CBA), which enables using modern authentication in unattended scripting or background automation scenarios. The available certificate storage locations are:
  - Remote in the Azure Key Value (the _Certificate_) parameter. This option enhances security by fetching the certificate only at runtime.
  - Local in the CurrentUser or LocalMachine certificate store (the _CertificateThumbprint_ parameter).
  - Local in an exported certificate file (the _CertificateFilePath_ and _CertificatePassword_ parameters).
  For more information, see the parameter descriptions in [Connect-ExchangeOnline](/powershell/module/exchange/connect-exchangeonline) and [App-only authentication for unattended scripts in the EXO V2 module](app-only-auth-powershell-v2.md).
- Connect to Exchange Online PowerShell and Security Compliance Center PowerShell simultaneously in a single PowerShell window.
- The new _CommandName_ parameter allows you to specify and restrict the Exchange Online PowerShell cmdlets that are imported in a session. This option reduces the memory footprint for high usage PowerShell applications.
- **Get-EXOMailboxFolderPermission** now supports ExternalDirectoryObjectID in the _Identity_ parameter.
- Optimized latency of the first V2 cmdlet call. Lab results show the first call latency has been reduced from 8 seconds to approximately 1 second. Actual results will depend on the cmdlet result size and the tenant environment.

#### Version 1.0.1

- General Availability (GA) version of the EXO V2 module. It is stable and ready for use in production environments.
- **Get-EXOMobileDeviceStatistics** cmdlet now supports the _Identity_ parameter.
- Improved reliability of session auto-reconnect in certain cases where a script was running for ~50 minutes and threw a "Cmdlet not found" error due to a bug in auto-reconnect logic.
- Fixed data-type issues of two commonly used "User" and "MailboxFolderUser" attributes for easy migration of scripts.
- Enhanced support for filters as it now supports four more operators: EndsWith, Contains, Not and NotLike support. Check [Filters in the EXO V2 module](filters-v2.md) for attributes that aren't supported in filters.

#### Version 0.4578.0

- Added support for configuring the Briefing Email for your organization at the user level with **Set-UserBriefingConfig** and **Get-UserBriefingConfig** cmdlets.
- Support for session cleanup using **Disconnect-ExchangeOnline** cmdlet. This cmdlet is the V2 equivalent of `Get-PSSession | Remove-PSSession`. In addition to cleaning up session object and local files, it also removes the access token from cache, which is used for authenticating against V2 cmdlets.
- You can now use `FolderId` as an identity parameter in **Get-EXOMailboxFolderPermission**. You can get the `FolderId` value using **Get-MailboxFolder**. For example:
  `Get-MailboxFolderPermission -Identity <UPN>:<Folder-Path>`
  `Get-MailboxFolderPermission -Identity <UPN>:\<Folder-Id>`
- Improved reliability of **Get-EXOMailboxStatistics** as certain request routing errors which led to failures have been resolved.
- Optimized memory usage when a session is created by re-using any existing module with a new session instead of creating a new one every time session is imported.

#### Version 0.4368.1

- Added support for Security & Compliance Center PowerShell cmdlets using the **Connect-IPPSSession** cmdlet.
- Hiding the announcement banner is available using the _ShowBanner_ switch (`-ShowBanner:$false`).
- Terminate cmdlet execution on client exception.
- Remote PowerShell contained various complex data types which were intentionally not supported in EXO cmdlets to improve performance. Differences in non-complex data types between remote PowerShell cmdlets and V2 cmdlets have been resolved to allow seamless migration of management scripts.

#### Version 0.3582.0

- Support for prefix during session creation.
  - You can create only 1 session at a time that contains prefixed cmdlets.
  - Note that the EXO V2 cmdlets will not be prefixed as they already have the prefix EXO, so don't use `EXO` as a prefix.
- Use EXO V2 cmdlets even if WinRM Basic Auth is disabled on client machine. Note that remote PowerShell cmdlets require WinRM Basic Auth, and they won't be available if it's disabled.
- Identity parameter for V2 cmdlets now supports Name and Alias as well. Note that using Alias or Name slows down the performance of V2 cmdlets, so we don't recommend using them.
- Fixed issue where the data type of attributes returned by V2 cmdlet was different from remote PowerShell cmdlets. We still have few attributes which have differing data types, and we plan to handle them in coming months.
- Fixed bug: Frequent sessions reconnects issue when Connect-ExchangeOnline was invoked with Credentials or UserPrincipalName

#### Version 0.3555.1

- Fixed a bug where piped cmdlets were failing with the following error due to an authentication issue:
  > Cannot invoke the pipeline because the runspace is not in the Opened state. Current state of the runspace is 'Closed'.

#### Version 0.3527.4

- Updated Get-Help content.
- Fixed an issue in **Get-Help** where the *-Online* parameter was redirecting to a non-existent page with error code 400.

#### Version 0.3527.3

- Added support for managing Exchange for a different tenant using delegation flow.
- Works in tandem with other PowerShell modules in a single PS window.
- Added support for positional parameters.
- Date Time field now supports client locale.
- Bug fix: PSCredential empty when passed during Connect-ExchangeOnline.
- Bug fix: Client module error when filter contained $null.
- Sessions created internal to EXO V2 Module now have names (naming pattern: ExchangeOnlineInternalSession_%SomeNumber%).
- Bug fix: Remote PowerShell cmdlets intermittently failing due to time the difference between token expiry and the PSSession going idle.
- Major security update.
- Bug fixes and enhancements.
