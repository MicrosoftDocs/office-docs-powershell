---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-publicfoldermigrationrequest
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-PublicFolderMigrationRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-PublicFolderMigrationRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-PublicFolderMigrationRequest cmdlet to modify serial public folder migration requests (requests created by the New-PublicFolderMigrationRequest cmdlet). You can use this cmdlet to recover from failed migration requests.

**Note**: Support for serial migration of public folders ended in Exchange 2013 Cumulative Update 8 (CU8), and the cmdlets are no longer available in Exchange Online. Instead, use the corresponding **\*-MigrationBatch** and **\*-PublicFolderMailboxMigration\*** cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Set-PublicFolderMigrationRequest [-Identity] <PublicFolderMigrationRequestIdParameter>
 [-AcceptLargeDataLoss]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-OutlookAnywhereHostName <Fqdn>]
 [-PreventCompletion <Boolean>]
 [-Priority <RequestPriority>]
 [-RemoteMailboxLegacyDN <String>]
 [-RemoteMailboxServerLegacyDN <String>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-WhatIf] [<CommonParameters>]
```

### Rehome
```
Set-PublicFolderMigrationRequest [-Identity] <PublicFolderMigrationRequestIdParameter> -RehomeRequest
 [-Confirm]
 [-DomainController <Fqdn>]
 [-PreventCompletion <Boolean>]
 [-RequestExpiryInterval <Unlimited>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can pipe output of Get-PublicFolderMigrationRequestStatistics, Get-PublicFolderMigrationRequest, or Get-PublicFolder to this cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-PublicFolderMigrationRequest -Identity PublicFolderMigration -BadItemLimit 5
```

This example changes the setting of the PublicFolderMigration migration request to accept up to five corrupted public folder items.

## PARAMETERS

### -Identity
The Identity parameter specifies the migration request that you want to modify. You can use the following values:

- Name

- RequestGUID

```yaml
Type: PublicFolderMigrationRequestIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RehomeRequest
The RehomeRequest parameter specifies to the Microsoft Exchange Mailbox Replication service (MRS) that the request needs to be moved to the same database as the public folder being migrated. This parameter is used primarily for debugging purposes.

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

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

You need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies a descriptive name for the public folder batch migration. You can use the BatchName parameter as a search string when you use the Get-PublicFolderMigrationRequest cmdlet.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All))
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalFlags
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

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreventCompletion
The PreventCompletion parameter specifies whether to run the migration request, but not allow it to complete. Valid values are:

- $true: The migration request is run, but is not allowed to complete. To complete the migration request, set this parameter to $false before you run the Resume-PublicFolderMigrationRequest cmdlet.

- $false: The migration request is run and allowed to complete. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
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
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
The SkipMerging parameter specifies whether certain stages of a migration are to be skipped for debugging purposes. Don't use this parameter unless directed to do so by Microsoft Customer Service and Support or specific documentation.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
