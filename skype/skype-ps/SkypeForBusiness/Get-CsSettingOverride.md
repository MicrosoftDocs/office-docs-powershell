---
applicable: Skype for Business Server Subscription Edition
author: paulkwo-msft2
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: paulkwo
Module Name: SkypeForBusiness
ms.author: paulkwo
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-cssettingoverride
schema: 2.0.0
title: Get-CsSettingOverride
---

# Get-CsSettingOverride

## SYNOPSIS

> [!IMPORTANT]
> Incorrect use of the setting override cmdlets can disrupt Skype for Business Server features for your users. Only change setting overrides as instructed by product documentation or under the direction of Microsoft Customer Service and Support.

Use the Get-CsSettingOverride cmdlet to view the setting overrides (feature flags) that enable or disable individual Skype for Business Server features. This cmdlet was introduced in Skype for Business Server Subscription Edition.

## SYNTAX

```
Get-CsSettingOverride  [-Filter <String>]  [-LocalStore]  [<CommonParameters>]

Get-CsSettingOverride  [[-Identity] <XdsIdentity>]  [-LocalStore]  [<CommonParameters>]
```


## DESCRIPTION

Setting overrides are feature flags that turn individual Skype for Business Server features or behavior changes on or off. Setting overrides are stored in the Central Management store, apply to every server in the deployment, and persist when you install later cumulative updates. Each flag ships with a default value that preserves the existing behavior, so nothing changes until an administrator modifies the flag by using the Set-CsSettingOverride cmdlet. New flags might be added in future updates.

The following flags let administrators enable/disable respective features:


| **Property**                 | **Description**                          |
|-----------------------------|----------|
| DisableEWSForUserPhoto           | When True, user photos for Exchange Online mailboxes are retrieved through Microsoft Graph instead of Exchange Web Services (EWS). Exchange Server (on-premises) mailboxes continue to use EWS regardless of this setting.    |
| DisableEWSForConversationHistory | When True and Microsoft Graph is configured, server-side conversation history for Exchange Online mailboxes uses Microsoft Graph for writing items, reading items, and change-notification subscriptions. When False (the default), new server-side requests use EWS. Exchange Server (on-premises) mailboxes continue to use EWS regardless of this setting. |
| DisableUcs                       | When True, the unified contact store is retired for all users. Front End servers no longer migrate contact lists to Exchange, and New-CsUserServicesPolicy, Set-CsUserServicesPolicy, and Grant-CsUserServicesPolicy reject any policy where UcsAllowed is True. Invoke-CsUcsRollback remains available.                                                      |
| DisableExchangeArchiving         | When True, new instant messaging sessions are blocked for users whose archiving target is Exchange and whose mailbox is in Exchange Online. Archiving to Exchange Server (on-premises) mailboxes and to SQL Server archiving is not. |

The functions carried out by the Get-CsSettingOverride cmdlet are not available in the Skype for Business Server Control Panel.

## Examples

### Example 1

Get-CsSettingOverride

Example 1 returns the setting overrides configured for the deployment.

## PARAMETERS

### -Filter

> Applicable: Skype for Business Server Subscription Edition

Enables you to do a wildcard search for setting override settings. Because you can only have a single, global instance of these settings, there is little reason to use the Filter parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Supports wildcards: True
Accept wildcard characters: False
DontShow: False
```

### -Identity

> Applicable: Skype for Business Server Subscription Edition

Unique Identity of the setting override settings. Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsSettingOverride cmdlet. You can, however, use the following syntax to reference the global settings:

-Identity global

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Value from pipeline: False
Value from pipeline by property name: False
Value from remaining arguments: False
```


### -LocalStore

> Applicable: Skype for Business Server Subscription Edition

Retrieves the setting overrides from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Names
Default value: None
Supports wildcards: False
DontShow: False
Value from pipeline: False
Value from pipeline by property name: False
Value from remaining arguments: False
```

### COMMON PARAMETERS

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutBuffer, -OutVariable, -PipelineVariable, -ProgressAction, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

The Get-CsSettingOverride cmdlet does not accept pipelined input.

## OUTPUT

### Microsoft.Rtc.Management.WritableConfig.Settings.SettingOverride.SettingOverride

The Get-CsSettingOverride cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SettingOverride.SettingOverride object.
