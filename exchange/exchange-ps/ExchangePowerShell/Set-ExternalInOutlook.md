---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-externalinoutlook
schema: 2.0.0
title: Set-ExternalInOutlook
---

# Set-ExternalInOutlook

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ExternalInOutlook cmdlet to modify the configuration of external sender identification that's available in Outlook, Outlook for Mac, Outlook on the web, and Outlook for iOS and Android.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ExternalInOutlook [[-Identity] <OrganizationIdParameter>]
 [-AllowList <MultiValuedProperty>]
 [-Enabled <System.Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
If your organization already uses mail flow rules (also known as transport rules) to add text to the subject line of messages from external senders, you should disable those rules before you enable this feature to avoid duplication.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ExternalInOutlook -Enabled $true
```

This example enables external sender identification in supported versions of Outlook.

### Example 2
```powershell
Set-ExternalInOutlook -AllowList admin@fabrikam.com,admin@fourthcoffee.com
```

This example prevents the specified email addresses from receiving the External icon in the area of the subject line in supported versions of Outlook.

### Example 3
```powershell
Set-ExternalInOutlook -AllowList @{Add="admin@cohovineyard.com"; Remove="admin@fourthcoffee.com"}
```

This example adds and removes the specified email addresses from the exception list without affecting other existing entries.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the GUID of the external sender identification object that you want to modify.

This parameter is optional and typically isn't needed, because the organization's GUID resolves automatically when you use this cmdlet.

If you specify an invalid Identity value, the cmdlet still runs and changes the settings for the entire organization. Always verify the Identity value before you run this cmdlet.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowList

> Applicable: Exchange Online

The AllowList parameter specifies exceptions to external sender identification in supported versions of Outlook. Messages received from the specified senders or senders in the specified domains don't receive native External sender identification. The allow list uses the `5322.From` address (also known as the **From** address or P2 sender).

Valid values are an individual domain (contoso.com), a domain and all subdomains (*.contoso.com) or email addresses (admin@contoso.com).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This parameter is meaningful only when the value of the Enabled parameter is $true.

The maximum number of entries is 50, and the total size of all entries can't exceed one kilobyte.

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

### -Enabled

> Applicable: Exchange Online

The Enabled parameter enables or disables external sender identification in supported versions of Outlook. Valid values are:

- $true: External sender identification in Outlook is enabled. An External icon is added in the area of the subject line of messages from external senders. To exempt specific senders or sender domains from this identification, use the AllowList parameter.
- $false: External sender identification in Outlook is disabled.

After an admin enables this setting, it can take between 24 and 48 hours for users to see the External icon in messages from external senders in supported versions of Outlook.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-OrganizationConfig](https://learn.microsoft.com/powershell/module/exchange/set-organizationconfig)
