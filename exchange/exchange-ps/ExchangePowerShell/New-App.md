---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-app
schema: 2.0.0
title: New-App
---

# New-App

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-App cmdlet to install apps for Outlook.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ExtensionOfficeMarketplace
```
New-App [-Etoken <String>] [-MarketplaceCorrelationID <String>] [-MarketplaceAssetID <String>] [-MarketplaceQueryMarket <String>] [-MarketplaceServicesUrl <String>] [-MarketplaceUserProfileType <String>]
 [-AddInOverrides <AddInOverrides>]
 [-AllowReadWriteMailbox]
 [-AllowSetting <AllowSetting>]
 [-AppState <String>]
 [-AppType <String>]
 [-Confirm]
 [-DefaultStateForUser <DefaultStateForUser>]
 [-DomainController <Fqdn>]
 [-DownloadOnly]
 [-Enabled <Boolean>]
 [-Identity <String>]
 [-Mailbox <MailboxIdParameter>]
 [-OrganizationApp]
 [-PrivateCatalog]
 [-ProvidedTo <ClientExtensionProvidedTo>]
 [-UpdateAppState]
 [-UserList <MultiValuedProperty>]
 [-Version <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### ExtensionFileData
```
New-App [-FileData <Byte[]>]
 [-AddInOverrides <AddInOverrides>]
 [-AllowReadWriteMailbox]
 [-AllowSetting <AllowSetting>]
 [-AppState <String>]
 [-AppType <String>]
 [-Confirm]
 [-DefaultStateForUser <DefaultStateForUser>]
 [-DomainController <Fqdn>]
 [-DownloadOnly]
 [-Enabled <Boolean>]
 [-Identity <String>]
 [-Mailbox <MailboxIdParameter>]
 [-OrganizationApp]
 [-PrivateCatalog]
 [-ProvidedTo <ClientExtensionProvidedTo>]
 [-UpdateAppState]
 [-UserList <MultiValuedProperty>]
 [-Version <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### ExtensionFileStream
```
New-App [-FileStream <Stream>]
 [-AddInOverrides <AddInOverrides>]
 [-AllowReadWriteMailbox]
 [-AllowSetting <AllowSetting>]
 [-AppState <String>]
 [-AppType <String>]
 [-Confirm]
 [-DefaultStateForUser <DefaultStateForUser>]
 [-DomainController <Fqdn>]
 [-DownloadOnly]
 [-Enabled <Boolean>]
 [-Identity <String>]
 [-Mailbox <MailboxIdParameter>]
 [-OrganizationApp]
 [-PrivateCatalog]
 [-ProvidedTo <ClientExtensionProvidedTo>]
 [-UpdateAppState]
 [-UserList <MultiValuedProperty>]
 [-Version <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### ExtensionPrivateURL
```
New-App [-Url <Uri>]
 [-AddInOverrides <AddInOverrides>]
 [-AllowReadWriteMailbox]
 [-AllowSetting <AllowSetting>]
 [-AppState <String>]
 [-AppType <String>]
 [-Confirm]
 [-DefaultStateForUser <DefaultStateForUser>]
 [-DomainController <Fqdn>]
 [-DownloadOnly]
 [-Enabled <Boolean>]
 [-Identity <String>]
 [-Mailbox <MailboxIdParameter>]
 [-OrganizationApp]
 [-PrivateCatalog]
 [-ProvidedTo <ClientExtensionProvidedTo>]
 [-UpdateAppState]
 [-UserList <MultiValuedProperty>]
 [-Version <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If the app is enabled for the entire organization, users can activate the new app when viewing mail or calendar items within Microsoft Outlook or Outlook on the web. If an installed app isn't enabled, users can enable the app from Outlook on the web Options. Similarly, administrators can enable installed apps from the Exchange admin center or by using the Enable-App or Set-App cmdlet.

For more information, see [Manage user access to add-ins for Outlook in Exchange Server](https://learn.microsoft.com/Exchange/manage-user-access-to-add-ins-exchange-2013-help) and [Manage deployment of add-ins in the Microsoft 365 admin center](https://learn.microsoft.com/office365/admin/manage/manage-deployment-of-add-ins).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-App -FileData ([System.IO.File]::ReadAllBytes('C:\Apps\FinanceTestApp.xml'))
```

This example installs the Finance Test app manifest file that has been copied to the local hard disk.

### Example 2
```powershell
New-App -OrganizationApp -Url https://Server01.Contoso.com/apps/ContosoCRMApp/manifest.xml -ProvidedTo SpecificUsers -UserList "user1,user2,user3,user4,user5" -DefaultStateForUser Enabled
```

This example installs the Contoso CRM app manifest.xml from a URL on the Contoso corporate network. The Exchange server must be able to reach the target URL. This app is installed as an organization app,is made available to a specific list of users, and is enabled for those users by default.

## PARAMETERS

### -AddInOverrides

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AddInOverrides Description }}

```yaml
Type: AddInOverrides
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowReadWriteMailbox

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowReadWriteMailbox switch specifies whether the app allows read/write mailbox permission. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSetting

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AllowSetting Description }}

```yaml
Type: AllowSetting
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppState

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AppState Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppType

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AppType Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultStateForUser

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DefaultStateForUser parameter specifies the default initial state of an organization app. Valid values are:

- Enabled: The organization app is enabled by default.
- Disabled: The organization app is disabled by default. This is the default value.
- AlwaysEnabled: The organization app is enabled and users can't disable it.

You need to use the OrganizationApp switch when you use this parameter.

```yaml
Type: DefaultStateForUser
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DownloadOnly

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The DownloadOnly switch specifies whether to get the app manifest file and prompt the user for confirmation before committing to actual installation. You don't need to specify a value with this switch.

When you use this switch, the cmdlet only downloads the app manifest file and displays the app properties without installing the app.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Enabled parameter specifies whether the app is available to users in the organization. Valid values are:

- $true: The app is available to the specified users. This is the default value.
- $false: The app is hidden from all users in the organization.

This setting overrides the ProvidedTo, UserList and DefaultStateForUser settings. This setting doesn't prevent users from installing their own instance of the app if they have install permissions.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Etoken

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: ExtensionOfficeMarketplace
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileData

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The FileData parameter specifies the location of the app manifest file. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url, or FileData parameter.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
Parameter Sets: ExtensionFileData
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileStream

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The FileStream parameter is used only by the Exchange admin center to support the app file uploader. Don't use this parameter to specify the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url or FileData parameter.

```yaml
Type: Stream
Parameter Sets: ExtensionFileStream
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill Identity Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mailbox parameter specifies the mailbox where you want to install the app. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceAssetID

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MarketplaceAssetID parameter specifies the Office Store identifier for the app. You need to use this parameter if you use theMarketplaceServicesUrl parameter.

```yaml
Type: String
Parameter Sets: ExtensionOfficeMarketplace
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceCorrelationID

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MarketplaceCorrelationID parameter specifies the Office Store correlation identifier for the app.

```yaml
Type: String
Parameter Sets: ExtensionOfficeMarketplace
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceQueryMarket

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MarketplaceQueryMarket parameter specifies the locale that an app is filed under at the office marketplace. For example, an app for the United States market in English uses the value en-US. The default value is en-US.

```yaml
Type: String
Parameter Sets: ExtensionOfficeMarketplace
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceServicesUrl

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MarketplaceServicesUrl parameter specifies the full services URL for the app. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url or FileData parameter.

```yaml
Type: String
Parameter Sets: ExtensionOfficeMarketplace
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceUserProfileType

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MarketplaceUserProfileType parameter specifies the user profile type for the Office Store.

```yaml
Type: String
Parameter Sets: ExtensionOfficeMarketplace
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationApp

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The OrganizationApp switch specifies that the scope of the app is organizational (not bound to a specific user). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateCatalog

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The PrivateCatalog switch specifies whether the app is located in a private catalog. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvidedTo

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ProvidedTo parameter specifies the availability of the app in your organization. Valid values are:

- Everyone: This is the default value. This app is provided to every user in the organization. Every user sees this app listed in the installed apps list in Outlook on the web Options. When an app in the installed apps list is enabled, users can use the features of this app in their email. All users are blocked from installing their own instances of this app, including but not limited to users with install apps permissions.
- SpecificUsers: This app is provided to only the users specified by the UserList parameter. All other users don't see this organizational app in their management view, nor will it activate in their mail or calendar items. The specified users are also blocked from installing their own instance of this app. Unlisted users aren't blocked from installing their own instance of this app.

You use this parameter with the OrganizationApp switch.

```yaml
Type: ClientExtensionProvidedTo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateAppState

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill UpdateAppState Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Url parameter specifies the full URL location of the app manifest file that you want to install. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url or FileData parameter.

**Note**: URLs with redirections are not supported in Exchange Server 2016, Exchange Server 2019, and Exchange Online. Use a direct URL to the manifest.

```yaml
Type: Uri
Parameter Sets: ExtensionPrivateURL
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The UserList parameter specifies who can use an organizational app. This parameter is limited to 1000 users. In the cloud-based service, this value is less relevant as Office Add-in management is moving to [Centralized Deployment](https://learn.microsoft.com/office/dev/add-ins/publish/centralized-deployment).

Valid values are mailboxes or mail users in your organization. You can use any value that uniquely identifies the user. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You use this parameter with the OrganizationApp switch.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill Version Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
