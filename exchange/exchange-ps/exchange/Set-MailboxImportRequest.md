---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-mailboximportrequest
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-MailboxImportRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-MailboxImportRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxImportRequest cmdlet to change import request options after the request has been created. You can use the Set-MailboxImportRequest cmdlet to recover from failed import requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://docs.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Set-MailboxImportRequest [-Identity] <MailboxImportRequestIdParameter>
 [-AcceptLargeDataLoss]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-WhatIf]
 [<CommonParameters>]
```

### Rehome
```
Set-MailboxImportRequest [-Identity] <MailboxImportRequestIdParameter> [-RehomeRequest]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-RequestExpiryInterval <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can pipeline the Set-MailboxImportRequest cmdlet from the Get-MailboxImportRequest cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxImportRequest -Identity "Kweku\Import" -BadItemLimit 5
```

This example changes the import request Kweku\\Import to accept up to five corrupted mailbox items.

### Example 2
```powershell
Get-MailboxImportRequest -Status Suspended | Set-MailboxImportRequest -BatchName April14
```

This example finds all import requests that have a status of Suspended, and then gives them a batch name of April14.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the import request. By default, import requests are named `<alias>\MailboxImportX` (where X = 0-9). If you specified a name for the import request with the New-MailboxImportRequest cmdlet, use the following syntax: `Alias\Name`.

```yaml
Type: MailboxImportRequestIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

In Exchange 2013 or later or Exchange Online, you need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

In Exchange 2010, you need to use this switch if you set the BadItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

In Exchange 2010, if you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies the name of the batch.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request is kept after it has completed before being automatically removed. The default CompletedRequestAgeLimit parameter value is 30 days.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalFlags
This parameter is available only in on-premises Exchange.

The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://docs.microsoft.com/Exchange/mail-flow/message-size-limits)
- Exchange Online: [Exchange Online Limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
This parameter is available only in on-premises Exchange.

The Priority parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are:

- Lowest
- Lower
- Low
- Normal: This is the default value.
- High
- Higher
- Highest
- Emergency

```yaml
Type: RequestPriority
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RehomeRequest
This parameter is available only in on-premises Exchange.

The RehomeRequest parameter specifies to the Microsoft Exchange Mailbox Replication service (MRS) that the request needs to be moved to the same database as the mailbox being imported. This parameter is used primarily for debugging purposes.

```yaml
Type: SwitchParameter
Parameter Sets: Rehome
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval
The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.
- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
The SkipMerging parameter specifies the steps in the import that should be skipped. This parameter is used primarily for debugging purposes.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
