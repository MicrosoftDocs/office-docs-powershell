---
title: About the Exchange Online PowerShell V3 module
ms.author: chrisda
author: chrisda
manager: orspodek
ms.date: 01/22/2026
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
description: "Admins can learn about the installation, maintenance, and design of the Exchange Online PowerShell V3 module that they use to connect to all Exchange cloud-related PowerShell environments."
---

# About the Exchange Online PowerShell module

The Exchange Online PowerShell module (also known as the Exchange Online PowerShell V3 module or EXO V3 module since 2022) uses modern authentication and works with or without multifactor authentication (MFA) for connecting to all Exchange cloud-related PowerShell environments: Exchange Online PowerShell, Security & Compliance PowerShell, and PowerShell for [the Built-in security add-on for on-premises mailboxes](/exchange/standalone-eop/standalone-eop).

For connection instructions using the module, see the following articles:

- [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md)

  > [!TIP]
  > Connection instructions for PowerShell in [the Built-in security add-on for on-premises mailboxes](/exchange/standalone-eop/standalone-eop) are the same as connection instructions for Exchange Online PowerShell.

- [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md)
- [App-only authentication for unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell](app-only-auth-powershell-v2.md)
- [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md)
- [Use C# to connect to Exchange Online PowerShell](connect-to-exo-powershell-c-sharp.md)

The rest of this article explains how the module works, how to install and maintain the module, and the optimized Exchange Online cmdlets that are available in the module.

## REST API connections in the EXO V3 module

Exchange Online PowerShell and Security & Compliance PowerShell use REST API connections for all cmdlets since 2023.

REST API connections require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](#powershellget-required-in-windows).

Cmdlets in REST API connections have the following advantages over their historical counterparts:

- **More secure**: Built-in support for modern authentication and no dependence on the remote PowerShell session. PowerShell on your client computer doesn't need [Basic authentication in WinRM](#basic-authentication-in-winrm).
- **More reliable**: Transient failures use built-in retries, so failures or delays are minimized. For example:
  - Failures due to network delays.
  - Delays due to large queries that take a long time to complete.
- **Better performance**: REST API connections avoid setting up a PowerShell runspace.

The following table compares the benefits of REST API cmdlets to unavailable remote PowerShell cmdlets and the [exclusive Get-EXO\* cmdlets in the EXO V3 module](#cmdlets-in-the-exchange-online-powershell-module)

|&nbsp;|Remote PowerShell cmdlets|Get-EXO\* cmdlets|REST API cmdlets|
|---|---|---|---|
|**Security**|Least secure|Highly secure|Highly secure|
|**Performance**|Low performance|High performance|Medium performance|
|**Reliability**|Least reliable|Highly reliable|Highly reliable|
|**Functionality**|All parameters and output properties available|Limited parameters and output properties available|All parameters and output properties available|

REST API cmdlets have the same cmdlet names and work just like their remote PowerShell equivalents, so you don't need to update cmdlet names or parameters in scripts.

> [!TIP]
> The [Invoke-Command](/powershell/module/microsoft.powershell.core/invoke-command) cmdlet doesn't work in REST API connections. For alternatives, see [Workarounds for Invoke-Command scenarios in REST API connections](invoke-command-workarounds-rest-api.md).

A few cmdlets in Exchange Online PowerShell are updated with the experimental _UseCustomRouting_ switch. This switch routes the command directly to the required Mailbox server, and might improve overall performance. Use the _UseCustomRouting_ switch experimentally.

- When you use the _UseCustomRouting_ switch, you can use only the following values for identity of the mailbox:
  - User principal name (UPN)
  - Email address
  - Mailbox GUID

- The _UseCustomRouting_ switch is available only on the following Exchange Online PowerShell cmdlets:
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

- Use the [Get-ConnectionInformation](/powershell/module/exchangepowershell/get-connectioninformation) cmdlet to get information about connections to Exchange Online PowerShell and Security & Compliance PowerShell. This cmdlet is required because the [Get-PSSession](/powershell/module/microsoft.powershell.core/get-pssession) cmdlet in Windows PowerShell doesn't return information for REST API connections.

  Scenarios where you can use **Get-ConnectionInformation** are described in the following table:

  |Scenario|Expected output|
  |---|---|
  |Run after **Connect-ExchangeOnline** or **Connect-IPPSSession** commands.|Returns one connection information object.|
  |Run after multiple **Connect-ExchangeOnline** or **Connect-IPPSSession** commands.|Returns a collection of connection information objects.|

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
> For General Availability (GA) versions of the module, don't use the following email address to report issues. Messages about GA versions of the module aren't answered. Instead, open a support ticket.

For **Preview versions of the module only**, use `exocmdletpreview[at]service[dot]microsoft[dot]com` to report any issues that you might encounter. Be sure to include the log files in your email message. To generate the log files, replace \<Path\> with an output folder, and then run the following command:

```powershell
Connect-ExchangeOnline -EnableErrorReporting -LogDirectoryPath <Path> -LogLevel All
```

## Cmdlets in the Exchange Online PowerShell module

The EXO module contains nine exclusive **Get-EXO\*** cmdlets that are optimized for speed in bulk data retrieval scenarios (thousands and thousands of objects) in Exchange Online PowerShell. The improved cmdlets in the module are listed in the following table:

|EXO module cmdlet|Older related cmdlet|
|---|---|
|[Get-EXOMailbox](/powershell/module/exchangepowershell/get-exomailbox)|[Get-Mailbox](/powershell/module/exchangepowershell/get-mailbox)|
|[Get-EXORecipient](/powershell/module/exchangepowershell/get-exorecipient)|[Get-Recipient](/powershell/module/exchangepowershell/get-recipient)|
|[Get-EXOCasMailbox](/powershell/module/exchangepowershell/get-exocasmailbox)|[Get-CASMailbox](/powershell/module/exchangepowershell/get-casmailbox)|
|[Get-EXOMailboxPermission](/powershell/module/exchangepowershell/get-exomailboxPermission)|[Get-MailboxPermission](/powershell/module/exchangepowershell/get-mailboxpermission)|
|[Get-EXORecipientPermission](/powershell/module/exchangepowershell/get-exorecipientpermission)|[Get-RecipientPermission](/powershell/module/exchangepowershell/get-recipientpermission)|
|[Get-EXOMailboxStatistics](/powershell/module/exchangepowershell/get-exomailboxstatistics)|[Get-MailboxStatistics](/powershell/module/exchangepowershell/get-mailboxstatistics)|
|[Get-EXOMailboxFolderStatistics](/powershell/module/exchangepowershell/get-exomailboxfolderstatistics)|[Get-MailboxFolderStatistics](/powershell/module/exchangepowershell/get-mailboxfolderstatistics)|
|[Get-EXOMailboxFolderPermission](/powershell/module/exchangepowershell/get-exomailboxfolderpermission)|[Get-MailboxFolderPermission](/powershell/module/exchangepowershell/get-mailboxfolderpermission)|
|[Get-EXOMobileDeviceStatistics](/powershell/module/exchangepowershell/get-exomobiledevicestatistics)|[Get-MobileDeviceStatistics](/powershell/module/exchangepowershell/get-mobiledevicestatistics)|

> [!TIP]
> If you open multiple connections to Exchange Online PowerShell in the same window, the **Get-EXO\*** cmdlets are always associated with the last (most recent) Exchange Online PowerShell connection. Run the following command to find the REST API session where the **Get-EXO\*** cmdlets are run: `Get-ConnectionInformation | Where-Object {$_.ConnectionUsedForInbuiltCmdlets -eq $true}`.

The connection-related cmdlets in the module are listed in the following table:

|EXO module cmdlet|Older related cmdlet|Comments|
|---|---|---|
|[Connect-ExchangeOnline](/powershell/module/exchangepowershell/connect-exchangeonline)|**Connect-EXOPSSession** in V1 of the module <br/> or <br/> [New-PSSession](/powershell/module/microsoft.powershell.core/new-pssession)||
|[Connect-IPPSSession](/powershell/module/exchangepowershell/connect-ippssession)|**Connect-IPPSSession** in V1 of the module||
|[Disconnect-ExchangeOnline](/powershell/module/exchangepowershell/disconnect-exchangeonline)|[Remove-PSSession](/powershell/module/microsoft.powershell.core/remove-pssession)||
|[Get-ConnectionInformation](/powershell/module/exchangepowershell/get-connectioninformation)|[Get-PSSession](/powershell/module/microsoft.powershell.core/get-pssession)|Available in v3.0.0 or later.|

> [!TIP]
> Frequent use of the **Connect-ExchangeOnline** and **Disconnect-ExchangeOnline** cmdlets in a single PowerShell session or script might lead to a memory leak. The best way to avoid this issue is to use the _CommandName_ parameter on the **Connect-ExchangeOnline** cmdlet to limit the cmdlets that are used in the session.

Miscellaneous Exchange Online feature cmdlets that happen to be in the module are listed in the following table:

|Cmdlet|Comments|
|---|---|
|[Get-DefaultTenantBriefingConfig](/powershell/module/exchangepowershell/get-defaulttenantbriefingconfig)|Available in v3.2.0 or later.|
|[Set-DefaultTenantBriefingConfig](/powershell/module/exchangepowershell/set-defaulttenantbriefingconfig)|Available in v3.2.0 or later.|
|[Get-DefaultTenantMyAnalyticsFeatureConfig](/powershell/module/exchangepowershell/get-defaulttenantmyanalyticsfeatureconfig)|Available in v3.2.0 or later.|
|[Set-DefaultTenantMyAnalyticsFeatureConfig](/powershell/module/exchangepowershell/set-defaulttenantmyanalyticsfeatureconfig)|Available in v3.2.0 or later.|
|[Get-MyAnalyticsFeatureConfig](/powershell/module/exchangepowershell/get-myanalyticsfeatureconfig)|Available in v2.0.4 or later.|
|[Set-MyAnalyticsFeatureConfig](/powershell/module/exchangepowershell/set-myanalyticsfeatureconfig)|Available in v2.0.4 or later.|
|[Get-UserBriefingConfig](/powershell/module/exchangepowershell/get-userbriefingconfig)|Replaced by [Get-MyAnalyticsFeatureConfig](/powershell/module/exchangepowershell/get-myanalyticsfeatureconfig).|
|[Set-UserBriefingConfig](/powershell/module/exchangepowershell/set-userbriefingconfig)|Replaced by [Set-MyAnalyticsFeatureConfig](/powershell/module/exchangepowershell/set-myanalyticsfeatureconfig).|
|[Get-VivaInsightsSettings](/powershell/module/exchangepowershell/get-vivainsightssettings)|Available in v2.0.5 or later.|
|[Set-VivaInsightsSettings](/powershell/module/exchangepowershell/set-vivainsightssettings)|Available in v2.0.5 or later.|
|[Get-VivaModuleFeature](/powershell/module/exchangepowershell/get-vivamodulefeature)|Available in v3.2.0 or later.|
|[Get-VivaModuleFeatureEnablement](/powershell/module/exchangepowershell/get-vivamodulefeatureenablement)|Available in v3.2.0 or later.|
|[Add-VivaModuleFeaturePolicy](/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Get-VivaModuleFeaturePolicy](/powershell/module/exchangepowershell/get-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Remove-VivaModuleFeaturePolicy](/powershell/module/exchangepowershell/remove-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Update-VivaModuleFeaturePolicy](/powershell/module/exchangepowershell/update-vivamodulefeaturepolicy)|Available in v3.2.0 or later.|
|[Add-VivaOrgInsightsDelegatedRole](/powershell/module/exchangepowershell/add-vivaorginsightsdelegatedrole)|Available in v3.7.0-Preview1 or later.|
|[Get-VivaOrgInsightsDelegatedRole](/powershell/module/exchangepowershell/get-vivaorginsightsdelegatedrole)|Available in v3.7.0-Preview1 or later.|
|[Remove-VivaOrgInsightsDelegatedRole](/powershell/module/exchangepowershell/remove-vivaorginsightsdelegatedrole)|Available in v3.7.0-Preview1 or later.|
|[Add-WorkforceInsightsDelegationAccess](/powershell/module/exchangepowershell/add-workforceinsightsdelegationaccess)|Available in v3.9.2-Preview1 or later.|
|[Get-WorkforceInsightsDelegationAccess](/powershell/module/exchangepowershell/get-workforceinsightsdelegationaccess)|Available in v3.9.2-Preview1 or later.|
|[Remove-WorkforceInsightsDelegationAccess](/powershell/module/exchangepowershell/remove-workforceinsightsdelegationaccess)|Available in v3.9.2-Preview1 or later.|

## Install and maintain the Exchange Online PowerShell module

You download the module from the PowerShell gallery at <https://www.powershellgallery.com/packages/ExchangeOnlineManagement/>.

The procedures in this section explain how to install, update, and uninstall the module.

### Supported operating systems for the Exchange Online PowerShell module

The module is officially supported in PowerShell 7 on Windows, Linux, and Apple macOS:

- Module versions 3.5.0 (May 2024) or later require PowerShell 7.4.0 (November 2023) or later due to .NET 8.0 assembly dependencies. Earlier versions of PowerShell 7 might encounter compatibility issues (PowerShell 7.3.6 is more compatible than 7.3.7).
- Module versions 3.0.0 (September 2022) to 3.4.0 (October 2023) require PowerShell 7.2.0 (November 2021) or later due to .NET 6.0 assembly dependencies in REST API cmdlets and connections.
- Support for the module in PowerShell 7 started with version 2.0.4 (February 2021) in PowerShell 7.0.3 (July 2020).

For more information about PowerShell 7, see [What is PowerShell?](/powershell/scripting/overview).

> [!TIP]
> All versions of the module are supported and compatible in Windows PowerShell 5.1.
>
> As stated previously, only REST API connections are supported in Exchange Online PowerShell and Security & Compliance PowerShell:
>
> - Version 2.0.4 of the module (February 2021) supports the REST API only for the [nine exclusive **Get-EXO\*** cmdlets](#cmdlets-in-the-exchange-online-powershell-module).
> - Version 2.0.5 of the module (May 2021) partially supports REST API cmdlets only in Exchange Online PowerShell.
> - Version 3.0.0 (September 2022) or later fully supports REST API cmdlets in Exchange Online PowerShell.
> - Version 3.2.0 (June 2023) or later fully supports REST API cmdlets in Security & Compliance PowerShell.

#### Apple macOS

> [!NOTE]
> Currently, **Connect-IPPSSession** and therefore Security & Compliance PowerShell isn't available in PowerShell 7 on macOS clients.

The module is supported in the following versions of macOS:

- **macOS 13 Ventura or later**:

  |Module version|PowerShell version|
  |---|---|
  |3.5.0 or later|7.4.0 or later|

  7.4.0 is the minimum supported version of PowerShell 7 in macOS 13 or later. Module versions 3.0.0 to 3.4.0 are also supported.

- **macOS 12 Monterey** and **mac OS 11 Big Sur**:

  |Module version|PowerShell version|
  |---|---|
  |3.5.0 or later|7.4.x|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|

  Module versions 3.0.0 or later are supported on all processors.

  Module versions 2.0.4 and 2.0.5 run natively on Intel processors. Apple M1 or Apple M2 processors require Apple Rosetta 2.

  7.4.x is the latest supported version of PowerShell 7 in macOS 11 and macOS 12.

- **macOS 10.15 Catalina**:

  |Module version|PowerShell version|
  |---|---|
  |3.0.0 to 3.4.0|7.2.0 to 7.2.22|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|

  7.2.22 is the latest supported version of PowerShell 7 in macOS 10.15.

- **macOS 10.14 Mojave**

  |Module version|PowerShell version|
  |---|---|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5|

  7.1.5 is the latest supported version of PowerShell 7 in macOS 10.14.

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

> [!NOTE]
> Currently, **Connect-IPPSSession** and therefore Security & Compliance PowerShell isn't available in PowerShell 7 on Linux clients.
>
> If you connect to Exchange Online PowerShell on Linux from a network behind a proxy server, you need to use module version 3.0.0 or later.

The module is officially supported in the following distributions of Linux:

- **Ubuntu 24.04 LTS**

  |Module version|PowerShell version|
  |---|---|
  |3.5.0 or later|7.4.0 or later|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|

- **Ubuntu 20.04 LTS**

  |Module version|PowerShell version|
  |---|---|
  |3.5.0 or later|7.4.x|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|

  Versions 3.7.0 or later might fail with SSL protocol errors.

- **Ubuntu 18.04 LTS**

  |Module version|PowerShell version|
  |---|---|
  |3.5.0 or later|7.4.x|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|

  Module versions 3.7.0 or later might have reliability issues in Ubuntu 18.04 LTS.

For instructions on installing PowerShell 7 on Linux, see [Installing PowerShell on Linux](/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.4#ubuntu&preserve-view=true).

After you install PowerShell 7, do the following steps:

1. Run PowerShell as superuser: `sudo pwsh`
2. In the PowerShell superuser session, run the following commands:

   ```powershell
   Install-Module -Name PSWSMan

   Install-WSMan
   ```

   If prompted, accept PSGallery as the source for the cmdlets.

Now you can do the [regular PowerShell prerequisites](#prerequisites-for-the-exchange-online-powershell-module) and [install the Exchange Online PowerShell module](#install-the-exchange-online-powershell-module).

#### Windows

- **Windows PowerShell 5.1**:
  - All versions of the module are supported.
  - Current versions of Windows include the required versions of the .NET Framework, so you don't need to install the .NET Framework to use the module in Windows PowerShell 5.1.

- **PowerShell 7**:
  - Module versions 3.5.0 (May 2024) or later require PowerShell 7.4.0 (November 2023) or later due to .NET 8.0 assembly dependencies. Earlier versions of PowerShell 7 might encounter compatibility issues (PowerShell 7.3.6 is more compatible with the module than 7.3.7).
  - Module versions 3.0.0 (September 2022) to 3.4.0 (October 2023) require PowerShell 7.2.0 (November 2021) or later due to .NET 6.0 assembly dependencies in REST API cmdlets and connections.
  - Support for the module in PowerShell 7 started with version 2.0.4 (February 2021) in PowerShell 7.0.3 (July 2020).

Specific module version support in Windows depends on Windows PowerShell support and .NET Framework and/or .NET support as described in the following list:

- **Windows 11**:

  |Module version|PowerShell version|.NET requirement|
  |---|---|---|
  |2.0.5 or later|5.1|.NET Framework 4.7.2 (4.8.x is included, so you don't need to install the .NET Framework)|
  |3.5.0 or later|7.4.0 or later|.NET 8.0<br/>Included in 24H2 or later.|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|.NET 6.0 (7.2.x)<br/>.NET 7.0 (7.3.x)|

  7.2.0 (.NET 6.0) is the earliest supported version of PowerShell 7 in Windows 11.

- **Windows Server 2022**:

  |Module version|PowerShell version|.NET requirement|
  |---|---|---|
  |2.0.5 or later|5.1|.NET Framework 4.7.2 (4.8 is included, so you don't need to install the .NET Framework)|
  |3.5.0 or later|7.4.0 or later|.NET 8.0|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|.NET 6.0 (7.2.x)<br/>.NET 7.0 (7.3.x)|

  7.2.0 (.NET 6.0) is the earliest supported version of PowerShell 7 in Windows Server 2022.

- **Windows 10**:

  |Module version|PowerShell version|Supported Windows version|.NET requirement|
  |---|---|---|---|
  |2.0.5 or later|5.1|Anniversary Update (version 1607; August 2016) or later|.NET Framework 4.7.2<br/>April 2018 Update (version 1803) or later includes the .NET Framework 4.7.2, so you don't need to download it.|
  |3.5.0 or later|7.4.0 or later|October 2018 Update (version 1809) or later |.NET 8.0|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|October 2018 Update (version 1809) or later|.NET 6.0 (7.2.x)<br/>.NET 7.0 (7.3.x)|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|Anniversary Update (version 1607; August 2016) or later|.NET Core 3.1 (7.0.x)<br/>.NET 5.0 (7.1.x)|

- **Windows Server 2016** and **Windows Server 2019**:

  |Module version|PowerShell version|.NET requirement|
  |---|---|---|
  |2.0.5 or later|5.1|.NET Framework 4.7.2<br/>Included in Windows Server 2019.|
  |3.5.0 or later|7.4.0 or later|.NET 8.0|
  |3.0.0 to 3.4.0|7.2.0 to 7.3.7 (or later)|.NET 6.0 (7.2.x)<br/>.NET 7.0 (7.3.x)|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|.NET Core 3.1 (7.0.x)<br/>.NET 5.0 (7.1.x)|

- **Windows 8.1**, **Windows Server 2012**, and **Windows Server 2012 R2**:

  |Module version|PowerShell version|.NET requirement|
  |---|---|---|
  |2.0.5 or later|5.1|.NET Framework 4.7.2|
  |3.0.0 to 3.4.0|7.2.x|.NET 6.0|
  |2.0.4 and 2.0.5|7.0.3 to 7.1.5 (or later)|.NET Core 3.1 (7.0.x)<br/>.NET 5.0 (7.1.x)|

  7.2.22 (.NET 6.0) is the latest supported version of PowerShell 7 in Windows 8.1, Windows Server 2012, and Windows Server 2012 R2.

- **Windows 7.1 SP1** and **Windows Server 2008 R2 SP1**:

  |Module version|PowerShell version|.NET requirement|
  |---|---|---|
  |2.0.3|5.1|.NET Framework 4.7.1|

  > [!NOTE]
  > Although you can install this version of the module, you can't connect to Exchange Online PowerShell. Module version 2.0.3 lacks support for REST API connections.

### Prerequisites for the Exchange Online PowerShell module

#### Set the PowerShell execution policy to RemoteSigned

> [!TIP]
> The settings in this section apply to all versions of PowerShell on all operating systems.

PowerShell needs to be configured to run scripts, and by default, it isn't. You get the following error when you try to connect:

> Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

To require trusted publisher signing for all PowerShell scripts downloaded from the internet, run the following command in an elevated PowerShell window (a PowerShell window you open by selecting **Run as administrator**):

```powershell
Set-ExecutionPolicy RemoteSigned
```

For more information about execution policies, see [About Execution Policies](/powershell/module/microsoft.powershell.core/about/about_execution_policies).

<a name='turn-on-basic-authentication-in-winrm'></a>

#### Basic authentication in WinRM

As of October 2023, REST API connections replaced basic authentication (remote PowerShell) connections in [Exchange Online PowerShell](https://techcommunity.microsoft.com/blog/exchange/deprecation-of-remote-powershell-in-exchange-online-%e2%80%93-re-enabling-or-extending-r/3779692) and [Security & Compliance PowerShell](https://techcommunity.microsoft.com/blog/exchange/deprecation-of-remote-powershell-rps-protocol-in-security-and-compliance-powersh/3815432). REST API connections don't require Basic authentication in WinRM.

Version 3.2.0 (June 2023) and later version of the module fully support REST API cmdlets in Exchange Online PowerShell and Security & Compliance PowerShell.

<a name='powershellget-for-rest-api-connections-in-windows'></a>

### PowerShellGet required in Windows

REST API connections in Windows require the PowerShellGet module. By dependency, the PowerShellGet module requires the PackageManagement module. Consideration for these modules is more for PowerShell 5.1 than PowerShell 7, but all versions of PowerShell benefit from having the latest versions of the modules installed. For installation and update instructions, see [Installing PowerShellGet on Windows](/powershell/scripting/gallery/installing-psget).

> [!TIP]
> Preview versions of the PackageManagement or PowerShellGet modules might cause connection issues. If you have connection issues, verify that you don't have preview versions of the modules installed by running the following command: `Get-InstalledModule PackageManagement -AllVersions; Get-InstalledModule PowerShellGet -AllVersions`.

If you don't have PowerShellGet installed when you try to connect, you get the following error:

> Cannot find a cmdlet Update-Manifest

### Install the Exchange Online PowerShell module

To install the module for the first time, complete the following steps:

1. Install or update the PowerShellGet module as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget).

2. Close and reopen the Windows PowerShell window.

3. Now you can use the **Install-Module** cmdlet to install the module from the PowerShell Gallery. Typically, you want the latest public version of the module, but you can also install a Preview version that's newer than the current version.

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

3. To confirm that the update was successful, run the following commands to check the version information of the installed module:

   ```powershell
   Import-Module ExchangeOnlineManagement; Get-Module ExchangeOnlineManagement
   ```

For detailed syntax and parameter information, see [Update-Module](/powershell/module/powershellget/update-module).

### Troubleshoot installing the Exchange Online PowerShell module

- You receive one of the following errors:

  > The specified module 'ExchangeOnlineManagement' with PowerShellGetFormatVersion '\<version\>' isn't supported by the current version of PowerShellGet. Get the latest version of the PowerShellGet module to install this module, 'ExchangeOnlineManagement'.

  > WARNING: Unable to download from URI 'https://go.microsoft.com/fwlink/?LinkID=627338&clcid=0x409' to ''.

  > WARNING: Unable to download the list of available providers. Check your internet connection.

  Update your installation of the PowerShellGet module to the latest version as described in [Installing PowerShellGet](/powershell/scripting/gallery/installing-psget). Be sure to close and reopen the PowerShell window before you attempt to update the ExchangeOnlineManagement module again.

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

The **Get-EXO\*** cmdlets in the module contain categorized output properties. Instead of giving all properties equal importance and returning them in all scenarios, we categorized specific related properties into _property sets_. These property sets are buckets of two or more related properties on the cmdlet.

The biggest and most used **Get-EXO\*** cmdlets use property sets:

- [Get-EXOCasMailbox](/powershell/module/exchangepowershell/get-exocasmailbox)
- [Get-EXOMailbox](/powershell/module/exchangepowershell/get-exomailbox)
- [Get-EXOMailboxStatistics](/powershell/module/exchangepowershell/get-exomailboxstatistics)
- [Get-EXORecipient](/powershell/module/exchangepowershell/get-exorecipient)

In those cmdlets, the following parameters control property sets:

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

#### Version 3.9.2

- New **Add-WorkforceInsightsDelegationAccess**, **Get-WorkforceInsightsDelegationAccess**, and **Remove-WorkforceInsightsDelegationAccess** cmdlets for Workforce Insights delegation.
- New _EXOModuleBasePath_ parameter in **Connect-ExchangeOnline** and **Connect-IPPSSession** to store temporary EXO module files in a custom path.
- Deprecated _UseRpsSession_ parameter from **Connect-ExchangeOnline** and **Connect-IPPSSession**.

### Previous releases

#### Version 3.9.0

- New _EnableSearchOnlySession_ switch on **Connect-IPPSSession**, which enables certain eDiscovery cmdlets and related cmdlets that connect to other Microsoft 365 services.

#### Version 3.8.0

- New _AccessToken_ parameter on **Connect-IPPSSession**.
- **Get-VivaModuleFeature** now returns information about ParentFeature, ChildFeature, and PolicyModes. These values represent parent and child features of a Viva app feature along with available enablement modes for future policies.  
- New parameters _IsUserOptedInByDefault_ on the **Add-VivaModuleFeaturePolicy** and **Update-VivaModuleFeaturePolicy** cmdlets and the corresponding property value in all **\*-VivaModuleFeaturePolicy** cmdlets. The value indicates if users are opted in or out by the policy, as long as the user doesn't set a preference.

  You can use this parameter to keep the feature enabled in your organization while opting out the affected users by default, effectively soft disabling the feature for those users.

- Deprecated the **Get-VivaFeatureCategory** cmdlet, all category-related parameters, and return values (_CategoryId_, _IsCategoryEnabled_).

#### Version 3.7.2

- The _DisableWAM_ switch is available on the **Connect-ExchangeOnline** cmdlet to disable Web Account Manager (WAM) if you get WAM-related connection errors.

#### Version 3.7.1

- Added a new property named `ExoExchangeSecurityDescriptor` to the output of **Get-EXOMailbox** that's similar to the `ExchangeSecurityDescriptor` property in the output of **Get-Mailbox**.
- Added new cmdlets to support the Viva Org Insights Delegation feature:
  - **Add-VivaOrgInsightsDelegatedRole**
  - **Get-VivaOrgInsightsDelegatedRole**
  - **Remove-VivaOrgInsightsDelegatedRole**

#### Version 3.7.0

- Integrated Web Account Manager (WAM) in authentication flows to enhance security.
- Command line help for Exchange Online PowerShell cmdlets is no longer loaded by default. Use the _LoadCmdletHelp_ switch in the **Connect-ExchangeOnline** command so help for Exchange Online PowerShell cmdlets is available to the **Get-Help** cmdlet.
- Fixed connection issues with app only authentication in Security & Compliance PowerShell.

#### Version 3.6.0

- **Get-VivaModuleFeature** now returns information about the kinds of identities that the feature supports creating policies for (for example, users, groups, or the entire organization).
- Cmdlets for Viva feature access management now handle continuous access evaluation (CAE) claim challenges.
- Added fix for compatibility issue with the Microsoft.Graph module.

#### Version 3.5.1

- Bug fixes in **Get-EXOMailboxPermission** and **Get-EXOMailbox**.
- The module is upgraded to run on .NET 8, replacing the previous version based on .NET 6.
- Enhancements in **Add-VivaModuleFeaturePolicy**.

#### Version 3.5.0

- New **Get-VivaFeatureCategory** cmdlet.
- Added support for policy operations at the category level in Viva Feature Access Management (VFAM).
- New IsFeatureEnabledByDefault property in the output of **Get-VivaModuleFeaturePolicy**. The value of this property shows the default enablement state for users when no organization or user/group policies were created.

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
  - The [Get-ConnectionInformation](/powershell/module/exchangepowershell/get-connectioninformation) cmdlet for REST-based connections (version 2.0.6-Preview7 or later).
  - The _SkipLoadingFormatData_ switch on the **Connect-ExchangeOnline** cmdlet for REST-based connections (version 2.0.6-Preview8 or later).
- The _DelegatedOrganization_ parameter works in the **Connect-IPPSSession** cmdlet as long as you also use the _AzureADAuthorizationEndpointUri_ parameter in the command.
- Certain cmdlets that prompted for confirmation in specific scenarios no longer do so. By default, the cmdlet runs to completion.
- The format of the error returned from failed cmdlet execution is slightly modified. The exception now contains more data (for example, the exception type), and the `FullyQualifiedErrorId` doesn't contain the `FailureCategory`. The format of the error is subject to further modification.

#### Version 2.0.5

- New **Get-OwnerlessGroupPolicy** and **Set-OwnerlessGroupPolicy** cmdlets to manage ownerless Microsoft 365 Groups.

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
  For more information, see the parameter descriptions in [Connect-ExchangeOnline](/powershell/module/exchangepowershell/connect-exchangeonline) and [App-only authentication for unattended scripts in the Exchange Online PowerShell module](app-only-auth-powershell-v2.md).
- Connect to Exchange Online PowerShell and Security & Compliance PowerShell simultaneously in a single PowerShell window.
- The new _CommandName_ parameter allows you to specify and restrict the Exchange Online PowerShell cmdlets that are imported in a session. This option reduces the memory footprint for high usage PowerShell applications.
- **Get-EXOMailboxFolderPermission** now supports ExternalDirectoryObjectID in the _Identity_ parameter.
- Optimized latency of the first V2 cmdlet call. Lab results show the first call latency decreased from 8 seconds to approximately 1 second. Actual results depend on the cmdlet result size and the organization environment.

#### Version 1.0.1

- General Availability (GA) version of the EXO V2 module. It's stable and ready for use in production environments.
- **Get-EXOMobileDeviceStatistics** cmdlet now supports the _Identity_ parameter.
- Improved reliability for auto reconnect of sessions in certain scenarios where a script was running for ~50 minutes and threw a "Cmdlet not found" error due to a bug in auto reconnect logic.
- Fixed data-type issues of two commonly used "User" and "MailboxFolderUser" attributes for easy migration of scripts.
- Enhanced support for filters as it now supports four more operators: EndsWith, Contains, Not and NotLike support. Check [Filters in the Exchange Online PowerShell module](filters-v2.md) for attributes that aren't supported in filters.

#### Version 0.4578.0

- Added support for configuring the Briefing Email for your organization at the user level with **Set-UserBriefingConfig** and **Get-UserBriefingConfig** cmdlets.
- Support for session cleanup using **Disconnect-ExchangeOnline** cmdlet. This cmdlet is the V2 equivalent of `Get-PSSession | Remove-PSSession`. In addition to cleaning up session object and local files, it also removes the access token from cache, which is used for authenticating against V2 cmdlets.
- You can now use `FolderId` as an identity parameter in **Get-EXOMailboxFolderPermission**. You can get the `FolderId` value using **Get-MailboxFolder**. For example:
  `Get-MailboxFolderPermission -Identity <UPN>:<Folder-Path>`
  `Get-MailboxFolderPermission -Identity <UPN>:\<Folder-Id>`
- Improved reliability of **Get-EXOMailboxStatistics** as certain request routing errors that led to failures are resolved.
- Optimized memory usage for new sessions created from reusing existing modules instead of creating a new session every time a session is imported.

#### Version 0.4368.1

- Added support for Security & Compliance PowerShell cmdlets using the **Connect-IPPSSession** cmdlet.
- Hiding the announcement banner is available using the _ShowBanner_ switch (`-ShowBanner:$false`).
- Terminate cmdlet execution on client exception.
- Remote PowerShell contained various complex data types that were intentionally not supported in EXO cmdlets to improve performance. Differences in noncomplex data types between remote PowerShell cmdlets and V2 cmdlets are resolved to allow seamless migration of management scripts.

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

- Added support for managing Exchange for a different organization using delegation flow.
- Works in tandem with other PowerShell modules in a single PowerShell window.
- Added support for positional parameters.
- Date Time field now supports client locale.
- Bug fix: PSCredential empty when passed during Connect-ExchangeOnline.
- Bug fix: Client module error when filter contained $null.
- Sessions created internal to EXO V2 Module now have names (naming pattern: ExchangeOnlineInternalSession_%SomeNumber%).
- Bug fix: Remote PowerShell cmdlets intermittently failing due to time the difference between token expiry and the Session going idle.
- Major security update.
- Bug fixes and enhancements.
