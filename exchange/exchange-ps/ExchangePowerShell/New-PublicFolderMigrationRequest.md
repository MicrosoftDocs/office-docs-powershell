---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-publicfoldermigrationrequest
schema: 2.0.0
title: New-PublicFolderMigrationRequest
---

# New-PublicFolderMigrationRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-PublicFolderMigrationRequest cmdlet to start a serial public folder migration from Exchange Server 2010.

**Note**: Support for serial migration of public folders ended in Exchange 2013 Cumulative Update 8 (CU8), and the cmdlets are no longer available in Exchange Online. Instead, use the corresponding **\*-MigrationBatch** and **\*-PublicFolderMailboxMigration\*** cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-PublicFolderMigrationRequest [[-Name] <String>] -SourceDatabase <DatabaseIdParameter>
 [-AcceptLargeDataLoss]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-CSVData <Byte[]>]
 [-CSVStream <Stream>]
 [-DomainController <Fqdn>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MigrationMailbox <MailboxIdParameter>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-Suspend]
 [-SuspendComment <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

## DESCRIPTION
Migrating public folders is a multi-step process. For more information before you attempt a public folder migration, see [Use serial migration to migrate public folders to Exchange 2013 from previous versions](https://learn.microsoft.com/previous-versions/exchange-server/exchange-150/jj150486(v=exchg.150)).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-PublicFolderMigrationRequest -SourceDatabase PFDB01 -CSVData ([System.IO.File]::ReadAllBytes('C:\PFMigration\CSVData.csv'))
```

This example creates a public folder migration request from the Exchange 2010 source public folder database PFDB01 and uses the CSVData.csv file that was created using the Export-PublicFolderStatistics.ps1 script. For more information, see [Use serial migration to migrate public folders to Exchange 2013 from previous versions](https://learn.microsoft.com/previous-versions/exchange-server/exchange-150/jj150486(v=exchg.150)).

## PARAMETERS

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Name parameter specifies the name of the public folder migration request. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SourceDatabase

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SourceDatabase parameter specifies the target database for the public folders. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

You need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

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

### -BadItemLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BatchName parameter specifies a descriptive name for the public folder migration batch. You can use the BatchName parameter as a search string when you use the Get-PublicFolderMigrationRequest cmdlet.

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

### -CompletedRequestAgeLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CompletedRequestAgeLimit parameter specifies how long the request is kept after it has completed before being automatically removed. The default CompletedRequestAgeLimit parameter value is 30 days.

```yaml
Type: Unlimited
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

### -CSVData

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CSVData parameter specifies the mapping file output generated by the PublicFoldertoMailboxMapGenerator.ps1 script. Use this parameter for local migrations.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

You can't use this parameter with the CSVStream parameter, but you need to use it if you don't use CSVStream parameter.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CSVStream

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CSVStream parameter specifies the mapping file output generated by the PublicFoldertoMailboxMapGenerator.ps1 script. Use this parameter for remote migrations.

You can't use this parameter with the CSVData parameter, but you need to use it if you don't use CSVData parameter.

```yaml
Type: Stream
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

### -InternalFlags

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/message-size-limits)
- Exchange Online: [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationMailbox

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -Priority

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval

> Applicable: Exchange Server 2016, Exchange Server 2019

The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.
- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SkipMerging parameter specifies whether certain stages of a public folder migration are skipped for debugging purposes. Don't use this parameter unless directed to do so by a Microsoft Customer Service and Support or specific documentation.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Suspend switch specifies whether to suspend the request. You don't need to specify a value with this switch.

If you use this switch, the request is queued, but the request won't reach the status of InProgress until you resume the request with the relevant resume cmdlet.

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

### -SuspendComment

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.

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

### -WorkloadType

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: RequestWorkloadType
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
