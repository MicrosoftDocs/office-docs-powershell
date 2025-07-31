---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-throttlingpolicy
schema: 2.0.0
title: Set-ThrottlingPolicy
---

# Set-ThrottlingPolicy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ThrottlingPolicy cmdlet to modify the settings for a user throttling policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ThrottlingPolicy [-Identity] <ThrottlingPolicyIdParameter>
 [-AnonymousCutoffBalance <Unlimited>]
 [-AnonymousMaxBurst <Unlimited>]
 [-AnonymousMaxConcurrency <UInt32>]
 [-AnonymousPercentTimeInAD <UInt32>]
 [-AnonymousPercentTimeInCAS <UInt32>]
 [-AnonymousPercentTimeInMailboxRPC <UInt32>]
 [-AnonymousRechargeRate <Unlimited>]
 [-BookingSelfServiceCutoffBalance <Unlimited>]
 [-BookingSelfServiceMaxBurst <Unlimited>]
 [-BookingSelfServiceMaxConcurrency <Unlimited>]
 [-BookingSelfServiceRechargeRate <Unlimited>]
 [-ComplianceMaxExpansionDGRecipients <Unlimited>]
 [-ComplianceMaxExpansionNestedDGs <Unlimited>]
 [-Confirm]
 [-ConsensusCutoffBalance <Unlimited>]
 [-ConsensusMaxBurst <Unlimited>]
 [-ConsensusMaxConcurrency <Unlimited>]
 [-ConsensusRechargeRate <Unlimited>]
 [-CpaCutoffBalance <Unlimited>]
 [-CpaMaxBurst <Unlimited>]
 [-CPAMaxConcurrency <UInt32>]
 [-CPAPercentTimeInCAS <UInt32>]
 [-CPAPercentTimeInMailboxRPC <UInt32>]
 [-CpaRechargeRate <Unlimited>]
 [-CPUStartPercent <UInt32>]
 [-DiscoveryMaxConcurrency <Unlimited>]
 [-DiscoveryMaxKeywords <Unlimited>]
 [-DiscoveryMaxKeywordsPerPage <Unlimited>]
 [-DiscoveryMaxMailboxes <Unlimited>]
 [-DiscoveryMaxPreviewSearchMailboxes <Unlimited>]
 [-DiscoveryMaxRefinerResults <Unlimited>]
 [-DiscoveryMaxSearchQueueDepth <Unlimited>]
 [-DiscoveryMaxStatsSearchMailboxes <Unlimited>]
 [-DiscoveryPreviewSearchResultsPageSize <Unlimited>]
 [-DiscoverySearchTimeoutPeriod <Unlimited>]
 [-DomainController <Fqdn>]
 [-EasCutoffBalance <Unlimited>]
 [-EasMaxBurst <Unlimited>]
 [-EASMaxConcurrency <UInt32>]
 [-EASMaxDeviceDeletesPerMonth <UInt32>]
 [-EASMaxDevices <UInt32>]
 [-EasMaxInactivityForDeviceCleanup <Unlimited>]
 [-EASPercentTimeInAD <UInt32>]
 [-EASPercentTimeInCAS <UInt32>]
 [-EASPercentTimeInMailboxRPC <UInt32>]
 [-EasRechargeRate <Unlimited>]
 [-EncryptionRecipientCutoffBalance <Unlimited>]
 [-EncryptionRecipientMaxBurst <Unlimited>]
 [-EncryptionRecipientMaxConcurrency <Unlimited>]
 [-EncryptionRecipientRechargeRate <Unlimited>]
 [-EncryptionSenderCutoffBalance <Unlimited>]
 [-EncryptionSenderMaxBurst <Unlimited>]
 [-EncryptionSenderMaxConcurrency <Unlimited>]
 [-EncryptionSenderRechargeRate <Unlimited>]
 [-EwsCostThreshold <Unlimited>]
 [-EwsCutoffBalance <Unlimited>]
 [-EWSFastSearchTimeoutInSeconds <UInt32>]
 [-EWSFindCountLimit <UInt32>]
 [-EwsMaxBurst <Unlimited>]
 [-EWSMaxConcurrency <UInt32>]
 [-EWSMaxSubscriptions <UInt32>]
 [-EWSPercentTimeInAD <UInt32>]
 [-EWSPercentTimeInCAS <UInt32>]
 [-EWSPercentTimeInMailboxRPC <UInt32>]
 [-EwsRechargeRate <Unlimited>]
 [-ExchangeMaxCmdlets <UInt32>]
 [-Force]
 [-ForwardeeLimit <UInt32>]
 [-ImapCutoffBalance <Unlimited>]
 [-ImapMaxBurst <Unlimited>]
 [-IMAPMaxConcurrency <UInt32>]
 [-IMAPPercentTimeInAD <UInt32>]
 [-IMAPPercentTimeInCAS <UInt32>]
 [-IMAPPercentTimeInMailboxRPC <UInt32>]
 [-ImapRechargeRate <Unlimited>]
 [-IsServiceAccount]
 [-MessageRateLimit <UInt32>]
 [-Name <String>]
 [-OutlookServiceCutoffBalance <Unlimited>]
 [-OutlookServiceMaxBurst <Unlimited>]
 [-OutlookServiceMaxConcurrency <Unlimited>]
 [-OutlookServiceMaxSocketConnectionsPerDevice <Unlimited>]
 [-OutlookServiceMaxSocketConnectionsPerUser <Unlimited>]
 [-OutlookServiceMaxSubscriptions <Unlimited>]
 [-OutlookServiceRechargeRate <Unlimited>]
 [-OwaCutoffBalance <Unlimited>]
 [-OwaMaxBurst <Unlimited>]
 [-OWAMaxConcurrency <UInt32>]
 [-OWAPercentTimeInAD <UInt32>]
 [-OWAPercentTimeInCAS <UInt32>]
 [-OWAPercentTimeInMailboxRPC <UInt32>]
 [-OwaRechargeRate <Unlimited>]
 [-OwaVoiceCutoffBalance <Unlimited>]
 [-OwaVoiceMaxBurst <Unlimited>]
 [-OwaVoiceMaxConcurrency <Unlimited>]
 [-OwaVoiceRechargeRate <Unlimited>]
 [-PopCutoffBalance <Unlimited>]
 [-PopMaxBurst <Unlimited>]
 [-POPMaxConcurrency <UInt32>]
 [-POPPercentTimeInAD <UInt32>]
 [-POPPercentTimeInCAS <UInt32>]
 [-POPPercentTimeInMailboxRPC <UInt32>]
 [-PopRechargeRate <Unlimited>]
 [-PowerShellCutoffBalance <Unlimited>]
 [-PowerShellMaxBurst <Unlimited>]
 [-PowerShellMaxCmdletQueueDepth <UInt32>]
 [-PowerShellMaxCmdlets <UInt32>]
 [-PowerShellMaxCmdletsTimePeriod <UInt32>]
 [-PowerShellMaxConcurrency <UInt32>]
 [-PowerShellMaxDestructiveCmdlets <UInt32>]
 [-PowerShellMaxDestructiveCmdletsTimePeriod <UInt32>]
 [-PowerShellMaxOperations <Unlimited>]
 [-PowerShellMaxRunspaces <Unlimited>]
 [-PowerShellMaxRunspacesTimePeriod <Unlimited>]
 [-PowerShellMaxTenantConcurrency <UInt32>]
 [-PowerShellMaxTenantRunspaces <Unlimited>]
 [-PowerShellRechargeRate <Unlimited>]
 [-PswsMaxConcurrency <Unlimited>]
 [-PswsMaxRequest <Unlimited>]
 [-PswsMaxRequestTimePeriod <Unlimited>]
 [-PushNotificationCutoffBalance <Unlimited>]
 [-PushNotificationMaxBurst <Unlimited>]
 [-PushNotificationMaxBurstPerDevice <Unlimited>]
 [-PushNotificationMaxConcurrency <Unlimited>]
 [-PushNotificationRechargeRate <Unlimited>]
 [-PushNotificationRechargeRatePerDevice <Unlimited>]
 [-PushNotificationSamplingPeriodPerDevice <Unlimited>]
 [-RcaCutoffBalance <Unlimited>]
 [-RcaMaxBurst <Unlimited>]
 [-RCAMaxConcurrency <UInt32>]
 [-RCAPercentTimeInAD <UInt32>]
 [-RCAPercentTimeInCAS <UInt32>]
 [-RCAPercentTimeInMailboxRPC <UInt32>]
 [-RcaRechargeRate <Unlimited>]
 [-RcaSharedCutoffBalance <Unlimited>]
 [-RcaSharedMaxBurst <Unlimited>]
 [-RcaSharedMaxConcurrency <Unlimited>]
 [-RcaSharedRechargeRate <Unlimited>]
 [-RecipientRateLimit <UInt32>]
 [-SchedulesCutoffBalance <Unlimited>]
 [-SchedulesMaxBurst <Unlimited>]
 [-SchedulesMaxConcurrency <Unlimited>]
 [-SchedulesRechargeRate <Unlimited>]
 [-ThrottlingPolicyScope <ThrottlingPolicyScopeType>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Throttling policy settings are stored in Active Directory.

By default, there is one default user throttling policy named GlobalThrottlingPolicy with a throttling scope of Global. Exchange Setup creates this policy as part of the Client Access server role. You shouldn't replace, re-create, or remove the existing default throttling policy. However, you can edit any additional throttling policies with the scope of Organization or Regular if you want to change your user throttling settings. You can create policies with the scope of Organization or Regular using the New-ThrottlingPolicy cmdlet.

For more information about how to control the resources consumed by individual users, see [User workload management in Exchange Server](https://learn.microsoft.com/Exchange/server-health/workload-management).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$a = Get-ThrottlingPolicy RemoteSiteUserPolicy

$a | Set-ThrottlingPolicy -EwsMaxConcurrency 4
```

This example modifies a throttling policy so that users associated with this policy can have a maximum of four concurrent requests running in Exchange Web Services.

### Example 2
```powershell
Set-ThrottlingPolicy RemoteSiteUserPolicy -PowerShellMaxConcurrency 3 -PowerShellMaxCmdletQueueDepth 12
```

This example modifies a throttling policy so that it restricts the number of connections for a user to three. The users associated with this policy are only able to create three Exchange Management Shell sessions. This policy also restricts to three the number of Exchange admin center operations or Exchange Web Services operations that can be executed at the same time. In addition, the PowerShellMaxCmdletQueueDepth parameter specifies that 12 operations maximum are allowed to be executed by the user.

### Example 3
```powershell
Set-ThrottlingPolicy <ThrottlingPolicyName> -PowerShellMaxDestructiveCmdlets 10 -PowerShellMaxDestructiveCmdletsTimePeriod 60
```

This example modifies a throttling policy so that it restricts a user to be able to execute only 10 destructive cmdlets in 60 seconds. If the users associated with this policy exceed this number, the cmdlet pipeline execution is stopped with a throttling error message. The user needs to wait for, and then resubmit the execution of cmdlets on the open connection.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter uniquely identifies the throttling policy that you want to modify values for. The name you use is the name of the throttling policy object in Active Directory.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AnonymousCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AnonymousCutoffBalance parameter specifies the resource consumption limits for an anonymous user before the user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -AnonymousMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AnonymousMaxBurst parameter specifies the amount of time that an anonymous user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -AnonymousMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AnonymousMaxConcurrency parameter specifies how many anonymous connections can be made to a user's calendar data at the same time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If anonymous users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The AnonymousMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 1. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The AnonymousPercentTimeInAD parameter specifies the percentage of a minute that anonymous users can spend executing LDAP requests (PercentTimeInAD) to a user's calendar data. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The AnonymousPercentTimeInCAS parameter specifies the percentage of a minute that anonymous users can spend executing CAS code (PercentTimeInCAS) to a user's calendar data. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The AnonymousPercentTimeInMailboxRPC parameter specifies the percentage of a minute that anonymous users can spend executing mailbox RPC requests (PercentTimeInMailboxRPC) to a user's calendar data. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AnonymousRechargeRate parameter specifies the rate at which an anonymous user's budget is charged (budget grows by) during the budget time.

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

### -BookingSelfServiceCutoffBalance

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -BookingSelfServiceMaxBurst

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -BookingSelfServiceMaxConcurrency

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -BookingSelfServiceRechargeRate

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -ComplianceMaxExpansionDGRecipients

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ComplianceMaxExpansionDGRecipients parameter specifies the maximum number of recipients to expand in distribution groups when a discovery search is looking for a specified recipient.

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

### -ComplianceMaxExpansionNestedDGs

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ComplianceMaxExpansionNestedDGs parameter specifies the maximum number of nested distribution groups to expand when a discovery search is looking for a specified recipient.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -ConsensusCutoffBalance

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -ConsensusMaxBurst

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -ConsensusMaxConcurrency

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -ConsensusRechargeRate

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -CpaCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CpaCutoffBalance parameter specifies the resource consumption limits for a cross-premises user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -CpaMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CpaMaxBurst parameter specifies the amount of time that a cross-premises user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -CPAMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CpaMaxConcurrency parameter specifies how many concurrent connections a cross-premises user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The CpaMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPAPercentTimeInCAS

> Applicable: Exchange Server 2010

The CPAPercentTimeInCAS parameter specifies the percentage of a minute that a cross-premises user can spend executing CAS code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPAPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The CPAPercentTimeInMailboxRPC parameter specifies the percentage of a minute that a cross-premises user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CpaRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CpaRechargeRate parameter specifies the rate at which a cross premises user budget is charged (budget grows by) during the budget time.

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

### -CPUStartPercent

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The CPUStartPercent parameter specifies the per-process CPU percentage at which users governed by this policy begin to be backed off. Valid values are from 0 through 100. Use $null to turn off CPU percentage-based throttling for this policy.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxConcurrency parameter specifies the number of concurrent discovery search executions that a user can have at the same time. To modify the discovery throttling parameters, create a new policy and name it "DiscoveryThrottlingPolicy".

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

### -DiscoveryMaxKeywords

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxKeywords parameter specifies the maximum number of keywords that a user can include in a discovery search. For more information, see [Search-Mailbox](https://learn.microsoft.com/powershell/module/exchange/search-mailbox).

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

### -DiscoveryMaxKeywordsPerPage

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxKeywordsPerPage parameter specifies the number of keywords for which to show statistics on a single page in the EAC.

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

### -DiscoveryMaxMailboxes

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxMailboxes parameter specifies the maximum number of source mailboxes that a user can include in a discovery search.

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

### -DiscoveryMaxPreviewSearchMailboxes

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxPreviewSearchMailboxes parameter specifies the maximum number of mailboxes that a user can include in eDiscovery Search Preview.

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

### -DiscoveryMaxRefinerResults

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter isn't used and will be removed.

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

### -DiscoveryMaxSearchQueueDepth

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxSearchQueueDepth parameter specifies the maximum number of concurrent discovery search threads that can be active at the same time.

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

### -DiscoveryMaxStatsSearchMailboxes

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryMaxStatsSearchMailboxes parameter specifies the maximum number of mailboxes that a user can search in an In-Place eDiscovery search without being able to view the statistics. When the number of mailboxes configured with the DiscoveryMaxStatsSearchMailboxes parameter is exceeded, the user must copy the search results to a discovery mailbox to view the statistics for the discovery search. For more information, see [In-Place eDiscovery in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/ediscovery/ediscovery).

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

### -DiscoveryPreviewSearchResultsPageSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoveryPreviewSearchResultsPageSize parameter specifies the number of messages displayed on a single page in eDiscovery Search Preview.

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

### -DiscoverySearchTimeoutPeriod

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoverySearchTimeoutPeriod parameter specifies the number of minutes that a discovery search will run before it times out.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -EasCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasCutoffBalance parameter specifies the resource consumption limits for an Exchange ActiveSync user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -EasMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasMaxBurst parameter specifies the amount of time that an Exchange ActiveSync user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -EASMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasMaxConcurrency parameter specifies how many concurrent connections an Exchange ActiveSync user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The EasMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 10. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxDeviceDeletesPerMonth

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasMaxDeviceDeletesPerMonth parameter specifies a limit to the number of Exchange ActiveSync partnerships that a user can delete per month. By default, each user can delete a maximum of 20 partnerships per calendar month. When the limit is reached, the partnership deletion attempt fails and an error message is displayed to the user.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxDevices

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasMaxDevices parameter specifies a limit to the number of Exchange ActiveSync partnerships that a user can have at one time. By default, each user can create 100 Exchange ActiveSync partnerships with their Exchange account. After users exceed the limit, they must delete one of their existing partnerships before they can create any more new partnerships. An email error message describing the limitation is sent to the user when the limit is exceeded. Additionally, an event is logged in the Application log when a user exceeds the limit.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EasMaxInactivityForDeviceCleanup

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasMaxInactivityForDeviceCleanup parameter specifies the length of time that a user's device partnerships will remain active. By default, there is no limit to the number of days that a user's device partnerships will remain active. Use this value if you want to minimize the amount of inactive device partnerships in your organization. To use this setting, specify a value in days since the user's last sync time to cause the device partnership to be removed.

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

### -EASPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EASPercentTimeInAD parameter specifies the percentage of a minute that an Exchange ActiveSync user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EASPercentTimeInCAS parameter specifies the percentage of a minute that an Exchange ActiveSync user can spend executing CAS code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EASPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an Exchange ActiveSync user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EasRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EasRechargeRate parameter specifies the rate at which an Exchange ActiveSync user's budget is charged (budget grows by) during the budget time.

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

### -EncryptionRecipientCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionRecipientMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionRecipientMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionRecipientRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionSenderCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionSenderMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionSenderMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EncryptionSenderRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -EwsCostThreshold

> Applicable: Exchange Server 2016, Exchange Server 2019

The EwsCostThreshold parameter specifies the cost threshold for Exchange Web Services users.

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

### -EwsCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EwsCutoffBalance parameter specifies the resource consumption limits for an Exchange Web Services user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -EwsMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EwsMaxBurst parameter specifies the amount of time that an Exchange Web Services user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -EWSFastSearchTimeoutInSeconds

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EWSFastSearchTimeoutInSeconds parameter specifies the amount of time that searches made using Exchange Web Services continue before they time out. If the search takes more than the time indicated by the policy value, the search stops and an error is returned. The default value of this setting is 60 seconds.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSFindCountLimit

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EWSFindCountLimit parameter specifies the maximum result size of FindItem or FindFolder calls that can exist in memory on the Client Access server at the same time for this user in this current process. If an attempt is made to find more items or folders than your policy limit allows, an error is returned. However, the limit isn't strictly enforced if the call is made within the context of an indexed page view. Specifically, in this scenario, the search results are truncated to include the number of items and folders that fit within the policy limit. You can then continue paging into your results set via further FindItem or FindFolder calls.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EwsMaxConcurrency parameter specifies how many concurrent connections an Exchange Web Services user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The EwsMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 10. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSMaxSubscriptions

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EwsMaxSubscriptions parameter specifies the maximum number of active push and pull subscriptions that an Exchange Web Services user can have on a specified Exchange server at the same time. If a user tries to create more subscriptions than the configured maximum, the subscription fails, and an event is logged in Event Viewer.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EWSPercentTimeInAD parameter specifies the percentage of a minute that an Exchange Web Services user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EWSPercentTimeInCAS parameter specifies the percentage of a minute that an Exchange Web Services user can spend executing CAS code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The EWSPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an Exchange Web Services user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EwsRechargeRate parameter specifies the rate at which an Exchange Web Services user's budget is charged (budget grows by) during the budget time.

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

### -ExchangeMaxCmdlets

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExchangeMaxCmdlets parameter specifies the number of cmdlets that can be executed within a specific time period before their execution is slowed down. The value specified by this parameter should be less than the value specified by the PowerShellMaxCmdlets parameter.

The time period used for this limit is specified by the PowerShellMaxCmdletsTimePeriod parameter. We recommend that you set values for both parameters at the same time.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -ForwardeeLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ForwardeeLimit parameter specifies the limits for the number of recipients that can be configured in Inbox Rules when using the forward or redirect action. This parameter doesn't limit the number of messages that can be forwarded or redirected to the recipients that are configured.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ImapCutoffBalance parameter specifies the resource consumption limits for an IMAP user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -ImapMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ImapMaxBurst parameter specifies the amount of time that an IMAP user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -IMAPMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ImapMaxConcurrency parameter specifies how many concurrent connections an IMAP user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The ImapMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IMAPPercentTimeInAD parameter specifies the percentage of a minute that an IMAP user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IMAPPercentTimeInCAS parameter specifies the percentage of a minute that an IMAP user can spend executing CAS code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IMAPPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an IMAP user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ImapRechargeRate parameter specifies the rate at which the IMAP user's budget is charged (budget grows by) during the budget time.

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

### -IsServiceAccount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IsServiceAccount switch specifies that the user accounts associated with this policy are moderated by per-user thresholds and the health of system resources (for example, overall CPU usage). You don't need to specify a value with this switch.

You might want to use this switch if you intend to associate this policy with user accounts that require higher throttling limits (for example, service accounts that perform IMAP mailbox migrations or nightly Windows PowerShell tasks).

By using this switch, work done by these accounts is moderated by the higher user throttling settings that you configure using the user throttling policy, but is slowed if resources start getting unhealthy.

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

### -MessageRateLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MessageRateLimit parameter specifies the number of messages per minute that can be submitted to transport by POP3 or IMAP4 clients that use SMTP. Clients receive a transient error if they submit messages at a rate that exceeds the value of this parameter. Exchange attempts to connect and send the messages at a later time.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Name parameter specifies the name of the object in Active Directory. The default policy is named `DefaultThrottlingPolicy<GUID>`.

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

### -OutlookServiceCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OutlookServiceMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OutlookServiceMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OutlookServiceMaxSocketConnectionsPerDevice

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OutlookServiceMaxSocketConnectionsPerUser

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OutlookServiceMaxSubscriptions

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OutlookServiceRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -OwaCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaCutoffBalance parameter specifies the resource consumption limits for an Outlook on the web user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -OwaMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaMaxBurst parameter specifies the amount of time that an Outlook on the web user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -OWAMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaMaxConcurrency parameter specifies how many concurrent connections an Outlook on the web user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid.

A valid value for this parameter is an integer from 0 through 2147483647 inclusive. The default value is 5. To indicate that the number of concurrent connections should be unthrottled (no limit), use the value $null.

**Note**: We don't recommend setting this parameter to a large number or the value $null, because server performance might be negatively affected.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The OWAPercentTimeInAD parameter specifies the percentage of a minute that an Outlook Web App user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The OWAPercentTimeInCAS parameter specifies the percentage of a minute that an Outlook Web App user can spend executing CAS code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The OWAPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an Outlook Web App user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaRechargeRate parameter specifies the rate at which an Outlook on the web user's budget is charged (budget grows by) during the budget time.

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

### -OwaVoiceCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaVoiceCutoffBalance parameter specifies the resource consumption limits for an Outlook on the web voice user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -OwaVoiceMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaVoiceMaxBurst parameter specifies the amount of time that an Outlook on the web voice user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -OwaVoiceMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaVoiceMaxConcurrency parameter specifies how many concurrent connections an Outlook on the web voice user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The OwaVoiceMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 5. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

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

### -OwaVoiceRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaVoiceRechargeRate parameter specifies the rate at which an Outlook on the web voice user's budget is charged (budget grows by) during the budget time.

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

### -PopCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PopCutoffBalance parameter specifies the resource consumption limits for a user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -PopMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PopMaxBurst parameter specifies the amount of time that a user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -POPMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PopMaxConcurrency parameter specifies how many concurrent connections a POP user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The PopMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 20. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The POPPercentTimeInAD parameter specifies the percentage of a minute a POP user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The POPPercentTimeInCAS parameter specifies the percentage of a minute a POP user can spend executing CAS code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The POPPercentTimeInMailboxRPC parameter specifies the percentage of a minute a POP user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PopRechargeRate parameter specifies the rate at which the user budget is charged (budget grows by) during the budget time.

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

### -PowerShellCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellCutoffBalance parameter specifies the resource consumption limits for a user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -PowerShellMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxBurst parameter specifies the amount of time that a user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -PowerShellMaxCmdletQueueDepth

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxCmdletQueueDepth parameter specifies the number of operations allowed to be executed by the user. This value directly affects the behavior of the PowerShellMaxCmdlets and PowerShellMaxConcurrency parameters. For example, the PowerShellMaxConcurrency parameter consumes at least two operations defined by the PowerShellMaxCmdletQueueDepth parameter but additional operations are also consumed per cmdlet execution. The number of operations depends on the cmdlets executed. We recommend that the value for the PowerShellMaxCmdletQueueDepth parameter be at least three times larger than the value of the PowerShellMaxConcurrency parameter. This parameter won't affect Exchange admin center operations or Exchange Web Services operations.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxCmdlets

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxCmdlets parameter specifies the number of cmdlets that can be executed within a specific time period before their execution is stopped. The value specified by this parameter should be more than the value specified by the ExchangeMaxCmdlets parameter. The time period used for this limit is specified by the PowerShellMaxCmdletsTimePeriod parameter. Both values should be set at the same time.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxCmdletsTimePeriod

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxCmdletsTimePeriod parameter specifies the time period, in seconds, that the throttling policy uses to determine whether the number of cmdlets being executed exceeds the limits specified by the PowerShellMaxCmdlets and ExchangeMaxCmdlets parameters.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxConcurrency parameter specifies different information depending on context:

- In the context of remote PowerShell, the PowerShellMaxConcurrency parameter specifies the maximum number of remote PowerShell sessions that a remote PowerShell user can have open at the same time.
- In the context of Exchange Web Services, the PowerShellMaxConcurrency parameter specifies the number of concurrent cmdlet executions that a user can have at the same time.

This parameter value doesn't necessarily correlate to the number of browsers opened by the user.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxDestructiveCmdlets

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxDestructiveCmdlets parameter specifies the number of destructive cmdlets that can be executed within a specific time period before their execution is stopped. Destructive cmdlets are cmdlets that can make significant changes to user data and configuration settings in your Exchange organization. Throttling these cmdlets may help prevent accidental data loss. The following cmdlets are designated as destructive:

- Disable-Mailbox
- Move-ActiveMailboxDatabase
- Remove-AcceptedDomain
- Remove-Mailbox
- Remove-MailUser
- Remove-Organization
- Set-Mailbox
- Set-MailUser
- Update-MailboxDatabaseCopy

The time period used for this limit is specified by the PowerShellMaxDestructiveCmdletsTimePeriod parameter. Both values should be set at the same time. This feature isn't on by default. For more information, see the "Examples" section.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxDestructiveCmdletsTimePeriod

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxDestructiveCmdletsTimePeriod parameter specifies the time period, in seconds, that the throttling policy uses to determine how many destructive cmdlets can be run. You set a value for this parameter when you set the PowerShellMaxDestructiveCmdlets parameter. Both values should be set at the same time. For more information, see the description for the PowerShellMaxDestructiveCmdlets parameter.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxOperations

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxOperations parameter specifies the protocol-level operations that are used to send and receive data. If the execution of a cmdlet results in a significant number of operations (for example, if there is a lot of input/output occurring), throttling may occur. The default setting is Unlimited.

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

### -PowerShellMaxRunspaces

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxRunspaces parameter specifies the number of concurrent Windows PowerShell sessions that a user is allowed to have. The default setting is Unlimited.

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

### -PowerShellMaxRunspacesTimePeriod

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxRunspacesTimePeriod parameter specifies the time period, in seconds, that the throttling policy uses to determine how many Windows PowerShell sessions can be run. You set this value when you set the PowerShellMaxRunspaces parameter.

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

### -PowerShellMaxTenantConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxTenantConcurrency parameter limits the number of concurrent Windows PowerShell connections per tenant organization. By default, the limit for concurrent Windows PowerShell connections per tenant organization is set to 9. If users in a tenant organization try to make more concurrent requests than the limit set by the PowerShellMaxTenantConcurrency parameter, the new connection attempt fails. However, the existing connections remain valid. This limit is enforced even if a single user hasn't exceeded the per-user limit set by the PowerShellMaxConcurrency parameter. The PowerShellMaxTenantConcurrency parameter has a valid range from 0 through 100 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

This property can only be set for the default throttling policy.

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

### -PowerShellMaxTenantRunspaces

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellMaxTenantRunspaces parameter specifies the number of concurrent Windows PowerShell sessions that a tenant is allowed to have.

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

### -PowerShellRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PowerShellRechargeRate parameter specifies the rate at which the user budget is charged (budget grows by) during the budget time.

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

### -PswsMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PswsMaxConcurrency parameter specifies how many concurrent connections a Windows PowerShell Web Services user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid.

The PswsMaxConcurrency parameter has a default value of 18. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

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

### -PswsMaxRequest

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PswsMaxRequest parameter specifies how many requests a Windows PowerShell Web Services user can have against an Exchange server at one time. The default setting is Unlimited.

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

### -PswsMaxRequestTimePeriod

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PswsMaxRequestTimePeriod parameter specifies the period of time, in seconds, that the throttling policy uses to determine how many requests can be run. The default setting is Unlimited.

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

### -PushNotificationCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -PushNotificationMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -PushNotificationMaxBurstPerDevice

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -PushNotificationMaxConcurrency

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -PushNotificationRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -PushNotificationRechargeRatePerDevice

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -PushNotificationSamplingPeriodPerDevice

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -RcaCutoffBalance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RcaCutoffBalance parameter specifies the resource consumption limits for a user before that user is completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -RcaMaxBurst

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RcaMaxBurst parameter specifies the amount of time that a user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -RCAMaxConcurrency

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RcaMaxConcurrency parameter specifies how many concurrent connections an RPC Client Access user can have against an Exchange server at one time. A connection is held from the moment a request is received until the connection is closed or the connection is otherwise disconnected (for example, if the user goes offline). If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid.

A valid value is an integer from 0 through 4294967295, or the value unlimited. The default value is 40.

To indicate that the number of concurrent connections should be unthrottled (no limit), set the value to unlimited.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAPercentTimeInAD

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RCAPercentTimeInAD parameter specifies the percentage of a minute that an Outlook user can spend executing directory requests. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAPercentTimeInCAS

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RCAPercentTimeInCAS parameter specifies the percentage of a minute that an Outlook user can spend executing CAS mailbox requests. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAPercentTimeInMailboxRPC

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RCAPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an RPC Client Access user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaRechargeRate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RcaRechargeRate parameter specifies the rate at which the budget for the user is charged (how much the budget grows by) during the budget time.

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

### -RcaSharedCutoffBalance

> Applicable: Exchange Server 2016, Exchange Server 2019

The RcaSharedCutoffBalance parameter specifies the resource consumption limits for all users before they're completely blocked from performing operations on a specific component after all available resources have been consumed. There is no preset default value for this parameter but it generally ranges from 600,000 to 3,000,000 in working state depending on the protocol. If for any reason, this value needs to be increased further, you must contact Microsoft Support because a higher value can affect server performance adversely.

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

### -RcaSharedMaxBurst

> Applicable: Exchange Server 2016, Exchange Server 2019

The RcaShardMaxBurst parameter specifies the amount of time that all users can consume elevated amounts of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

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

### -RcaSharedMaxConcurrency

> Applicable: Exchange Server 2016, Exchange Server 2019

The RcaSharedMaxConcurrency parameter specifies how many concurrent connections all RPC Client Access users can have against an Exchange server at one time. A connection is held from the moment a request is received until the connection is closed or the connection is otherwise disconnected (for example, if users go offline). If there are more concurrent requests than the policy allows, new connection attempts fail. However, the existing connections remain valid.

The default value is unlimited, which means the limit is controlled individually for each user by the RcaMaxConcurrency parameter.

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

### -RcaSharedRechargeRate

> Applicable: Exchange Server 2016, Exchange Server 2019

The RcaSharedRechargeRate parameter specifies the rate at which the budget for all users is charged (how much the budget grows by) during the budget time.

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

### -RecipientRateLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RecipientRateLimit parameter specifies the limits on the number of recipients that a user can address in a 24-hour period.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchedulesCutoffBalance

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -SchedulesMaxBurst

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -SchedulesMaxConcurrency

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -SchedulesRechargeRate

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -ThrottlingPolicyScope

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ThrottlingPolicyScope parameter specifies the scope of the throttling policy. You can use the following values:

- Regular: This scope specifies a custom policy that applies to specific users.
- Organization: This scope specifies a custom policy that applies to all users in your organization.
- Global: This scope is reserved for the default throttling policy.

For more information about throttling policy scopes, see [User workload management in Exchange Server](https://learn.microsoft.com/Exchange/server-health/workload-management).

```yaml
Type: ThrottlingPolicyScopeType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
