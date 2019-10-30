---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXOMailboxStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxStatistics

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2?branch=ExORestModule-chrisda).

Use the Get-EXOMailboxStatistics cmdlet to return information about a mailbox, such as the size of the mailbox, the number of messages it contains, and the last time it was accessed.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxStatistics
 [-Archive]
 [-DatabaseGuid <Guid>]
 [-ExchangeGuid <Guid>]
 [-Identity <String>]
 [-IncludeSoftDeletedRecipients]
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
```
Get-EXOMailboxStatistics -Identity john@contoso.com
```

This example retrieves the mailbox statistics for the specified mailbox. Only the minimum set of properties are returned.

### Example 2
```
Get-EXOMailboxStatistics -Identity john@contoso.com -Properties SystemMessageSize,SystemMessageSizeWarningQuota,SystemMessageCount
```

This example retrieves the minimum set of properties and the specified properties for the specified mailbox.

## PARAMETERS

### -Archive
The Archive switch parameter specifies whether to return mailbox statistics for the archive mailbox associated with the specified mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseGuid
The DatabaseGuid parameter filters the results by the GUID of mailbox database that hosts the Mailbox. You can find this property value by using the Get-EXOMailbox cmdlet with Properies filter set to DatabaseGuid.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ExchangeGuid
The ExchangeGuid parameter filters the results by the GUID of mailbox (aso known as the Mailbox GUID). You can find this property value by using the Get-EXOMailbox cmdlet with Properies filter set to ExchangeGuid.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox that you want to return statistics for. You can use any value that uniquely identifies the mailbox. For example:

- User Principal Name (UPN)

- External Directory Object Id 

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -IncludeSoftDeletedRecipients
The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted recipients in the results. You don't need to specify a value with this switch.

Soft-deleted recipients are deleted recipients that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas.

For more information about the available properties, see [Get-EXOMailboxStatistics property sets](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets?branch=ExORestModule-chrisda#get-exomailboxstatistics-property-sets).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets
The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- Minimum (this is the default value)

- All

You can specify multiple values separated by commas.

For more information about the properties that are included in each property set, see [Get-EXOMailboxStatistics property sets](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets?branch=ExORestModule-chrisda#get-exomailboxstatistics-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the UPN of the user (for example, navin@contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxstatistics)
