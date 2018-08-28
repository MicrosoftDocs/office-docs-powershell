---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-ThrottlingPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-ThrottlingPolicy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ThrottlingPolicy cmdlet to modify the settings for a user throttling policy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ThrottlingPolicy [-Identity] <ThrottlingPolicyIdParameter> [-AnonymousMaxConcurrency <UInt32>]
 [-AnonymousPercentTimeInAD <UInt32>] [-AnonymousPercentTimeInCAS <UInt32>]
 [-AnonymousPercentTimeInMailboxRPC <UInt32>] [-Confirm] [-CPAMaxConcurrency <UInt32>]
 [-CPAPercentTimeInCAS <UInt32>] [-CPAPercentTimeInMailboxRPC <UInt32>] [-CPUStartPercent <UInt32>]
 [-DomainController <Fqdn>] [-EASMaxConcurrency <UInt32>] [-EASMaxDeviceDeletesPerMonth <UInt32>]
 [-EASMaxDevices <UInt32>] [-EASPercentTimeInAD <UInt32>] [-EASPercentTimeInCAS <UInt32>]
 [-EASPercentTimeInMailboxRPC <UInt32>] [-EWSFastSearchTimeoutInSeconds <UInt32>] [-EWSFindCountLimit <UInt32>]
 [-EWSMaxConcurrency <UInt32>] [-EWSMaxSubscriptions <UInt32>] [-EWSPercentTimeInAD <UInt32>]
 [-EWSPercentTimeInCAS <UInt32>] [-EWSPercentTimeInMailboxRPC <UInt32>] [-ExchangeMaxCmdlets <UInt32>]
 [-ForwardeeLimit <UInt32>] [-IMAPMaxConcurrency <UInt32>] [-IMAPPercentTimeInAD <UInt32>]
 [-IMAPPercentTimeInCAS <UInt32>] [-IMAPPercentTimeInMailboxRPC <UInt32>] [-MessageRateLimit <UInt32>]
 [-Name <String>] [-OWAMaxConcurrency <UInt32>] [-OWAPercentTimeInAD <UInt32>] [-OWAPercentTimeInCAS <UInt32>]
 [-OWAPercentTimeInMailboxRPC <UInt32>] [-POPMaxConcurrency <UInt32>] [-POPPercentTimeInAD <UInt32>]
 [-POPPercentTimeInCAS <UInt32>] [-POPPercentTimeInMailboxRPC <UInt32>]
 [-PowerShellMaxCmdletQueueDepth <UInt32>] [-PowerShellMaxCmdlets <UInt32>]
 [-PowerShellMaxCmdletsTimePeriod <UInt32>] [-PowerShellMaxConcurrency <UInt32>]
 [-PowerShellMaxDestructiveCmdlets <UInt32>] [-PowerShellMaxDestructiveCmdletsTimePeriod <UInt32>]
 [-PowerShellMaxTenantConcurrency <UInt32>] [-RCAMaxConcurrency <UInt32>] [-RCAPercentTimeInAD <UInt32>]
 [-RCAPercentTimeInCAS <UInt32>] [-RCAPercentTimeInMailboxRPC <UInt32>] [-RecipientRateLimit <UInt32>]
 [-WhatIf] [-AnonymousCutoffBalance <Unlimited>] [-AnonymousMaxBurst <Unlimited>]
 [-AnonymousRechargeRate <Unlimited>] [-ComplianceMaxExpansionDGRecipients <Unlimited>]
 [-ComplianceMaxExpansionNestedDGs <Unlimited>] [-CpaCutoffBalance <Unlimited>] [-CpaMaxBurst <Unlimited>]
 [-CpaRechargeRate <Unlimited>] [-DiscoveryMaxConcurrency <Unlimited>] [-DiscoveryMaxKeywords <Unlimited>]
 [-DiscoveryMaxKeywordsPerPage <Unlimited>] [-DiscoveryMaxMailboxes <Unlimited>]
 [-DiscoveryMaxPreviewSearchMailboxes <Unlimited>] [-DiscoveryMaxRefinerResults <Unlimited>]
 [-DiscoveryMaxSearchQueueDepth <Unlimited>] [-DiscoveryMaxStatsSearchMailboxes <Unlimited>]
 [-DiscoveryPreviewSearchResultsPageSize <Unlimited>] [-DiscoverySearchTimeoutPeriod <Unlimited>]
 [-EasCutoffBalance <Unlimited>] [-EasMaxBurst <Unlimited>] [-EasMaxInactivityForDeviceCleanup <Unlimited>]
 [-EasRechargeRate <Unlimited>] [-EncryptionRecipientCutoffBalance <Unlimited>]
 [-EncryptionRecipientMaxBurst <Unlimited>] [-EncryptionRecipientMaxConcurrency <Unlimited>]
 [-EncryptionRecipientRechargeRate <Unlimited>] [-EncryptionSenderCutoffBalance <Unlimited>]
 [-EncryptionSenderMaxBurst <Unlimited>] [-EncryptionSenderMaxConcurrency <Unlimited>]
 [-EncryptionSenderRechargeRate <Unlimited>] [-EwsCutoffBalance <Unlimited>] [-EwsMaxBurst <Unlimited>]
 [-EwsRechargeRate <Unlimited>] [-Force] [-ImapCutoffBalance <Unlimited>] [-ImapMaxBurst <Unlimited>]
 [-ImapRechargeRate <Unlimited>] [-IsServiceAccount] [-OutlookServiceCutoffBalance <Unlimited>]
 [-OutlookServiceMaxBurst <Unlimited>] [-OutlookServiceMaxConcurrency <Unlimited>]
 [-OutlookServiceMaxSocketConnectionsPerDevice <Unlimited>]
 [-OutlookServiceMaxSocketConnectionsPerUser <Unlimited>] [-OutlookServiceMaxSubscriptions <Unlimited>]
 [-OutlookServiceRechargeRate <Unlimited>] [-OwaCutoffBalance <Unlimited>] [-OwaMaxBurst <Unlimited>]
 [-OwaRechargeRate <Unlimited>] [-OwaVoiceCutoffBalance <Unlimited>] [-OwaVoiceMaxBurst <Unlimited>]
 [-OwaVoiceMaxConcurrency <Unlimited>] [-OwaVoiceRechargeRate <Unlimited>] [-PopCutoffBalance <Unlimited>]
 [-PopMaxBurst <Unlimited>] [-PopRechargeRate <Unlimited>] [-PowerShellCutoffBalance <Unlimited>]
 [-PowerShellMaxBurst <Unlimited>] [-PowerShellMaxOperations <Unlimited>] [-PowerShellMaxRunspaces <Unlimited>]
 [-PowerShellMaxRunspacesTimePeriod <Unlimited>] [-PowerShellMaxTenantRunspaces <Unlimited>]
 [-PowerShellRechargeRate <Unlimited>] [-PswsMaxConcurrency <Unlimited>] [-PswsMaxRequest <Unlimited>]
 [-PswsMaxRequestTimePeriod <Unlimited>] [-PushNotificationCutoffBalance <Unlimited>]
 [-PushNotificationMaxBurst <Unlimited>] [-PushNotificationMaxBurstPerDevice <Unlimited>]
 [-PushNotificationMaxConcurrency <Unlimited>] [-PushNotificationRechargeRate <Unlimited>]
 [-PushNotificationRechargeRatePerDevice <Unlimited>] [-PushNotificationSamplingPeriodPerDevice <Unlimited>]
 [-RcaCutoffBalance <Unlimited>] [-RcaMaxBurst <Unlimited>] [-RcaRechargeRate <Unlimited>]
 [-ThrottlingPolicyScope <Regular | Organization | Global>] [-BookingSelfServiceCutoffBalance <Unlimited>]
 [-BookingSelfServiceMaxBurst <Unlimited>] [-BookingSelfServiceMaxConcurrency <Unlimited>]
 [-BookingSelfServiceRechargeRate <Unlimited>] [-ConsensusCutoffBalance <Unlimited>]
 [-ConsensusMaxBurst <Unlimited>] [-ConsensusMaxConcurrency <Unlimited>] [-ConsensusRechargeRate <Unlimited>]
 [-EwsCostThreshold <Unlimited>] [-RcaSharedCutoffBalance <Unlimited>] [-RcaSharedMaxBurst <Unlimited>]
 [-RcaSharedMaxConcurrency <Unlimited>] [-RcaSharedRechargeRate <Unlimited>]
 [-SchedulesCutoffBalance <Unlimited>] [-SchedulesMaxBurst <Unlimited>] [-SchedulesMaxConcurrency <Unlimited>]
 [-SchedulesRechargeRate <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
Throttling policy settings are stored in Active Directory.

By default, there is one default user throttling policy named GlobalThrottlingPolicy with a throttling scope of Global. Microsoft Setup creates this policy as part of the Client Access server role. You shouldn't replace, re-create, or remove the existing default throttling policy. However, you can edit any additional throttling policies with the scope of Organization or Regular if you want to change your user throttling settings. You can create polices with the scope of Organization or Regular using the New-ThrottlingPolicy cmdlet.

For more information about how to control the resources consumed by individual users, see User workload management (https://technet.microsoft.com/library/jj150503.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$a = Get-ThrottlingPolicy RemoteSiteUserPolicy; $a | Set-ThrottlingPolicy -EwsMaxConcurrency 4
```

This example modifies a throttling policy so that users associated with this policy can have a maximum of four concurrent requests running in Exchange Web Services.

### -------------------------- Example 2 --------------------------
```
Set-ThrottlingPolicy RemoteSiteUserPolicy -PowerShellMaxConcurrency 3 -PowerShellMaxCmdletQueueDepth 12
```

This example modifies a throttling policy so that it restricts the number of connections for a user to three. The users associated with this policy are only able to create three Exchange Management Shell sessions. This policy also restricts to three the number of Exchange admin center operations or Exchange Web Services operations that can be executed at the same time. In addition, the PowerShellMaxCmdletQueueDepth parameter specifies that 12 operations maximum are allowed to be executed by the user.

### -------------------------- Example 3 --------------------------
```
Set-ThrottlingPolicy <ThrottlingPolicyName> -PowerShellMaxDestructiveCmdlets 10 -PowerShellMaxDestructiveCmdletsTimePeriod 60
```

This example modifies a throttling policy so that it restricts a user to be able to execute only 10 destructive cmdlets in 60 seconds. If the users associated with this policy exceed this number, the cmdlet pipeline execution is stopped with a throttling error message. The user needs to wait for, and then resubmit the execution of cmdlets on the open connection.

## PARAMETERS

### -Identity
The Identity parameter uniquely identifies the throttling policy that you want to modify values for. The name you use is the name of the throttling policy object in Active Directory.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AnonymousMaxConcurrency
The AnonymousMaxConcurrency parameter specifies how many anonymous connections can be made to a user's calendar data at the same time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If anonymous users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The AnonymousMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 1. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The AnonymousPercentTimeInAD parameter specifies the percentage of a minute that anonymous users can spend executing LDAP requests (PercentTimeInAD) to a user's calendar data. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The AnonymousPercentTimeInCAS parameter specifies the percentage of a minute that anonymous users can spend executing Client Access server code (PercentTimeInCAS) to a user's calendar data. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The AnonymousPercentTimeInMailboxRPC parameter specifies the percentage of a minute that anonymous users can spend executing mailbox RPC requests (PercentTimeInMailboxRPC) to a user's calendar data. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPAMaxConcurrency
The CpaMaxConcurrency parameter specifies how many concurrent connections a cross-premises user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The CpaMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPAPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The CPAPercentTimeInCAS parameter specifies the percentage of a minute that a cross-premises user can spend executing Client Access server code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPAPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The CPAPercentTimeInMailboxRPC parameter specifies the percentage of a minute that a cross-premises user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPUStartPercent
This parameter is available or functional only in Exchange Server 2010.

The CPUStartPercent parameter specifies the per-process CPU percentage at which users governed by this policy begin to be backed off. Valid values are from 0 through 100. Use $null to turn off CPU percentage-based throttling for this policy.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -EASMaxConcurrency
The EasMaxConcurrency parameter indicates how many concurrent connections an Exchange ActiveSync user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The EasMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 10. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxDeviceDeletesPerMonth
The EasMaxDeviceDeletesPerMonth parameter specifies a limit to the number of Exchange ActiveSync partnerships that a user can delete per month. By default, each user can delete a maximum of 20 partnerships per calendar month. When the limit is reached, the partnership deletion attempt fails and an error message is displayed to the user.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxDevices
The EasMaxDevices parameter specifies a limit to the number of Exchange ActiveSync partnerships that a user can have at one time. By default, each user can create 100 Exchange ActiveSync partnerships with their Exchange account. After users exceed the limit, they must delete one of their existing partnerships before they can create any more new partnerships. An email error message describing the limitation is sent to the user when the limit is exceeded. Additionally, an event is logged in the Application log when a user exceeds the limit.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The EASPercentTimeInAD parameter specifies the percentage of a minute that an Exchange ActiveSync user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The EASPercentTimeInCAS parameter specifies the percentage of a minute that an Exchange ActiveSync user can spend executing Client Access server code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The EASPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an Exchange ActiveSync user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSFastSearchTimeoutInSeconds
This parameter is available or functional only in Exchange Server 2010.

The EWSFastSearchTimeoutInSeconds parameter specifies the amount of time that searches made using Exchange Web Services continue before they time out. If the search takes more than the time indicated by the policy value, the search stops and an error is returned. The default value of this setting is 60 seconds.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSFindCountLimit
This parameter is available or functional only in Exchange Server 2010.

The EWSFindCountLimit parameter specifies the maximum result size of FindItem or FindFolder calls that can exist in memory on the Client Access server at the same time for this user in this current process. If an attempt is made to find more items or folders than your policy limit allows, an error is returned. However, the limit isn't strictly enforced if the call is made within the context of an indexed page view. Specifically, in this scenario, the search results are truncated to include the number of items and folders that fit within the policy limit. You can then continue paging into your results set via further FindItem or FindFolder calls.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSMaxConcurrency
The EwsMaxConcurrency parameter specifies how many concurrent connections an Exchange Web Services user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The EwsMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 10. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSMaxSubscriptions
The EwsMaxSubscriptions parameter specifies the maximum number of active push and pull subscriptions that an Exchange Web Services user can have on a specified Exchange server at the same time. If a user tries to create more subscriptions than the configured maximum, the subscription fails, and an event is logged in Event Viewer.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The EWSPercentTimeInAD parameter specifies the percentage of a minute that an Exchange Web Services user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The EWSPercentTimeInCAS parameter specifies the percentage of a minute that an Exchange Web Services user can spend executing Client Access server code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The EWSPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an Exchange Web Services user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeMaxCmdlets
The ExchangeMaxCmdlets parameter specifies the number of cmdlets that can be executed within a specific time period before their execution is slowed down. The value specified by this parameter should be less than the value specified by the PowerShellMaxCmdlets parameter.

The time period used for this limit is specified by the PowerShellMaxCmdletsTimePeriod parameter. We recommend that you set values for both parameters at the same time.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardeeLimit
The ForwardeeLimit parameter specifies the limits for the number of recipients that can be configured in Inbox Rules when using the forward or redirect action. This parameter doesn't limit the number of messages that can be forwarded or redirected to the recipients that are configured.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPMaxConcurrency
The ImapMaxConcurrency parameter specifies how many concurrent connections an IMAP user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The ImapMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The IMAPPercentTimeInAD parameter specifies the percentage of a minute that an IMAP user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The IMAPPercentTimeInCAS parameter specifies the percentage of a minute that an IMAP user can spend executing Client Access server code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The IMAPPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an IMAP user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRateLimit
The MessageRateLimit parameter specifies the number of messages per minute that can be submitted to transport by POP3 or IMAP4 clients that use SMTP. Clients receive a transient error if they submit messages at a rate that exceeds the value of this parameter. Exchange attempts to connect and send the messages at a later time.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the object in Active Directory. The default policy is named DefaultThrottlingPolicy\<GUID\>.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAMaxConcurrency
The OwaMaxConcurrency parameter specifies how many concurrent connections an Outlook on the web user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The OwaMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 5. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The OWAPercentTimeInAD parameter specifies the percentage of a minute that an Outlook Web App user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The OWAPercentTimeInCAS parameter specifies the percentage of a minute that an Outlook Web App user can spend executing Client Access server code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The OWAPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an Outlook Web App user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPMaxConcurrency
The PopMaxConcurrency parameter specifies how many concurrent connections a POP user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The PopMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 20. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The POPPercentTimeInAD parameter specifies the percentage of a minute a POP user can spend executing LDAP requests (PercentTimeInAD). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The POPPercentTimeInCAS parameter specifies the percentage of a minute a POP user can spend executing Client Access server code (PercentTimeInCAS). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The POPPercentTimeInMailboxRPC parameter specifies the percentage of a minute a POP user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxCmdletQueueDepth
The PowerShellMaxCmdletQueueDepth parameter specifies the number of operations allowed to be executed by the user. This value directly affects the behavior of the PowerShellMaxCmdlets and PowerShellMaxConcurrency parameters. For example, the PowerShellMaxConcurrency parameter consumes at least two operations defined by the PowerShellMaxCmdletQueueDepth parameter but additional operations are also consumed by per cmdlet execution. The number of operations depends on the cmdlets that are executed. We recommend that the value for the PowerShellMaxCmdletQueueDepth parameter be at least three times larger than the value of the PowerShellMaxConcurrency parameter. This parameter won't affect Exchange admin center operations or Exchange Web Services operations.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxCmdlets
The PowerShellMaxCmdlets parameter specifies the number of cmdlets that can be executed within a specific time period before their execution is stopped. The value specified by this parameter should be more than the value specified by the ExchangeMaxCmdlets parameter. The time period used for this limit is specified by the PowerShellMaxCmdletsTimePeriod parameter. Both values should be set at the same time.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxCmdletsTimePeriod
The PowerShellMaxCmdletsTimePeriod parameter specifies the time period, in seconds, that the throttling policy uses to determine whether the number of cmdlets being executed exceeds the limits specified by the PowerShellMaxCmdlets and ExchangeMaxCmdlets parameters.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxConcurrency
The PowerShellMaxConcurrency parameter specifies different information depending on context:

- In the context of Remote PowerShell, the PowerShellMaxConcurrency parameter specifies the maximum number of Remote PowerShell sessions that a Remote PowerShell user can have open at the same time.

- In the context of Exchange Web Services, the PowerShellMaxConcurrency parameter specifies the number of concurrent cmdlet executions that a user can have at the same time.

This parameter value doesn't necessarily correlate to the number of browsers opened by the user.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxDestructiveCmdlets
The PowerShellMaxDestructiveCmdlets parameter specifies the number of destructive cmdlets that can be executed within a specific time period before their execution is stopped. Destructive cmdlets are cmdlets that can make significant changes to user data and configuration settings in your Exchange organization. Throttling these cmdlets may help prevent accidental data loss. The following cmdlets are designated as destructive:

- Disable-Mailbox

- Move-ActiveMailboxDatabase

- Remove-AcceptedDomain

- Remove-Mailbox

- Remove-MailUser

- Remove-Organization

- Remove-SecondaryDomain

- Remove-SyncMailbox

- Remove-SyncMailUser

- Set-Mailbox

- Set-MailUser

- Set-SyncMailbox

- Set-SyncMailUser

- Start-OrganizationUpgrade

- Update-MailboxDatabaseCopy

The time period used for this limit is specified by the PowerShellMaxDestructiveCmdletsTimePeriod parameter. Both values should be set at the same time. This feature isn't enabled by default. For more information, see the example in this topic.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxDestructiveCmdletsTimePeriod
The PowerShellMaxDestructiveCmdletsTimePeriod parameter specifies the time period, in seconds, that the throttling policy uses to determine how many destructive cmdlets can be run. You set a value for this parameter when set the PowerShellMaxDestructiveCmdlets parameter. Both values should be set at the same time. For more information, see the description for the PowerShellMaxDestructiveCmdlets parameter.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxTenantConcurrency
The PowerShellMaxTenantConcurrency parameter limits the number of concurrent Windows PowerShell connections per tenant organization. By default, the limit for concurrent Windows PowerShell connections per tenant organization is set to 9. If users in a tenant organization try to make more concurrent requests than the limit set by the PowerShellMaxTenantConcurrency parameter, the new connection attempt fails. However, the existing connections remain valid. This limit is enforced even if a single user hasn't exceeded the per-user limit set by the PowerShellMaxConcurrency parameter. The PowerShellMaxTenantConcurrency parameter has a valid range from 0 through 100 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

This property can only be set for the default throttling policy.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAMaxConcurrency
The RcaMaxConcurrency parameter specifies how many concurrent connections an RPC Client Access user can have against an Exchange server at one time. A connection is held from the moment a request is received until the connection is closed or the connection is otherwise disconnected (for example, if the user goes offline). If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid.

A valid value is an integer from 0 through 4294967295, or the value unlimited. The default value is 40.

To indicate that the number of concurrent connections should be unthrottled (no limit), set the value to unlimited.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAPercentTimeInAD
This parameter is available or functional only in Exchange Server 2010.

The RCAPercentTimeInAD parameter specifies the percentage of a minute that an Outlook user can spend executing directory requests. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAPercentTimeInCAS
This parameter is available or functional only in Exchange Server 2010.

The RCAPercentTimeInCAS parameter specifies the percentage of a minute that an Outlook user can spend executing Client Access server mailbox requests. A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAPercentTimeInMailboxRPC
This parameter is available or functional only in Exchange Server 2010.

The RCAPercentTimeInMailboxRPC parameter specifies the percentage of a minute that an RPC Client Access user can spend executing mailbox RPC requests (PercentTimeInMailboxRPC). A value of 100 indicates that for every one-minute window, the user can spend 60 seconds of that time consuming the resource in question.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRateLimit
The RecipientRateLimit parameter specifies the limits on the number of recipients that a user can address in a 24-hour period.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousCutoffBalance
The AnonymousCutoffBalance parameter specifies the resource consumption limits for an anonymous user before the user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousMaxBurst
The AnonymousMaxBurst parameter specifies the amount of time that an anonymous user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousRechargeRate
The AnonymousRechargeRate parameter specifies the rate at which an anonymous user's budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComplianceMaxExpansionDGRecipients
The ComplianceMaxExpansionDGRecipients parameter specifies the maximum number of recipients to expand in distribution groups when a discovery search is looking for a specified recipient.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComplianceMaxExpansionNestedDGs
The ComplianceMaxExpansionNestedDGs parameter specifies the maximum number of nested distribution groups to expand when a discovery search is looking for a specified recipient.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CpaCutoffBalance
The CpaCutoffBalance parameter specifies the resource consumption limits for a cross-premises user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CpaMaxBurst
The CpaMaxBurst parameter specifies the amount of time that a cross-premises user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CPAMaxConcurrency
The CpaMaxConcurrency parameter specifies how many concurrent connections a cross-premises user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The CpaMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CpaRechargeRate
The CpaRechargeRate parameter specifies the rate at which a cross-premises user budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxConcurrency
The DiscoveryMaxConcurrency parameter specifies the number of concurrent discovery search cmdlet executions that a user can have at the same time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxKeywords
The DiscoveryMaxKeywords parameter specifies the maximum number of keywords that a user can include in a discovery search. For more information, see Search-Mailbox.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxKeywordsPerPage
The DiscoveryMaxKeywordsPerPage parameter specifies the number of keywords for which to show statistics on a single page in the Exchange admin center (EAC).

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxMailboxes
The DiscoveryMaxMailboxes parameter specifies the maximum number of source mailboxes that a user can include in a discovery search.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxPreviewSearchMailboxes
The DiscoveryMaxPreviewSearchMailboxes parameter specifies the maximum number of mailboxes that a user can include in eDiscovery Search Preview.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxRefinerResults
This parameter isn't used and will be removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxSearchQueueDepth
The DiscoveryMaxSearchQueueDepth parameter specifies the maximum number of concurrent discovery search threads that can be active at the same time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryMaxStatsSearchMailboxes
The DiscoveryMaxStatsSearchMailboxes parameter specifies the maximum number of mailboxes that a user can search in an In-Place eDiscovery search and still be able to view the keyword statistics. When the number of mailboxes configured with the DiscoveryMaxStatsSearchMailboxes parameter is exceeded, these keyword statistics won't be available. In this case, a user must copy the search results to a discovery mailbox to view the keyword statistics for the discovery search. For more information, see In-Place eDiscovery (https://technet.microsoft.com/library/dd298021.aspx).

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryPreviewSearchResultsPageSize
The DiscoveryPreviewSearchResultsPageSize parameter specifies the number of messages displayed on a single page in eDiscovery Search Preview.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoverySearchTimeoutPeriod
The DiscoverySearchTimeoutPeriod parameter specifies the number of minutes that a discovery search will run before it times out.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EasCutoffBalance
The EasCutoffBalance parameter specifies the resource consumption limits for a Microsoft Exchange ActiveSync user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EasMaxBurst
The EasMaxBurst parameter specifies the amount of time that an Exchange ActiveSync user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxConcurrency
The EasMaxConcurrency parameter indicates how many concurrent connections an Exchange ActiveSync user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The EasMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 10. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxDeviceDeletesPerMonth
The EasMaxDeviceDeletesPerMonth parameter specifies a limit to the number of Exchange ActiveSync partnerships that a user can delete per month. By default, each user can delete a maximum of 20 partnerships per calendar month. When the limit is reached, the partnership deletion attempt fails and an error message is displayed to the user.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EASMaxDevices
The EasMaxDevices parameter specifies a limit to the number of Exchange ActiveSync partnerships that a user can have at one time. By default, each user can create 100 Exchange ActiveSync partnerships with their Exchange account. After users exceed the limit, they must delete one of their existing partnerships before they can create any more new partnerships. An email error message describing the limitation is sent to the user when the limit is exceeded. Additionally, an event is logged in the Application log when a user exceeds the limit.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EasMaxInactivityForDeviceCleanup
The EasMaxInactivityForDeviceCleanup parameter specifies the length of time that a user's device partnerships will remain active. By default, there is no limit to the number of days that a user's device partnerships will remain active. Use this value if you want to minimize the amount of inactive device partnerships in your organization. To use this setting, specify a value in days since the user's last sync time to cause the device partnership to be removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EasRechargeRate
The EasRechargeRate parameter specifies the rate at which an Exchange ActiveSync user's budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRecipientCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRecipientMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRecipientMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRecipientRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionSenderCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionSenderMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionSenderMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionSenderRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsCutoffBalance
The EwsCutoffBalance parameter specifies the resource consumption limits for an Exchange Web Services user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsMaxBurst
The EwsMaxBurst parameter specifies the amount of time that an Exchange Web Services user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSMaxConcurrency
The EwsMaxConcurrency parameter specifies how many concurrent connections an Exchange Web Services user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The EwsMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 10. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EWSMaxSubscriptions
The EwsMaxSubscriptions parameter specifies the maximum number of active push and pull subscriptions that an Exchange Web Services user can have on a specified Exchange server at the same time. If a user tries to create more subscriptions than the configured maximum, the subscription fails, and an event is logged in Event Viewer.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsRechargeRate
The EwsRechargeRate parameter specifies the rate at which an Exchange Web Services user's budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapCutoffBalance
The ImapCutoffBalance parameter specifies the resource consumption limits for an IMAP user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapMaxBurst
The ImapMaxBurst parameter specifies the amount of time that an IMAP user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAPMaxConcurrency
The ImapMaxConcurrency parameter specifies how many concurrent connections an IMAP user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The ImapMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapRechargeRate
The ImapRechargeRate parameter specifies the rate at which the IMAP user's budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsServiceAccount
The IsServiceAccount switch specifies whether you want the user accounts associated with this policy to be moderated by the per-user thresholds specified by this policy, and also by additional throttling based on the health of system resources, such as overall CPU usage.

This value is set to $false by default.

You may want to set this value to $true if you intend to associate this policy with user accounts that require higher throttling limits. An account that might require higher throttling limits is a service account that performs a lot of non-interactive work (for example, service accounts that perform IMAP mailbox migrations or nightly Windows PowerShell tasks)

By setting the IsServiceAccount switch to $true, work done by these accounts is moderated by the higher user throttling settings that you configure using the user throttling policy, but is slowed if resources start getting unhealthy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceMaxSocketConnectionsPerDevice
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceMaxSocketConnectionsPerUser
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceMaxSubscriptions
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookServiceRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaCutoffBalance
The OwaCutoffBalance parameter specifies the resource consumption limits for an Outlook on the web user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaMaxBurst
The OwaMaxBurst parameter specifies the amount of time that an Outlook on the web user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAMaxConcurrency
The OwaMaxConcurrency parameter specifies how many concurrent connections an Outlook on the web user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The OwaMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 5. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaRechargeRate
The OwaRechargeRate parameter specifies the rate at which an Outlook on the web user's budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaVoiceCutoffBalance
The OwaVoiceCutoffBalance parameter specifies the resource consumption limits for an Outlook on the web voice user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaVoiceMaxBurst
The OwaVoiceMaxBurst parameter specifies the amount of time that an Outlook on the web voice user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaVoiceMaxConcurrency
The OwaVoiceMaxConcurrency parameter specifies how many concurrent connections an Outlook on the web voice user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The OwaVoiceMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 5. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaVoiceRechargeRate
The OwaVoiceRechargeRate parameter specifies the rate at which an Outlook on the web voice user's budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopCutoffBalance
The PopCutoffBalance parameter specifies the resource consumption limits for a user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopMaxBurst
The PopMaxBurst parameter specifies the amount of time that a user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -POPMaxConcurrency
The PopMaxConcurrency parameter specifies how many concurrent connections a POP user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid. The PopMaxConcurrency parameter has a valid range from 0 through 2147483647 inclusive. The default value is 20. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopRechargeRate
The PopRechargeRate parameter specifies the rate at which the user budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellCutoffBalance
The PowerShellCutoffBalance parameter specifies the resource consumption limits for a user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxBurst
The PowerShellMaxBurst parameter specifies the amount of time that a user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxOperations
The PowerShellMaxOperations parameter specifies the protocol-level operations used to send and receive data. If the execution of a cmdlet results in a significant number of operations (for example, if there is a lot of input/output occurring), throttling may occur. The default setting is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxRunspaces
The PowerShellMaxRunspaces parameter specifies the number of concurrent Windows PowerShell sessions that a user is allowed to have. The default setting is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxRunspacesTimePeriod
The PowerShellMaxRunspacesTimePeriod parameter specifies the time period, in seconds, that the throttling policy uses to determine how many Windows PowerShell sessions can be run. You set this value when you set the PowerShellMaxRunspaces parameter.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellMaxTenantRunspaces
The PowerShellMaxTenantRunspaces parameter specifies the number of concurrent Windows PowerShell sessions that a tenant is allowed to have.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerShellRechargeRate
The PowerShellRechargeRate parameter specifies the rate at which the user budget is charged (budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PswsMaxConcurrency
The PswsMaxConcurrency parameter specifies how many concurrent connections a Windows PowerShell Web Services user can have against an Exchange server at one time. A connection is held from the moment a request is received until a response is sent in its entirety to the requestor. If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid.

This parameter has a default value of 18. To indicate that the number of concurrent connections should be unthrottled (no limit), this value should be set to $null.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PswsMaxRequest
The PswsMaxRequest parameter specifies how many requests a Windows PowerShell Web Services user can have against an Exchange server at one time. The default setting is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PswsMaxRequestTimePeriod
The PswsMaxRequestTimePeriod parameter specifies the period of time, in seconds, that the throttling policy uses to determine how many requests can be run. You set this value when you set the PswsMaxRequest parameter. The default setting is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationMaxBurstPerDevice
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationRechargeRatePerDevice
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PushNotificationSamplingPeriodPerDevice
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaCutoffBalance
The RcaCutoffBalance parameter specifies the resource consumption limits for a user before that user is completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaMaxBurst
The RcaMaxBurst parameter specifies the amount of time that a user can consume an elevated amount of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RCAMaxConcurrency
The RcaMaxConcurrency parameter specifies how many concurrent connections an RPC Client Access user can have against an Exchange server at one time. A connection is held from the moment a request is received until the connection is closed or the connection is otherwise disconnected (for example, if the user goes offline). If users attempt to make more concurrent requests than their policy allows, the new connection attempt fails. However, the existing connections remain valid.

A valid value is an integer from 0 through 4294967295, or the value unlimited. The default value is 40.

To indicate that the number of concurrent connections should be unthrottled (no limit), set the value to unlimited.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaRechargeRate
The RcaRechargeRate parameter specifies the rate at which the budget for the user is charged (how mucht the budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicyScope
The ThrottlingPolicyScope parameter specifies the scope of the throttling policy. You can use the following values:

- Regular: This scope specifies a custom policy that applies to specific users.

- Organization: This scope specifies a custom policy that applies to all users in your organization.

- Global: This scope is reserved for the default throttling policy.

For more information about throttling policy scopes, see User workload management (https://technet.microsoft.com/library/jj150503.aspx).

```yaml
Type: Regular | Organization | Global
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingSelfServiceCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingSelfServiceMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingSelfServiceMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingSelfServiceRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConsensusCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConsensusMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConsensusMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConsensusRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsCostThreshold
The EwsCostThreshold parameter specifies the cost threshold for Exchange Web Services users.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaSharedCutoffBalance
The RcaSharedCutoffBalance parameter specifies the resource consumption limits for all users before they're completely blocked from performing operations on a specific component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaSharedMaxBurst
The RcaShardMaxBurst parameter specifies the amount of time that all users can consume elevated amounts of resources before being throttled. This is measured in milliseconds. This value is set separately for each component.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaSharedMaxConcurrency
The RcaSharedMaxConcurrency parameter specifies how many concurrent connections all RPC Client Access users can have against an Exchange server at one time. A connection is held from the moment a request is received until the connection is closed or the connection is otherwise disconnected (for example, if users go offline). If there are more concurrent requests than the policy allows, new connection attempts fail. However, the existing connections remain valid.

The default value is unlimited, which means the limit is controlled individually for each user by the RcaMaxConcurrency parameter.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RcaSharedRechargeRate
The RcaSharedRechargeRate parameter specifies the rate at which the budget for all users is charged (how much the budget grows by) during the budget time.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchedulesCutoffBalance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchedulesMaxBurst
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchedulesMaxConcurrency
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchedulesRechargeRate
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/80984ddd-0628-4115-92ed-6b3cef34c833.aspx)
