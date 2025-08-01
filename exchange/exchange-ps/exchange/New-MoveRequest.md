---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-moverequest
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-MoveRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-MoveRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MoveRequest cmdlet to begin the process of an asynchronous mailbox or personal archive move. You can also check mailbox readiness to be moved by using the WhatIf parameter.

**Note**: After April 15, 2020, you shouldn't use this cmdlet to manually move mailboxes within an Exchange Online organization. You can only use this cmdlet for migrating to and from Exchange Online. If you have issues with a mailbox and want to fix it by moving the mailbox within your Exchange Online organization, please open a Microsoft Support request instead.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### MigrationOutbound
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> -RemoteHostName <Fqdn>
 [-Outbound]
 [-RemoteCredential <PSCredential>]
 [-RemoteGlobalCatalog <Fqdn>]
 [-AcceptLargeDataLoss]
 [-AllowLargeItems]
 [-ArchiveDomain <String>]
 [-ArchiveOnly]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ForceOffline]
 [-IgnoreRuleLimitErrors]
 [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-MRSServer <Fqdn>]
 [-PreventCompletion]
 [-PrimaryOnly]
 [-Priority <RequestPriority>]
 [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-RemoteArchiveTargetDatabase <String>]
 [-RemoteOrganizationName <String>]
 [-RemoteTargetDatabase <String>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-Suspend]
 [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete]
 [-TargetDeliveryDomain <Fqdn>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MigrationRemote
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> -RemoteHostName <Fqdn>
 [-Remote]
 [-RemoteCredential <PSCredential>]
 [-RemoteGlobalCatalog <Fqdn>]
 [-AcceptLargeDataLoss]
 [-AllowLargeItems]
 [-ArchiveDomain <String>]
 [-ArchiveOnly]
 [-ArchiveTargetDatabase <DatabaseIdParameter>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ForceOffline]
 [-IgnoreRuleLimitErrors]
 [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-MRSServer <Fqdn>]
 [-PreventCompletion]
 [-PrimaryOnly]
 [-Priority <RequestPriority>]
 [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-RemoteOrganizationName <String>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-Suspend]
 [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete]
 [-TargetDatabase <DatabaseIdParameter>]
 [-TargetDeliveryDomain <Fqdn>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MigrationRemoteLegacy
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> -RemoteCredential <PSCredential> -RemoteGlobalCatalog <Fqdn>
 [-RemoteLegacy]
 [-AcceptLargeDataLoss]
 [-AllowLargeItems]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ForceOffline]
 [-IgnoreRuleLimitErrors]
 [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-MRSServer <Fqdn>]
 [-PreventCompletion]
 [-Priority <RequestPriority>]
 [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-RemoteTargetDatabase <String>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-Suspend]
 [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete]
 [-TargetDatabase <DatabaseIdParameter>]
 [-TargetDeliveryDomain <Fqdn>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MigrationLocal
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter>
 [-AcceptLargeDataLoss]
 [-AllowLargeItems]
 [-ArchiveOnly]
 [-ArchiveTargetDatabase <DatabaseIdParameter>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DoNotPreserveMailboxSignature]
 [-ForceOffline]
 [-ForcePull]
 [-ForcePush]
 [-IgnoreRuleLimitErrors]
 [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-MRSServer <Fqdn>]
 [-PreventCompletion]
 [-PrimaryOnly]
 [-Priority <RequestPriority>]
 [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-Suspend]
 [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete]
 [-TargetDatabase <DatabaseIdParameter>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MigrationOutboundCrossTenant
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> -TargetDeliveryDomain <Fqdn> [-Outbound]
 [-AcceptLargeDataLoss]
 [-AllowLargeItems]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ForceOffline]
 [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-PreventCompletion]
 [-Priority <RequestPriority>]
 [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>]
 [-StartAfter <DateTime>]
 [-Suspend]
 [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MigrationRemoteCrossTenant
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> -TargetDeliveryDomain <Fqdn> [-Remote]
 [-TargetDatabase <DatabaseIdParameter>]
 [-AcceptLargeDataLoss]
 [-AllowLargeItems]
 [-ArchiveTargetDatabase <DatabaseIdParameter>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ForceOffline]
 [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-MoveOptions <MultiValuedProperty>]
 [-PreventCompletion]
 [-Priority <RequestPriority>]
 [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-StartAfter <DateTime>]
 [-Suspend]
 [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MoveRequest -Identity 'tony@alpineskihouse.com' -TargetDatabase "DB01" -WhatIf
```

This example tests a mailbox's readiness to move to the new database DB01 within the same forest and for completeness of the command by using the WhatIf switch. When you use the WhatIf switch, the system performs checks on the mailbox, and if the mailbox isn't ready, you receive an error.

### Example 2
```powershell
New-MoveRequest -Identity 'tony@alpineskihouse.com' -TargetDatabase "DB01"
```

This example moves Tony Smith's mailbox to the new database DB01.

### Example 3
```powershell
Get-Mailbox -Database DB01 | New-MoveRequest -TargetDatabase DB02 -BatchName "DB01toDB02"
```

This example creates a batch move request for all mailboxes on the database DB01 and moves them to the database DB02 with the BatchName parameter value DB01toDB02.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the mailbox or mail user. You can use the following values:

- GUID
- Distinguished name (DN)
- Domain\\Account
- User principal name (UPN)
- LegacyExchangeDN
- SMTP address
- Alias

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Outbound
The Outbound switch specifies that this mailbox move is a cross-forest move and is being initiated from the source forest. You don't need to specify a value with this switch.

You can't use this switch with the Remote switch.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationOutbound, MigrationOutboundCrossTenant
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Remote
The Remote switch specifies that the move is outside of your organization and is being initiated from the target forest. You don't need to specify a value with this switch.

You can't use this switch with the Outbound switch.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationRemote, MigrationRemoteCrossTenant
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
The RemoteCredential parameter specifies the username and password of an administrator who has permission to perform the mailbox move.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: MigrationRemoteLegacy
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PSCredential
Parameter Sets: MigrationOutbound, MigrationRemote
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteGlobalCatalog
The RemoteGlobalCatalog parameter specifies the fully qualified domain name (FQDN) of the global catalog server for the remote forest.

```yaml
Type: Fqdn
Parameter Sets: MigrationRemoteLegacy
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: MigrationOutbound, MigrationRemote
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteHostName
The RemoteHostName parameter specifies the FQDN of the cross-forest organization from which you're moving the mailbox.

```yaml
Type: Fqdn
Parameter Sets: MigrationOutbound, MigrationRemote
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteLegacy
This parameter is available only in on-premises Exchange.

The RemoteLegacy switch specifies that this mailbox move is from a remote forest that has only Exchange 2010 servers installed. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationRemoteLegacy
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDeliveryDomain
The TargetDeliveryDomain parameter specifies the FQDN of the external email address created in the source forest for the mail-enabled user when the move request is complete. This parameter is allowed only when performing remote moves with the Remote, RemoteLegacy, or Outbound parameter.

```yaml
Type: Fqdn
Parameter Sets: MigrationOutboundCrossTenant, MigrationRemoteCrossTenant
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: MigrationOutbound, MigrationRemote, MigrationRemoteLegacy
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

In Exchange 2013 or later or Exchange Online, you need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

In Exchange 2010, you need to use this switch if you set the BadItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLargeItems
This parameter is available only in on-premises Exchange.

The AllowLargeItems switch specifies that items larger than the target mailbox limits are copied without failure. You don't need to specify a value with this switch.

You can't use this switch with the LargeItemLimit parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDomain
The ArchiveDomain parameter specifies the FQDN of the external domain to which you're moving the archive. This parameter is used for moving the archive to a cloud-based service.

```yaml
Type: String
Parameter Sets: MigrationOutbound, MigrationRemote
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveOnly
The ArchiveOnly switch specifies that you're moving only the personal archive associated with the mailbox. You don't need to specify a value with this switch.

You can't use this switch with the PrimaryOnly switch.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationOutbound, MigrationRemote, MigrationLocal
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveTargetDatabase
This parameter is available only in on-premises Exchange.

The ArchiveTargetDatabase parameter specifies the destination mailbox database for the personal archive. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the archive is moved to the same database as the primary mailbox.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationRemote, MigrationLocal, MigrationRemoteCrossTenant
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies a descriptive name for moving a batch of mailboxes. You can then use the name in the BatchName parameter as a search string when you use the Get-MoveRequest cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompleteAfter
The CompleteAfter parameter specifies a delay before the request is completed. The request is started, but not completed until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request will be kept after it has completed before being automatically removed. The default CompletedRequestAgeLimit parameter value is 30 days.

```yaml
Type: Unlimited
Parameter Sets: (All)
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

### -DoNotPreserveMailboxSignature
This parameter is available only in on-premises Exchange.

The DoNotPreserveMailboxSignature switch specifies that the move doesn't preserve the mailbox mapping signature. You don't need to specify a value with this switch.

We recommend that you use this switch only if the move request fails because the Named Property identifiers are depleted. If you use this parameter, the user must restart Outlook when the move request is complete.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationLocal
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceOffline
The ForceOffline switch forces the mailbox move to be performed in offline mode. You don't need to specify a value with this switch.

Moving a mailbox in offline mode means the user will have no access to email during the mailbox move.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForcePull
This parameter is available only in on-premises Exchange.

The ForcePull switch specifies that the type of local move should be a Pull move. You don't need to specify a value with this switch.

You use this parameter only for local moves.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationLocal
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForcePush
This parameter is available only in on-premises Exchange.

The ForcePush switch specifies that the type of local move should be a Push move. You don't need to specify a value with this switch.

You use this parameter only for local moves.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationLocal
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreRuleLimitErrors
This parameter is available only in Exchange Server 2010 or Exchange Server 2013

The IgnoreRuleLimitErrors switch specifies that the command doesn't move the user's rules to the target server running Exchange. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationOutbound, MigrationRemote, MigrationRemoteLegacy, MigrationLocal
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncrementalSyncInterval
The IncrementalSyncInterval parameter specifies the wait time between incremental syncs. This parameter is used together with the CompleteAfter parameter to create a move request that will do periodic incremental syncs after the initial sync is complete.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are from 00:00:00 to 120.00:00:00 (120 days). The default value is 24 hours.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Parameter Sets: (All)
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

- Exchange Server: [Message size limits in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/message-size-limits)
- Exchange Online: [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveOptions
The MoveOptions parameter specifies the stages of the move that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

Don't use this parameter with the SkipMoving parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSServer
This parameter is available only in Exchange Server 2010.

The MRSServer parameter specifies the FQDN of the Client Access server on which the instance of the Microsoft Exchange Mailbox Replication service (MRS) is running. This parameter is used for debugging purposes only. Use this parameter only if directed by support personnel.

```yaml
Type: Fqdn
Parameter Sets: MigrationOutbound, MigrationRemote, MigrationRemoteLegacy, MigrationLocal
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreventCompletion
The PreventCompletion switch specifies whether to run the move request, but not allow it to complete. You don't need to specify a value with this switch.

Instead of this switch, we recommend using the CompleteAfter parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryOnly
The PrimaryOnly switch specifies that the command should only move the primary mailbox (the personal archive isn't moved). You don't need to specify a value with this switch.

You use this switch only if the user has a personal archive that you don't want to move. If the user doesn't have personal archive, don't use this switch.

You can't use this switch with the ArchiveOnly sitch.

```yaml
Type: SwitchParameter
Parameter Sets: MigrationOutbound, MigrationRemote, MigrationLocal
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protect
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyToMailbox
This parameter is available only in the cloud-based service.

The ProxyToMailbox parameter specifies the move destination by the location of the specified mailbox (also known as proxying). You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchiveTargetDatabase
The RemoteArchiveTargetDatabase parameter specifies the name of the target database in the remote forest to which you're moving the personal archive. Use this parameter when moving users with archives from the local forest to a remote forest. For moves from a remote forest to the local forest, use the ArchiveTargetDatabase parameter.

If you use this parameter, you must specify the Remote or RemoteLegacy parameter.

```yaml
Type: String
Parameter Sets: MigrationOutbound
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteOrganizationName
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: MigrationOutbound, MigrationRemote
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteTargetDatabase
The RemoteTargetDatabase parameter specifies the name of the target database in the remote forest. Use this parameter when moving mailboxes from the local forest to a remote forest. For moves from a remote forest to the local forest, use the TargetDatabase parameter.

If you use this parameter, you must specify the Remote or RemoteLegacy parameter.

```yaml
Type: String
Parameter Sets: MigrationOutbound, MigrationRemote
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

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

### -SkipMoving
This parameter has been replaced by the MoveOptions parameter.

The SkipMoving parameter specifies the stages of the move that you want to skip for debugging purposes. Don't use this parameter unless you're directed to do so by Microsoft Customer Service and Support or specific documentation.

```yaml
Type: SkippableMoveComponent[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint
This parameter is available only in the cloud-based service.

{{ Fill SourceEndpoint Description }}

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: MigrationOutbound, MigrationRemote, MigrationRemoteLegacy, MigrationLocal, MigrationRemoteCrossTenant
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartAfter
The StartAfter parameter specifies a delay before the request is started. The request isn't started until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
The Suspend switch specifies whether to suspend the request. You don't need to specify a value with this switch.

If you use this switch, the request is queued, but the request won't reach the status of InProgress until you resume the request with the relevant resume cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendComment
The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendWhenReadyToComplete
The SuspendWhenReadyToComplete switch specifies whether to suspend the move request before it reaches the status of CompletionInProgress. You don't need to specify a value with this switch.

Instead of this switch, we recommend that you use the CompleteAfter parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabase
This parameter is available only in on-premises Exchange.

The TargetDatabase parameter specifies the destination mailbox database for the mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the automatic distribution logic will select a random database in the Active Directory site where you are running the command.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationRemote, MigrationRemoteLegacy, MigrationLocal, MigrationRemoteCrossTenant
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

You can use this switch to test a mailbox's readiness to be moved, and to view any errors that will occur without adding the mailbox to the move request queue.

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

### -WorkloadType
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RequestWorkloadType
Parameter Sets: (All)
Aliases:
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
