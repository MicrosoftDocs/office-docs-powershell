---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-externalinoutlook
applicable: Exchange Online, Exchange Online Protection
title: Set-ExternalInOutlook
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ExternalInOutlook

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ExternalInOutlook cmdlet to modify the configuration of external sender identification that's available in Outlook, Outlook for Mac, Outlook on the web, and Outlook for iOS and Android.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ExternalInOutlook [[-Identity] <OrganizationIdParameter>]
 [-AllowList <MultiValuedProperty>]
 [-Enabled <System.Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
If your organization already uses mail flow rules (also known as transport rules) to add text to the subject line of messages from external senders, you should disable those rules before you enable this feature to avoid duplication.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Identity parameter specifies the GUID of the external sender identification object that you want to modify. Although this parameter is available, you don't need to use it.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowList
The AllowList parameter specifies exceptions to external sender identification in supported versions of Outlook. Messages received from the specified senders or senders in the specified domains don't receive native External sender identification. Valid values are domains (contoso.com) or email addresses (admin@contoso.com).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This parameter is meaningful only when the value of the Enabled parameter is $true.

The maximum number of entries is 30, and the total size of all entries can't exceed one kilobyte.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter enables or disables external sender identification in supported versions of Outlook. Valid values are:

- $true: External sender identification in Outlook is enabled. An External icon is added in the area of the subject line of messages from external senders. To exempt specific senders or sender domains from this identification, use the AllowList parameter.
- $false: External sender identification in Outlook is disabled.

After an admin enables this setting, it can take between 24 and 48 hours for users to see the External icon in messages from external senders in supported versions of Outlook.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
