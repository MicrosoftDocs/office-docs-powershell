---
applicable: Skype for Business Server Subscription Edition
author: paulkwo-msft2
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: paulkwo
Module Name: SkypeForBusiness
ms.author: paulkwo
ms.reviewer: paulkwo
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-cssettingoverride
schema: 2.0.0
title: Set-CsSettingOverride
description: New Set-CsSettingOverride PS command and document
#customer intent: Learn how to use the new PS Cmdlet
ms.date: 11/16/2026
---

# Set-CsSettingOverride

## SYNOPSIS

> [!IMPORTANT]
> Incorrect use of the setting override cmdlets can disrupt Skype for Business Server features for your users. Only change setting overrides as instructed by product documentation or under the direction of Microsoft Customer Service and Support.

Use the Set-CsSettingOverride cmdlet to modify the setting overrides (feature flags) that enable or disable individual Skype for Business Server features. This cmdlet was introduced in Skype for Business Server Subscription Edition.

## SYNTAX

### Identity (Default)

```
Set-CsSettingOverride [[-Identity] <XdsIdentity>] [-DisableEWSForConversationHistory <Boolean>] [-DisableEWSForUserPhoto <Boolean>] [-DisableExchangeArchiving <Boolean>] [-DisableUcs <Boolean>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance

```
Set-CsSettingOverride [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Setting overrides are feature flags that turn individual Skype for Business Server features or behavior changes on or off. Setting overrides are stored in the Central Management store, apply to every server in the deployment, and persist when you install later cumulative updates. Each flag ships with a default value that preserves the existing behavior, so nothing changes until an administrator modifies the flag by using the Set-CsSettingOverride cmdlet. New flags might be added in future updates.

A change takes effect on each server after Central Management store replication completes; you do not need to restart services or IIS. To start replication immediately, run the Invoke-CsManagementStoreReplication cmdlet.

The following flags let administrators enable/disable respective features:

DisableEWSForUserPhoto: When True, user photos for Exchange Online mailboxes are retrieved through Microsoft Graph instead of Exchange Web Services (EWS). Exchange Server (on-premises) mailboxes continue to use EWS regardless of this setting.

DisableEWSForConversationHistory: When True and Microsoft Graph is configured, server-side conversation history for Exchange Online mailboxes uses Microsoft Graph for writing items, reading items, and change-notification subscriptions. When False (the default), new server-side requests use EWS. Exchange Server (on-premises) mailboxes continue to use EWS regardless of this setting.

DisableUcs: When True, the unified contact store is retired for all users. Front End servers no longer migrate contact lists to Exchange, and New-CsUserServicesPolicy, Set-CsUserServicesPolicy, and Grant-CsUserServicesPolicy reject any policy where UcsAllowed is True. Invoke-CsUcsRollback remains available.

DisableExchangeArchiving: When True, new instant messaging sessions are blocked for users whose archiving target is Exchange and whose mailbox is in Exchange Online. Archiving to Exchange Server (on-premises) mailboxes and to SQL Server archiving isn't blocked.

Before you set DisableEWSForUserPhoto or DisableEWSForConversationHistory to True, configure Microsoft Graph for the deployment: the deployment must use a third-party Microsoft Entra application for server-to-server authentication, the application must have the ProfilePhoto.Read.All (user photos) and Mail.ReadWrite (conversation history) Microsoft Graph application permissions with admin consent, and, for sovereign clouds, the Microsoft Graph endpoint must be set by using the GraphEndpoint parameter of the Set-CsOAuthServer cmdlet. If Microsoft Graph is not configured, the features continue to use EWS even when the flags are True.

Before you set DisableUcs to True, roll users back from the unified contact store. Users whose contacts are still stored in Exchange see an empty contact list until they are rolled back by using the Invoke-CsUcsRollback cmdlet.

Before you set DisableExchangeArchiving to True, move users whose mailboxes are in Exchange Online to SQL Server archiving by setting their ExchangeArchivingPolicy to UseLyncArchivingPolicy. Otherwise, instant messaging is blocked for those users.

The functions carried out by the Get-CsSettingOverride cmdlet are not available in the Skype for Business Server Control Panel.

## Examples

### Example 1

Set-CsSettingOverride -Identity Global -DisableEWSForUserPhoto $True then Invoke-CsManagementStoreReplication

Example 1 retrieves user photos for Exchange Online mailboxes through Microsoft Graph instead of EWS, and then starts Central Management store replication.

### Example 2

-DisableEWSForConversationHistory $True

Example 2 moves server-side conversation history for Exchange Online mailboxes to Microsoft Graph. Because you can only have a single, global instance of these settings, the Identity parameter can be omitted.

### Example 3

-DisableUcs $True

Example 3 retires the unified contact store. Run this command after you roll users back from the unified contact store.

### Example 4

-DisableExchangeArchiving $True

Example 4 blocks instant messaging for users whose archiving target is an Exchange Online mailbox. Run this command after you move those users to SQL Server archiving.

### Example 5

Example 5 both EWS flags set to $False, which goes back to EWS only while Exchange Online still offers it.

Example 5 returns user photos and conversation history for Exchange Online mailboxes to EWS. This works only while EWS is still available in Exchange Online.

## PARAMETERS

### -Confirm

> Applicable: Skype for Business Server Subscription Edition

Prompts you for confirmation before executing the command:

-Identity global

```yaml
Type: SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases: [cf]
ParameterSets:
- Name: Confirm
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -DisableEWSForConversationHistory

> Applicable: Skype for Business Server Subscription Edition

When set to True ($True), server-side conversation history for Exchange Online mailboxes is written, read, and monitored for changes through Microsoft Graph instead of EWS. Mailboxes on Exchange Server (on-premises) continue to use EWS. Requires the Mail.ReadWrite Microsoft Graph application permission.

The default value is False ($False).

-Identity global

```yaml
Type: Boolean
DefaultValue: false
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: DisableEWSForConversationHistory
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -DisableEWSForUserPhoto

> Applicable: Skype for Business Server Subscription Edition

When set to True ($True), user photos for Exchange Online mailboxes are retrieved through Microsoft Graph instead of EWS. Mailboxes on Exchange Server (on-premises) continue to use EWS. Requires the ProfilePhoto.Read.All Microsoft Graph application permission.

The default value is False ($False).

-Identity global

```yaml
Type: Boolean
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: DisableEWSForUserPhoto
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -DisableExchangeArchiving

> Applicable: Skype for Business Server Subscription Edition

When set to True ($True), new instant messaging sessions are blocked for users whose archiving target is Exchange and whose mailbox is in Exchange Online, so that instant messages that cannot be archived are not exchanged. The block applies only when instant messaging archiving is enabled. Archiving to Exchange Server (on-premises) mailboxes and to SQL Server archiving is not affected.

The default value is False ($False).

-Identity global

```yaml
Type: Boolean
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: DisableExchangeArchiving
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -DisableUcs

> Applicable: Skype for Business Server Subscription Edition

When set to True ($True), the unified contact store is retired for all users, regardless of where their mailboxes are hosted. Front End servers no longer migrate contact lists to Exchange, and the New-CsUserServicesPolicy, Set-CsUserServicesPolicy, and Grant-CsUserServicesPolicy cmdlets reject any policy where UcsAllowed is True, including a new policy that takes the default UcsAllowed value of True. The Invoke-CsUcsRollback cmdlet remains available.

The default value is False ($False).

-Identity global

```yaml
Type: Boolean
DefaultValue: false
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: DisableUcs
  Position: 2
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -Force

> Applicable: Skype for Business Server Subscription Edition

Suppresses the display of any non-fatal error message that might occur when running the command:

-Identity global

```yaml
Type: SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: Force
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -Identity

> Applicable: Skype for Business Server Subscription Edition

Unique Identity of the setting override settings. Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Set-CsSettingOverride cmdlet. You can, however, use the following syntax to reference the global settings:

-Identity global

```yaml
Type: XdsIdentity
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: Identity
  Position: 2
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -Instance

> Applicable: Skype for Business Server Subscription Edition

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values:

-Identity global

```yaml
Type: PSObject
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: Instance
  Position: 2
  IsRequired: false
  ValueFromPipeline: true
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -WhatIf

> Applicable: Skype for Business Server Subscription Edition

Describes what would happen if you executed the command without actually executing the command:

-Identity global

```yaml
Type: SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases: [wi]
ParameterSets:
- Name: WhatIf
  Position: 2
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutBuffer, -OutVariable, -PipelineVariable, -ProgressAction, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.SettingOverride.SettingOverride

The Set-CsSettingOverride cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SettingOverride.SettingOverride object.

## OUTPUTS

### None

Instead, the Set-CsSettingOverride cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SettingOverride.SettingOverride object.
