---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-exomailboxstatistics
schema: 2.0.0
title: Get-EXOMailboxStatistics
---

# Get-EXOMailboxStatistics

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-EXOMailboxStatistics cmdlet to return information about a mailbox, such as the size of the mailbox, the number of messages it contains, and the last time it was accessed.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxStatistics
 [-Archive]
 [-DatabaseGuid <Guid>]
 [-ExchangeGuid <Guid>]
 [-Identity <String>]
 [-IncludeMoveHistory]
 [-IncludeMoveReport]
 [-IncludeSoftDeletedRecipients]
 [-PrimarySmtpAddress <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use the detailed move history and a move report output from this cmdlet to troubleshoot a move request. To view the move history, you must pass this cmdlet as an object. Move histories are retained in the mailbox database, are numbered incrementally, and the last run move request is always numbered 0.

You can only see move reports and move history for completed move requests.

## EXAMPLES

### Example 1
```powershell
Get-EXOMailboxStatistics -Identity john@contoso.com
```

This example retrieves the mailbox statistics for the specified mailbox. Only the minimum set of properties are returned.

### Example 2
```powershell
Get-EXOMailboxStatistics -Identity john@contoso.com -Properties SystemMessageSize,SystemMessageSizeWarningQuota,SystemMessageCount
```

This example retrieves the minimum set of properties and the specified properties for the specified mailbox.

## PARAMETERS

### -Archive

> Applicable: Exchange Online

The Archive switch specifies whether to return mailbox statistics for the archive mailbox associated with the specified mailbox. You don't need to specify a value with this switch.

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

### -DatabaseGuid

> Applicable: Exchange Online

The DatabaseGuid parameter filters the results by the GUID of mailbox database that hosts the Mailbox. You can find this property value by using the Get-EXOMailbox cmdlet with the Properties parameter value DatabaseGuid.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ExchangeGuid

> Applicable: Exchange Online

The ExchangeGuid parameter filters the results by the GUID of mailbox (aso known as the Mailbox GUID). You can find this property value by using the Get-EXOMailbox cmdlet with Properties filter set to ExchangeGuid.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox you want to view. For the best performance, we recommend using the user ID or user principal name (UPN) to identify the mailbox.

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Domain\\Username
- Email address
- LegacyExchangeDN
- SamAccountName

You can't use this parameter with the ExternalDirectoryObjectId, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -IncludeMoveHistory

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -IncludeMoveReport

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -IncludeSoftDeletedRecipients

> Applicable: Exchange Online

The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted recipients in the results. You don't need to specify a value with this switch.

Soft-deleted recipients are deleted recipients that are still recoverable.

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

### -PrimarySmtpAddress

> Applicable: Exchange Online

The PrimarySmtpAddress identifies the mailbox that you want to view by primary SMTP email address (for example, navin@contoso.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Properties

> Applicable: Exchange Online

The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas.

For more information about the available properties, see [Get-EXOMailboxStatistics property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exomailboxstatistics-property-sets).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets

> Applicable: Exchange Online

The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- Minimum (this is the default value)
- All

You can specify multiple values separated by commas.

For more information about the properties that are included in each property set, see [Get-EXOMailboxStatistics property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exomailboxstatistics-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Online

The UserPrincipalName parameter identifies the mailbox that you want to view by UPN (for example, navin@contoso.onmicrosoft.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or PrimarySmtpAddress parameters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
