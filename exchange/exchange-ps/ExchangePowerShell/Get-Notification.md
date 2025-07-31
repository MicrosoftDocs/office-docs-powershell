---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-notification
schema: 2.0.0
title: Get-Notification
---

# Get-Notification

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

> [!NOTE]
> This cmdlet will be deprecated in the cloud-based service. The classic Exchange admin center was deprecated in the cloud-based service in 2023.

Use the Get-Notification cmdlet to view notification events that are shown in the notification viewer in the Exchange admin center (EAC). These notifications are related to the following events:

- Mailbox moves and migrations.
- Expiring and expired certificates.
- Exporting mailbox content to .pst files.
- Importing mailbox content from .pst files.
- Restoring deleted mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Settings
```
Get-Notification [-Settings] -ProcessType <AsyncOperationType>
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Identity
```
Get-Notification [[-Identity] <EwsStoreObjectIdParameter>]
 [-Summary]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Filter
```
Get-Notification [-ProcessType <AsyncOperationType>]
 [-ResultSize <Unlimited>]
 [-StartDate <ExDateTime>]
 [-Summary]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-Notification
```

This example displays a summary list of all notification events.

### Example 2
```powershell
Get-Notification -ProcessType Migration
```

This example displays a summary list of all mailbox move and migration notification events.

### Example 3
```powershell
Get-Notification -Identity 0259ec74-3539-4195-ab4f-de93e654ceaf | Format-List
```

This example displays detailed information for the specified notification event.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the notification event that you want to view. You identify the notification event by its AlternativeID property value (a GUID). You can find this value by running the command Get-Notification | Format-List DisplayName,AlternateID,StartTime,Status,Type.

```yaml
Type: EwsStoreObjectIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Settings

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The Settings switch includes the ProcessType and NotificationEmail property values in the results. You don't need to specify a value with this switch.

You can only use this switch with the ProcessType parameter value CertExpiry.

You can't use this switch with the Summary switch.

```yaml
Type: SwitchParameter
Parameter Sets: Settings
Aliases:

Required: True
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

### -ProcessType

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ProcessType parameter filters the results by the type of notification event. Valid values are:

- CertExpiry
- ExportPST
- ImportPST
- MailboxRestore
- Migration

```yaml
Type: AsyncOperationType
Parameter Sets: Settings, Filter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Summary

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Summary switch includes only the ProcessType and Status property values in the results. You don't need to specify a value with this switch.

You can't use this switch with the Settings switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, Filter
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
