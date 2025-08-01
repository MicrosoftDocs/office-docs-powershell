---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-sitemailbox
schema: 2.0.0
title: Set-SiteMailbox
---

# Set-SiteMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-SiteMailbox cmdlet to change a site mailbox's settings, such as the Microsoft SharePoint URL. This cmdlet is primarily used by the SharePoint and Microsoft Exchange user interfaces, such as the SharePoint URL. This cmdlet should only be used for diagnostic and troubleshooting purposes.

Site mailboxes were deprecated in Exchange Online and SharePoint Online in 2017. For more information, see [Deprecation of Site Mailboxes](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/deprecation-of-site-mailboxes/ba-p/93028).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SiteMailbox [-Identity] <RecipientIdParameter>
 [-Active <Boolean>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-Members <RecipientIdParameter[]>]
 [-Owners <RecipientIdParameter[]>]
 [-RemoveDuplicateMessages <Boolean>]
 [-SharePointUrl <Uri>]
 [-ShowInMyClient <Boolean>]
 [-SyncEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SiteMailbox -Identity "MarketingEvents 2013" -SharePointUrl "https://myserver/teams/marketing"
```

This example changes the SharePoint URL for the MarketingEvents 2013 site mailbox.

### Example 2
```powershell
Set-SiteMailbox -Identity SMO_ContosoSales -RemoveDuplicateMessages $true
```

This example disables the duplication of email messages in the site mailbox SMO\_ContosoSales.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the identity of the site mailbox. You can use any value that uniquely identifies the site mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Active

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Active parameter specifies whether to change the site mailbox's lifecycle status. This parameter accepts $true or $false. This parameter is intended for use only by the user interface. We recommend that you don't use this parameter in the Exchange Management Shell.

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

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DisplayName

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DisplayName parameter specifies the display name of the site mailbox.

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

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -Force

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -Members

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is intended for use only by the user interface. We recommend that you don't use this parameter.

The Members parameter specifies the members of the site mailbox. You can add or remove members using this parameter.

You can use any value that uniquely identifies the member. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owners

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is intended for use only by the user interface. We recommend that you don't use this parameter.

The Owners parameter specifies the owners of the site mailbox. You can add or remove owners using this parameter.

You can use any value that uniquely identifies the owner. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDuplicateMessages

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RemoveDuplicateMessages parameter specifies that when users post messages to a site mailbox, duplicate messages will be deleted. This parameter accepts the values of $true or $false. The default value is $false.

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

### -SharePointUrl

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SharePointUrl parameter specifies the URL of the SharePoint site, for example, "https://myserver/teams/edu".

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowInMyClient

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is intended for use only by the user interface. We recommend that you don't use this parameter.

The ShowInMyClient parameter specifies that the site mailbox folder will show in your email client.

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

### -SyncEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019

The SyncEnabled parameter specifies whether to enable or disable synchronization for the site mailbox. Valid values are:

- $true: Synchronization is enabled.
- $true: Synchronization is disabled.

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

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
