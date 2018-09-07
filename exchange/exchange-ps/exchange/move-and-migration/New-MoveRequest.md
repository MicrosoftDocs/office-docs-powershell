---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-MoveRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-MoveRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MoveRequest cmdlet to begin the process of an asynchronous mailbox or personal archive move. You can also check mailbox readiness to be moved by using the WhatIf parameter.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set4
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> [-Outbound] [-RemoteCredential <PSCredential>]
 [-RemoteGlobalCatalog <Fqdn>] -RemoteHostName <Fqdn> [-AcceptLargeDataLoss] [-AllowLargeItems]
 [-ArchiveDomain <String>] [-ArchiveOnly] [-BadItemLimit <Unlimited>] [-BatchName <String>] [-Confirm]
 [-DomainController <Fqdn>] [-IgnoreRuleLimitErrors] [-MRSServer <Fqdn>] [-PrimaryOnly]
 [-Priority <Normal | High>] [-Protect] [-RemoteArchiveTargetDatabase <String>]
 [-RemoteOrganizationName <String>] [-RemoteTargetDatabase <String>] [-Suspend] [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete] [-TargetDeliveryDomain <Fqdn>] [-WhatIf] [-CheckInitialProvisioningSetting]
 [-CompleteAfter <DateTime>] [-CompletedRequestAgeLimit <Unlimited>] [-ForceOffline]
 [-IncrementalSyncInterval <TimeSpan>] [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>]
 [-PreventCompletion] [-SkipMoving <SkippableMoveComponent[]>] [-StartAfter <DateTime>]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-Remote] -RemoteTenant <SmtpDomain> [-ArchiveTargetDatabase <DatabaseIdParameter>]
 [-IgnoreTenantMigrationPolicies] [-MoveOptions <MultiValuedProperty>] [-ProxyToMailbox <MailboxIdParameter>]
 [-RequestExpiryInterval <Unlimited>] [-TargetDatabase <DatabaseIdParameter>] [<CommonParameters>]
```

### Set3
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> [-Remote] [-RemoteCredential <PSCredential>]
 [-RemoteGlobalCatalog <Fqdn>] -RemoteHostName <Fqdn> [-AcceptLargeDataLoss] [-AllowLargeItems]
 [-ArchiveDomain <String>] [-ArchiveOnly] [-ArchiveTargetDatabase <DatabaseIdParameter>]
 [-BadItemLimit <Unlimited>] [-BatchName <String>] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreRuleLimitErrors] [-MRSServer <Fqdn>] [-PrimaryOnly] [-Priority <Normal | High>] [-Protect]
 [-RemoteOrganizationName <String>] [-Suspend] [-SuspendComment <String>] [-SuspendWhenReadyToComplete]
 [-TargetDatabase <DatabaseIdParameter>] [-TargetDeliveryDomain <Fqdn>] [-WhatIf] [-RemoteLegacy]
 [-CheckInitialProvisioningSetting] [-CompleteAfter <DateTime>] [-CompletedRequestAgeLimit <Unlimited>]
 [-ForceOffline] [-IncrementalSyncInterval <TimeSpan>] [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>] [-PreventCompletion] [-RemoteTargetDatabase <String>]
 [-SkipMoving <SkippableMoveComponent[]>] [-StartAfter <DateTime>]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-IgnoreTenantMigrationPolicies] [-MigrationMailbox <MailboxIdParameter>] [-MoveOptions <MultiValuedProperty>]
 [-ProxyToMailbox <MailboxIdParameter>] [-RequestExpiryInterval <Unlimited>]
 [-SourceEndpoint <MigrationEndpointIdParameter>] [<CommonParameters>]
```

### Set2
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> -RemoteCredential <PSCredential>
 -RemoteGlobalCatalog <Fqdn> [-RemoteLegacy] [-AcceptLargeDataLoss] [-AllowLargeItems]
 [-BadItemLimit <Unlimited>] [-BatchName <String>] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreRuleLimitErrors] [-MRSServer <Fqdn>] [-Priority <Normal | High>] [-Protect]
 [-RemoteTargetDatabase <String>] [-Suspend] [-SuspendComment <String>] [-SuspendWhenReadyToComplete]
 [-TargetDatabase <DatabaseIdParameter>] [-TargetDeliveryDomain <Fqdn>] [-WhatIf] [-Remote]
 -RemoteHostName <Fqdn> [-ArchiveDomain <String>] [-ArchiveOnly] [-ArchiveTargetDatabase <DatabaseIdParameter>]
 [-CheckInitialProvisioningSetting] [-CompleteAfter <DateTime>] [-CompletedRequestAgeLimit <Unlimited>]
 [-ForceOffline] [-IncrementalSyncInterval <TimeSpan>] [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>] [-PreventCompletion] [-PrimaryOnly] [-RemoteOrganizationName <String>]
 [-SkipMoving <SkippableMoveComponent[]>] [-StartAfter <DateTime>]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-IgnoreTenantMigrationPolicies] [-MigrationMailbox <MailboxIdParameter>] [-MoveOptions <MultiValuedProperty>]
 [-ProxyToMailbox <MailboxIdParameter>] [-RequestExpiryInterval <Unlimited>]
 [-SourceEndpoint <MigrationEndpointIdParameter>] [<CommonParameters>]
```

### Set1
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> [-AcceptLargeDataLoss] [-AllowLargeItems]
 [-ArchiveOnly] [-ArchiveTargetDatabase <DatabaseIdParameter>] [-BadItemLimit <Unlimited>]
 [-BatchName <String>] [-Confirm] [-DomainController <Fqdn>] [-DoNotPreserveMailboxSignature]
 [-IgnoreRuleLimitErrors] [-MRSServer <Fqdn>] [-PrimaryOnly] [-Priority <Normal | High>] [-Protect] [-Suspend]
 [-SuspendComment <String>] [-SuspendWhenReadyToComplete] [-TargetDatabase <DatabaseIdParameter>] [-WhatIf]
 [-CheckInitialProvisioningSetting] [-CompleteAfter <DateTime>] [-CompletedRequestAgeLimit <Unlimited>]
 [-ForceOffline] [-ForcePull] [-ForcePush] [-IncrementalSyncInterval <TimeSpan>]
 [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>] [-PreventCompletion]
 [-SkipMoving <SkippableMoveComponent[]>] [-StartAfter <DateTime>]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-MigrationMailbox <MailboxIdParameter>] [-MoveOptions <MultiValuedProperty>]
 [-ProxyToMailbox <MailboxIdParameter>] [-RequestExpiryInterval <Unlimited>]
 [-SourceEndpoint <MigrationEndpointIdParameter>] [<CommonParameters>]
```

### Set5
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> [-Outbound] [-RemoteCredential <PSCredential>]
 [-RemoteGlobalCatalog <Fqdn>] -RemoteHostName <Fqdn> [-TargetDeliveryDomain <Fqdn>] [-AcceptLargeDataLoss]
 [-AllowLargeItems] [-ArchiveDomain <String>] [-ArchiveOnly] [-BadItemLimit <Unlimited>] [-BatchName <String>]
 [-CheckInitialProvisioningSetting] [-CompleteAfter <DateTime>] [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm] [-DomainController <Fqdn>] [-ForceOffline] [-IgnoreTenantMigrationPolicies]
 [-IncrementalSyncInterval <TimeSpan>] [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>]
 [-MigrationMailbox <MailboxIdParameter>] [-MoveOptions <MultiValuedProperty>] [-PreventCompletion]
 [-PrimaryOnly] [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>] [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>] [-RemoteArchiveTargetDatabase <String>]
 [-RemoteTargetDatabase <String>] [-RequestExpiryInterval <Unlimited>] [-SkipMoving <SkippableMoveComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>] [-StartAfter <DateTime>] [-Suspend]
 [-SuspendComment <String>] [-SuspendWhenReadyToComplete] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport | XO1Migration | CrossResourceForest | ShadowSync | XrmSharing | ThirdPartyContactSync>]
 [<CommonParameters>]
```

### Set6
```
New-MoveRequest [-Identity] <MailboxOrMailUserIdParameter> [-Outbound] -RemoteTenant <SmtpDomain>
 -TargetDeliveryDomain <Fqdn> [-AcceptLargeDataLoss] [-AllowLargeItems] [-BadItemLimit <Unlimited>]
 [-BatchName <String>] [-CheckInitialProvisioningSetting] [-CompleteAfter <DateTime>]
 [-CompletedRequestAgeLimit <Unlimited>] [-Confirm] [-DomainController <Fqdn>] [-ForceOffline]
 [-IgnoreTenantMigrationPolicies] [-IncrementalSyncInterval <TimeSpan>] [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>] [-MoveOptions <MultiValuedProperty>] [-PreventCompletion]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>] [-Protect]
 [-ProxyToMailbox <MailboxIdParameter>] [-RequestExpiryInterval <Unlimited>]
 [-SkipMoving <SkippableMoveComponent[]>] [-StartAfter <DateTime>] [-Suspend] [-SuspendComment <String>]
 [-SuspendWhenReadyToComplete] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport | XO1Migration | CrossResourceForest | ShadowSync | XrmSharing | ThirdPartyContactSync>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-MoveRequest -Identity 'tony@alpineskihouse.com' -TargetDatabase "DB01" -WhatIf
```

This example tests a mailbox's readiness to move to the new database DB01 within the same forest and for completeness of the command by using the WhatIf switch. When you use the WhatIf switch, the system performs checks on the mailbox, and if the mailbox isn't ready, you receive an error.

### -------------------------- Example 2 --------------------------
```
New-MoveRequest -Identity 'tony@alpineskihouse.com' -TargetDatabase "DB01"
```

This example moves Tony Smith's mailbox to the new database DB01.

### -------------------------- Example 3 --------------------------
```
Get-Mailbox -Database DB01 | New-MoveRequest -TargetDatabase DB02 -BatchName "DB01toDB02"
```

This example creates a batch move request for all mailboxes on the database DB01 and moves them to the database DB02 with the BatchName parameter value DB01toDB02.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the mailbox or mail user. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\Account

- User principal name (UPN)

- LegacyExchangeDN

- SMTP address

- Alias

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set4, Set5, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set4, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
The RemoteCredential parameter specifies an administrator who has permission to perform the mailbox move, for example, Administrator@humongousinsurance.com.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: Set4, Set3, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PSCredential
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteGlobalCatalog
The RemoteGlobalCatalog parameter specifies the fully qualified domain name (FQDN) of the global catalog server for the remote forest.

```yaml
Type: Fqdn
Parameter Sets: Set4, Set3, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteHostName
The RemoteHostName parameter specifies the FQDN of the cross-forest organization from which you're moving the mailbox.

```yaml
Type: Fqdn
Parameter Sets: Set4, Set3, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the BadItemLimit or LargeItemLimit parameters to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: Set4, Set3, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveOnly
The ArchiveOnlyswitch specifies that you're moving only the personal archive associated with the mailbox.

You can't use this switch with the PrimaryOnlyswitch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set3, Set2, Set1, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveTargetDatabase
This parameter is available only in on-premises Exchange.

The ArchiveTargetDatabase parameter specifies the Exchange target database to which you're moving the personal archive. If this parameter isn't specified, the archive is moved to the same database as the primary mailbox.

You can use the following values for this parameter:

- GUID of the database

- Database name

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set4, Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotPreserveMailboxSignature
This parameter is available only in on-premises Exchange.

The DoNotPreserveMailboxSignatureswitch specifies that the move doesn't preserve the mailbox mapping signature. You don't need to specify a value with this switch.

We recommend that you use this switch only if the move request fails because the Named Property identifiers are depleted. If you use this parameter, the user must restart Outlook when the move request is complete.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreRuleLimitErrors
The IgnoreRuleLimitErrors parameter specifies that the command doesn't move the user's rules to the target server running Exchange.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSServer
This parameter is available or functional only in Exchange Server 2010.

The MRSServer parameter specifies the FQDN of the Client Access server on which the instance of the Microsoft Exchange Mailbox Replication service (MRS) is running. This parameter is used for debugging purposes only. Use this parameter only if directed by support personnel.

```yaml
Type: Fqdn
Parameter Sets: Set4, Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryOnly
The PrimaryOnly switch specifies that the command should only move the primary mailbox (the personal archive isn't moved). You don't need to specify a value with this switch.

You use this switch only if the user has a personal archive that you don't want to move. If the user doesn't have personal archive, don't use this switch.

You can't use this parameter with the ArchiveOnly parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set3, Set2, Set1, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Type: Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protect
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set4, Set3, Set2
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
Parameter Sets: Set4, Set3, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
The Suspend switch specifies whether to suspend the request. If you use this switch, the request is queued, but the request won't reach the status of InProgress until you resume the request with the relevant resume cmdlet. You don't have to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendWhenReadyToComplete
The SuspendWhenReadyToComplete switch specifies whether to suspend the move request before it reaches the status of CompletionInProgress. Instead of this switch, we recommend that you use the CompleteAfter parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabase
This parameter is available only in on-premises Exchange.

The TargetDatabase parameter specifies the identity of the database that you're moving the mailbox to. If you don't use this parameter, the automatic distribution logic will select a random database from the Active Directory site where you are running the command.

You can use the following values:

- GUID of the database

- Database name

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set4, Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDeliveryDomain
The TargetDeliveryDomain parameter specifies the FQDN of the external email address created in the source forest for the mail-enabled user when the move request is complete. This parameter is allowed only when performing remote moves with the Remote or RemoteLegacy parameter.

```yaml
Type: Fqdn
Parameter Sets: Set4, Set3, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CheckInitialProvisioningSetting
The CheckInitialProvisioningSetting switch specifies that the move request checks the IsExcludedFromProvisioning setting on the target database when you don't specify a target database for the move. You don't need to specify a value with this switch.

The IsExcludedFromProvisioning setting allows the database to be excluded from provisioning new mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompleteAfter
The CompleteAfter parameter specifies a delay before the request is completed. The request is started, but not completed until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

In Exchange Online, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, (Get-Date "5/6/2016 9:30 AM").ToUniversalTime(). For more information, see Get-Date (https://go.microsoft.com/fwlink/p/?LinkID=113313).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceOffline
The ForceOfflineswitch forces the mailbox move to be performed in offline mode. You don't need to specify a value with this switch.

Moving a mailbox in offline mode means the user will have no access to email during the mailbox move.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForcePull
This parameter is available only in on-premises Exchange.

The ForcePullswitch specifies that the type of local move should be a Pull move. You don't need to specify a value with this switch.

You use this parameter only for local moves.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForcePush
This parameter is available only in on-premises Exchange.

The ForcePushswitch specifies that the type of local move should be a Push move. You don't need to specify a value with this switch.

You use this parameter only for local moves.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: Message size limits in Exchange 2016 (https://technet.microsoft.com/library/bb124345.aspx)

- Exchange Online: Exchange Online Limits (https://go.microsoft.com/fwlink/p/?LinkId=524926)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreventCompletion
The PreventCompletion switch specifies whether to run the move request, but not allow it to complete. Instead of this switch, we recommend using the CompleteAfter parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartAfter
The StartAfter parameter specifies a delay before the request is started. The request isn't started until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

In Exchange Online, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, (Get-Date "5/6/2016 9:30 AM").ToUniversalTime(). For more information, see Get-Date (https://go.microsoft.com/fwlink/p/?LinkID=113313).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType
This parameter is available only in on-premises Exchange.

The WorkloadType parameter is reserved for internal Microsoft use.

```yaml
Type: None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteTenant
PARAMVALUE: SmtpDomain

```yaml
Type: SmtpDomain
Parameter Sets: Set4, Set6
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreTenantMigrationPolicies
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set3, Set2, Set5, Set6
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationMailbox
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set3, Set2, Set1, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyToMailbox
This parameter is available only in the cloud-based service.

The ProxyToMailbox parameter specifies the move destination by the location of the specified mailbox (also known as proxying). You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

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

### -RequestExpiryInterval
The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.

- If the request fails, you need to manually remove it by using the corresponding `Remove-*`Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint
This parameter is reserved for internal Microsoft use.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: Set3, Set2, Set1, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c28ca2ce-963f-4676-81c3-cef3c290ee7b.aspx)
