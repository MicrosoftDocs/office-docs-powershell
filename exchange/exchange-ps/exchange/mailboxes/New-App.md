---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-App
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-App

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-App cmdlet to install apps for Outlook.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-App [-AllowReadWriteMailbox] [-Confirm] [-DefaultStateForUser <Enabled | Disabled | AlwaysEnabled>]
 [-DomainController <Fqdn>] [-DownloadOnly] [-Enabled <$true | $false>] [-Etoken <String>]
 [-Mailbox <MailboxIdParameter>] [-MarketplaceAssetID <String>] [-MarketplaceQueryMarket <String>]
 [-MarketplaceServicesUrl <String>] [-OrganizationApp] [-ProvidedTo <Everyone | SpecificUsers>]
 [-UserList <MultiValuedProperty>] [-WhatIf] [-MarketplaceCorrelationID <String>]
 [-MarketplaceUserProfileType <String>] [-PrivateCatalog] [<CommonParameters>]
```

### Set1
```
New-App [-AllowReadWriteMailbox] [-Confirm] [-DefaultStateForUser <Enabled | Disabled | AlwaysEnabled>]
 [-DomainController <Fqdn>] [-DownloadOnly] [-Enabled <$true | $false>] [-FileData <Byte[]>]
 [-Mailbox <MailboxIdParameter>] [-OrganizationApp] [-ProvidedTo <Everyone | SpecificUsers>]
 [-UserList <MultiValuedProperty>] [-WhatIf] [-PrivateCatalog] [<CommonParameters>]
```

### Set3
```
New-App [-AllowReadWriteMailbox] [-Confirm] [-DefaultStateForUser <Enabled | Disabled | AlwaysEnabled>]
 [-DomainController <Fqdn>] [-DownloadOnly] [-Enabled <$true | $false>] [-FileStream <Stream>]
 [-Mailbox <MailboxIdParameter>] [-OrganizationApp] [-ProvidedTo <Everyone | SpecificUsers>]
 [-UserList <MultiValuedProperty>] [-WhatIf] [-PrivateCatalog] [<CommonParameters>]
```

### Set4
```
New-App [-AllowReadWriteMailbox] [-Confirm] [-DefaultStateForUser <Enabled | Disabled | AlwaysEnabled>]
 [-DomainController <Fqdn>] [-DownloadOnly] [-Enabled <$true | $false>] [-Mailbox <MailboxIdParameter>]
 [-OrganizationApp] [-ProvidedTo <Everyone | SpecificUsers>] [-Url <Uri>] [-UserList <MultiValuedProperty>]
 [-WhatIf] [-PrivateCatalog] [<CommonParameters>]
```

## DESCRIPTION
If the app is enabled for the entire organization, users can activate the new app when viewing mail or calendar items within Microsoft Outlook or Outlook on the web. If an installed app isn't enabled, users can enable the app from Outlook on the web Options. Similarly, administrators can enable installed apps from the Exchange admin center or by using the Enable-App or Set-App cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-App -FileData ([Byte[]](Get-Content -Encoding Byte -Path "C:\Apps\FinanceTestApp.xml" -ReadCount 0))
```

This example installs the Finance Test app manifest file that has been copied to the local hard disk.

For more information, see Install or remove add-ins for Outlook for your organization (https://technet.microsoft.com/library/jj943752.aspx).

### -------------------------- Example 2 --------------------------
```
New-App -OrganizationApp -Url https://Server01.Contoso.com/apps/ContosoCRMApp/manifest.xml -ProvidedTo SpecificUsers -UserList "user1,user2,user3,user4,user5" -DefaultStateForUser Enabled
```

This example installs the Contoso CRM app manifest.xml from a URL on the Contoso corporate network. The Exchange server must be able to reach the target URL. This app is installed as an organization app,is made available to a specific list of users, and is enabled for those users by default.

For more information, see Install or remove add-ins for Outlook for your organization (https://technet.microsoft.com/library/jj943752.aspx).

## PARAMETERS

### -AllowReadWriteMailbox
The AllowReadWriteMailbox switch specifies whether the app allows read/write mailbox permission. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultStateForUser
The DefaultStateForUser parameter specifies the default initial state of an organization app. Valid values are:

- Enabled: The organization app is enabled by default.

- Disabled: The organization app is disabled by default. This is the default value.

- AlwaysEnabled: The organization app is enabled and users can't disable it.

You need to use the OrganizationApp switch when you use this parameter.

```yaml
Type: Enabled | Disabled | AlwaysEnabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DownloadOnly
The DownloadOnly switch specifies whether to get the app manifest file and prompt the user for confirmation before committing to actual installation. You don't need to specify a value with this switch.

When you use this switch, the cmdlet only downloads the app manifest file and displays the app properties without installing the app.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the app is available to users in the organization. Valid values are:

- $true: The app is available to the specified users. This is the default value.

- $false: The app is hidden from all users in the organization.

This setting overrides the ProvidedTo, UserList and DefaultStateForUser settings. This setting doesn't prevent users from installing their own instance of the app if they have install permissions.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Etoken
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileData
The FileData parameter specifies the location of the app manifest file. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url, or FileData parameter.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.

```yaml
Type: Byte[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileStream
The FileStream parameter is used only by the Exchange admin center to support the app file uploader. Don't use this parameter to specify the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url or FileData parameter.

```yaml
Type: Stream
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox where you want to install the app. You can use any value that uniquely identifies the mailbox. For example:

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceAssetID
The MarketplaceAssetID parameter specifies the Office Store identifier for the app. You need to use this parameter if you use theMarketplaceServicesUrl parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceQueryMarket
The MarketplaceQueryMarket parameter specifies the locale that an app is filed under at the office marketplace. For example, an app for the United States market in English uses the value en-US. The default value isen-US.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceServicesUrl
The MarketplaceServicesUrl parameter specifies the full services URL for the app. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url or FileData parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationApp
The OrganizationAppswitch specifies that the scope of the app is organizational (not bound to a specific user). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvidedTo
The ProvidedTo parameter specifies the availability of the app in your organization. Valid values are:

- Everyone: This is the default value. This app is provided to every user in the organization. Every user sees this app listed in the installed apps list in Outlook on the web Options. When an app in the installed apps list is enabled, users can use the features of this app in their email. All users are blocked from installing their own instances of this app, including but not limited to users with install apps permissions.

- SpecificUsers: This app is provided to only the users specified by the UserList parameter. All other users don't see this organizational app in their management view, nor will it activate in their mail or calendar items. The specified users are also blocked from installing their own instance of this app. Unlisted users aren't blocked from installing their own instance of this app.

You use this parameter with the OrganizationApp switch.

```yaml
Type: Everyone | SpecificUsers
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
The Url parameter specifies the full URL location of the app manifest file that you want to install. You need to specify only one source location for the app manifest file. You can specify the app manifest file by using the MarketplaceServicesUrl, Url or FileData parameter.

```yaml
Type: Uri
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList
The UserList parameter specifies who can usean organizational app. Valid values are mailboxes or mail users in your organization. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

You use this parameter with the OrganizationApp switch.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceCorrelationID
The MarketplaceCorrelationID parameter specifies the Office Store correlation identifier for the app.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarketplaceUserProfileType
The MarketplaceUserProfileType parameter specifies the user profile type for the Office Store.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateCatalog
The PrivateCatalog switch specifies whether the app is located in a private catalog. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/f05951d8-1e49-42b6-a341-66eb67b2870f.aspx)
